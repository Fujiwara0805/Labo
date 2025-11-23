'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-white pt-24 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter">NOBODY</h2>
            <p className="text-gray-500 font-light max-w-md">
              ITとAIの力で地域の未来を創造し、<br/>
              持続可能で魅力あふれる地域社会の実現に貢献します。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Contact</h4>
               <div className="space-y-4">
                 <a href="mailto:contact@nobody.co.jp" className="block text-gray-500 hover:text-black transition-colors text-sm font-light">
                   contact@nobody.co.jp
                 </a>
                 <p className="text-gray-500 text-sm font-light">
                   Oita, Japan
                 </p>
               </div>
            </div>
            <div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Links</h4>
               <ul className="space-y-4">
                 <li><a href="#projects" className="text-gray-500 hover:text-black transition-colors text-sm font-light">Projects</a></li>
                 <li><a href="#mission" className="text-gray-500 hover:text-black transition-colors text-sm font-light">Mission</a></li>
                 <li><a href="#privacy" className="text-gray-500 hover:text-black transition-colors text-sm font-light">Privacy Policy</a></li>
               </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-400 tracking-widest uppercase">
            © {currentYear} Nobody Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-100 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
