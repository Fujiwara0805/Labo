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
  description: '大分県を拠点に、ITとAIの力で地域の文化・産業・つながりを次世代へ届けるソーシャルビジネス。アプリケーション開発・AI実装支援に加え、生成AI・AIエージェントを活用したプロダクト開発やDX化の受託開発にも対応する、大分発のAIネイティブ企業です。自治体・教育機関・地域企業と連携し、持続可能な地域社会の実現に貢献します。',
  keywords: '株式会社Nobody, 大分大学発ベンチャー, 大分県, AIネイティブ企業, 大分 AI企業, 大分県 AI開発, AI開発会社 大分, AI受託開発, 生成AI開発, AIエージェント開発, DX支援 大分, 受託開発 大分, システム開発 大分, ソーシャルビジネス, アプリ開発, AI実装, 地域課題解決, TALE, にけんめぷらす, ざせきくん, ばんけん, NEXT BUSINESS EXPO',
  icons: {
    icon: 'https://res.cloudinary.com/dz9trbwma/image/upload/v1770858047/Gemini_Generated_Image_h26lvkh26lvkh26l_p6fuop.png',
    shortcut: 'https://res.cloudinary.com/dz9trbwma/image/upload/v1770858047/Gemini_Generated_Image_h26lvkh26lvkh26l_p6fuop.png',
    apple: 'https://res.cloudinary.com/dz9trbwma/image/upload/v1770858047/Gemini_Generated_Image_h26lvkh26lvkh26l_p6fuop.png',
  },
  openGraph: {
    title: '株式会社Nobody | 大切なものが後世も残り続けること',
    description: '大分県を拠点に、ITとAIの力で地域の文化・産業・つながりを次世代へ届けるソーシャルビジネス。生成AI・DXのプロダクト開発／受託開発にも対応する、大分発のAIネイティブ企業です。',
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

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  name: '株式会社Nobody',
  alternateName: ['Nobody Inc.', 'ノーバディ'],
  url: 'https://nobody-info.com',
  logo: 'https://res.cloudinary.com/dz9trbwma/image/upload/v1770858047/Gemini_Generated_Image_h26lvkh26lvkh26l_p6fuop.png',
  description:
    '大分県を拠点とするAIネイティブ企業。ソーシャルビジネスとして地域課題の解決に取り組みながら、生成AI・AIエージェントを活用したプロダクト開発やDX化の受託開発を手がけています。',
  slogan: '大切なものが後世も残り続けること',
  email: 'sobota@nobody-info.com',
  foundingDate: '2025-08-05',
  address: {
    '@type': 'PostalAddress',
    postalCode: '870-1192',
    addressRegion: '大分県',
    addressLocality: '大分市',
    streetAddress: '大字旦野原700番地',
    addressCountry: 'JP',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: '大分県' },
    { '@type': 'Country', name: '日本' },
  ],
  knowsAbout: [
    'AI開発',
    '生成AI',
    'AIエージェント',
    'AI受託開発',
    'DX（デジタルトランスフォーメーション）',
    'アプリケーション開発',
    '地域課題解決',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'AI受託開発・生成AIプロダクト開発',
        serviceType: 'AI開発／受託開発',
        provider: { '@type': 'Organization', name: '株式会社Nobody' },
        areaServed: { '@type': 'AdministrativeArea', name: '大分県' },
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'DX支援・業務自動化',
        serviceType: 'DX支援',
        provider: { '@type': 'Organization', name: '株式会社Nobody' },
        areaServed: { '@type': 'AdministrativeArea', name: '大分県' },
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoSansJP.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
