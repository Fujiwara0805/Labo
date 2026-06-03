import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { newsItems } from '../data/news';

export const metadata: Metadata = {
  title: 'お知らせ | 株式会社Nobody',
  description: '株式会社Nobodyのサービスリリース、機能追加、主要アップデートに関するお知らせ一覧です。'
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-5 sm:py-6 flex items-center justify-between gap-4">
          <Link href="/" className="font-serif text-xl sm:text-2xl font-bold tracking-tighter">
            NOBODY
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft size={14} />
            TOPへ戻る
          </Link>
        </div>
      </header>

      <section className="pt-14 sm:pt-16 md:pt-24 pb-16 sm:pb-20 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14 md:mb-20">
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-3 sm:mb-4">
              News
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight mb-4 sm:mb-6">
              お知らせ
            </h1>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
              サービスリリース、機能追加、主要アップデートに関する情報を掲載しています。
            </p>
          </div>

          <div className="max-w-4xl mx-auto border-y border-gray-100">
            {newsItems.map((item) => (
              <article
                key={`${item.date}-${item.title}`}
                className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 sm:gap-6 md:gap-10 py-7 sm:py-8 md:py-10 border-b border-gray-100 last:border-b-0"
              >
                <div className="space-y-2">
                  <time className="block text-xs font-bold tracking-[0.2em] text-gray-400">{item.date}</time>
                  <span className="inline-block text-[10px] font-bold tracking-widest text-gray-500 border border-gray-200 px-2 py-1">
                    {item.category}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium leading-tight mb-3 sm:mb-4">
                    {item.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 border-b border-gray-900 pb-1 hover:gap-3 transition-all"
                    >
                      関連ページ <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
