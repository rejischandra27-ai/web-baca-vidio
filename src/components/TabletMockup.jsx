import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export default function TabletMockup({
  coverImage = "/assets/books/cover-detektif-sampah.jpg",
  title = "Detektif Cilik Pemilah Sampah",
  author = "Evi Noviyah",
  pageCount = 16,
  onClick,
  className = ""
}) {
  return (
    <div
      onClick={onClick}
      className={`relative group cursor-pointer select-none ${className}`}
      title={`Klik untuk membaca ${title}`}
    >
      {/* 1. Luminous Ambient Glow Behind Tablet */}
      <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-tr from-[#81c784]/35 via-[#c8e6c9]/40 to-transparent rounded-[48px] blur-3xl pointer-events-none group-hover:scale-105 transition-transform duration-500"></div>

      {/* 2. Soft Ambient Drop Shadow Beneath Tablet Frame */}
      <div className="absolute -bottom-6 left-8 right-8 h-8 bg-[#0e2b17]/40 rounded-[100%] blur-xl transform scale-y-60 pointer-events-none"></div>

      {/* 3. Outer Tablet Chassis (Realistic Space Slate Finish) */}
      <div className="relative rounded-[32px] sm:rounded-[42px] bg-gradient-to-b from-[#253228] via-[#1a231d] to-[#121914] p-3 sm:p-4 md:p-4.5 shadow-[0_25px_60px_-15px_rgba(14,43,23,0.45),0_12px_28px_-5px_rgba(0,0,0,0.5)] border border-white/20 transition-all duration-300 group-hover:shadow-[0_30px_70px_-12px_rgba(46,125,50,0.5)]">
        
        {/* Metal Bezel Perimeter Highlight */}
        <div className="absolute inset-0 rounded-[32px] sm:rounded-[42px] pointer-events-none ring-1 ring-inset ring-white/25"></div>

        {/* Top Bezel: Camera Lens & Ambient Light Sensor */}
        <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none z-20">
          <div className="w-2.5 h-2.5 rounded-full bg-[#080d09] border border-white/20 flex items-center justify-center shadow-inner">
            <div className="w-1 h-1 rounded-full bg-[#1b4332]"></div>
          </div>
          <div className="w-1 h-1 rounded-full bg-[#16271c]"></div>
        </div>

        {/* Tablet Screen Glass */}
        <div className="relative aspect-[16/11.3] w-full rounded-[20px] sm:rounded-[26px] overflow-hidden bg-black shadow-inner">
          
          {/* Animated High-Resolution Book Cover on Screen */}
          <AnimatePresence mode="wait">
            <motion.img
              key={coverImage}
              src={coverImage}
              alt={title}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="w-full h-full object-cover object-center select-none block transition-transform duration-500 group-hover:scale-[1.015]"
              loading="eager"
            />
          </AnimatePresence>

          {/* Screen Diagonal Glare Sheen Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/12 to-white/5 pointer-events-none"></div>

          {/* Mini Eco OS Status Bar inside Screen */}
          <div className="absolute top-0 inset-x-0 h-6 px-3.5 sm:px-5 flex items-center justify-between text-[10px] font-semibold text-white/95 bg-gradient-to-b from-black/60 via-black/25 to-transparent pointer-events-none z-10">
            <span>09:41</span>
            <span className="flex items-center gap-1 text-[#81c784] font-medium text-[9px] sm:text-[10px] truncate max-w-[180px]">
              🌱 Eco Reader • {author}
            </span>
            <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px]">
              <span>100%</span>
              <div className="w-4 h-2 rounded-[2px] border border-white/80 p-[1px] flex items-center">
                <div className="w-full h-full bg-[#81c784] rounded-[1px]"></div>
              </div>
            </div>
          </div>

          {/* Interactive Hover Action Overlay */}
          <div className="absolute inset-0 bg-[#0e2b17]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2.5 backdrop-blur-[2px] z-10 p-4 text-center">
            <div className="px-5 py-2.5 rounded-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white text-xs sm:text-sm font-bold tracking-wide shadow-xl flex items-center gap-2 transform group-hover:scale-105 transition-transform duration-200">
              <BookOpen size={16} /> Buka & Baca ({pageCount} Halaman)
            </div>
            <span className="text-[11px] text-white/95 font-medium bg-black/60 px-3 py-1 rounded-full border border-white/20">
              ✨ Dilengkapi Efek Balik Kertas 3D (Page Curl)
            </span>
          </div>

          {/* Tablet Home Indicator Bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1 rounded-full bg-white/70 pointer-events-none z-10 shadow-sm"></div>
        </div>
      </div>
    </div>
  );
}
