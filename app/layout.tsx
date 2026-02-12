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
  title: '株式会社Nobody | 大切なものが後世も残り続けること',
  description: '大分県を拠点に、ITとAIの力で地域の文化・産業・つながりを次世代へ届けるソーシャルビジネス。アプリケーション開発・AI実装支援を通じ、自治体・教育機関・地域企業と連携し持続可能な地域社会の実現に貢献します。',
  keywords: '株式会社Nobody, 大分大学発ベンチャー, 大分県, ソーシャルビジネス, アプリ開発, AI実装, 地域課題解決, TOKUDOKU, NIKENME+',
  icons: {
    icon: 'https://res.cloudinary.com/dz9trbwma/image/upload/v1770858047/Gemini_Generated_Image_h26lvkh26lvkh26l_p6fuop.png',
    shortcut: 'https://res.cloudinary.com/dz9trbwma/image/upload/v1770858047/Gemini_Generated_Image_h26lvkh26lvkh26l_p6fuop.png',
    apple: 'https://res.cloudinary.com/dz9trbwma/image/upload/v1770858047/Gemini_Generated_Image_h26lvkh26lvkh26l_p6fuop.png',
  },
  openGraph: {
    title: '株式会社Nobody | 大切なものが後世も残り続けること',
    description: '大分県を拠点に、ITとAIの力で地域の文化・産業・つながりを次世代へ届けるソーシャルビジネス。',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dz9trbwma/image/upload/v1770858047/Gemini_Generated_Image_h26lvkh26lvkh26l_p6fuop.png',
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