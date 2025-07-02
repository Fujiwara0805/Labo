'use server';

import { google } from 'googleapis';

export async function submitToGoogleSheets(formData: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

    if (!spreadsheetId) {
      throw new Error('Google Spreadsheet ID is not configured');
    }

    // 現在の日時を取得
    const timestamp = new Date().toLocaleString('ja-JP', {
      timeZone: 'Asia/Tokyo'
    });

    // スプレッドシートにデータを追加
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A1:D1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, formData.name, formData.email, formData.message]],
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Google Sheets API Error:', error);
    return { success: false, error: 'データの送信に失敗しました。' };
  }
}
