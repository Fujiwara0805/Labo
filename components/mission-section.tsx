'use client';

import { motion } from 'framer-motion';

export function MissionSection() {
  return (
    <section className="py-24 section-overlay-80">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 tracking-tight">
              地域課題の解決に向けて
            </h2>
            <p className="text-xl md:text-4xl lg:text-5xl text-gray-700 leading-relaxed font-light">
              インターネットを通じて地域のニーズとソリューションをつなぎ、住民・企業・自治体が協働できる&quot;場&quot;を提供します。
              モバイルアプリとイベント運営によって人と情報の流れを活性化し、持続可能で魅力あふれる地域社会の実現に貢献することを目指しています。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
