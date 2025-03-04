import { Octokit } from "@octokit/rest";
import { graphql } from "@octokit/graphql";
import { Client } from "@notionhq/client";

const EMAILS = {
  Undiluted7027: "63f2d7a7-cd6f-4dd3-b288-35f1cc347e43",
  Priyanshsarvaiya: "3c8638d1-46d6-453d-bd7f-d25b9f18188d",
  Luvveer: "4efbf84a-b07f-4be3-a8c8-3854751f746a",
  cys278: "1abd872b-594c-816f-96f5-0002670635e7",
};

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `bearer ${process.env.GITHUB_TOKEN}`,
  },
});

function calculateEndDate(startDate, durationDays) {
  const date = new Date(startDate);
  date.setDate(date.getDate() + durationDays);
  return date.toISOString().split("T")[0];
}

const getProjectFieldsQuery = `
query ($issueId: ID!) {
  node(id: $issueId) {
    ... on Issue {
      projectItems(first: 20) {
        nodes {
          project {
            ... on ProjectV2 {
              fields(first: 20) {
                nodes {
                  ... on ProjectV2IterationField {
                    configuration {
                      iterations {
                        id
                        startDate
                        duration
                      }
                    }
                  }
                }
              }
            }
          }
          fieldValues(first: 20) {
            nodes {
              ... on ProjectV2ItemFieldIterationValue {
                iterationId
                startDate
                duration
                field {
                  ... on ProjectV2IterationField {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

(async function () {
  try {
    // Read environment variables
    const notionToken = process.env.NOTION_TOKEN;
    const notionDatabaseId = process.env.NOTION_DATABASE_ID;
    const githubToken = process.env.GITHUB_TOKEN;
    const githubRepository = process.env.GITHUB_REPOSITORY; // format "owner/repo"

    if (
      !notionToken ||
      !notionDatabaseId ||
      !githubToken ||
      !githubRepository
    ) {
      console.error("Missing one or more required environment variables.");
      process.exit(1);
    }

    const [owner, repo] = githubRepository.split("/");

    // Initialize Notion and GitHub clients
    const notion = new Client({ auth: notionToken });
    const octokit = new Octokit({ auth: githubToken });

    // Fetch all issues from the repository (pagination handling)
    let issues = [];
    let page = 1;
    let fetched;
    do {
      fetched = await octokit.issues.listForRepo({
        owner,
        repo,
        state: "all",
        per_page: 100,
        page: page,
      });
      issues = issues.concat(fetched.data);
      page++;
    } while (fetched.data.length === 100);

    console.log(`Fetched ${issues.length} issues from GitHub.`);

    // Process each issue
    for (const issue of issues) {
      // Skip pull requests if not required
      if (issue.pull_request) continue;

      // Execute a GraphQL query to get project details for the issue
      let projectDetails;
      try {
        const { repository } = await octokit.graphql(
          `query($owner: String!, $repo: String!, $issueNumber: Int!) {
            repository(owner: $owner, name: $repo) {
              issue(number: $issueNumber) {
                projectCards(first: 10) {
                  nodes {
                    column {
                      name
                    }
                    project {
                      name
                    }
                  }
                }
              }
            }
          }
  `,
          { owner, repo, issueNumber: issue.number }
        );
        // If there are multiple project items, you can adjust which one to use.
        if (repository.issue.projectsV2Items.nodes.length > 0) {
          projectDetails = repository.issue.projectsV2Items.nodes[0];
        }
      } catch (err) {
        console.error(
          `Error fetching project details for issue #${issue.number}:`,
          err
        );
      }

      // Prepare the Notion properties payload with standard issue properties
      const propertiesPayload = {
        "Issue Number": { number: issue.number },
        Title: {
          title: [
            {
              text: { content: issue.title },
            },
          ],
        },
        State: {
          status: { name: issue.state },
        },
        URL: { url: issue.html_url },
        Body: {
          rich_text: [
            {
              text: { content: issue.body || "" },
            },
          ],
        },
        Type: {
          multi_select: issue.labels.map((label) => ({ name: label.name })),
        },
        AssignedTo: {
          people: issue.assignees
            .map((assignee) => EMAILS[assignee.login])
            .filter((id) => id)
            .map((id) => ({ id })),
        },
        IterationDate: {
          date: {
            start: null,
            end: null,
          },
        },
        CreationDate: {
          date: { start: issue.created_at },
        },
        Project: {
          multi_select: [],
        },
        Priority: {
          select: {
            name: "",
          },
        },
        Size: {
          select: {
            name: "",
          },
        },
        Estimate: {
          number: null,
        },
        Iteration: {
          select: {
            name: "",
          },
        },
      };

      // Fetch project-related data
      const projectData = await graphqlWithAuth(getProjectFieldsQuery, {
        issueId: issue.node_id,
      });

      // Process project fields
      if (projectData.node?.projectItems?.nodes) {
        projectData.node.projectItems.nodes.forEach((projectItem) => {
          const projectName = projectItem.project?.title;
          if (projectName) {
            propertiesPayload.Project.multi_select.push({ name: projectName });
          }

          projectItem.fieldValues.nodes.forEach((field) => {
            switch (field?.field?.name) {
              case "Priority":
                propertiesPayload.Priority.select.name = field.name || "";
                break;
              case "Size":
                propertiesPayload.Size.select.name = field.name || "";
                break;
              case "Estimate":
                propertiesPayload.Estimate.number = field.number || null;
                break;
              case "Iteration":
                propertiesPayload.Iteration.select.name = field.title || "";
                if (field.startDate && field.duration) {
                  propertiesPayload.IterationDate.date.start = field.startDate;
                  propertiesPayload.IterationDate.date.end = calculateEndDate(
                    field.startDate,
                    field.duration
                  );
                }
                break;
            }
          });
        });
      }

      // If project details were found, add them to the Notion payload
      if (projectDetails) {
        console.log(projectDetails);
        // Extract the project title and custom fields
        const projectTitle = projectDetails.project.title;
        const customFields = {};
        projectDetails.fieldValues.nodes.forEach((node) => {
          const fieldName = node.field.name;
          if (fieldName === "Priority") {
            customFields.Priority = node.text || node.number;
          }
          if (fieldName === "Size") {
            customFields.Size = node.number;
          }
          if (fieldName === "Estimate") {
            customFields.Estimate = node.number;
          }
          if (fieldName === "Iteration") {
            customFields.Iteration = node.text || node.number;
          }
        });
        // Map these values to your Notion properties
        propertiesPayload.Project = {
          rich_text: [{ text: { content: projectTitle } }],
        };
        if (customFields.Priority) {
          propertiesPayload.Priority = {
            select: { name: customFields.Priority },
          };
        }
        if (customFields.Size) {
          propertiesPayload.Size = { number: customFields.Size };
        }
        if (customFields.Estimate) {
          propertiesPayload.Estimate = { number: customFields.Estimate };
        }
        if (customFields.Iteration) {
          propertiesPayload.Iteration = {
            select: { name: customFields.Iteration },
          };
        }
      }

      // Query Notion to see if the page already exists based on "Issue Number"
      const queryResponse = await notion.databases.query({
        database_id: notionDatabaseId,
        filter: {
          property: "Issue Number",
          number: { equals: issue.number },
        },
      });

      if (queryResponse.results.length === 0) {
        console.log(`Creating Notion page for issue #${issue.number}`);
        await notion.pages.create({
          parent: { database_id: notionDatabaseId },
          properties: propertiesPayload,
        });
      } else {
        const pageId = queryResponse.results[0].id;
        console.log(`Updating Notion page for issue #${issue.number}`);
        await notion.pages.update({
          page_id: pageId,
          properties: propertiesPayload,
        });
      }
    }

    console.log("Sync complete.");
  } catch (error) {
    console.error("Error during sync:", error);
    process.exit(1);
  }
})();
