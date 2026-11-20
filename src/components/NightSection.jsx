import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, ShieldCheck, Heart } from 'lucide-react';
import { soundFx } from '../utils/sound';
import NightDevicesMockup from './NightDevicesMockup';

export default function NightSection({ onOpenStoryModal }) {
  // Fireflies and stars
  const fireflies = [
    { top: '15%', left: '8%', size: 4, delay: 0 },
    { top: '28%', left: '22%', size: 5, delay: 1.2 },
    { top: '18%', left: '38%', size: 3.5, delay: 0.7 },
    { top: '75%', left: '12%', size: 4.5, delay: 2.1 },
    { top: '65%', left: '30%', size: 3, delay: 1.5 },
    { top: '22%', left: '76%', size: 4, delay: 0.4 },
    { top: '82%', left: '84%', size: 5, delay: 1.8 },
    { top: '35%', left: '90%', size: 3.5, delay: 2.5 },
  ];

  return (
    <section
      id="tentang"
      className="relative py-28 px-6 overflow-hidden bg-[#0d2818] text-white"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 85% 35%, rgba(129, 199, 132, 0.2) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 70%, rgba(5, 20, 10, 0.6) 0%, transparent 70%)
        `,
      }}
    >
      {/* TORN PAPER TOP EDGE (Entering Night Forest) */}
      <div className="absolute top-0 left-0 right-0 h-10 md:h-14 overflow-hidden pointer-events-none select-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full text-[#f2f8f1] fill-current"
        >
          <path d="M0,0 L1200,0 L1200,50 C1060,80 940,30 800,60 C660,90 500,40 360,75 C220,110 100,50 0,70 Z" />
        </svg>
      </div>

      {/* GLOWING FIREFLIES */}
      {fireflies.map((f, idx) => (
        <span
          key={idx}
          className="absolute rounded-full bg-[#81c784] shadow-md shadow-[#81c784] pointer-events-none animate-firefly"
          style={{
            top: f.top,
            left: f.left,
            width: `${f.size}px`,
            height: `${f.size}px`,
            animationDelay: `${f.delay}s`,
          }}
        />
      ))}

      {/* SHOOTING STAR */}
      <motion.div
        className="absolute w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#c8e6c9] to-transparent pointer-events-none"
        style={{ top: '20%', left: '40%', rotate: '-35deg' }}
        animate={{
          x: [-120, 240],
          y: [-80, 160],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 5,
          ease: 'easeOut',
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-10 my-6">
        
        {/* LEFT COLUMN: ABOUT & ECO MISSION */}
        <motion.div
          initial={{ opacity: 0.9, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="md:col-span-6 text-center md:text-left relative"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-3 text-[#a5d6a7]">
            <Sparkles size={18} className="animate-spin" style={{ animationDuration: '8s' }} />
            <span className="text-xs uppercase font-bold tracking-widest text-[#a5d6a7]">
              Tentang Kami & Misi Lingkungan
            </span>
          </div>

          <h2 className="font-storybook text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight drop-shadow-sm">
            Membaca Digital, <br className="hidden sm:inline" />
            Lestarikan Hutan.
          </h2>

          <p className="mt-4 text-lg text-[#c8e6c9] font-normal max-w-md leading-relaxed">
            Platform <b>Echo Green</b> mengusung misi literasi hijau tanpa kertas (<i>paperless</i>), menghadirkan buku cerita dan vidio animasi bernilai ekologis yang mendidik anak-anak mencintai alam sejak dini.
          </p>

          {/* 3 Pillars */}
          <div className="mt-6 grid grid-cols-2 gap-3 max-w-md text-left">
            <div className="p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[#81c784] font-bold text-sm mb-1">
                <Leaf size={16} /> 100% Paperless
              </div>
              <p className="text-xs text-white/80">Hemat jutaan lembar kertas dengan membaca digital.</p>
            </div>

            <div className="p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[#81c784] font-bold text-sm mb-1">
                <Heart size={16} /> Karakter Peduli
              </div>
              <p className="text-xs text-white/80">Menanamkan cinta tanaman, satwa, dan lingkungan hidup.</p>
            </div>
          </div>

          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                soundFx.playChime(660);
                soundFx.playPageTurn();
                onOpenStoryModal();
              }}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white text-base font-semibold tracking-wide shadow-md shadow-black/25 hover:shadow-lg transition-all duration-300 group cursor-pointer border border-[#81c784]/40"
            >
              <span>Mulai Petualangan Hijau</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: INTERACTIVE DUAL TABLET & SMARTPHONE ECO READER */}
        <motion.div
          initial={{ opacity: 0.9, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="md:col-span-6 flex justify-center md:justify-end"
        >
          <NightDevicesMockup onOpenBook={(bookId) => onOpenStoryModal(bookId || "rara-dan-bimo")} />
        </motion.div>

      </div>

      {/* TORN PAPER BOTTOM EDGE (Returning to Eco Paper Footer) */}
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-14 overflow-hidden pointer-events-none select-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full text-[#f2f8f1] fill-current"
        >
          <path d="M0,120 L1200,120 L1200,70 C1070,40 930,95 790,65 C650,35 510,85 370,55 C230,25 110,80 0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
