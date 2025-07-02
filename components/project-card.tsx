'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../app/types/project';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group"
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm">
        <div className="relative overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={400}
            height={240}
            className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Project actions overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-3">
              <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                <ExternalLink className="w-4 h-4 mr-2" />
                デモ
              </Button>
              <Button size="sm" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Github className="w-4 h-4 mr-2" />
                コード
              </Button>
            </div>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
              {project.category}
            </Badge>
          </div>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: techIndex * 0.05 }}
              >
                <Badge 
                  variant="outline" 
                  className="text-xs font-medium border-secondary/50 text-secondary hover:bg-secondary/10 transition-colors duration-200"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}