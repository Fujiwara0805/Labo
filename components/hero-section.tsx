'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

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
            backgroundImage: 'url(https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            冒険的な
            <span className="block text-white">
              開発者
            </span>
          </h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto text-balance opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            自然からインスピレーションを得て、革新的なWebソリューションを創造します。
            探求心と技術力で、デジタルの森を切り拓きます。
          </motion.p>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button variant="outline" size="icon" className="bg-white/10 border-white/30 hover:bg-sub/20 hover:border-sub/50 transition-all duration-300">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="outline" size="icon" className="bg-white/10 border-white/30 hover:bg-sub/20 hover:border-sub/50 transition-all duration-300">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon" className="bg-white/10 border-white/30 hover:bg-sub/20 hover:border-sub/50 transition-all duration-300">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-sub hover:bg-sub/90 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 focus:scale-105 shadow-lg hover:shadow-xl"
            >
              プロジェクトを見る
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
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={scrollToProjects}
          >
            <ArrowDown className="w-6 h-6 text-white/70 hover:text-white transition-colors" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}