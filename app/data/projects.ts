import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'TOKUDOKU',
    description: '「いつもの街に、まだ知らない景色がある」をコンセプトに、大分県内14市4町村すべてのイベント・観光スポット・隠れた名所を網羅した地域情報プラットフォーム。登録不要・完全無料で、マップ上から現在地周辺のイベントを直感的に発見でき、お祭り・マルシェ・ワークショップなど多彩なカテゴリーから週末の予定を見つけられます。',
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
    description: '「夜の続きは、ここから」をコンセプトに、大分市内の飲食店（バー・スナック・居酒屋）のリアルタイム空席情報をマップ上に可視化するサービス。電話予約が不要で、自動音声が到着まで席をキープ。飲食店オーナーにはデータドリブン経営を支援する分析機能を提供します。',
    imageUrls: [],
    projectUrl: 'https://nikenme.jp/landing',
    technologies: ['Next.js', 'TypeScript', 'Shadcn UI', 'Tailwind CSS', 'Supabase', 'Google Maps API'],
    category: 'リアルタイム空席可視化'
  },
  {
    id: '3',
    title: 'ZASEKI-KUN',
    description: '教育現場における学生の出席管理とレポート提出を効率化するWebシステム。位置情報で教室外からの出席を防止し、同一端末からの連続提出制限で代筆を抑止。公正な学習環境を実現します。',
    imageUrls: [],
    projectUrl: 'https://www.zaseki-kun.com/',
    technologies: ['Next.js', 'TypeScript', 'Shadcn UI', 'Tailwind CSS', 'Google Maps API'],
    category: '出席・レポート管理'
  },
];