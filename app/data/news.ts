export type NewsItem = {
  date: string;
  category: string;
  title: string;
  description: string;
  href?: string;
};

export const newsItems: NewsItem[] = [
  {
    date: '2026.06.30',
    category: '出展',
    title: '「NEXT BUSINESS EXPO SUMMER 2026」に出展します',
    description: '「次世代ビジネスの基盤を再定義する、AI・DX実装の最前線」をテーマに開催される「NEXT BUSINESS EXPO SUMMER 2026」（2026年7月16日（木）・17日（金）／東京都立産業貿易センター 浜松町館 2・3F南）に出展します。地域課題の解決に取り組む私たちのアプリ・AI実装プロダクトをご紹介します。ぜひブースへお立ち寄りください。',
    href: 'https://www.next-business-expo.jp/'
  },
  {
    date: '2026.06.30',
    category: 'アップデート',
    title: 'にけんめぷらすのデザインとロゴを刷新しました',
    description: 'ローカルダイニングマップ「にけんめぷらす（NIKENME+）」のデザインを全面的に刷新し、新しいロゴへとリニューアルしました。「あなたの街の、次の一軒へ」をコンセプトに、より直感的に使えるUIへと進化しています。',
    href: 'https://nikenme.jp/landing'
  },
  {
    date: '2026.06.26',
    category: 'アップデート',
    title: 'にけんめぷらすにイベント＆スタンプラリー機能を追加しました',
    description: '街なかのイベントと連動したスタンプラリー機能を追加しました。加盟店をめぐる楽しさを通じて、店舗回遊と地域のにぎわい創出を後押しします。',
    href: 'https://nikenme.jp/landing'
  },
  {
    date: '2026.06.20',
    category: 'アップデート',
    title: 'にけんめぷらすのマイページに会員証QR・来店履歴を追加しました',
    description: 'QRコード形式のデジタル会員証と来店履歴をマイページに追加しました。チェックインがよりスムーズになり、利用状況をひと目で振り返れるようになりました。',
    href: 'https://nikenme.jp/landing'
  },
  {
    date: '2026.06.03',
    category: 'リリース',
    title: 'ばんけん（イベント整理券・抽選・入場管理）をリリースしました',
    description: '整理券の発券・当落抽選・入場管理をひとつにしたクラウドサービス「ばんけん」を公開しました。現地でのその場発券、時間指定のWeb予約、公平な当落抽選、QRでの入場確認に対応し、展示会・物販即売・催事・抽選販売などの運営を支援します。',
    href: 'https://www.seiri-ken.com/'
  },
  {
    date: '2026.05.20',
    category: 'リニューアル',
    title: '「TOKUDOKU」を地域情報プラットフォーム「TALE」へリニューアルしました',
    description: '大分県内のイベント情報サービス「TOKUDOKU」を、各地域のイベント・お祭り・マルシェ情報を探せる地域情報プラットフォーム「TALE」へとリニューアルしました。対象エリアを各地域へ拡大し、主催者が自分のイベントを発信できる仕組みを強化しています。',
    href: 'https://tokudoku.com'
  },
  {
    date: '2026.04.23',
    category: 'アップデート',
    title: 'にけんめぷらすにLINE空席通知機能を追加しました',
    description: '気になるお店に空席が出たらLINEでお知らせする空席通知機能を追加しました。行きたいお店のタイミングを逃さず、スムーズに来店いただけます。',
    href: 'https://nikenme.jp/landing'
  },
  {
    date: '2026.03.19',
    category: 'アップデート',
    title: 'ざせきくんに招待フォーム機能を追加しました',
    description: 'SNS告知から事前登録、QRコード発行、当日受付までを一気通貫で扱える招待フォーム機能をリリースしました。',
    href: 'https://zaseki-kun.com/'
  },
  {
    date: '2026.03.17',
    category: 'リリース',
    title: 'ざせきくん v2.0をリリースしました',
    description: '出席管理に加え、リアルタイムQ&A、ライブ投票、カスタムフォーム機能を追加しました。授業・研修・イベントの双方向コミュニケーションを支援します。',
    href: 'https://zaseki-kun.com/'
  },
  {
    date: '2026.03.10',
    category: 'アップデート',
    title: 'ざせきくんに位置情報検索機能を追加しました',
    description: 'Google Places連携により、出席管理フォーム作成時の対象場所設定をより扱いやすくしました。',
    href: 'https://zaseki-kun.com/'
  }
];
