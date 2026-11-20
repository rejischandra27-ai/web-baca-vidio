import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Sparkles, Smartphone, Tablet, ChevronRight, Check } from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function NightDevicesMockup({ onOpenBook }) {
  // 4 Buku Cerita Anak Nyata untuk Mockup Interaktif
  const books = [
    {
      id: "rara-dan-bimo",
      judul: "Rara dan Bimo Sedih Karena Asap Pekat",
      penulis: "Ana Tri Rahayu, S.Pd.",
      tag: "Hutan & Udara Bersih",
      tabletCover: "/assets/books/cover-rara-bimo.jpg",
      phonePage: "/assets/books/rara-bimo/page_2.jpg",
      halaman: 19
    },
    {
      id: "detektif-sampah",
      judul: "Detektif Cilik Pemilah Sampah",
      penulis: "Evi Noviyah",
      tag: "Pilah Sampah",
      tabletCover: "/assets/books/cover-detektif-sampah.jpg",
      phonePage: "/assets/books/detektif-sampah/page_2.jpg",
      halaman: 16
    },
    {
      id: "rahasia-pohon-jambu",
      judul: "Nail, Alifa, & Rahasia Pohon Jambu",
      penulis: "Wilda Widya PB",
      tag: "Pohon & Sekolah Asri",
      tabletCover: "/assets/books/cover-rahasia-pohon-jambu.jpg",
      phonePage: "/assets/books/rahasia-pohon-jambu/page_2.jpg",
      halaman: 16
    },
    {
      id: "kali-kecil",
      judul: "Kali Kecil, Sahabat Besar",
      penulis: "Ria Oktari Pamungkas",
      tag: "Sungai Bersih",
      tabletCover: "/assets/books/cover-kali-kecil.jpg",
      phonePage: "/assets/books/kali-kecil/page_2.jpg",
      halaman: 15
    },
    {
      id: "baim-dan-rani",
      judul: "Baim dan Rani",
      penulis: "Effi Tugiarti, S.Pd",
      tag: "Ikan & Sungai",
      tabletCover: "/assets/books/cover-baim-dan-rani.jpg",
      phonePage: "/assets/books/baim-dan-rani/page_3.jpg",
      halaman: 19
    },
    {
      id: "jejak-kaki-kiki",
      judul: "Jejak Kaki Kiki di Tepi Pantai",
      penulis: "Hartati",
      tag: "Pantai & Laut",
      tabletCover: "/assets/books/cover-jejak-kaki-kiki.jpg",
      phonePage: "/assets/books/jejak-kaki-kiki/page_3.jpg",
      halaman: 19
    },
    {
      id: "bumi-kepanasan",
      judul: "Bumi Sedang Kepanasan",
      penulis: "Yanike Martinawaty, S.Pd",
      tag: "Bumi Sejuk",
      tabletCover: "/assets/books/cover-bumi-kepanasan.jpg",
      phonePage: "/assets/books/bumi-kepanasan/page_2.jpg",
      halaman: 14
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeBook = books[activeIndex];

  const handleSelectBook = (index) => {
    soundFx.playPageTurn();
    setActiveIndex(index);
  };

  const handleDeviceClick = () => {
    soundFx.playChime(660);
    soundFx.playPageTurn();
    if (onOpenBook) {
      onOpenBook(activeBook.id);
    }
  };

  return (
    <div className="relative flex flex-col items-center select-none w-full max-w-[540px]">
      {/* AMBIENT GLOW BACKDROP */}
      <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-tr from-[#81c784]/25 via-[#2e7d32]/35 to-transparent rounded-[50px] blur-3xl pointer-events-none"></div>

      {/* QUICK SWITCHER MINI PILLS */}
      <div className="relative z-20 mb-4 flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/15 backdrop-blur-md shadow-lg">
        <span className="text-[11px] font-bold text-[#81c784] flex items-center gap-1 pl-1 pr-1">
          <Sparkles size={13} className="animate-pulse" /> Pratinjau Buku:
        </span>
        {books.map((b, idx) => (
          <button
            key={b.id}
            onClick={() => handleSelectBook(idx)}
            className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all duration-200 cursor-pointer ${
              idx === activeIndex
                ? 'bg-[#2e7d32] text-white font-semibold shadow-md shadow-[#2e7d32]/40 scale-105'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            {b.tag}
          </button>
        ))}
      </div>

      {/* DEVICES CONTAINER */}
      <div
        onClick={handleDeviceClick}
        className="relative cursor-pointer group w-full flex items-center justify-center"
        title={`Klik untuk membaca digital: ${activeBook.judul}`}
      >
        {/* 1. TABLET MOCKUP (LANDSCAPE / HORIZONTAL CANVAS) */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative w-full aspect-[16/11] rounded-[24px] sm:rounded-[34px] bg-[#1a291f] p-3 sm:p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border-2 border-white/20 backdrop-blur-sm"
        >
          {/* Outer Bezel Rim */}
          <div className="absolute inset-0 rounded-[24px] sm:rounded-[34px] ring-1 ring-inset ring-white/20 pointer-events-none"></div>

          {/* Tablet Front Camera */}
          <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black border border-white/20 flex items-center justify-center pointer-events-none z-20">
            <div className="w-0.5 h-0.5 rounded-full bg-emerald-500"></div>
          </div>

          {/* Tablet Screen Glass */}
          <div className="relative w-full h-full rounded-[16px] sm:rounded-[22px] overflow-hidden bg-black shadow-inner flex flex-col">
            {/* Top Bar inside Tablet */}
            <div className="relative z-10 h-6 px-3 sm:px-4 bg-black/60 backdrop-blur-sm flex items-center justify-between text-[10px] text-white/90 border-b border-white/10">
              <span className="flex items-center gap-1 font-semibold text-emerald-300">
                <Tablet size={11} /> Eco Tablet Reader
              </span>
              <span className="truncate max-w-[170px] text-white/80 font-medium">
                {activeBook.judul}
              </span>
              <span className="text-[9px] text-white/70">100% 🔋</span>
            </div>

            {/* Screen Content: Animated Book Cover */}
            <div className="relative flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeBook.tabletCover}
                  src={activeBook.tabletCover}
                  alt={activeBook.judul}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none block"
                />
              </AnimatePresence>

              {/* Diagonal Screen Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none"></div>

              {/* Hover Read Badge Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px] p-4">
                <div className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white text-xs sm:text-sm font-bold shadow-xl flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                  <BookOpen size={16} /> Buka & Baca Sekarang ({activeBook.halaman} Hal)
                </div>
              </div>
            </div>

            {/* Bottom Home Indicator */}
            <div className="h-2 bg-black/70 flex items-center justify-center">
              <div className="w-16 h-0.5 rounded-full bg-white/40"></div>
            </div>
          </div>
        </motion.div>

        {/* 2. SMARTPHONE MOCKUP (PORTRAIT, OVERLAPPING AT BOTTOM RIGHT) */}
        <motion.div
          whileHover={{ y: -4, scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="absolute -right-3 -bottom-5 sm:-right-5 sm:-bottom-7 w-28 sm:w-36 md:w-40 aspect-[9/18.5] rounded-[22px] sm:rounded-[28px] bg-[#121c15] p-1.5 sm:p-2 shadow-[0_30px_70px_rgba(0,0,0,0.85)] border-2 border-white/25 z-30"
        >
          {/* Phone Dynamic Island / Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-2.5 sm:h-3 rounded-full bg-black border border-white/20 z-30 flex items-center justify-end px-1 pointer-events-none">
            <div className="w-1 h-1 rounded-full bg-emerald-500/80"></div>
          </div>

          {/* Phone Screen Glass */}
          <div className="relative w-full h-full rounded-[16px] sm:rounded-[20px] overflow-hidden bg-black flex flex-col shadow-inner">
            {/* Phone Screen Header */}
            <div className="relative z-10 pt-4 pb-1 px-2 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between text-[8px] sm:text-[9px] text-white/80">
              <span className="font-bold flex items-center gap-0.5 text-emerald-300">
                <Smartphone size={9} /> Mobile
              </span>
              <span>Hal 2</span>
            </div>

            {/* Screen Content: Page Preview */}
            <div className="relative flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeBook.phonePage}
                  src={activeBook.phonePage}
                  alt={`Halaman ${activeBook.judul}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-full object-cover object-top select-none block"
                />
              </AnimatePresence>

              {/* Diagonal Light Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>

              {/* Floating Eco Badge on Phone */}
              <div className="absolute bottom-3 left-1.5 right-1.5 bg-[#0d2818]/90 backdrop-blur-md rounded-lg p-1 border border-emerald-500/30 text-center shadow-lg pointer-events-none">
                <p className="text-[7px] sm:text-[8px] font-bold text-emerald-300 uppercase tracking-tight">
                  100% Paperless
                </p>
                <p className="text-[6.5px] sm:text-[7.5px] text-white/90 line-clamp-1">
                  {activeBook.penulis}
                </p>
              </div>
            </div>

            {/* Bottom Home Bar */}
            <div className="h-1.5 bg-black flex items-center justify-center">
              <div className="w-8 h-0.5 rounded-full bg-white/50"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CAPTION BENEATH DEVICES */}
      <div className="mt-8 text-center text-xs text-[#a5d6a7]/90 flex items-center gap-2">
        <Sparkles size={13} className="text-[#81c784]" />
        <span>Tersedia untuk Tablet, Laptop, dan Smartphone • Bebas Kertas</span>
      </div>
    </div>
  );
}
