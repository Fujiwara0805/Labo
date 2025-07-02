import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Adventure Portfolio - 冒険的な開発者のポートフォリオ',
  description: '自然をテーマにした開発者ポートフォリオ。革新的なプロジェクトと冒険心溢れる開発実績をご紹介します。',
  keywords: 'ポートフォリオ, 開発者, Web開発, フロントエンド, バックエンド',
  openGraph: {
    title: 'Adventure Portfolio',
    description: '冒険的な開発者のポートフォリオサイト',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoSansJP.className} antialiased`}>{children}</body>
    </html>
  );
}