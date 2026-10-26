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
  description: '大分県を拠点に、ITとAIの力で地域の文化・産業・つながりを次世代へ届けるソーシャルビジネス。アプリケーション開発・AI実装支援に加え、AI勉強会・研修、講演、AI活用コンサルティング、Webサイト・Webアプリ開発のご相談も承る、大分発のAIネイティブ企業です。自治体・教育機関・地域企業と連携し、持続可能な地域社会の実現に貢献します。',
  keywords: '株式会社Nobody, 大分大学発ベンチャー, 大分県, AIネイティブ企業, 大分 AI企業, AI勉強会, AI研修 大分, 生成AI 研修, 生成AI 講演, AI 講師 大分, AIコンサルティング 大分, AI活用 相談, DX 相談 大分, Webサイト 相談, Webアプリ 相談, FDE, ソーシャルビジネス, 地域課題解決, TALE, にけんめぷらす, ざせきくん, ばんけん, NEXT BUSINESS EXPO',
  icons: {
    icon: 'https://res.cloudinary.com/dz9trbwma/image/upload/v1770858047/Gemini_Generated_Image_h26lvkh26lvkh26l_p6fuop.png',
    shortcut: 'https://res.cloudinary.com/dz9trbwma/image/upload/v1770858047/Gemini_Generated_Image_h26lvkh26lvkh26l_p6fuop.png',
    apple: 'https://res.cloudinary.com/dz9trbwma/image/upload/v1770858047/Gemini_Generated_Image_h26lvkh26lvkh26l_p6fuop.png',
  },
  openGraph: {
    title: '株式会社Nobody | 大切なものが後世も残り続けること',
    description: '大分県を拠点に、ITとAIの力で地域の文化・産業・つながりを次世代へ届けるソーシャルビジネス。AI勉強会・研修、講演、AI活用コンサルティングのご相談も承る、大分発のAIネイティブ企業です。',
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
    '大分県を拠点とするAIネイティブ企業。ソーシャルビジネスとして地域課題の解決に取り組みながら、AI勉強会・研修、講演、AI活用コンサルティング、Webサイト・Webアプリ開発のご相談を承っています。',
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
    '生成AI',
    'AI活用',
    'AI研修',
    'AIコンサルティング',
    'DX（デジタルトランスフォーメーション）',
    'Webアプリケーション開発',
    '地域課題解決',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'AI勉強会・研修',
        serviceType: '研修',
        provider: { '@type': 'Organization', name: '株式会社Nobody' },
        areaServed: { '@type': 'AdministrativeArea', name: '大分県' },
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: '講演・登壇',
        serviceType: '講演',
        provider: { '@type': 'Organization', name: '株式会社Nobody' },
        areaServed: { '@type': 'AdministrativeArea', name: '大分県' },
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'AI活用コンサルティング',
        serviceType: 'コンサルティング',
        provider: { '@type': 'Organization', name: '株式会社Nobody' },
        areaServed: { '@type': 'AdministrativeArea', name: '大分県' },
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Webサイト・Webアプリ開発のご相談',
        serviceType: '開発相談',
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
