'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play } from 'lucide-react';
import { Project } from '../app/types/project';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState<Set<number>>(new Set());

  // 画像URLの安全性チェック
  const hasImages = project.imageUrls && project.imageUrls.length > 0;
  const currentImageUrl = hasImages ? project.imageUrls[currentImageIndex] : '';

  // フォールバック画像URL
  const fallbackImageUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuODl+ODreOCuOOCp+OCr+ODiOeUu+WDjzwvdGV4dD48L3N2Zz4=';

  // 2秒ごとに自動で画像を切り替える（手動操作は削除）
  useEffect(() => {
    if (!hasImages || project.imageUrls.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % project.imageUrls.length
      );
    }, 2000); // 5秒から2秒に変更

    return () => clearInterval(interval);
  }, [project.imageUrls, hasImages]); // isHoveredの依存関係を削除

  // インデックスが範囲外の場合は0にリセット
  useEffect(() => {
    if (hasImages && currentImageIndex >= project.imageUrls.length) {
      setCurrentImageIndex(0);
    }
  }, [project.imageUrls, currentImageIndex, hasImages]);

  // 画像エラーハンドリング
  const handleImageError = () => {
    console.warn(`Image failed to load: ${currentImageUrl}`);
    
    // フォールバック画像でもエラーが発生した場合は、これ以上エラーハンドリングしない
    if (isCurrentImageError) {
      return;
    }
    
    setImageError(prev => {
      const newSet = new Set(prev);
      newSet.add(currentImageIndex);
      return newSet;
    });
  };

  // 現在の画像がエラーかどうかチェック
  const isCurrentImageError = imageError.has(currentImageIndex);
  const displayImageUrl = isCurrentImageError ? fallbackImageUrl : currentImageUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group"
    >
      <Card className="overflow-hidden luxury-border luxury-shadow-lg hover:luxury-shadow-xl luxury-hover transition-all duration-300 bg-white">
        <div className="relative overflow-hidden h-64">
          {/* 画像カルーセル */}
          <div className="relative w-full h-full bg-gray-100">
            {hasImages && displayImageUrl ? (
              <Image
                src={displayImageUrl}
                alt={`${project.title} - ${currentImageIndex + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain bg-gray-100 transition-transform duration-300 group-hover:scale-105"
                onError={handleImageError}
                priority={index < 3}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            ) : (
              // 画像がない場合のフォールバック
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 rounded-none flex items-center justify-center">
                    <Play className="w-8 h-8 text-gray-500" />
                  </div>
                  <p className="text-base">画像準備中</p>
                </div>
              </div>
            )}
            
            {/* モノトーンオーバーレイ */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* プロジェクトアクションオーバーレイ */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <div className="flex space-x-3">
              <Button 
                size="sm" 
                className="bg-gray-900 hover:bg-gray-800 text-white luxury-shadow-lg luxury-border-thick border-white"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.projectUrl, '_blank');
                }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                詳細を見る
              </Button>
            </div>
          </div>
        </div>
        
        <CardContent className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 
              className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300 tracking-tight"
              dangerouslySetInnerHTML={{ __html: project.title }}
            />
            <Badge variant="outline" className="border-gray-300 text-gray-700 bg-gray-50 text-sm">
              {project.category}
            </Badge>
          </div>
          
          <p className="text-gray-600 mb-6 text-base leading-relaxed font-light">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <Badge 
                key={techIndex} 
                variant="secondary" 
                className="text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 border-gray-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}