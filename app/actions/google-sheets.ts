'use server';

import { google } from 'googleapis';

export async function submitToGoogleSheets(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    // 環境変数の確認
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_KEY;
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

    if (!serviceAccountEmail) {
      throw new Error('GOOGLE_SERVICE_ACCOUNT_EMAIL環境変数が設定されていません');
    }
    
    if (!privateKey) {
      throw new Error('GOOGLE_SHEETS_SERVICE_ACCOUNT_KEY環境変数が設定されていません');
    }
    
    if (!spreadsheetId) {
      throw new Error('GOOGLE_SPREADSHEET_ID環境変数が設定されていません');
    }

    // 秘密鍵の処理を改善
    let processedPrivateKey = privateKey;
    
    // 複数の改行文字パターンに対応
    processedPrivateKey = processedPrivateKey.replace(/\\n/g, '\n');
    processedPrivateKey = processedPrivateKey.replace(/\\\\/g, '\\');
    
    // 秘密鍵が正しい形式かチェック
    if (!processedPrivateKey.includes('-----BEGIN PRIVATE KEY-----') || 
        !processedPrivateKey.includes('-----END PRIVATE KEY-----')) {
      throw new Error('秘密鍵の形式が正しくありません。BEGIN PRIVATE KEYとEND PRIVATE KEYが含まれている必要があります。');
    }

    // より堅牢な認証設定
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        client_email: serviceAccountEmail,
        private_key: processedPrivateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // スプレッドシートの既存データを確認
    const existingData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'A:E',
    });

    // データが存在しない場合（新規の場合）のみヘッダーを追加
    if (!existingData.data.values || existingData.data.values.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'A1:E1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [['送信日時', '名前', 'メールアドレス', '件名', 'メッセージ']],
        },
      });
    }

    // 現在の日時を取得
    const timestamp = new Date().toLocaleString('ja-JP', {
      timeZone: 'Asia/Tokyo'
    });

    // スプレッドシートにデータを追加
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, formData.name, formData.email, formData.subject, formData.message]],
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Google Sheets API Error:', error);
    
    // より詳細なエラーメッセージを返す
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    
    return { success: false, error: 'データの送信に失敗しました。' };
  }
}
