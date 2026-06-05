'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CONTACT_EMAIL = 'sobota@nobody-info.com';

export function ContactForm() {
  return (
    <section id="contact" className="py-24 section-overlay">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            ご相談
          </h2>
          <p className="text-xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            地域の課題解決に向けた
            <span className="font-semibold text-gray-900">アプリ開発</span>や
            <span className="font-semibold text-gray-900">AIの活用に向けた研修</span>
            など、お気軽にご相談ください。
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card className="luxury-border luxury-shadow-xl rounded-none bg-white">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl font-bold text-gray-900 tracking-tight">
                メールでのお問い合わせ
              </CardTitle>
              <p className="text-gray-600 text-lg mt-3 font-light">
                お名前・ご所属・ご相談内容をメール本文にご記載ください。
              </p>
            </CardHeader>
            <CardContent className="p-12 text-center">
              <Mail className="w-12 h-12 text-gray-900 mx-auto mb-6" strokeWidth={1.5} />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block text-xl md:text-2xl text-gray-900 break-all border-b border-gray-900 pb-1 hover:opacity-60 transition-opacity mb-8"
              >
                {CONTACT_EMAIL}
              </a>
              <Button
                asChild
                className="w-full py-4 text-xl font-medium transition-all duration-300 rounded-none luxury-hover luxury-shadow-lg bg-gray-900 hover:bg-gray-800 text-white"
              >
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  <Mail className="w-6 h-6 mr-2" />
                  メールで問い合わせる
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
