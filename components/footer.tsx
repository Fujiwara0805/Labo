'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, Users } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-sub text-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 会社情報 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-custom-accent font-cinzel">担当者</h3>
            <span className="text-2xl font-bold font-cinzel text-white">藤原　泰樹</span>
            <p className="text-gray-300 text-lg leading-relaxed">
              地域課題の解決に向けた
              <span className="font-semibold text-custom-accent">アプリ開発</span>や<span className="font-semibold text-custom-accent">AIの活用に向けた研修</span>など、お気軽にご相談ください。共に地域の未来を創造しましょう。
            </p>
          </motion.div>

          {/* 事業内容 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-custom-accent font-cinzel">事業内容</h3>
            <ul className="text-gray-300 text-lg space-y-2">
              <li>地域課題解決型マッチングプラットフォーム</li>
              <li>アプリケーション開発</li>
              <li>AI活用に向けた研修</li>
              <li>地域活性化イベント企画・運営</li>
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
            <h3 className="text-xl font-semibold text-custom-accent font-cinzel">お問い合わせ</h3>
            <p className="text-gray-300 text-base mt-4">
              お問い合わせフォームよりご連絡ください
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
          <p className="text-gray-300 text-base flex items-center justify-center">
            Created with passion for <Users className="w-5 h-5 mx-1 text-custom-accent" /> regional innovation
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © 2025 チームNobody. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}