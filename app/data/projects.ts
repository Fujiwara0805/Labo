import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'TALE',
    description: '各地域のイベント・お祭り・マルシェ情報を探せる地域情報プラットフォーム。おでかけ先や週末の予定を探すユーザーに向けて、地域のイベント情報をわかりやすく掲載し、主催者が自分のイベントを手軽に発信できます。',
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
    description: '「今いける」飲食店を見つけ、街の店舗回遊を空席通知でサポートするローカルダイニングマップ。地図上で加盟店のリアルタイム空席状況を確認でき、LINE空席通知やデジタル会員証で次の一軒へとスムーズに導きます。',
    imageUrls: [],
    projectUrl: 'https://nikenme.jp/landing',
    technologies: ['Next.js', 'TypeScript', 'Shadcn UI', 'Tailwind CSS', 'Supabase', 'Google Maps API'],
    category: 'ローカルダイニングマップ'
  },
  {
    id: '3',
    title: 'ZASEKI-KUN',
    description: 'リアルタイムQ&A・ライブ投票・出席管理・招待フォームをワンストップで扱える参加管理プラットフォーム。QRコードひとつで出席・受付・反応・記録をつなぎ、授業・研修・カンファレンスをインタラクティブにします。',
    imageUrls: [],
    projectUrl: 'https://www.zaseki-kun.com/',
    technologies: ['Next.js', 'TypeScript', 'Shadcn UI', 'Tailwind CSS', 'Google Maps API'],
    category: '参加管理プラットフォーム'
  },
  {
    id: '4',
    title: 'BANKEN',
    description: 'イベントの「整理券発券・当落抽選・入場管理」をひとつにしたクラウドサービス。現地でのその場発券、時間指定のWeb予約、公平な当落抽選、QRでの入場確認までを一元化し、来場者は登録不要で利用できます。',
    imageUrls: [],
    projectUrl: 'https://www.seiri-ken.com/',
    technologies: ['Next.js', 'TypeScript', 'Shadcn UI', 'Tailwind CSS', 'Supabase'],
    category: 'イベント整理券・抽選・入場管理'
  },
];
