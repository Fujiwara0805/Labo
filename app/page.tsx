'use client';

import { Sidebar } from '@/components/sidebar';
import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { MissionSection } from '@/components/mission-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Sidebar />
      <div className="md:ml-64">
        <HeroSection />
        <ProjectsSection />
        <MissionSection />
        <Footer />
      </div>
    </main>
  );
}