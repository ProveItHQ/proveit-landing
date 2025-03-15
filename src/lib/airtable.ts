/**
 * Airtable API client for fetching waitlist data
 */

interface AirtableResponse {
  records: Array<object>;
}

/**
 * Fetches the current count of beta testers from Airtable
 * @returns The number of beta testers plus 30
 */
export async function getBetaTesterCount(): Promise<number> {
  try {
    // Get the Airtable API key from environment variables
    const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;
    const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;

    if (!apiKey) {
      console.error("Airtable API key is not defined in environment variables");
      return 437; // Fallback to default value if API key is missing
    }

    if (!baseId) {
      console.error("Airtable base ID is not defined in environment variables");
      return 437; // Fallback to default value if base ID is missing
    }

    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/Waitlist?fields%5B%5D=Name&returnFieldsByFieldId=true`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Airtable API error: ${response.status}`);
    }

    const data: AirtableResponse = await response.json();

    // Return the count of records plus 30
    return data.records.length + 30;
  } catch (error) {
    console.error("Error fetching beta tester count:", error);
    return 437; // Fallback to default value if there's an error
  }
}
