'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../app/types/project';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState<Set<number>>(new Set());

  // 画像URLの安全性チェック
  const hasImages = project.imageUrls && project.imageUrls.length > 0;
  const currentImageUrl = hasImages ? project.imageUrls[currentImageIndex] : '';

  // フォールバック画像URL（Base64エンコードされた1x1透明画像）
  const fallbackImageUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuODl+ODreOCuOOCp+OCr+ODiOeUu+WDjzwvdGV4dD48L3N2Zz4=';

  // 5秒ごとに自動で画像を切り替える
  useEffect(() => {
    if (!hasImages || project.imageUrls.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % project.imageUrls.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [project.imageUrls, hasImages, isHovered]);

  // インデックスが範囲外の場合は0にリセット
  useEffect(() => {
    if (hasImages && currentImageIndex >= project.imageUrls.length) {
      setCurrentImageIndex(0);
    }
  }, [project.imageUrls, currentImageIndex, hasImages]);

  const nextImage = () => {
    if (!hasImages) return;
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % project.imageUrls.length
    );
  };

  const prevImage = () => {
    if (!hasImages) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.imageUrls.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    if (!hasImages) return;
    setCurrentImageIndex(index);
  };

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm">
        <div className="relative overflow-hidden h-60">
          {/* 画像カルーセル */}
          <div className="relative w-full h-full bg-gray-100">
            {hasImages && displayImageUrl ? (
              <Image
                src={displayImageUrl}
                alt={`${project.title} - ${currentImageIndex + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain bg-gray-50 transition-transform duration-300 group-hover:scale-105"
                onError={handleImageError}
                priority={index < 3}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            ) : (
              // 画像がない場合のフォールバック
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📷</span>
                  </div>
                  <p className="text-sm">画像を読み込み中...</p>
                </div>
              </div>
            )}
            
            {/* グラデーションオーバーレイ */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* 複数画像がある場合のナビゲーション */}
            {hasImages && project.imageUrls.length > 1 && (
              <>
                {/* 前/次ボタン（ホバー時のみ表示） */}
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                {/* インジケーター */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {project.imageUrls.map((_, imgIndex) => (
                    <button
                      key={imgIndex}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        imgIndex === currentImageIndex
                          ? 'bg-white shadow-lg'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToImage(imgIndex);
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          
          {/* プロジェクトアクションオーバーレイ */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <div className="flex space-x-3">
              <Button 
                size="sm" 
                variant="secondary" 
                className="bg-white/90 hover:bg-white shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.projectUrl, '_blank');
                }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                デモ
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.projectUrl, '_blank');
                }}
              >
                <Github className="w-4 h-4 mr-2" />
                コード
              </Button>
            </div>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 
              className="text-xl font-bold text-primary group-hover:text-custom-accent transition-colors duration-300"
              dangerouslySetInnerHTML={{ __html: project.title }}
            />
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