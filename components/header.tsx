'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { label: 'プロダクト', href: '/#projects', isExternal: false },
    // { label: 'ブログ', href: '/blog', isExternal: false }, // 未実装のため非表示
    { label: '会社概要', href: '/company', isExternal: false },
    { label: 'プライバシーポリシー', href: '/privacy', isExternal: false },
    { label: 'お問い合わせ', href: '/#contact', isExternal: false },
  ];

  const handleNavigation = (href: string, isExternal: boolean) => {
    if (isExternal || href.startsWith('/#')) {
      if (href.startsWith('/#')) {
        // ホームページ内のアンカーリンク
        if (window.location.pathname !== '/') {
          router.push(href);
        } else {
          const element = document.querySelector(href.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    } else {
      router.push(href);
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 luxury-backdrop border-b border-gray-200"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-48">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer"
            onClick={scrollToTop}
          >
            <Image
              src="https://res.cloudinary.com/dz9trbwma/image/upload/v1770858047/Gemini_Generated_Image_h26lvkh26lvkh26l_p6fuop.png"
              alt="株式会社Nobody ロゴ"
              width={600}
              height={198}
              className="h-20 md:h-44 w-auto object-contain"
              priority
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -1 }}
                onClick={() => handleNavigation(item.href, item.isExternal)}
                className="text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium text-sm tracking-wide uppercase letter-spacing-wider luxury-hover"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors luxury-hover"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200 luxury-glass"
            >
              <div className="py-6 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => handleNavigation(item.href, item.isExternal)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 font-medium rounded-lg luxury-hover"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
