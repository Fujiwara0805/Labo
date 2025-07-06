'use client';

import { motion } from 'framer-motion';
import { projects } from '../app/data/projects';
import { ProjectCard } from './project-card';
import { Users, Smartphone, Calendar } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        > 
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-main mb-6 font-cinzel">
            プロダクト事例
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto text-balance">
            これまで開発してきたプロダクトの事例をご紹介します。
            興味のある方は是非お気軽に下記のお問い合わせフォームからご連絡ください。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-main mb-4 font-cinzel">
              地域課題の解決に向けて
            </h3>
            <p className="text-gray-700 mb-6 text-lg text-balance">
              インターネットを通じて地域のニーズとソリューションをつなぎ、住民・企業・自治体が協働できる&quot;場&quot;を提供します。
              モバイルアプリとイベント運営によって人と情報の流れを活性化し、持続可能で魅力あふれる地域社会の実現に貢献することを目指しています。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}