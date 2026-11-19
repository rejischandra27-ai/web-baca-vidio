import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PlayCircle, Leaf, Music, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function VideoModal({ isOpen, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#081c10] rounded-3xl shadow-2xl border-2 border-[#81c784]/40 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="px-5 sm:px-6 py-3.5 bg-[#0f3117] flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3 text-white">
              <span className="p-2 rounded-xl bg-[#2e7d32]/40 text-[#81c784] border border-[#81c784]/30">
                <Music size={18} />
              </span>
              <div>
                <h4 className="font-storybook font-bold text-base sm:text-lg text-white flex items-center gap-2">
                  <span>Jangan Buang Sampah di Pantai</span>
                  <span className="text-xs font-normal px-2.5 py-0.5 rounded-full bg-[#2e7d32]/50 text-[#c8e6c9] border border-[#81c784]/30">
                    Karya Hartati
                  </span>
                </h4>
                <p className="text-xs text-[#a5d6a7]">
                  Lagu & Vidio Animasi Edukasi Anak Ramah Lingkungan (Jaga Pantai & Laut untuk Bumi)
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                soundFx.playChime(440);
                onClose();
              }}
              title="Tutup vidio"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* REAL MP4 VIDEO PLAYER */}
          <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
            <video
              ref={videoRef}
              controls
              autoPlay
              playsInline
              poster="/assets/videos/video-thumb-title.jpg"
              className="w-full h-full object-contain"
              src="/assets/videos/jangan-buang-sampah-di-pantai.mp4"
            >
              Browser Anda tidak mendukung pemutar video HTML5.
            </video>
          </div>

          {/* FOOTER INFO */}
          <div className="px-5 sm:px-6 py-3 bg-[#0f3117] text-xs text-[#c8e6c9] flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/10">
            <span className="flex items-center gap-1.5 text-center sm:text-left">
              <Leaf size={14} className="text-[#81c784] shrink-0" />
              <span>Belajar mencintai laut & pantai, memilah sampah plastik, dan melindungi ikan serta penyu.</span>
            </span>
            <button
              onClick={onClose}
              className="px-5 py-1.5 rounded-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-semibold transition-all duration-200 cursor-pointer text-xs shadow-md shrink-0"
            >
              Tutup Pemutar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
