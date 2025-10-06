'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'ITとAIの力で地域の未来を創造する取り組みについて',
      excerpt: 'インターネットを通じて地域のニーズとソリューションをつなぎ、住民・企業・自治体が協働できる"場"を提供する私たちの取り組みをご紹介します。',
      date: '2025年1月15日',
      author: '株式会社Nobody',
      category: '事業紹介'
    },
    {
      id: 2,
      title: '地域課題解決に向けたアプリ開発の重要性',
      excerpt: 'モバイルアプリとイベント運営によって人と情報の流れを活性化し、持続可能で魅力あふれる地域社会の実現に向けた具体的なアプローチについて解説します。',
      date: '2025年1月10日',
      author: '株式会社Nobody',
      category: '技術解説'
    },
    {
      id: 3,
      title: 'AI活用に向けた研修プログラムの開発',
      excerpt: '地域企業や自治体向けのAI活用研修プログラムの開発について、その背景と具体的な内容をご紹介します。',
      date: '2025年1月5日',
      author: '株式会社Nobody',
      category: '教育・研修'
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
        <div className="pt-24 md:pt-48">
        <section className="py-24 section-overlay">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                ブログ
              </h1>
              <p className="text-lg md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                私たちの取り組みや技術について、
                最新の情報をお届けします。
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white luxury-shadow-xl luxury-border rounded-none p-8 md:p-12 luxury-hover cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-none">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-4 text-gray-500 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-6 font-light text-base">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-gray-900 font-medium luxury-hover">
                      <span className="mr-2">続きを読む</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.article>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center mt-16"
              >
                <p className="text-gray-500 font-light text-base">
                  更なる記事は準備中です。お楽しみに。
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
