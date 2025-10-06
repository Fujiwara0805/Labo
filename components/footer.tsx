'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Building2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const footerLinks = [
    { label: 'プロダクト', href: '/#projects' },
    // { label: 'ブログ', href: '/blog' }, // 未実装のため非表示
    { label: '会社概要', href: '/company' },
    { label: 'プライバシーポリシー', href: '/privacy' },
    { label: 'お問い合わせ', href: '/#contact' },
  ];

  const handleNavigation = (href: string) => {
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
    } else {
      router.push(href);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <Image
                src="https://res.cloudinary.com/dz9trbwma/image/upload/v1759666819/%E4%BC%9A%E7%A4%BE%E3%83%AD%E3%82%B4%E3%82%99_-_%E7%B7%A8%E9%9B%86%E6%B8%88%E3%81%BF_neleep.png"
                alt="株式会社Nobody ロゴ"
                width={690}
                height={228}
                className="h-24 md:h-48 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed font-light">
              ITとAIの力で地域の未来を創造し、
              持続可能で魅力あふれる地域社会の実現に貢献します。
            </p>
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin className="w-5 h-5" />
              <span className="font-light">大分県</span>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 tracking-tight">サイトマップ</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-light luxury-hover"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 tracking-tight">お問い合わせ</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5" />
                <span className="font-light">お問い合わせフォームをご利用ください</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Building2 className="w-5 h-5" />
                <span className="font-light">株式会社Nobody</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 font-light">
            © {currentYear} 株式会社Nobody. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}