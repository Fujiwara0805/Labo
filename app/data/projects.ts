import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'TOKUDOKU',
    description: '大分県内のイベントを探せる地域情報プラットフォーム。おでかけ先や週末の予定を探すユーザーに向けて、地域のイベント情報やスポット情報をわかりやすく掲載します。',
    imageUrls: [
      'https://res.cloudinary.com/dz9trbwma/image/upload/v1751627047/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2025-07-04_19.59.32_bt4efr.png',
      'https://res.cloudinary.com/dz9trbwma/image/upload/v1751627046/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2025-07-04_20.00.56_uvqhce.png',
      'https://res.cloudinary.com/dz9trbwma/image/upload/v1751627045/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2025-07-04_20.01.17_xm1mlh.png',
      'https://res.cloudinary.com/dz9trbwma/image/upload/v1751627046/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2025-07-04_20.01.38_znab03.png',
      'https://res.cloudinary.com/dz9trbwma/image/upload/v1751627045/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2025-07-04_20.02.13_z1xk3t.png',
      'https://res.cloudinary.com/dz9trbwma/image/upload/v1751627045/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2025-07-04_20.02.42_dhjoam.png',
      'https://res.cloudinary.com/dz9trbwma/image/upload/v1751627044/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2025-07-04_20.03.06_i7teqe.png',
    ],
    projectUrl: 'https://tokudoku.com',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'Shadcn UI', 'Tailwind CSS', 'Vercel', 'Supabase', 'Google Maps API'],
    category: '地域イベント情報プラットフォーム'
  },
  {
    id: '2',
    title: 'NIKENME+',
    description: '一次会前後のお店探しを支援するナイトディスカバリープラットフォーム。地図上で加盟店のリアルタイム空席状況を確認でき、雰囲気・メニュー・料金目安を見ながら次のお店を選べます。',
    imageUrls: [],
    projectUrl: 'https://nikenme.jp/landing',
    technologies: ['Next.js', 'TypeScript', 'Shadcn UI', 'Tailwind CSS', 'Supabase', 'Google Maps API'],
    category: 'リアルタイム空席可視化'
  },
  {
    id: '3',
    title: 'ZASEKI-KUN',
    description: '出席管理・招待フォーム・リアルタイムQ&A・ライブ投票をワンストップで扱える学習機会向けプラットフォーム。QRコードと位置情報を活用し、授業・研修・イベントの運営をインタラクティブにします。',
    imageUrls: [],
    projectUrl: 'https://www.zaseki-kun.com/',
    technologies: ['Next.js', 'TypeScript', 'Shadcn UI', 'Tailwind CSS', 'Google Maps API'],
    category: '出席・レポート管理'
  },
  {
    id: '4',
    title: 'YOBIDASHI-KUN',
    description: 'QR整理券の発券から順番待ち管理・呼出・入場確認までを一元化する順番待ち管理システム。来場者はスマートフォンで待ち状況や目安時間を確認でき、スタッフは管理画面から呼出と来場確認を行えます。',
    imageUrls: [],
    projectUrl: 'https://www.seiri-ken.com/',
    technologies: ['Next.js', 'TypeScript', 'Shadcn UI', 'Tailwind CSS', 'Supabase'],
    category: 'QR整理券・順番待ち管理'
  },
];
