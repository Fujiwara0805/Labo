import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: '株式会社Nobody',
  description: 'ITとAIの力で地域の未来を創造する',
  keywords: 'ポートフォリオ, 開発者, Web開発, フロントエンド, バックエンド',
  openGraph: {
    title: '株式会社Nobody',
    description: 'ITとAIの力で地域の未来を創造する',
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
      <body className={`${notoSansJP.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}