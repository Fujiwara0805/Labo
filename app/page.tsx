'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Building2,
  Sparkles,
  MapPin,
  Users,
  Mail,
  Menu,
  X,
  Megaphone,
  ExternalLink,
  ArrowRight,
  Ticket,
  Calendar,
  CheckCircle,
  FileText,
  Globe,
  Heart,
  Shield,
  Target,
  Briefcase,
  Eye,
  Lightbulb,
  HandHeart,
  TrendingUp,
  Map,
  Utensils,
  GraduationCap,
  Cpu,
  Bot,
  Code2,
  Workflow
} from 'lucide-react';
import { newsItems } from './data/news';

/* -------------------------------------------------------------------------- */
/* CONSTANTS & DATA                                                           */
/* -------------------------------------------------------------------------- */

const PAGES = {
  HOME: 'home',
  COMPANY: 'company',
  NEWS: 'news',
  CONTACT: 'contact',
  PRIVACY: 'privacy'
};

const CONTACT_EMAIL = 'sobota@nobody-info.com';

const projects = [
  {
    id: "tale",
    title: "TALE",
    subtitle: "Local Event Discovery Platform",
    icon: Map,
    description: "TALEは、各地域のイベント・お祭り・マルシェ情報を探せる地域情報プラットフォームです。おでかけ先や週末の予定を探すユーザーに向けて、地域のイベント情報をわかりやすく掲載。主催者は自分のイベントを手軽に発信でき、地元の人にも訪れる人にも、まだ知らない地域との出会いを届けます。",
    features: [
      "各地域のイベント・お祭り・マルシェ情報を一覧と地図で探せる",
      "おでかけ先を探しやすい地域密着型の情報設計",
      "主催者が自分のイベントを簡単に掲載・発信できる",
      "地域の魅力を可視化し、回遊と来訪機会を創出",
      "登録不要で閲覧できるオープンな情報プラットフォーム"
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel", "Google Maps API"],
    url: "https://tokudoku.com",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "nikenme",
    title: "NIKENME+",
    subtitle: "Local Dining Map",
    icon: Utensils,
    description: "にけんめぷらす（NIKENME+）は、「今いける」飲食店を見つけ、街の店舗回遊を空席通知でサポートするローカルダイニングマップです。地図上で加盟店のリアルタイム空席状況を確認でき、雰囲気・メニュー・料金目安を見ながら次の一軒を選べます。あなたの街の、次の一軒へ。",
    features: [
      "「空席有／満席」がひと目でわかるリアルタイム空席情報",
      "現在地周辺のお店を地図表示し、近い順で次の店舗を選択",
      "気になるお店に空席が出たらLINEでお知らせする空席通知",
      "電話予約を自動音声で対応する予約サポート",
      "QRコード形式のデジタル会員証でスムーズにチェックイン"
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel", "Google Maps API"],
    url: "https://nikenme.jp/landing",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "zaseki",
    title: "ZASEKI-KUN",
    subtitle: "Interactive Participation Platform",
    icon: GraduationCap,
    description: "ざせきくんは、リアルタイムQ&A・ライブ投票・出席管理・招待フォームをワンストップで扱える参加管理プラットフォームです。出席・受付・その場の反応・実施後の記録を、QRコードひとつでつなぎます。授業・研修・カンファレンスの運営をインタラクティブにし、その場にいる全員を主役にします。",
    features: [
      "リアルタイムQ&A・ライブ投票・クイズで参加者全員の声を集計",
      "GPS連携の位置情報で代理出席を抑止する出席管理",
      "ログイン不要・QRコードでワンタップ参加登録",
      "事前登録から当日受付まで一気通貫の招待フォーム",
      "回答をリアルタイム集計・CSV出力し、1,000人規模でも安定稼働"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Google Maps API"],
    url: "https://zaseki-kun.com",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "banken",
    title: "BANKEN",
    subtitle: "Ticketing, Lottery & Entry Management",
    icon: Ticket,
    description: "ばんけんは、イベントの「整理券発券・当落抽選・入場管理」をひとつにしたクラウドサービスです。現地でのその場発券、時間指定のWeb予約、公平な当落抽選、QRでの入場確認までを一元化。来場者は登録不要で利用でき、発券・予約・抽選・入場をひとつにまとめます。",
    features: [
      "当日その場でQR整理券を発券する現地発券に対応",
      "ルーム一覧から日時を選べる時間指定Web予約",
      "決定的アルゴリズムと監査ログで証明する公平な当落抽選",
      "QRスキャンでスムーズな入場確認・来場者管理",
      "展示会・物販即売・催事・抽選販売など繰り返しイベントに対応"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Supabase"],
    url: "https://www.seiri-ken.com/",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=2070&auto=format&fit=crop"
  }
];

// トップの告知枠は常に最新のお知らせ（newsItems の先頭）を表示する
const latestNews = newsItems[0];

const companyDetails = [
  { icon: Building2, label: '会社名', value: '株式会社Nobody' },
  { icon: GraduationCap, label: '種別', value: '大分大学発ベンチャー' },
  { icon: Briefcase, label: '事業内容', value: 'アプリケーション開発・AI実装支援・AI受託開発（生成AI／DX）' },
  { icon: MapPin, label: '所在地', value: '大分県大分市大字旦野原700番地' },
  { icon: Calendar, label: '設立', value: '2025年8月5日' }
];

const privacySections = [
  {
    title: '個人情報の定義',
    content: '個人情報とは、利用者個人に関する情報であって、当該情報を構成する氏名、メールアドレス、生年月日その他の記述等により当該利用者を識別できるものとします。'
  },
  {
    title: '個人情報の利用目的',
    content: '株式会社Nobodyは、個人情報を以下の目的の範囲内のみで利用いたします。',
    list: [
      'サービスの提供と個人認証',
      'サービス向上等を目的としたアンケート、キャンペーンの実施',
      'メールによる各種情報の無料提供、お問い合わせへの返答'
    ]
  },
  {
    title: '個人情報の安全管理',
    content: '当社は、個人情報の漏洩、滅失又はき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。'
  }
];

/* -------------------------------------------------------------------------- */
/* UI COMPONENTS                                                              */
/* -------------------------------------------------------------------------- */

const SectionTitle = ({ title, subtitle, align = "left" }: { title: React.ReactNode, subtitle?: string, align?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className={`mb-8 sm:mb-12 md:mb-16 lg:mb-20 ${align === "center" ? "text-center" : "text-left"}`}
  >
    <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-medium text-black tracking-tight mb-3 sm:mb-4 md:mb-6">
      {title}
    </h2>
    {subtitle && (
      <p className="text-xs sm:text-xs md:text-sm lg:text-base text-gray-500 max-w-2xl leading-relaxed font-light mx-auto px-2 sm:px-4 md:px-0">
        {subtitle}
      </p>
    )}
  </motion.div>
);

/* -------------------------------------------------------------------------- */
/* PAGE COMPONENTS                                                            */
/* -------------------------------------------------------------------------- */

// 1. HOME PAGE
const HomePage = ({ navigateTo }: { navigateTo: (page: string) => void }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Hero Section */}
      <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20 sm:pt-24 md:pt-0">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:12px_12px] sm:bg-[size:16px_16px] md:bg-[size:32px_32px]"></div>
           <div className="absolute right-0 top-0 -z-10 h-[20vh] w-[40vw] sm:h-[30vh] sm:w-[30vw] md:h-[50vh] md:w-[50vw] bg-gray-50 opacity-30 sm:opacity-50 blur-[60px] sm:blur-[80px] md:blur-[100px] rounded-full"></div>
           <div className="absolute left-1/4 bottom-0 -z-10 h-[30vh] w-[30vw] bg-gray-100 opacity-20 blur-[120px] rounded-full"></div>
        </div>

        <motion.div style={{ y, opacity }} className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8"
            >
              <div className="h-[1px] w-6 sm:w-8 md:w-12 bg-black"></div>
              <span className="text-[10px] sm:text-[10px] md:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase text-gray-500">Social Business from Oita</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-serif font-medium text-black leading-[0.95] sm:leading-[0.9] tracking-tighter mb-4 sm:mb-6 md:mb-10"
            >
              Preserve<br />
              <span className="text-gray-400 italic">What</span><br />
              Matters.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-xl leading-relaxed font-light mb-6 sm:mb-8 md:mb-12 border-l-2 sm:border-l border-gray-200 pl-3 sm:pl-4 md:pl-6"
            >
              大切なものが後世も残り続けること。<br />
              私たちはITとAIの力で、地域の文化・産業・つながりを<br className="hidden md:block" />
              次の世代へ届けるソーシャルビジネスに取り組みます。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <button
                onClick={() => navigateTo(PAGES.CONTACT)}
                className="bg-black text-white px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all inline-flex items-center justify-center gap-2"
              >
                お問い合わせ <ArrowRight size={14} />
              </button>
              <button
                onClick={() => navigateTo(PAGES.COMPANY)}
                className="border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-xs font-bold uppercase tracking-widest hover:border-black hover:text-black transition-all inline-flex items-center justify-center gap-2"
              >
                会社概要を見る
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Latest News Banner */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.a
            href={latestNews.href ?? '/news'}
            {...(latestNews.href ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group block border-2 border-black bg-white hover:bg-black transition-colors duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="flex-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Megaphone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-gray-300 transition-colors" strokeWidth={1.5} />
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-gray-300 transition-colors">
                    Latest News — 最新のお知らせ
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold tracking-widest text-gray-500 group-hover:text-gray-300 border border-gray-200 group-hover:border-gray-600 px-2 py-0.5 transition-colors">
                    {latestNews.category}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-black group-hover:text-white leading-tight tracking-tight mb-3 sm:mb-4 transition-colors">
                  {latestNews.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 group-hover:text-gray-300 font-light leading-relaxed mb-4 sm:mb-5 transition-colors">
                  {latestNews.description}
                </p>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 group-hover:text-gray-300 font-light transition-colors">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" strokeWidth={1.5} />
                  <span>{latestNews.date}</span>
                </div>
              </div>
              <div className="shrink-0">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-black group-hover:text-white border-b border-black group-hover:border-white pb-1 transition-all">
                  詳細を見る {latestNews.href ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
                </span>
              </div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Vision Statement Band */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-[10px] sm:text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-3 sm:mb-4">Our Vision</p>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-medium text-black leading-relaxed tracking-tight">
              大切なものが後世も残り続けること
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 font-light mt-3 sm:mt-4 max-w-2xl mx-auto leading-relaxed">
              地域に根ざしたソーシャルビジネスとして、<br className="hidden md:block" />
              小さな社会課題をビジネスで解決する道を選びました。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <SectionTitle
            title={<>Our<br className="hidden sm:block" />Products</>}
            subtitle="地域の課題解決に向けて開発・運営する私たちの主要プロダクト"
          />
          <div className="space-y-16 sm:space-y-20 md:space-y-28 lg:space-y-36">
            {projects.map((project, index) => {
              const ProjectIcon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-start md:items-center group`}
                >
                  <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden bg-gray-100 relative rounded-sm">
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                    />
                  </div>
                  <div className="w-full md:w-1/2 space-y-3 sm:space-y-4 md:space-y-5">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <ProjectIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" strokeWidth={1.5} />
                      <span className="text-[10px] sm:text-[10px] md:text-xs font-bold text-gray-400 tracking-[0.15em] sm:tracking-[0.2em] uppercase">0{index + 1} — {project.subtitle}</span>
                    </div>
                    <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-medium text-black leading-tight">{project.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-light border-l-2 border-gray-200 pl-3 sm:pl-4 md:pl-6">
                      {project.description}
                    </p>

                    <div className="pt-1 sm:pt-2 md:pt-3">
                      <h4 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 mb-2 sm:mb-3">主な特徴</h4>
                      <ul className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
                        {project.features.map((feature, i) => (
                          <li key={i} className="text-gray-600 font-light text-xs sm:text-xs md:text-sm flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-1 sm:pt-2 md:pt-3">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 bg-gray-50 text-gray-500 text-[10px] sm:text-[10px] md:text-xs rounded-sm border border-gray-100">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 sm:pt-4 md:pt-5">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-xs md:text-sm font-bold uppercase tracking-widest hover:gap-3 sm:hover:gap-4 transition-all text-gray-900 border-b border-gray-900 pb-0.5 sm:pb-1"
                      >
                        View Project <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-14">
            <SectionTitle
              title="News"
              subtitle="サービスリリースや主要アップデートに関するお知らせ"
            />
            <a
              href="/news"
              className="inline-flex items-center gap-2 text-xs sm:text-xs md:text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-900 pb-1 w-fit hover:gap-4 transition-all"
            >
              すべてのお知らせを見る <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {newsItems.slice(0, 3).map((item, index) => (
              <motion.article
                key={`${item.date}-${item.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col min-h-[260px] hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
                  <time className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-400">{item.date}</time>
                  <span className="text-[10px] font-bold tracking-widest text-gray-500 border border-gray-200 px-2 py-1">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-medium text-black leading-tight mb-3 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light flex-1">
                  {item.description}
                </p>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-900 hover:gap-3 transition-all w-fit"
                  >
                    関連ページ <ExternalLink size={12} />
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Social Business Philosophy Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <HandHeart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-4 sm:mb-6 md:mb-8 text-gray-500" strokeWidth={1} />
              <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-medium mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight px-2 sm:px-4">
                <span className="text-gray-500 italic">Social</span> Business.
              </h2>
              <p className="text-gray-400 font-light text-sm sm:text-sm md:text-base lg:text-lg leading-relaxed px-2 sm:px-4 max-w-2xl mx-auto">
                地域に寄り添い、<br className="hidden sm:block" />
                社会課題を持続的に解決するソーシャルビジネスとして歩みます。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-800 border border-gray-800 mt-8 sm:mt-12">
              {[
                { icon: Heart, title: "地域に根ざす", desc: "スケールよりインパクト。地域の声に耳を傾け、本当に必要とされるサービスを創ります。" },
                { icon: Shield, title: "信頼と透明性", desc: "自治体・公的機関との連携を視野に、セキュリティとコンプライアンスを重視した開発体制を整えています。" },
                { icon: TrendingUp, title: "持続可能な成長", desc: "一過性のトレンドに依存せず、地域と共に長期的に成長するビジネスモデルを追求します。" }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-black/80 p-5 sm:p-6 md:p-8 lg:p-10 text-center"
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mx-auto mb-3 sm:mb-4 md:mb-5 text-gray-400" strokeWidth={1} />
                  <h3 className="text-sm sm:text-base md:text-lg font-serif font-medium mb-2 sm:mb-3 text-white">{item.title}</h3>
                  <p className="text-xs sm:text-xs md:text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI-Native Development Section */}
      <section id="ai-development" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] md:bg-[size:32px_32px]"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" strokeWidth={1.5} />
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                  AI-Native Development — 開発パートナーとして
                </span>
              </div>
              <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-medium text-black leading-tight tracking-tight mb-4 sm:mb-6 px-2 sm:px-4">
                <span className="text-gray-400 italic">AI-Native</span> な<br className="sm:hidden" />開発チームとして。
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto px-2 sm:px-4">
                私たちは、自社プロダクトを生成AIとともに設計・開発してきたAIネイティブな企業です。<br className="hidden md:block" />
                その知見を活かし、大分県内をはじめとする企業・自治体・教育機関の皆さまへ、
                生成AIの活用・業務のDX化・アプリケーション開発の<span className="font-medium text-black">受託開発</span>をお引き受けしています。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
              {[
                { icon: Bot, title: "生成AI・AIエージェント開発", desc: "チャットボット、社内ナレッジ検索、業務アシスタントなど、生成AIを組み込んだプロダクトを企画から実装まで一貫して開発します。" },
                { icon: Workflow, title: "業務DX・自動化", desc: "手作業やアナログな業務フローをAIとソフトウェアで自動化し、地域の現場の生産性向上と省人化を支援します。" },
                { icon: Code2, title: "Web・アプリの受託開発", desc: "自社サービスで培ったモダンな技術スタックで、Webサイト・業務システム・モバイルアプリを開発します。" }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="bg-white p-5 sm:p-6 md:p-8 lg:p-10 text-center hover:bg-gray-50 transition-colors group"
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mx-auto mb-3 sm:mb-4 md:mb-5 text-gray-300 group-hover:text-black transition-colors" strokeWidth={1.2} />
                  <h3 className="text-sm sm:text-base md:text-lg font-serif font-medium mb-2 sm:mb-3 text-black">{item.title}</h3>
                  <p className="text-xs sm:text-xs md:text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-8 sm:mt-10 md:mt-14 text-center"
            >
              <p className="text-xs sm:text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
                「AIで何かできないか」という構想段階からのご相談も歓迎します。<br className="hidden md:block" />
                大分発のAIネイティブ企業として、アイデアの壁打ちから開発・運用まで伴走します。
              </p>
              <button
                onClick={() => navigateTo(PAGES.CONTACT)}
                className="bg-black text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 text-xs sm:text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all inline-flex items-center gap-2"
              >
                AI開発を相談する <ArrowRight size={14} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust / CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-[10px] sm:text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-3 sm:mb-4">Partnership</p>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-medium text-black leading-relaxed tracking-tight mb-3 sm:mb-4 md:mb-6">
              地域課題の解決に向けて、<br className="hidden sm:block" />ご一緒しませんか。
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 font-light leading-relaxed mb-6 sm:mb-8">
              自治体・教育機関・地域企業の皆さまとの連携を通じ、<br className="hidden md:block" />
              地域の持続可能な発展に貢献するプロダクトを開発しています。<br className="hidden md:block" />
              アプリ開発やAI活用のご相談など、お気軽にお問い合わせください。
            </p>
            <button
              onClick={() => navigateTo(PAGES.CONTACT)}
              className="bg-black text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 text-xs sm:text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all inline-flex items-center gap-2"
            >
              Contact Us <Mail size={14} />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// 2. NEWS PAGE
const NewsPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-10 sm:pb-12 md:pb-16 lg:pb-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <SectionTitle
          title="News"
          subtitle="株式会社Nobodyのサービスリリース、機能追加、主要アップデートをお知らせします。"
          align="center"
        />

        <div className="max-w-4xl mx-auto mt-8 sm:mt-12 md:mt-16 border-y border-gray-100">
          {newsItems.map((item, index) => (
            <motion.article
              key={`${item.date}-${item.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 sm:gap-6 md:gap-10 py-7 sm:py-8 md:py-10 border-b border-gray-100 last:border-b-0"
            >
              <div className="space-y-2">
                <time className="block text-xs font-bold tracking-[0.2em] text-gray-400">{item.date}</time>
                <span className="inline-block text-[10px] font-bold tracking-widest text-gray-500 border border-gray-200 px-2 py-1">
                  {item.category}
                </span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-black leading-tight mb-3 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                  {item.description}
                </p>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 border-b border-gray-900 pb-1 hover:gap-3 transition-all"
                  >
                    関連ページ <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// 3. COMPANY PAGE
const CompanyPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-10 sm:pb-12 md:pb-16 lg:pb-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <SectionTitle
          title="Company"
          subtitle="株式会社Nobodyは大分大学発ベンチャーです。地域社会の課題解決に取り組み、大切なものが後世も残り続けることを目指しています。"
          align="center"
        />

        {/* Company Details Grid */}
        <div className="max-w-4xl mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
            {companyDetails.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 sm:p-6 md:p-8 lg:p-12 hover:bg-gray-50 transition-colors group"
              >
                <detail.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-300 mb-3 sm:mb-4 md:mb-6 group-hover:text-black transition-colors" strokeWidth={1} />
                <h3 className="text-[10px] sm:text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 sm:mb-2 md:mb-3">{detail.label}</h3>
                <p className="text-base sm:text-base md:text-lg lg:text-xl font-serif font-medium text-black leading-tight">{detail.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-10 sm:mt-14 md:mt-20 lg:mt-28"
          >
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <Eye className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mx-auto mb-3 sm:mb-4 text-gray-300" strokeWidth={1} />
              <p className="text-[10px] sm:text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 sm:mb-3">Vision</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-black tracking-tight leading-tight">
                大切なものが<br className="sm:hidden" />後世も残り続けること
              </h3>
            </div>
            <p className="text-sm sm:text-sm md:text-base text-gray-600 leading-relaxed font-light max-w-2xl mx-auto text-center px-2 sm:px-4 md:px-0">
              地域で長年愛されてきたお店、受け継がれてきた文化や行事、人と人のつながり。
              私たちは、こうしたかけがえのないものがデジタルの力によって可視化され、
              次の世代へと確かに届けられる社会を目指しています。
            </p>
          </motion.div>

          {/* Social Business Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-10 sm:mt-14 md:mt-20 lg:mt-28"
          >
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mx-auto mb-3 sm:mb-4 text-gray-300" strokeWidth={1} />
              <p className="text-[10px] sm:text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 sm:mb-3">Philosophy</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-black tracking-tight">
                ソーシャルビジネスという選択
              </h3>
            </div>
            <p className="text-sm sm:text-sm md:text-base text-gray-600 leading-relaxed font-light max-w-2xl mx-auto text-center px-2 sm:px-4 md:px-0">
              地域に根ざしたソーシャルビジネスとして活動することを選びました。
              一つひとつの地域課題に誠実に向き合い、ビジネスの力を通じて、
              持続可能で魅力あふれる地域社会の実現に貢献してまいります。
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-10 sm:mt-14 md:mt-20 lg:mt-28"
          >
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mx-auto mb-3 sm:mb-4 text-gray-300" strokeWidth={1} />
              <p className="text-[10px] sm:text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 sm:mb-3">Mission</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-black tracking-tight">
                私たちの使命
              </h3>
            </div>
            <p className="text-sm sm:text-sm md:text-base text-gray-600 leading-relaxed font-light max-w-2xl mx-auto text-center px-2 sm:px-4 md:px-0">
              インターネットを通じて地域のニーズとソリューションをつなぎ、
              社会課題をビジネスで解決していきます。
              アプリケーション開発とAI実装によって人と情報の流れを活性化し、
              持続可能で魅力あふれる地域社会の実現に貢献することを使命としています。
            </p>
          </motion.div>

          {/* AI-Native */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-10 sm:mt-14 md:mt-20 lg:mt-28"
          >
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <Cpu className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mx-auto mb-3 sm:mb-4 text-gray-300" strokeWidth={1} />
              <p className="text-[10px] sm:text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 sm:mb-3">AI-Native</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-black tracking-tight">
                AIネイティブな開発体制
              </h3>
            </div>
            <p className="text-sm sm:text-sm md:text-base text-gray-600 leading-relaxed font-light max-w-2xl mx-auto text-center px-2 sm:px-4 md:px-0">
              私たちは、自社プロダクトの設計から実装・運用までを生成AIとともに進めるAIネイティブな企業です。
              この開発スタイルで培った知見をもとに、大分県内の企業・自治体・教育機関の皆さまへ、
              生成AIの活用・業務のDX化・アプリケーション開発の受託開発もお引き受けしています。
              AIを活用したプロダクト開発のパートナーをお探しの際は、お気軽にご相談ください。
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-10 sm:mt-14 md:mt-20 lg:mt-28"
          >
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <p className="text-[10px] sm:text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 sm:mb-3">Values</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-black tracking-tight">
                私たちが大切にしていること
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
              {[
                { icon: Heart, title: "地域への誠実さ", desc: "地域の方々の声に耳を傾け、本当に必要とされるプロダクトだけを創ります。" },
                { icon: Shield, title: "信頼と品質", desc: "セキュリティとコンプライアンスを重視した開発体制。" },
                { icon: Globe, title: "持続可能性", desc: "短期的な利益ではなく、地域課題をビジネスで解決していきます。" }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-5 sm:p-6 md:p-8 lg:p-10 text-center hover:bg-gray-50 transition-colors group"
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mx-auto mb-3 sm:mb-4 text-gray-300 group-hover:text-black transition-colors" strokeWidth={1} />
                  <h4 className="text-sm sm:text-base md:text-lg font-serif font-medium mb-2 sm:mb-3 text-black">{item.title}</h4>
                  <p className="text-xs sm:text-xs md:text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// 4. CONTACT PAGE
const ContactPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-10 sm:pb-12 md:pb-16 lg:pb-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <SectionTitle
          title="Contact"
          subtitle="地域課題の解決に向けたアプリ開発・AI活用のご相談は、メールにてお問い合わせください。"
          align="center"
        />

        <div className="max-w-2xl mx-auto mt-6 sm:mt-8 md:mt-12 px-2 sm:px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 border border-gray-100 p-6 sm:p-8 md:p-12 text-center"
          >
            <Mail className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black mx-auto mb-3 sm:mb-4 md:mb-6" strokeWidth={1} />
            <h3 className="text-xl sm:text-xl md:text-2xl font-serif mb-2 sm:mb-3 md:mb-4">Email Us</h3>
            <p className="text-sm sm:text-sm md:text-base text-gray-500 font-light leading-relaxed mb-5 sm:mb-6 md:mb-8">
              お名前・ご所属・ご相談内容をメール本文にご記載のうえ、下記メールアドレスまでご連絡ください。担当者より返信いたします。
            </p>
            <div className="flex flex-col items-center gap-4 sm:gap-5">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-base sm:text-lg md:text-xl font-light text-black break-all border-b border-black pb-1 hover:opacity-60 transition-opacity"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="bg-black text-white px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 text-xs sm:text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                メールで問い合わせる <Mail size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// 5. PRIVACY POLICY PAGE
const PrivacyPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-10 sm:pb-12 md:pb-16 lg:pb-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <SectionTitle title="Privacy Policy" subtitle="個人情報保護方針" align="center" />

        <div className="max-w-3xl mx-auto mt-6 sm:mt-8 md:mt-12 space-y-8 sm:space-y-12 md:space-y-16 px-2 sm:px-4 md:px-0">
          {privacySections.map((section, index) => (
            <div key={index} className="border-l-2 border-gray-100 pl-3 sm:pl-4 md:pl-6 lg:pl-8">
              <h3 className="text-lg sm:text-lg md:text-xl font-serif font-medium mb-3 sm:mb-4 md:mb-6">{section.title}</h3>
              <p className="text-sm sm:text-sm md:text-base text-gray-600 leading-relaxed font-light mb-3 sm:mb-4 text-justify">
                {section.content}
              </p>
              {section.list && (
                <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                  {section.list.map((item, i) => (
                    <li key={i} className="text-gray-500 font-light text-xs sm:text-xs md:text-sm flex items-start gap-2 sm:gap-3">
                      <span className="w-1 h-1 bg-black rounded-full mt-1.5 sm:mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="text-center pt-6 sm:pt-8 md:pt-12 border-t border-gray-100">
            <p className="text-[10px] sm:text-[10px] md:text-xs text-gray-400 font-bold tracking-widest uppercase">2025年8月5日 制定</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

/* -------------------------------------------------------------------------- */
/* LAYOUT COMPONENTS                                                          */
/* -------------------------------------------------------------------------- */

const Sidebar = ({ currentPage, onNavigate }: { currentPage: string, onNavigate: (id: string) => void }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: PAGES.HOME, label: 'TOP', icon: Sparkles },
    { id: PAGES.COMPANY, label: 'COMPANY', icon: Building2 },
    { id: PAGES.NEWS, label: 'NEWS', icon: Calendar },
    { id: PAGES.CONTACT, label: 'CONTACT', icon: Mail },
    { id: PAGES.PRIVACY, label: 'PRIVACY', icon: FileText },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle */}
      <motion.button
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="fixed top-6 right-6 z-50 md:hidden bg-black text-white p-4 rounded-full shadow-2xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </motion.button>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ x: -100 }} animate={{ x: 0 }}
        className="hidden md:flex fixed left-0 top-0 h-screen w-20 lg:w-64 bg-white border-r border-gray-100 z-40 flex-col justify-between"
      >
        <div className="p-8 lg:p-10">
          <button onClick={() => handleNav(PAGES.HOME)} className="block group text-left">
            <h1 className="text-2xl font-serif font-bold tracking-tighter text-black group-hover:opacity-50 transition-opacity hidden lg:block">NOBODY</h1>
            <span className="lg:hidden font-serif font-bold text-xl">N.</span>
          </button>
          <p className="text-[9px] text-gray-400 tracking-widest uppercase mt-1 hidden lg:block font-light">株式会社Nobody</p>
        </div>

        <nav className="flex-1 flex flex-col justify-center space-y-1 px-4">
          {menuItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`group w-full flex items-center gap-4 px-4 py-4 transition-all duration-300 relative overflow-hidden text-left ${isActive ? 'text-black' : 'text-gray-400 hover:text-black'}`}
              >
                <span className={`absolute left-0 top-0 bottom-0 w-[2px] bg-black transition-transform duration-300 ${isActive ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-50'}`} />
                <item.icon className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-xs font-bold tracking-[0.2em] hidden lg:block uppercase">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-8 lg:p-10 border-t border-gray-50">
          <span className="text-[10px] text-gray-300 uppercase tracking-widest hidden lg:block">© 2025</span>
        </div>
      </motion.aside>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-40 md:hidden flex items-center justify-center backdrop-blur-sm"
          >
            <nav className="flex flex-col items-center space-y-8">
              <div className="mb-4">
                <p className="text-white font-serif text-3xl font-bold tracking-tighter text-center">NOBODY</p>
                <p className="text-gray-500 text-xs tracking-widest text-center mt-1">株式会社Nobody</p>
              </div>
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNav(item.id)}
                  className={`text-3xl font-light tracking-widest uppercase ${currentPage === item.id ? 'text-white font-bold' : 'text-gray-400'}`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = ({ onNavigate }: { onNavigate: (id: string) => void }) => (
  <footer className="bg-white pt-10 sm:pt-12 md:pt-16 lg:pt-24 pb-5 sm:pb-6 md:pb-8 border-t border-gray-100">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-8 sm:mb-12 md:mb-16 lg:mb-24">
        <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-serif font-bold tracking-tighter">NOBODY</h2>
            <p className="text-[10px] sm:text-xs text-gray-400 tracking-widest uppercase mt-1">株式会社Nobody</p>
          </div>
          <p className="text-sm sm:text-sm md:text-base text-gray-500 font-light max-w-md leading-relaxed">
            大切なものが後世も残り続けること。<br className="hidden sm:block" />
            地域に根ざしたソーシャルビジネスとして、<br className="hidden sm:block" />
            持続可能な地域社会の実現に貢献します。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div>
             <h4 className="text-[10px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-black mb-3 sm:mb-4 md:mb-6">Contact</h4>
             <a href={`mailto:${CONTACT_EMAIL}`} className="block text-xs sm:text-xs md:text-sm text-gray-500 hover:text-black transition-colors font-light break-all mb-1 sm:mb-2">{CONTACT_EMAIL}</a>
             <p className="text-xs sm:text-xs md:text-sm text-gray-500 font-light">Oita, Japan</p>
          </div>
          <div>
             <h4 className="text-[10px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-black mb-3 sm:mb-4 md:mb-6">Menu</h4>
             <ul className="space-y-2 sm:space-y-3 md:space-y-4">
               <li><button onClick={() => onNavigate(PAGES.COMPANY)} className="text-xs sm:text-xs md:text-sm text-gray-500 hover:text-black transition-colors font-light">Company</button></li>
               <li><button onClick={() => onNavigate(PAGES.NEWS)} className="text-xs sm:text-xs md:text-sm text-gray-500 hover:text-black transition-colors font-light">News</button></li>
               <li><button onClick={() => onNavigate(PAGES.PRIVACY)} className="text-xs sm:text-xs md:text-sm text-gray-500 hover:text-black transition-colors font-light">Privacy Policy</button></li>
             </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 pt-4 sm:pt-6 md:pt-8 flex justify-between items-center">
        <p className="text-[9px] sm:text-[9px] md:text-[10px] text-gray-400 tracking-widest uppercase">© 2025 Nobody Inc.</p>
      </div>
    </div>
  </footer>
);

/* -------------------------------------------------------------------------- */
/* MAIN APP COMPONENT                                                         */
/* -------------------------------------------------------------------------- */

export default function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans antialiased">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />

      <div className="md:ml-20 lg:ml-64 transition-all duration-500 ease-out overflow-x-hidden">
        <AnimatePresence mode="wait">
          <div key={currentPage}>
            {currentPage === PAGES.HOME && <HomePage navigateTo={setCurrentPage} />}
            {currentPage === PAGES.COMPANY && <CompanyPage />}
            {currentPage === PAGES.NEWS && <NewsPage />}
            {currentPage === PAGES.CONTACT && <ContactPage />}
            {currentPage === PAGES.PRIVACY && <PrivacyPage />}
          </div>
        </AnimatePresence>

        <Footer onNavigate={setCurrentPage} />
      </div>
    </main>
  );
}
