'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowDown, 
  ExternalLink
} from 'lucide-react';
import { Sidebar } from '@/components/sidebar';
import { Footer } from '@/components/footer';

/* -------------------------------------------------------------------------- */
/* MOCK DATA                                 */
/* -------------------------------------------------------------------------- */

const projects = [
  {
    id: "tokudoku",
    title: "TOKUDOKU",
    subtitle: "Event Platform",
    description: "最新のイベント情報を提供するプラットフォーム。地域の情報が集約され、効果的な告知と集客を支援します。洗練されたUIで、探す体験そのものを喜びに変えます。",
    features: ["イベント情報の集約", "興味関心マッチング", "主催者分析"],
    technologies: ["Next.js", "TypeScript", "Supabase"],
    url: "https://tokudoku.com",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "nikenme",
    title: "NIKENME+",
    subtitle: "Vacancy Visualization",
    description: "「夜の続きは、ここから」。地図上でリアルタイムに飲食店の空席状況を表示。二次会難民を救済し、都市のナイトエコノミーを活性化させるプレミアムサービス。",
    features: ["リアルタイム空席確認", "スマート予約", "加盟店管理"],
    technologies: ["React Native", "Firebase", "Google Maps"],
    url: "https://nikenme.jp",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "zaseki",
    title: "ZASEKI-KUN",
    subtitle: "Seat Management",
    description: "店舗の座席管理をDX。混雑時の案内を極限までスムーズにし、顧客体験と店舗運営の質を向上させます。待つ時間を、期待する時間へ。",
    features: ["座席可視化", "待機列管理", "CRM連携"],
    technologies: ["Vue.js", "AWS", "WebSocket"],
    url: "https://zaseki-kun.com",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
  }
];

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENTS                               */
/* -------------------------------------------------------------------------- */

// HeroSection Component
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={ref} className="relative h-screen overflow-hidden pt-24 md:pt-48 section-overlay">
      {/* 透明背景オーバーレイ */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <div className="w-full h-full bg-white/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-gray-900 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            ITとAIの力で
            <span className="block text-gray-700 mt-2">
              地域の未来を創造する
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto text-gray-600 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            インターネットを通じて地域のニーズとソリューションをつなぎ、
            住民・企業・自治体が協働できる<span className="font-semibold text-gray-900">&quot;場&quot;</span>を提供。
            持続可能で魅力あふれる地域社会の実現に貢献します。
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer luxury-hover"
            onClick={scrollToProjects}
          >
            <ArrowDown className="w-6 h-6 text-gray-600 hover:text-gray-900 transition-colors" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ProjectsSection Component
function ProjectsSection() {
  return (
    <section id="projects" className="py-24 section-overlay-75">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        > 
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            プロダクト
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            地域の課題解決に向けて開発したプロダクトをご紹介します。
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-white luxury-shadow-xl luxury-border rounded-none p-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{project.title}</h3>
          <a 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <span className="text-sm font-medium">公式サイト</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-lg">
            {project.description}
          </p>
          
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">主な特徴</h4>
            <ul className="space-y-2 list-disc list-inside">
              {project.features.map((feature: string, i: number) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">技術スタック</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, i: number) => (
                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-none">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// MissionSection Component
function MissionSection() {
  return (
    <section className="py-24 section-overlay-80">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 tracking-tight">
              地域課題の解決に向けて
            </h2>
            <p className="text-xl md:text-4xl lg:text-5xl text-gray-700 leading-relaxed font-light">
              インターネットを通じて地域のニーズとソリューションをつなぎ、住民・企業・自治体が協働できる&quot;場&quot;を提供します。
              モバイルアプリとイベント運営によって人と情報の流れを活性化し、持続可能で魅力あふれる地域社会の実現に貢献することを目指しています。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* -------------------------------------------------------------------------- */
/* MAIN LAYOUT                                */
/* -------------------------------------------------------------------------- */

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans antialiased">
      <Sidebar />
      <div className="md:ml-20 lg:ml-64 transition-all duration-500 ease-out">
        <HeroSection />
        <ProjectsSection />
        <MissionSection />
        <Footer />
      </div>
    </main>
  );
}