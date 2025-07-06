'use client';

import { motion } from 'framer-motion';
import { projects } from '../app/data/projects';
import { ProjectCard } from './project-card';
import { Award, BriefcaseBusiness, Lightbulb, TrendingUp } from 'lucide-react';

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
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <Award className="w-8 h-8 text-main" />
              <BriefcaseBusiness className="w-10 h-10 text-sub" />
              <TrendingUp className="w-8 h-8 text-main" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main mb-6 font-cinzel">
            私たちの導入事例
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto text-balance">
            私たちは、現実社会に<span className="text-main font-semibold">「ゲーム性」</span>と<span className="text-main font-semibold">「物語性」</span>を重ねることで、<br />
            ビジネス課題を解決し、顧客エンゲージメントを最大化する<br />
            革新的なデジタルソリューションを提供しています。
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
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-main mb-4 font-cinzel">
              ビジネスに「リアルRPG」の力を
            </h3>
            <p className="text-gray-700 mb-6 text-balance">
              お客様のビジネス課題を深く理解し、最適な技術と「物語性」を融合させたソリューションを開発します。<br />
              ゲーミフィケーションを通じてユーザーの行動変容を促し、<br />
              ビジネスの成長と新たな顧客体験の創出を強力にサポートします。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}