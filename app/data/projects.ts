import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Mountain Explorer App',
    description: '登山愛好家のためのトレッキングルート発見アプリ。リアルタイムの天気情報と危険度判定機能を搭載。',
    imageUrl: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=800',
    projectUrl: 'https://example.com/mountain-explorer',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    category: 'Mobile App'
  },
  {
    id: '2',
    title: 'Forest Conservation Dashboard',
    description: '森林保護団体向けの環境データ可視化プラットフォーム。衛星データを活用した森林減少モニタリング。',
    imageUrl: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=800',
    projectUrl: 'https://example.com/forest-dashboard',
    technologies: ['Next.js', 'D3.js', 'Python', 'GCP'],
    category: 'Web Platform'
  },
  {
    id: '3',
    title: 'Adventure Gear E-commerce',
    description: 'アウトドア用品専門のECサイト。AR試着機能とコミュニティレビューシステムを統合。',
    imageUrl: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
    projectUrl: 'https://example.com/adventure-gear',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe'],
    category: 'E-commerce'
  },
  {
    id: '4',
    title: 'Wildlife Tracking System',
    description: '野生動物の行動パターン追跡システム。IoTセンサーとAIを活用した生態系保護プロジェクト。',
    imageUrl: 'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=800',
    projectUrl: 'https://example.com/wildlife-tracking',
    technologies: ['Python', 'TensorFlow', 'IoT', 'MongoDB'],
    category: 'IoT & AI'
  },
  {
    id: '5',
    title: 'Campsite Booking Platform',
    description: 'キャンプ場予約プラットフォーム。リアルタイム空室確認と写真共有機能付きレビューシステム。',
    imageUrl: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800',
    projectUrl: 'https://example.com/campsite-booking',
    technologies: ['React', 'Express.js', 'Redis', 'Cloudinary'],
    category: 'Booking Platform'
  },
  {
    id: '6',
    title: 'River Flow Monitoring',
    description: '河川流量監視システム。洪水予警報と水質管理のためのリアルタイムデータ収集・分析。',
    imageUrl: 'https://images.pexels.com/photos/158251/lake-konstanz-mainau-waters-sky-158251.jpeg?auto=compress&cs=tinysrgb&w=800',
    projectUrl: 'https://example.com/river-monitoring',
    technologies: ['Angular', 'Spring Boot', 'InfluxDB', 'Grafana'],
    category: 'Monitoring System'
  }
];