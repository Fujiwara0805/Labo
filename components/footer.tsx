'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, Lightbulb, BriefcaseBusiness } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-sub text-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ブランド情報 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Lightbulb className="w-8 h-8 text-custom-accent" />
              <span className="text-xl font-bold font-cinzel text-white">（貴社名） Solutions</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              私たちは、ビジネスに「ゲーム性」と「物語性」を融合させ、<br />
              顧客体験を革新する<span className="font-semibold text-custom-accent">リアルRPGソリューション</span>を提供します。<br />
              貴社の課題を解決し、新たな価値を創造するパートナーです。
            </p>
          </motion.div>

          {/* 提供サービス */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-custom-accent font-cinzel">提供サービス</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Webシステム受託開発</li>
              <li>モバイルアプリ開発</li>
              <li>ゲーミフィケーション導入支援</li>
              <li>UI/UXデザイン</li>
              <li>コンサルティング</li>
            </ul>
          </motion.div>

          {/* お問い合わせ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-custom-accent font-cinzel">お問い合わせ</h3>
            <div className="flex space-x-4">
              <motion.a
                href="mailto:contact@example.com"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-custom-accent/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5 text-gray-200" />
                <span className="sr-only">Email</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-custom-accent/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5 text-gray-200" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
            </div>
            <p className="text-gray-300 text-sm mt-4">
              ご質問やご相談がございましたら、<br />
              お気軽にご連絡ください。
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-8 pt-8 text-center"
        >
          <p className="text-gray-300 text-sm flex items-center justify-center">
            Created with passion for <BriefcaseBusiness className="w-4 h-4 mx-1 text-custom-accent" /> business innovation
          </p>
          <p className="text-gray-400 text-xs mt-2">
            © 2024 （貴社名） Solutions. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}