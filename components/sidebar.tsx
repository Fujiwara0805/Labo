'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Building2, Sparkles, MapPin, Users, Mail, Menu, X, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [hash, setHash] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHash(window.location.hash);
      const handleHashChange = () => {
        setHash(window.location.hash);
      };
      window.addEventListener('hashchange', handleHashChange);
      return () => window.removeEventListener('hashchange', handleHashChange);
    }
  }, []);

  const menuItems = [
    { label: 'TOP', href: '/#hero', icon: Sparkles, isPage: false },
    { label: 'PROJECTS', href: '/#projects', icon: Building2, isPage: false },
    { label: 'MISSION', href: '/#mission', icon: MapPin, isPage: false },
    { label: 'COMPANY', href: '/#footer', icon: Users, isPage: false },
  ];

  const handleNavigation = (href: string, isPage: boolean) => {
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      if (pathname !== '/') {
        router.push(href);
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
    } else {
      router.push(href);
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (item: { href: string }) => pathname === '/' && hash === item.href.substring(1);

  const handleMenuClick = (href: string, isPage: boolean) => {
    handleNavigation(href, isPage);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button - Floating Luxury Style */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-6 right-6 z-50 md:hidden bg-black text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </motion.button>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex fixed left-0 top-0 h-screen w-20 lg:w-64 bg-white border-r border-gray-100 z-40 flex-col justify-between"
      >
        {/* Logo Area */}
        <div className="p-8 lg:p-10 flex justify-center lg:justify-start">
          <Link href="/" className="block group">
            <h1 className="text-2xl font-serif font-bold tracking-tighter text-black group-hover:opacity-50 transition-opacity hidden lg:block">
              NOBODY
            </h1>
            <span className="lg:hidden font-serif font-bold text-xl">N.</span>
          </Link>
        </div>

        {/* Vertical Navigation */}
        <nav className="flex-1 flex flex-col justify-center space-y-2 px-4">
          {menuItems.map((item, index) => {
            const active = isActive(item);
            const Icon = item.icon;
            return (
              <motion.button
                key={item.label}
                whileHover={{ x: 5 }}
                onClick={() => handleNavigation(item.href, item.isPage)}
                className={`
                  group w-full flex items-center gap-4 px-4 py-4 rounded-none transition-all duration-300 relative overflow-hidden
                  ${active ? 'text-black' : 'text-gray-400 hover:text-black'}
                `}
              >
                <span className={`absolute left-0 top-0 bottom-0 w-[2px] bg-black transition-transform duration-300 ${active ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-50'}`} />
                <Icon className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-xs font-bold tracking-[0.2em] hidden lg:block uppercase">
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </nav>

        {/* Footer Area */}
        <div className="p-8 lg:p-10 border-t border-gray-50 flex justify-center lg:justify-start">
          <div className="flex flex-col gap-1">
             <span className="text-[10px] text-gray-300 uppercase tracking-widest hidden lg:block">© 2025</span>
             <Link href="#contact" className="lg:flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:underline hidden">
               Contact <ArrowRight size={10} />
             </Link>
             <Mail className="lg:hidden text-gray-400 hover:text-black transition-colors cursor-pointer" size={20} />
          </div>
        </div>
      </motion.aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-40 md:hidden flex items-center justify-center backdrop-blur-sm"
          >
            <nav className="flex flex-col items-center space-y-8 p-6 w-full max-w-sm">
              <div className="text-white font-serif text-3xl font-bold mb-8">NOBODY</div>
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleMenuClick(item.href, item.isPage)}
                  className="text-2xl text-gray-400 hover:text-white font-light tracking-widest uppercase"
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
}
