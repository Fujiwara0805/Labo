'use client';

import { motion } from 'framer-motion';
import { Building2, Users, MapPin, Calendar } from 'lucide-react';

export function CompanyInfo() {
  const companyDetails = [
    {
      icon: Building2,
      label: '会社名',
      value: '株式会社Nobody'
    },
    {
      icon: Users,
      label: '事業内容',
      value: 'ITとAIの力で地域の未来を創造'
    },
    {
      icon: MapPin,
      label: '所在地',
      value: '大分県'
    },
    {
      icon: Calendar,
      label: '設立',
      value: '2025年'
    }
  ];

  return (
    <section id="company" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-main mb-6 font-cinzel">
            会社概要
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto text-balance">
            私たちは地域社会の課題解決に取り組み、
            持続可能で魅力あふれる未来の実現を目指しています。
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companyDetails.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-main/10 rounded-full flex items-center justify-center">
                      <detail.icon className="w-6 h-6 text-main" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">
                      {detail.label}
                    </h3>
                    <p className="text-lg font-semibold text-gray-900">
                      {detail.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <h3 className="text-2xl font-bold text-main mb-4 text-center">
                ミッション
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                インターネットを通じて地域のニーズとソリューションをつなぎ、
                住民・企業・自治体が協働できる&quot;場&quot;を提供します。
                モバイルアプリとイベント運営によって人と情報の流れを活性化し、
                持続可能で魅力あふれる地域社会の実現に貢献することを目指しています。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
