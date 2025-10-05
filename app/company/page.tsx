'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CompanyInfo } from '@/components/company-info';

export default function CompanyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <CompanyInfo />
      </div>
      <Footer />
    </main>
  );
}
