import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'トクドク',
    description: '最新のイベント情報を提供するプラットフォーム。多彩なイベント情報を閲覧し、興味のあるイベントを見つけることができます。',
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
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'Shadcn UI', 'Tailwind CSS', 'Vercel', 'Supabase'],
    category: 'イベント情報プラットフォーム'
  },
  {
    id: '2',
    title: 'NIKENME+',
    description: '大分の二軒目探しサービス。地図上でリアルタイムに空席状況を確認でき、今すぐ入れるお店がすぐ分かります。',
    imageUrls: [],
    projectUrl: 'https://nikenme.jp/landing',
    technologies: ['Next.js', 'TypeScript', 'Shadcn UI', 'Tailwind CSS'],
    category: '飲食店検索'
  },
  {
    id: '3',
    title: 'ざせきくん',
    description: '座席管理を効率化するサービス。リアルタイムで座席状況を把握し、スムーズな来店体験を提供します。',
    imageUrls: [],
    projectUrl: 'https://www.zaseki-kun.com/',
    technologies: ['Next.js', 'TypeScript', 'Shadcn UI', 'Tailwind CSS'],
    category: '座席管理'
  },
];