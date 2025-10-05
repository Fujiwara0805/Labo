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
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={ref} className="relative h-screen overflow-hidden pt-16">
      {/* Background with parallax effect */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dz9trbwma/image/upload/v1751789185/RPG%E9%A2%A8%E5%A3%81%E7%B4%99_kcbxdt.png)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance font-cinzel">
            ITとAIの力で
            <span className="block text-custom-accent">
              地域の未来を創造する
            </span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto text-balance opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            インターネットを通じて地域のニーズとソリューションをつなぎ、
            住民・企業・自治体が協働できる<span className="text-custom-accent font-semibold">&quot;場&quot;</span>を提供。
            持続可能で魅力あふれる地域社会の実現に貢献します。
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-sub hover:bg-sub/90 text-white font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 focus:scale-105 shadow-lg hover:shadow-xl"
            >
              <BriefcaseBusiness className="w-6 h-6 mr-2" />
              プロダクトを見る
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 hover:bg-white/20 hover:border-white/50 text-white font-medium px-10 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 focus:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-6 h-6 mr-2" />
              お問い合わせ
            </Button>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
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
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={scrollToProjects}
          >
            <ArrowDown className="w-8 h-8 text-white/90 hover:text-white transition-colors" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}