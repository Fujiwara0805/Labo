'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Building2, ExternalLink, Sparkles, MapPin, Users, Mail, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [hash, setHash] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setHash(window.location.hash);
    const handleHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const menuItems = [
    { 
      label: '会社概要', 
      href: '/company', 
      icon: Building2,
      isExternal: false,
      isPage: true
    },
    { 
      label: 'トクドク', 
      href: '/#tokudoku', 
      icon: Sparkles,
      isExternal: false,
      isPage: false
    },
    { 
      label: 'NIKENME+', 
      href: '/#nikenme', 
      icon: MapPin,
      isExternal: false,
      isPage: false
    },
    { 
      label: 'ざせきくん', 
      href: '/#zaseki', 
      icon: Users,
      isExternal: false,
      isPage: false
    },
  ];

  const handleNavigation = (href: string, isPage: boolean) => {
    if (isPage) {
      router.push(href);
      return;
    }

    // ページ内遷移
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      if (pathname !== '/') {
        router.push(href);
        // ページ遷移後にスクロール
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const isActive = (item: typeof menuItems[0]) => {
    if (item.isPage) {
      return pathname === item.href;
    } else {
      return pathname === '/' && hash === item.href.substring(1);
    }
  };

  const handleMenuClick = (href: string, isPage: boolean) => {
    handleNavigation(href, isPage);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-3 rounded-none shadow-lg luxury-hover"
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="メニューを開く"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-gray-900" />
        ) : (
          <Menu className="w-6 h-6 text-gray-900" />
        )}
      </motion.button>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 z-50 luxury-shadow-lg"
      >
        <div className="flex flex-col h-full w-full">
          {/* Logo */}
          <motion.div
            className="p-6 border-b border-gray-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="block">
              <h1 className="text-2xl font-bold text-gray-900">Nobody</h1>
            </Link>
          </motion.div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const active = isActive(item);

              return (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavigation(item.href, item.isPage)}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 rounded-none
                    transition-all duration-200 text-left
                    ${active 
                      ? 'bg-gray-900 text-white luxury-shadow-md' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5" />
                    <span className="font-medium text-sm tracking-wide">{item.label}</span>
                  </div>
                  {item.isPage && (
                    <ExternalLink className="w-4 h-4" />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <Link 
              href="/contact"
              className="block w-full text-center px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200 rounded-none luxury-hover text-sm font-medium"
            >
              <Mail className="w-4 h-4 inline mr-2" />
              お問い合わせ
            </Link>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.aside
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 z-50 luxury-shadow-lg md:hidden"
            >
              <div className="flex flex-col h-full w-full">
                {/* Logo */}
                <div className="p-6 border-b border-gray-200">
                  <Link href="/" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                    <h1 className="text-2xl font-bold text-gray-900">Nobody</h1>
                  </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    const active = isActive(item);

                    return (
                      <motion.button
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        onClick={() => handleMenuClick(item.href, item.isPage)}
                        className={`
                          w-full flex items-center justify-between px-4 py-3 rounded-none
                          transition-all duration-200 text-left
                          ${active 
                            ? 'bg-gray-900 text-white luxury-shadow-md' 
                            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                          }
                        `}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5" />
                          <span className="font-medium text-sm tracking-wide">{item.label}</span>
                        </div>
                        {item.isPage && (
                          <ExternalLink className="w-4 h-4" />
                        )}
                      </motion.button>
                    );
                  })}
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200">
                  <Link 
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200 rounded-none luxury-hover text-sm font-medium"
                  >
                    <Mail className="w-4 h-4 inline mr-2" />
                    お問い合わせ
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

