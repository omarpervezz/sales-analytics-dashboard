import { google } from "googleapis";

const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

if (!spreadsheetId) {
  throw new Error("Missing GOOGLE_SHEETS_ID");
}

if (!clientEmail) {
  throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_EMAIL");
}

if (!privateKey) {
  throw new Error("Missing GOOGLE_PRIVATE_KEY");
}

const auth = new google.auth.JWT({
  email: clientEmail,
  key: privateKey,
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

export const sheetsClient = google.sheets({
  version: "v4",
  auth,
});

export { spreadsheetId };
