'use client';

import { motion } from 'framer-motion';

export function PrivacyPolicy() {
  const sections = [
    {
      title: '個人情報の定義',
      content: '個人情報とは、利用者個人に関する情報であって、当該情報を構成する氏名、メールアドレス、生年月日その他の記述等により当該利用者を識別できるものとします。'
    },
    {
      title: '個人情報の利用目的',
      content: '株式会社Nobody（および株式会社Nobodyが提供するサービス全般）は、個人情報を以下の目的の範囲内のみで利用いたします。また、ご本人の同意がある場合及び個人情報保護法その他の個人情報に関する法令により認められる場合を除いては、この範囲を超えて個人情報を利用することはありません。',
      list: [
        '株式会社Nobody（および株式会社Nobodyが提供するサービス全般）における利用者へのサービスの提供と個人認証',
        'サービス向上等を目的としたアンケート、キャンペーンの実施',
        'メールによる各種情報の無料提供、お問い合わせへの返答'
      ]
    },
    {
      title: '個人情報の第三者提供',
      content: '株式会社Nobody（および株式会社Nobodyが提供するサービス全般）は、以下の場合を除いては個人情報を第三者に提供をすることはありません。',
      list: [
        '本サービスのサービス向上の目的で個人情報を集計及び分析等する場合',
        '前号の集計及び分析等により得られたものを、個人を識別又は特定できない態様にて提携先等第三者に開示又は提供する場合',
        '個人情報の第三者への提供に当たりあらかじめ本人の同意を得ている場合',
        '法令に基づく場合',
        '人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき'
      ]
    },
    {
      title: '個人情報の安全管理',
      content: '株式会社Nobody（および株式会社Nobodyが提供するサービス全般）は、個人情報の漏洩、滅失又はき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。'
    },
    {
      title: 'Cookie（クッキー）の使用',
      content: '株式会社Nobody（および株式会社Nobodyが提供するサービス全般）は、利用者の皆様によりよいサービスを提供するため、Cookie（クッキー）を使用することがありますが、これにより個人を特定できる情報の収集を行えるものではなく、お客様のプライバシーを侵害することがございません。また、Cookie（クッキー）の受け入れを希望されない場合は、ブラウザの設定で変更することができます。'
    },
    {
      title: '継続的改善',
      content: '株式会社Nobody（および株式会社Nobodyが提供するサービス全般）は、個人情報の取り扱いに関する運用状況を適宜見直し、継続的な改善に努めるものとし、必要に応じて、プライバシーポリシーを変更することがあります。'
    }
  ];

  return (
    <section id="privacy" className="py-24 section-overlay">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            プライバシーポリシー
          </h2>
          <p className="text-lg md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            株式会社Nobodyは、個人情報の重要性を認識し、
            個人情報保護に関する法令を遵守し、適切な取り扱いを行います。
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white luxury-shadow-xl luxury-border rounded-none p-12 md:p-16"
          >
            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
                    {section.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4 font-light text-base">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="space-y-3 ml-6">
                      {section.list.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 leading-relaxed font-light relative text-base">
                          <span className="absolute -left-6 top-2 w-2 h-2 bg-gray-400 rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-gray-200 text-center"
            >
              <p className="text-gray-500 font-light">
                2025年1月1日 制定
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
