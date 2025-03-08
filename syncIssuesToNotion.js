import { Octokit } from "@octokit/rest";
import { Client } from "@notionhq/client";

async function determineWorkType(labels) {
  const typeLabels = {
    bug: "Bug",
    feature: "Feature",
    enhancement: "Enhancement",
    task: "Task",
  };

  // Priority order: specific type labels over generic 'type:' labels
  for (const [key, value] of Object.entries(typeLabels)) {
    if (labels.some((label) => label.name.toLowerCase().includes(key))) {
      return value;
    }
  }

  // Check for type: prefixed labels
  const typeLabel = labels.find((label) =>
    label.name.toLowerCase().startsWith("type:")
  );

  if (typeLabel) {
    return (
      typeLabel.name.split(":")[1].trim().charAt(0).toUpperCase() +
      typeLabel.name.split(":")[1].trim().slice(1)
    );
  }

  return "Unclassified";
}

async function syncIssueToNotion(issue, repository) {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  // Check for existing issue in Notion
  const existingIssueQuery = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Issue Number",
      number: { equals: issue.number },
    },
  });

  const workType = await determineWorkType(issue.labels);
  const projectDetails = await fetchProjectDetails(issue);

  const notionProperties = {
    "Issue Number": { number: issue.number },
    Title: { title: [{ text: { content: issue.title } }] },
    State: { status: { name: issue.state } },
    URL: { url: issue.html_url },
    Body: { rich_text: [{ text: { content: issue.body || "" } }] },
    Type: { multi_select: issue.labels.map((label) => ({ name: label.name })) },
    "Work Type": { select: { name: workType } },
    CreationDate: { date: { start: issue.created_at } },
    Project: { multi_select: [{ name: projectDetails.projectName }] },
    Priority: { select: { name: projectDetails.priority || "Unassigned" } },
    Estimate: { number: projectDetails.estimate || null },
    Iteration: {
      date: {
        start: projectDetails.iterationStart || null,
        end: projectDetails.iterationEnd || null,
      },
    },
    Milestone: {
      rich_text: [
        {
          text: { content: projectDetails.milestone || "" },
        },
      ],
    },
  };

  if (existingIssueQuery.results.length > 0) {
    // Update existing issue
    await notion.pages.update({
      page_id: existingIssueQuery.results[0].id,
      properties: notionProperties,
    });
  } else {
    // Create new issue
    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: notionProperties,
    });
  }
}

async function fetchProjectDetails(issue) {
  const { repository } = await octokit.graphql(
    `query($owner: String!, $repo: String!, $issueNumber: Int!) {
                repository(owner: $owner, name: $repo) {
                  issue(number: $issueNumber) {
                    projectItems(first: 10) {
                      nodes {
                        project {
                          title
                          fields(first: 10) {
                            nodes {
                              name
                              value
                            }
                          }
                          iterations {
                            startDate
                            endDate
                          }
                          milestones {
                            title
                          }
                        }
                      }
                    }
                    milestone {
                      title
                    }
                  }
                }
              }
            `,
    {
      owner: repository.owner.login,
      repo: repository.name,
      issueNumber: issue.number,
    }
  );

  const projectItem = repository.issue.projectItems.nodes[0];
  return {
    projectName: projectItem?.project.title || "Unassigned",
    priority: projectItem?.project.fields.find((f) => f.name === "Priority")
      ?.value,
    estimate: projectItem?.project.fields.find((f) => f.name === "Estimate")
      ?.value,
    iterationStart: projectItem?.project.iterations[0]?.startDate,
    iterationEnd: projectItem?.project.iterations[0]?.endDate,
    milestone:
      issue.milestone?.title || projectItem?.project.milestones[0]?.title,
  };
}
