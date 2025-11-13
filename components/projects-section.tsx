'use client';

import { motion } from 'framer-motion';
import { projects } from '../app/data/projects';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function ProjectsSection() {
  return (
    <>
      <section id="projects" className="py-24 section-overlay-75">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          > 
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              プロダクト
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              地域の課題解決に向けて開発したプロダクトをご紹介します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* トクドク詳細セクション */}
      <section id="tokudoku" className="py-24 section-overlay-75 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="luxury-border luxury-shadow-xl rounded-none bg-white">
              <CardContent className="p-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">トクドク</h3>
                  <Link 
                    href="https://tokudoku.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <span className="text-sm font-medium">公式サイト</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    トクドクは、最新のイベント情報を提供するプラットフォームです。ユーザーは多彩なイベント情報を閲覧し、興味のあるイベントを見つけることができます。また、イベント主催者は自身のイベントを掲載し、広く告知することが可能です。
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">主な特徴</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>最新のイベント情報を幅広く提供</li>
                      <li>ユーザーが興味のあるイベントを簡単に発見</li>
                      <li>イベント主催者が自身のイベントを掲載可能</li>
                      <li>イベントの告知と集客を効率的にサポート</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">技術スタック</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[0].technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-none">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* NIKENME+詳細セクション */}
      <section id="nikenme" className="py-24 section-overlay-75">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="luxury-border luxury-shadow-xl rounded-none bg-white">
              <CardContent className="p-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">NIKENME+（ニケンメプラス）</h3>
                  <Link 
                    href="https://nikenme.jp/landing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <span className="text-sm font-medium">公式サイト</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    「夜の続きは、ここから」をコンセプトに、大分の二軒目探しをサポートするサービスです。
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">主な特徴</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>地図上でリアルタイムに空席状況を確認</li>
                      <li>今すぐ入れるお店がすぐ分かる</li>
                      <li>加盟店が更新する最新の空席情報をチェック</li>
                      <li>現在地からの距離を表示</li>
                      <li>ログイン不要で今すぐ利用可能</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">使い方</h4>
                    <ol className="space-y-2 list-decimal list-inside">
                      <li>マップで空席を確認：地図上のアイコンで空席状況を確認</li>
                      <li>店舗の詳細を確認：店舗カードをクリックすると詳細情報が表示</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">技術スタック</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[1].technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-none">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ざせきくん詳細セクション */}
      <section id="zaseki" className="py-24 section-overlay-75 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="luxury-border luxury-shadow-xl rounded-none bg-white">
              <CardContent className="p-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">ざせきくん</h3>
                  <Link 
                    href="https://www.zaseki-kun.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <span className="text-sm font-medium">公式サイト</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    座席管理を効率化し、お客様にスムーズな来店体験を提供するサービスです。
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">主な特徴</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>リアルタイムでの座席状況の把握</li>
                      <li>効率的な座席管理システム</li>
                      <li>お客様の待ち時間を削減</li>
                      <li>店舗運営の最適化をサポート</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">技術スタック</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[2].technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-none">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}