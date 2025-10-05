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
    <section id="company" className="py-24 section-overlay">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            会社概要
          </h2>
          <p className="text-lg md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            私たちは地域社会の課題解決に取り組み、
            持続可能で魅力あふれる未来の実現を目指しています。
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white luxury-shadow-xl luxury-border rounded-none p-12 md:p-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {companyDetails.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6 luxury-hover"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gray-900 rounded-none flex items-center justify-center">
                      <detail.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
                      {detail.label}
                    </h3>
                    <p className="text-xl font-semibold text-gray-900 leading-tight">
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
              className="mt-16 pt-12 border-t border-gray-200"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center tracking-tight">
                ミッション
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto font-light">
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
