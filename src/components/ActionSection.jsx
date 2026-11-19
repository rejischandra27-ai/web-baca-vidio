import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
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
            🎬 Vidio Animasi Seru
          </div>

          <h2 className="font-storybook text-4xl sm:text-5xl font-bold text-[#0e2b17] tracking-tight">
            Vidio Animasi Aksi Hijau.
          </h2>

          <p className="mt-4 text-lg sm:text-xl text-[#335e3d] font-normal max-w-lg mx-auto leading-relaxed">
            Tonton cuplikan petualangan seru tentang kebiasaan ramah lingkungan, menanam pohon, dan menjaga keasrian bumi.
          </p>
        </motion.div>

        {/* CLEAN TABLET MOCKUP WITH NATURAL AMBIENT SHADOW (NO JARRING CUTOUTS) */}
        <motion.div
          initial={{ opacity: 0.9, scale: 0.98, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="mt-10 relative cursor-pointer group"
          onClick={() => {
            soundFx.playChime(700);
            onOpenVideoModal();
          }}
        >
          {/* Natural Soft Sunbeam Backdrop Glow */}
          <div className="absolute -inset-6 bg-[#2e7d32]/15 rounded-[40px] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative transition-all duration-300 group-hover:scale-[1.015]">
            <img
              src="/assets/echo/echo-video-tablet.png"
              alt="Interactive video animation on tablet"
              className="w-[360px] sm:w-[500px] md:w-[580px] h-auto block select-none drop-shadow-2xl"
            />

            {/* INTERACTIVE PULSING PLAY BUTTON OVERLAY */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                {/* Expanding Ripple Ring */}
                <span className="absolute w-16 h-16 rounded-full bg-[#2e7d32]/35 animate-ping"></span>
                <span className="absolute w-20 h-20 rounded-full bg-[#2e7d32]/20 animate-pulse"></span>

                {/* Central Play Button */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2e7d32] text-white flex items-center justify-center shadow-lg group-hover:bg-[#1b5e20] group-hover:scale-110 transition-all duration-300">
                  <Play size={24} className="ml-1 fill-white" />
                </div>
              </div>
            </div>

            {/* Hover Tooltip */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#0e2b17]/90 backdrop-blur-sm text-white text-[11px] font-medium px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-md border border-white/20">
              ▶ Putar Vidio Animasi Sekarang
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
            <span>Tonton Vidio Edukasi</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
