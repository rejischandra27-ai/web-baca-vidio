import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, Tablet, Monitor, CheckCircle, Download } from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function AppModal({ isOpen, onClose, onStartReading }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-[#f8eee2] rounded-3xl shadow-2xl border-4 border-[#ebdccb] overflow-hidden p-6 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-[#ebdccb] text-[#0f2b39] transition-colors"
          >
            <X size={20} />
          </button>

          {/* ICON & TITLE */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#a75845]/15 text-[#a75845] flex items-center justify-center mb-4">
              <Smartphone size={32} />
            </div>

            <h3 className="font-storybook text-2xl sm:text-3xl font-bold text-[#0f2b39]">
              Unduh & Pasang Storynest
            </h3>

            <p className="mt-2 text-sm text-[#526978] leading-relaxed">
              Nikmati koleksi cerita anak dan animasi edukasi interaktif langsung di smartphone, tablet, maupun laptop Anda tanpa biaya (100% Gratis).
            </p>
          </div>

          {/* DEVICE FEATURES */}
          <div className="mt-6 space-y-3">
            <div className="p-3.5 rounded-2xl bg-white/70 border border-[#ebdccb] flex items-center gap-3">
              <Tablet size={22} className="text-[#d48d37] shrink-0" />
              <div className="text-left text-xs sm:text-sm">
                <p className="font-bold text-[#0f2b39]">Dukungan Tablet & iPad</p>
                <p className="text-[#526978]">Tampilan buku cerita menyerupai buku cetak asli yang imersif.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/70 border border-[#ebdccb] flex items-center gap-3">
              <Smartphone size={22} className="text-[#5f918e] shrink-0" />
              <div className="text-left text-xs sm:text-sm">
                <p className="font-bold text-[#0f2b39]">Tersedia Mode PWA (Web App)</p>
                <p className="text-[#526978]">Klik "Tambahkan ke Layar Utama" di browser Anda untuk akses cepat.</p>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                soundFx.playChime(660);
                onClose();
                onStartReading();
              }}
              className="flex-1 py-3 px-6 rounded-full bg-[#a75845] hover:bg-[#904735] text-white text-sm font-semibold shadow-md transition-all text-center cursor-pointer"
            >
              Mulai Membaca Sekarang
            </button>
            <button
              onClick={onClose}
              className="py-3 px-5 rounded-full bg-white hover:bg-white/80 text-[#0f2b39] text-sm font-semibold border border-[#ebdccb] transition-all text-center"
            >
              Nanti Saja
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
