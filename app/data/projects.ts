import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'King or Slave',
    description: '「King or Slave」は、王様・市民・奴隷の3すくみで戦うシンプル＆熱狂の戦略カードゲームです。',
    imageUrls: [
      'https://res.cloudinary.com/dz9trbwma/image/upload/v1751544113/kingorSlave_home_sgiyht.png',
      'https://res.cloudinary.com/dz9trbwma/image/upload/v1751544113/KingorSlave_rule_ywk2vx.png',
      'https://res.cloudinary.com/dz9trbwma/image/upload/v1751544113/KingorSlave_duel_gmm6he.png'
    ],
    projectUrl: 'https://king-or-slave.vercel.app/',
    technologies: ['Next.js', 'Node.js', 'TypeScript', 'Shadcn UI', 'Tailwind CSS', 'Vercel'],
    category: 'Web Application'
  },
  {
    id: '2',
    title: 'Forest Conservation Dashboard',
    description: '森林保護団体向けの環境データ可視化プラットフォーム。衛星データを活用した森林減少モニタリング。',
    imageUrls: [
      'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1574680/pexels-photo-1574680.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    projectUrl: 'https://example.com/forest-dashboard',
    technologies: ['Next.js', 'D3.js', 'Python', 'GCP'],
    category: 'Web Platform'
  },
  {
    id: '3',
    title: 'Adventure Gear E-commerce',
    description: 'アウトドア用品専門のECサイト。AR試着機能とコミュニティレビューシステムを統合。',
    imageUrls: [
      'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    projectUrl: 'https://example.com/adventure-gear',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe'],
    category: 'E-commerce'
  },
  {
    id: '4',
    title: 'Wildlife Tracking System',
    description: '野生動物の行動パターン追跡システム。IoTセンサーとAIを活用した生態系保護プロジェクト。',
    imageUrls: [
      'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    projectUrl: 'https://example.com/wildlife-tracking',
    technologies: ['Python', 'TensorFlow', 'IoT', 'MongoDB'],
    category: 'IoT & AI'
  },
  {
    id: '5',
    title: 'Campsite Booking Platform',
    description: 'キャンプ場予約プラットフォーム。リアルタイム空室確認と写真共有機能付きレビューシステム。',
    imageUrls: [
      'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    projectUrl: 'https://example.com/campsite-booking',
    technologies: ['React', 'Express.js', 'Redis', 'Cloudinary'],
    category: 'Booking Platform'
  },
  {
    id: '6',
    title: 'River Flow Monitoring',
    description: '河川流量監視システム。洪水予警報と水質管理のためのリアルタイムデータ収集・分析。',
    imageUrls: [
      'https://images.pexels.com/photos/158251/lake-konstanz-mainau-waters-sky-158251.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    projectUrl: 'https://example.com/river-monitoring',
    technologies: ['Angular', 'Spring Boot', 'InfluxDB', 'Grafana'],
    category: 'Monitoring System'
  }
];