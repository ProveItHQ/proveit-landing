import { Octokit } from "@octokit/rest";
import { Client } from "@notionhq/client";

const EMAILS = {
  Undiluted7027: "63f2d7a7-cd6f-4dd3-b288-35f1cc347e43",
  Priyanshsarvaiya: "3c8638d1-46d6-453d-bd7f-d25b9f18188d",
  Luvveer: "4efbf84a-b07f-4be3-a8c8-3854751f746a",
  cys278: "1abd872b-594c-816f-96f5-0002670635e7",
};
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
      // Skip pull requests (if not required)
      if (issue.pull_request) {
        continue;
      }

      // Query Notion database for a page with the matching "Issue Number"
      const queryResponse = await notion.databases.query({
        database_id: notionDatabaseId,
        filter: {
          property: "Issue Number",
          number: {
            equals: issue.number,
          },
        },
      });

      // Prepare the property payload for Notion
      // Prepare the property payload for Notion
      const propertiesPayload = {
        "Issue Number": { number: issue.number },
        Title: {
          title: [
            {
              text: {
                content: issue.title,
              },
            },
          ],
        },
        State: {
          status: {
            name: issue.state, // e.g., "open" or "closed"
          },
        },
        URL: { url: issue.html_url },
        Body: {
          rich_text: [
            {
              text: {
                content: issue.body || "",
              },
            },
          ],
        },
        Type: {
          multi_select: issue.labels.map((label) => ({
            name: label.name,
          })),
        },
        AssignedTo: {
          people: issue.assignees
            .map((assignee) => EMAILS[assignee.login]) // Get Notion user IDs
            .filter((id) => id) // Remove undefined values (in case of unmatched logins)
            .map((id) => ({ id: id })), // Format correctly
        },
        CreationDate: {
          date: {
            start: issue.created_at, // GitHub provides this in ISO format
          },
        },
      };

      if (queryResponse.results.length === 0) {
        // Create a new page in Notion if it doesn't exist
        console.log(`Creating Notion page for issue #${issue.number}`);
        await notion.pages.create({
          parent: { database_id: notionDatabaseId },
          properties: propertiesPayload,
        });
      } else {
        // Update the existing Notion page
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
