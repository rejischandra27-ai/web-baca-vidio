import React from 'react';
import { motion } from 'framer-motion';
import { Play, Music, Sparkles, CheckCircle } from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function ActionSection({ onOpenVideoModal }) {
  return (
    <section
      id="vidio"
      className="relative py-28 px-6 overflow-hidden bg-[#f4f9f4] text-center"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 50% 30%, rgba(200, 230, 201, 0.35) 0%, transparent 65%),
          radial-gradient(ellipse at 80% 80%, rgba(129, 199, 132, 0.15) 0%, transparent 55%)
        `,
      }}
    >
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* SECTION HEADLINE & SUBTITLE */}
        <motion.div
          initial={{ opacity: 0.9, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#2e7d32]/10 border border-[#2e7d32]/20 text-xs font-bold uppercase tracking-wider text-[#2e7d32] mb-3">
            <Music size={14} /> Vidio Animasi Lagu Anak
          </div>

          <h2 className="font-storybook text-4xl sm:text-5xl font-bold text-[#0e2b17] tracking-tight">
            Jangan Buang Sampah di Pantai.
          </h2>

          <p className="mt-2 text-base sm:text-lg font-semibold text-[#2e7d32] italic">
            "Karya Hartati • Jaga Pantai & Laut untuk Bumi"
          </p>

          <p className="mt-3 text-base sm:text-lg text-[#335e3d] font-normal max-w-xl mx-auto leading-relaxed">
            Lagu animasi ceria yang mengajak anak-anak bernyanyi sambil belajar menjaga kebersihan pantai, memilah sampah plastik ke tempatnya, serta melindungi kehidupan ikan dan penyu di laut.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 text-xs text-[#1b4d24] font-semibold">
            <span className="px-3 py-1 rounded-full bg-white/80 border border-[#c8e6c9] shadow-sm flex items-center gap-1.5">
              <CheckCircle size={13} className="text-[#2e7d32]" /> Animasi 2D Full HD
            </span>
            <span className="px-3 py-1 rounded-full bg-white/80 border border-[#c8e6c9] shadow-sm flex items-center gap-1.5">
              <CheckCircle size={13} className="text-[#2e7d32]" /> Edukasi Karakter Ramah Lingkungan
            </span>
            <span className="px-3 py-1 rounded-full bg-white/80 border border-[#c8e6c9] shadow-sm flex items-center gap-1.5">
              <CheckCircle size={13} className="text-[#2e7d32]" /> Lagu & Musik Ceria
            </span>
          </div>
        </motion.div>

        {/* REALISTIC TABLET MOCKUP SHOWING THE REAL ANIMATION POSTER */}
        <motion.div
          initial={{ opacity: 0.9, scale: 0.98, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="mt-10 relative cursor-pointer group w-full max-w-[580px]"
          onClick={() => {
            soundFx.playChime(700);
            onOpenVideoModal();
          }}
        >
          {/* Natural Soft Sunbeam Backdrop Glow */}
          <div className="absolute -inset-6 bg-[#2e7d32]/20 rounded-[44px] blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Ambient Floor Shadow */}
          <div className="absolute -bottom-6 left-10 right-10 h-8 bg-[#0e2b17]/35 rounded-[100%] blur-xl transform scale-y-60"></div>

          {/* Tablet Chassis */}
          <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#243026] via-[#1a231d] to-[#121814] p-3 sm:p-4 shadow-[0_25px_60px_-15px_rgba(14,43,23,0.45),0_12px_28px_-5px_rgba(0,0,0,0.4)] border border-white/20 transition-transform duration-300 group-hover:scale-[1.015]">
            
            {/* Tablet Camera */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none z-20">
              <div className="w-2.5 h-2.5 rounded-full bg-[#080d09] border border-white/20 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-[#1b4332]"></div>
              </div>
            </div>

            {/* Screen Glass */}
            <div className="relative aspect-video w-full rounded-[20px] sm:rounded-[26px] overflow-hidden bg-black shadow-inner">
              <img
                src="/assets/videos/video-thumb-title.jpg"
                alt="Vidio Animasi Jangan Buang Sampah di Pantai"
                className="w-full h-full object-cover object-center select-none block transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Diagonal Glass Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>

              {/* INTERACTIVE PULSING PLAY BUTTON OVERLAY */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/10 transition-colors">
                <div className="relative flex items-center justify-center">
                  {/* Expanding Ripple Ring */}
                  <span className="absolute w-20 h-20 rounded-full bg-[#2e7d32]/40 animate-ping"></span>
                  <span className="absolute w-24 h-24 rounded-full bg-[#2e7d32]/25 animate-pulse"></span>

                  {/* Central Play Button */}
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#2e7d32] text-white flex items-center justify-center shadow-2xl group-hover:bg-[#1b5e20] group-hover:scale-110 transition-all duration-300 border-2 border-white/40">
                    <Play size={28} className="ml-1 fill-white" />
                  </div>
                </div>
              </div>

              {/* Status Overlay Badge */}
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#81c784] animate-pulse"></span>
                <span>Animasi 1:55 Menit • Full Audio</span>
              </div>

              {/* Hover Tooltip */}
              <div className="absolute bottom-3 right-3 bg-[#0e2b17]/90 backdrop-blur-sm text-white text-[11px] font-medium px-3.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-md border border-white/20">
                ▶ Klik untuk Putar
              </div>
            </div>
          </div>
        </motion.div>

        {/* WATCH PREVIEW CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0.9, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              soundFx.playChime(700);
              onOpenVideoModal();
            }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white text-base font-semibold tracking-wide shadow-md shadow-[#2e7d32]/25 hover:shadow-lg transition-all duration-300 group cursor-pointer"
          >
            <Play size={18} className="fill-white" />
            <span>Tonton Vidio Animasi (1:55)</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
