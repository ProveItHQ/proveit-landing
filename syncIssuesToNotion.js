import { Octokit } from "@octokit/rest";
import { Client } from "@notionhq/client";

const EMAILS = {
  Undiluted7027: "sja164@sfu.ca",
  Priyanshsarvaiya: "priyanshsar96@gmail.com",
  Luvveer: "luvveerlamba@gmail.com",
  cys278: "yasir.chow2002@gmail.com",
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
      console.log(issue);

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
        // Optionally include the issue body; Notion supports rich text.
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
          status: {
            name: issue.type,
          },
        },
        AssignedTo: {
          people: issue.assignees.map((assignee) => ({
            person: { email: EMAILS[assignee.login] },
          })),
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
