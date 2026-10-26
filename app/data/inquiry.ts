export const INQUIRY_TYPES = [
  'AI勉強会・研修のご依頼',
  '講演・登壇のご依頼',
  'AI活用コンサルティングのご相談',
  'Webサイト・Webアプリ開発のご相談',
  '取材・メディア掲載のご依頼',
  'その他のお問い合わせ',
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number];
