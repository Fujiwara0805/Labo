export type NewsItem = {
  date: string;
  category: string;
  title: string;
  description: string;
  href?: string;
};

export const newsItems: NewsItem[] = [
  {
    date: '2026.06.03',
    category: 'リリース',
    title: '呼び出しくんをリリースしました',
    description: 'QR整理券の発券から順番待ち管理、呼出、入場確認までを一元化する新サービス「呼び出しくん」を公開しました。飲食店・クリニック・イベント・行政窓口・サロンなど、幅広い現場の待ち時間体験を改善します。',
    href: 'https://www.seiri-ken.com/'
  },
  {
    date: '2026.04.23',
    category: 'アップデート',
    title: 'にけんめぷらすでLINEクーポン発行機能をリリースしました',
    description: '店舗がLINE公式アカウントからクーポンを配信し、消込コードと分析画面で発行数・消込率・来店者属性を確認できる機能を追加しました。',
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
