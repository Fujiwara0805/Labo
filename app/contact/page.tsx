'use client';

import { motion } from 'framer-motion';
import { Sidebar } from '@/components/sidebar';
import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Sidebar />
      <div className="md:ml-64">
        <div className="pt-24 md:pt-48">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </main>
  );
}

