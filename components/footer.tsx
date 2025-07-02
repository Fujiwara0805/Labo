'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Mountain, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Mountain className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold">Adventure Dev</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              自然からインスピレーションを得て、革新的なWebソリューションを創造する開発者です。
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-accent">ナビゲーション</h3>
            <nav className="flex flex-col space-y-2">
              <a 
                href="#projects" 
                className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
              >
                プロジェクト
              </a>
              <a 
                href="#contact" 
                className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
              >
                お問い合わせ
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
              >
                GitHub
              </a>
            </nav>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-accent">つながりましょう</h3>
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                size="icon"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-8 pt-8 text-center"
        >
          <p className="text-primary-foreground/60 flex items-center justify-center space-x-1">
            <span>© {currentYear} Adventure Portfolio. Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>and lots of ☕</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}