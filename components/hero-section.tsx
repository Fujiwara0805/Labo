'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, BriefcaseBusiness, Lightbulb } from 'lucide-react';

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
    <section ref={ref} className="relative h-screen overflow-hidden">
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
        <div className="absolute inset-0 hero-gradient" />
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
          <motion.div
            className="mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Lightbulb className="w-16 h-16 mx-auto text-custom-accent mb-4" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance font-cinzel">
            ビジネスに、
            <span className="block text-custom-accent">
              新たな冒険を。
            </span>
          </h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-balance opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            私たちは、貴社のビジネスに<span className="text-custom-accent font-semibold">「ゲーム性」</span>と<span className="text-custom-accent font-semibold">「物語性」</span>を融合させ、<br />
            顧客体験を革新する<span className="font-semibold">リアルRPGソリューション</span>を提供します。<br />
            日常を冒険に変え、ビジネスに新たな価値を創造しませんか？
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
              className="bg-sub hover:bg-sub/90 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 focus:scale-105 shadow-lg hover:shadow-xl"
            >
              <BriefcaseBusiness className="w-5 h-5 mr-2" />
              導入事例を見る
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 hover:bg-white/20 hover:border-white/50 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 focus:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5 mr-2" />
              お問い合わせ
            </Button>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <p className="text-sm md:text-base text-white/90 italic">
              「ビジネスに、人の心を掴む物語を。」<br />
              <span className="font-semibold text-custom-accent">デジタル体験で顧客との新たな関係性を構築します。</span>
            </p>
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
            <ArrowDown className="w-6 h-6 text-white/90 hover:text-white transition-colors" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}