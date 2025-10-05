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
  icons: {
    icon: 'https://res.cloudinary.com/dz9trbwma/image/upload/v1759666819/%E4%BC%9A%E7%A4%BE%E3%83%AD%E3%82%B4%E3%82%99_-_%E7%B7%A8%E9%9B%86%E6%B8%88%E3%81%BF_neleep.png',
    shortcut: 'https://res.cloudinary.com/dz9trbwma/image/upload/v1759666819/%E4%BC%9A%E7%A4%BE%E3%83%AD%E3%82%B4%E3%82%99_-_%E7%B7%A8%E9%9B%86%E6%B8%88%E3%81%BF_neleep.png',
    apple: 'https://res.cloudinary.com/dz9trbwma/image/upload/v1759666819/%E4%BC%9A%E7%A4%BE%E3%83%AD%E3%82%B4%E3%82%99_-_%E7%B7%A8%E9%9B%86%E6%B8%88%E3%81%BF_neleep.png',
  },
  openGraph: {
    title: '株式会社Nobody',
    description: 'ITとAIの力で地域の未来を創造する',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dz9trbwma/image/upload/v1759666819/%E4%BC%9A%E7%A4%BE%E3%83%AD%E3%82%B4%E3%82%99_-_%E7%B7%A8%E9%9B%86%E6%B8%88%E3%81%BF_neleep.png',
        width: 1200,
        height: 630,
        alt: '株式会社Nobody ロゴ',
      },
    ],
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