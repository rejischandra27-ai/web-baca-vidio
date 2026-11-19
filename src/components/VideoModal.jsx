import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PlayCircle, Leaf } from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#081c10] rounded-3xl shadow-2xl border-2 border-[#81c784]/30 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="px-6 py-4 bg-[#0f3117] flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2.5 text-white">
              <span className="p-1.5 rounded-lg bg-[#2e7d32]/30 text-[#81c784]">
                <Leaf size={18} />
              </span>
              <div>
                <h4 className="font-storybook font-bold text-base text-white">
                  Vidio Animasi Edukasi: Aksi Hijau Sahabat Bumi
                </h4>
                <p className="text-xs text-[#a5d6a7]">
                  Serial Animasi Interaktif Echo Green (Belajar Menanam Pohon & Menjaga Hutan)
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                soundFx.playChime(440);
                onClose();
              }}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* 16:9 VIDEO FRAME */}
          <div className="relative w-full aspect-video bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/50ZG8BOiuFk?autoplay=1&rel=0&modestbranding=1"
              title="Echo Green Interactive Video Animation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* FOOTER INFO */}
          <div className="px-6 py-3 bg-[#0f3117] text-xs text-[#c8e6c9] flex items-center justify-between">
            <span>🌿 Belajar mencintai keindahan alam lewat animasi digital yang mendidik.</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-medium transition-colors cursor-pointer"
            >
              Tutup Vidio
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
