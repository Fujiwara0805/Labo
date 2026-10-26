'use server';

import { google } from 'googleapis';
import { z } from 'zod';
import { INQUIRY_TYPES } from '../data/inquiry';

const inquirySchema = z.object({
  inquiryType: z.enum(INQUIRY_TYPES, { errorMap: () => ({ message: 'ご依頼の種別を選択してください' }) }),
  company: z.string().trim().max(200).optional().default(''),
  name: z.string().trim().min(1, 'お名前を入力してください').max(100),
  email: z.string().trim().email('メールアドレスの形式が正しくありません').max(200),
  phone: z.string().trim().max(30).optional().default(''),
  timing: z.string().trim().max(200).optional().default(''),
  message: z.string().trim().min(1, 'ご相談内容を入力してください').max(5000),
  agreed: z.literal(true, { errorMap: () => ({ message: 'プライバシーポリシーへの同意が必要です' }) }),
  // スパム対策用のハニーポット（人間は入力しない）
  website: z.string().optional().default(''),
});

type InquiryInput = z.input<typeof inquirySchema>;

export async function submitToGoogleSheets(input: InquiryInput) {
  const parsed = inquirySchema.safeParse(input);
  if (!parsed.success) {
    return { success: false as const, error: parsed.error.issues[0]?.message ?? '入力内容をご確認ください' };
  }
  const data = parsed.data;

  // ハニーポットに入力があればボットとみなし、保存せず成功扱いにする
  if (data.website) {
    return { success: true as const };
  }

  try {
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_KEY;
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

    if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
      throw new Error('Google Sheets の環境変数が設定されていません');
    }

    const processedPrivateKey = privateKey.replace(/\\n/g, '\n').replace(/\\\\/g, '\\');
    if (!processedPrivateKey.includes('-----BEGIN PRIVATE KEY-----') ||
        !processedPrivateKey.includes('-----END PRIVATE KEY-----')) {
      throw new Error('秘密鍵の形式が正しくありません');
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        client_email: serviceAccountEmail,
        private_key: processedPrivateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const HEADERS = ['送信日時', '名前', 'メールアドレス', '件名', 'メッセージ', '会社・団体名', '電話番号', '希望時期'];
    const headerRow = (await sheets.spreadsheets.values.get({ spreadsheetId, range: 'A1:H1' })).data.values?.[0] ?? [];

    // ヘッダーが無い・列が足りないときに書き込む（A〜Eは旧フォームと同じ並び）
    if (HEADERS.some((h, i) => headerRow[i] !== h)) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'A1:H1',
        valueInputOption: 'RAW',
        requestBody: { values: [HEADERS] },
      });
    }

    // append は空欄を境に表範囲を誤判定し、右の列へずれて書き込むことがあるため、
    // 全列を見て最終行を求め、その次の行のA列から明示的に書き込む
    const used = await sheets.spreadsheets.values.get({ spreadsheetId, range: 'A:Z' });
    const nextRow = (used.data.values?.length ?? 1) + 1;

    const timestamp = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `A${nextRow}:H${nextRow}`,
      // RAW: 先頭が "=" の入力が数式として評価されないようにする
      valueInputOption: 'RAW',
      requestBody: {
        values: [[timestamp, data.name, data.email, data.inquiryType, data.message, data.company, data.phone, data.timing]],
      },
    });

    return { success: true as const };
  } catch (error) {
    console.error('Google Sheets API Error:', error);
    return { success: false as const, error: '送信に失敗しました。お手数ですがメールにてお問い合わせください。' };
  }
}
