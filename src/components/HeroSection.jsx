import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, BookOpen, User, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { soundFx } from '../utils/sound';
import TabletMockup from './TabletMockup';

export default function HeroSection({ onOpenStoryModal }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Koleksi Buku Nyata yang dapat digeser di Hero Section
  const heroBooks = [
    {
      id: "detektif-sampah",
      judul: "Detektif Cilik Pemilah Sampah.",
      subjudul: '"Petualangan Kecil Menyelamatkan Bumi"',
      penulis: "Karya Evi Noviyah",
      usia: "Usia 5-6 Tahun",
      sinopsis: "Pagi itu di taman sekolah, Aisyah, Bima, dan Nala melihat botol plastik, kertas, dan daun kering berserakan. Mereka menjadi detektif pemilah sampah untuk mengelompokkan sampah organik, kertas, dan plastik demi bumi yang asri dan bersih.",
      halaman: 16,
      cover: "/assets/books/cover-detektif-sampah.jpg",
      pillTheme: "Pilah Sampah & Peduli Bumi",
      cta: "Baca Buku Detektif Sekarang"
    },
    {
      id: "rara-dan-bimo",
      judul: "Rara dan Bimo Sedih Karena Asap Pekat.",
      subjudul: '"Cerita Tentang Udara Bersih & Hutan yang Harus Kita Jaga"',
      penulis: "Karya Ana Tri Rahayu, S.Pd.",
      usia: "Semua Usia",
      sinopsis: "Rara dan Bimo sangat suka bermain layang-layang di lapangan hijau yang asri. Suatu hari, langit biru mendadak dipenuhi kabut asap pekat kebakaran hutan. Cerita ini mengajarkan betapa berharganya pohon yang menghasilkan udara sejuk bagi bumi.",
      halaman: 19,
      cover: "/assets/books/cover-rara-bimo.jpg",
      pillTheme: "Hutan Lestari & Udara Bersih",
      cta: "Baca Buku Rara & Bimo Sekarang"
    },
    {
      id: "rahasia-pohon-jambu",
      judul: "Nail, Alifa, dan Rahasia Pohon Jambu.",
      subjudul: '"Bumi Sejuk, Sekolahku Nyaman"',
      penulis: "Karya Wilda Widya PB",
      usia: "Usia 4-7 Tahun",
      sinopsis: "Nail dan Alifa berteduh di bawah pohon jambu Jamaika bernama Jaja. Bersama Ibu Guru Wilda, mereka belajar rahasia daun yang memberi keteduhan, merawat tanaman sekolah, menjaga kebersihan Setu Bungur, dan menyayangi bumi.",
      halaman: 16,
      cover: "/assets/books/cover-rahasia-pohon-jambu.jpg",
      pillTheme: "Pohon Rindang & Sekolah Sejuk",
      cta: "Baca Buku Pohon Jambu Sekarang"
    },
    {
      id: "kali-kecil",
      judul: "Kali Kecil, Sahabat Besar.",
      subjudul: '"Petualangan Anak-Anak Menjaga Lingkungan"',
      penulis: "Karya Ria Oktari Pamungkas",
      usia: "Semua Usia",
      sinopsis: "Di dekat sekolah ada sebuah kali kecil tempat anak-anak bermain dan belajar. Suatu hari Bu Guru Ria bersama Raka, Naya, dan Bima melihat sampah berserakan. Mereka bergotong royong menjaga aliran air agar kembali bersih dan jernih.",
      halaman: 15,
      cover: "/assets/books/cover-kali-kecil.jpg",
      pillTheme: "Sungai Bersih & Sahabat Air",
      cta: "Baca Buku Kali Kecil Sekarang"
    }
  ];

  const currentBook = heroBooks[currentIndex];

  const handleNext = () => {
    soundFx.playPageTurn();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % heroBooks.length);
  };

  const handlePrev = () => {
    soundFx.playPageTurn();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + heroBooks.length) % heroBooks.length);
  };

  const handleSelectBook = (idx) => {
    if (idx === currentIndex) return;
    soundFx.playPageTurn();
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] pt-32 pb-24 px-6 flex items-center justify-center overflow-hidden bg-[#f4f9f4]"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 25% 40%, rgba(129, 199, 132, 0.22) 0%, transparent 55%),
          radial-gradient(ellipse at 75% 20%, rgba(200, 230, 201, 0.35) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 90%, rgba(232, 245, 233, 0.6) 0%, transparent 60%)
        `,
      }}
    >
      {/* GENTLE FLOATING NATURE PARTICLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-gradient-to-b from-[#e8f5e9]/80 via-[#c8e6c9]/20 to-transparent rounded-full blur-3xl"></div>

        {/* Floating Tiny Leaf 1 */}
        <motion.div
          className="absolute text-[#2e7d32]/25"
          style={{ top: '25%', left: '8%' }}
          animate={{
            y: [-15, 20, -15],
            x: [-10, 15, -10],
            rotate: [0, 25, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
          </svg>
        </motion.div>

        {/* Floating Tiny Leaf 2 */}
        <motion.div
          className="absolute text-[#81c784]/30"
          style={{ top: '65%', right: '12%' }}
          animate={{
            y: [15, -20, 15],
            x: [10, -15, 10],
            rotate: [15, -15, 15],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
        
        {/* LEFT COLUMN: REALISTIC TABLET MOCKUP WITH SLIDER CONTROLS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="md:col-span-6 flex flex-col items-center md:items-end"
        >
          <div className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[530px] relative">
            
            {/* 3D Tilt Tablet Frame */}
            <motion.div
              style={{
                rotateX: mousePos.y * -10,
                rotateY: mousePos.x * 10,
                transformStyle: 'preserve-3d',
              }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            >
              <TabletMockup
                coverImage={currentBook.cover}
                title={currentBook.judul}
                author={currentBook.penulis}
                pageCount={currentBook.halaman}
                onClick={() => {
                  soundFx.playPageTurn();
                  onOpenStoryModal(currentBook.id);
                }}
              />
            </motion.div>

            {/* CAROUSEL CONTROLS: Geser Kiri (<) dan Geser Kanan (>) */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-5 lg:-left-6 z-30">
              <button
                type="button"
                onClick={handlePrev}
                title="Geser ke buku sebelumnya"
                aria-label="Buku sebelumnya"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-[#2e7d32] border-2 border-[#81c784]/60 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm group"
              >
                <ChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-5 lg:-right-6 z-30">
              <button
                type="button"
                onClick={handleNext}
                title="Geser ke buku berikutnya"
                aria-label="Buku berikutnya"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-[#2e7d32] border-2 border-[#81c784]/60 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm group"
              >
                <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* PAGINATION DOTS & BOOK COUNTER DI BAWAH TABLET */}
            <div className="flex flex-col items-center justify-center gap-1.5 mt-5">
              <div className="flex items-center gap-2">
                {heroBooks.map((b, idx) => (
                  <button
                    key={b.id}
                    onClick={() => handleSelectBook(idx)}
                    title={`Pilih buku: ${b.judul}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? 'w-8 bg-[#2e7d32] shadow-sm'
                        : 'w-2.5 bg-[#c8e6c9] hover:bg-[#81c784]'
                    }`}
                  />
                ))}
              </div>

              <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#2e7d32]/90 bg-white/70 px-3 py-0.5 rounded-full border border-[#c8e6c9]/60">
                <span>Buku {currentIndex + 1} dari {heroBooks.length}</span>
                <span>•</span>
                <span className="text-[#1b5e20]">{currentBook.halaman} Halaman</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT COLUMN: BOOK TITLE, AUTHOR, SYNOPSIS, & CTA DENGAN TRANSISI HALUS */}
        <div className="md:col-span-6 text-center md:text-left relative pl-0 md:pl-2">
          
          {/* FLYING SUNBIRD */}
          <div className="relative inline-block w-full">
            <motion.div
              className="absolute -top-12 md:-top-16 right-4 sm:right-16 md:right-8 pointer-events-none"
              animate={{
                y: [0, -8, 0],
                x: [0, 6, 0],
                rotate: [0, -3, 2, 0],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg
                className="absolute -left-12 top-4 w-16 h-8 text-[#2e7d32]/35 overflow-visible"
                viewBox="0 0 60 30"
                fill="none"
              >
                <path
                  d="M0 25 C20 28, 40 10, 58 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeDasharray="3 4"
                  strokeLinecap="round"
                />
              </svg>

              <img
                src="/assets/echo/echo-bird.png"
                alt="Eco Green sunbird flying"
                className="w-14 sm:w-16 h-auto drop-shadow-sm select-none"
              />
            </motion.div>

            {/* DYNAMIC TEXT SWITCHING WITH ANIMATEPRESENCE */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBook.id}
                initial={{ opacity: 0, y: direction * 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: direction * -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {/* BADGE AUTHOR & THEME */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2e7d32]/10 border border-[#2e7d32]/25 text-[#2e7d32] text-xs font-bold uppercase tracking-widest mb-3">
                  <span className="flex items-center gap-1">
                    <User size={13} /> {currentBook.penulis}
                  </span>
                  <span>•</span>
                  <span>{currentBook.usia}</span>
                </div>

                {/* ACCURATE HEADLINE MATCHING THE BOOK */}
                <h1 className="font-storybook text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0e2b17] leading-[1.2] tracking-tight">
                  {currentBook.judul}
                </h1>

                {/* SUBTITLE */}
                <p className="mt-3 text-base sm:text-lg font-semibold text-[#2e7d32] italic">
                  {currentBook.subjudul}
                </p>

                {/* SINOPSIS */}
                <p className="mt-3 text-base sm:text-lg text-[#335e3d] font-normal max-w-xl leading-relaxed">
                  {currentBook.sinopsis}
                </p>

                {/* KEY BENEFIT PILLS */}
                <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-xs text-[#1b4d24] font-semibold">
                  <span className="px-3 py-1 rounded-full bg-white/80 border border-[#c8e6c9] shadow-sm flex items-center gap-1.5">
                    <CheckCircle size={13} className="text-[#2e7d32]" /> {currentBook.halaman} Halaman Asli
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/80 border border-[#c8e6c9] shadow-sm flex items-center gap-1.5">
                    <CheckCircle size={13} className="text-[#2e7d32]" /> Efek Geser 3D Interaktif
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/80 border border-[#c8e6c9] shadow-sm flex items-center gap-1.5">
                    <CheckCircle size={13} className="text-[#2e7d32]" /> {currentBook.pillTheme}
                  </span>
                </div>

                {/* CTA BUTTONS */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      soundFx.playChime(660);
                      soundFx.playPageTurn();
                      onOpenStoryModal(currentBook.id);
                    }}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white text-base font-semibold tracking-wide shadow-md shadow-[#2e7d32]/25 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <span>{currentBook.cta}</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </motion.button>

                  {/* QUICK NEXT BUTTON */}
                  <button
                    type="button"
                    onClick={handleNext}
                    className="text-xs font-semibold text-[#2e7d32] hover:text-[#1b5e20] underline underline-offset-4 flex items-center gap-1 transition-colors"
                  >
                    <span>Lihat buku berikutnya (Buku {((currentIndex + 1) % heroBooks.length) + 1} dari {heroBooks.length})</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
