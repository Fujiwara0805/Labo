'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, BriefcaseBusiness, MapPin } from 'lucide-react';

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={ref} className="relative h-screen overflow-hidden pt-48">
      {/* 透明背景オーバーレイ */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <div className="w-full h-full bg-white/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          
          <motion.h1 
            className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-gray-900 tracking-tight leading-tight"
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
            className="text-lg md:text-3xl lg:text-4xl mb-12 max-w-4xl mx-auto text-gray-600 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            インターネットを通じて地域のニーズとソリューションをつなぎ、
            住民・企業・自治体が協働できる<span className="font-semibold text-gray-900">&quot;場&quot;</span>を提供。
            持続可能で魅力あふれる地域社会の実現に貢献します。
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-12 py-4 text-lg rounded-none luxury-hover luxury-shadow-lg border-0"
            >
              <BriefcaseBusiness className="w-5 h-5 mr-3" />
              プロダクトを見る
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-medium px-12 py-4 text-lg rounded-none luxury-hover luxury-shadow-lg"
            >
              <Mail className="w-5 h-5 mr-3" />
              お問い合わせ
            </Button>
          </motion.div>
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