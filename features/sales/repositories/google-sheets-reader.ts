import { sheetsClient, spreadsheetId } from "./google-sheets-client";
import { unstable_cache } from "next/cache";

const getCachedSheetRows = unstable_cache(
  async (sheetName: string) => {
    const response = await sheetsClient.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A:Z`,
    });

    const rows = response.data.values ?? [];
    const headers = rows[0] ?? [];
    const dataRows = rows.slice(1);

    return dataRows.map((row) =>
      Object.fromEntries(
        headers.map((header, index) => [header, row[index] ?? ""]),
      ),
    );
  },
  ["google-sheets-rows"],
  {
    revalidate: 60,
  },
);

export async function readSheetRows(sheetName: string) {
  return getCachedSheetRows(sheetName);
}
