import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PlayCircle, Leaf, Music, Sparkles, Check, ChevronDown } from 'lucide-react';
import { soundFx } from '../utils/sound';
import { videosData } from '../data/videosData';

export default function VideoModal({ isOpen, onClose, initialVideoId = "pantai" }) {
  const [activeVideoId, setActiveVideoId] = useState(initialVideoId);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (initialVideoId) {
      setActiveVideoId(initialVideoId);
      setIsDropdownOpen(false);
    }
  }, [initialVideoId, isOpen]);

  const activeVideo = videosData.find(v => v.id === activeVideoId) || videosData[0];

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen, activeVideoId]);

  if (!isOpen) return null;

  const handleSelectVideo = (id) => {
    soundFx.playChime(600);
    setActiveVideoId(id);
    setIsDropdownOpen(false);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#081c10] rounded-3xl shadow-2xl border-2 border-[#81c784]/40 overflow-hidden flex flex-col max-h-[92vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER WITH VIDEO SELECTOR DROPDOWN */}
          <div className="px-4 sm:px-6 py-3 bg-[#0f3117] flex items-center justify-between border-b border-white/10 relative z-20">
            <div className="flex items-center gap-2.5 sm:gap-3 text-white overflow-hidden">
              <span className="p-2 rounded-xl bg-[#2e7d32]/40 text-[#81c784] border border-[#81c784]/30 shrink-0">
                <Music size={18} />
              </span>
              
              <div className="truncate">
                <div className="flex items-center gap-2">
                  <h4 className="font-storybook font-bold text-sm sm:text-base text-white truncate">
                    {activeVideo.judul}
                  </h4>
                </div>
                <p className="text-[11px] text-[#a5d6a7] truncate">
                  {activeVideo.pembuat} • {activeVideo.durasi}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* VIDEO SWITCHER DROPDOWN */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="px-3 py-1.5 rounded-full bg-[#1b4332] hover:bg-[#2d6a4f] text-white text-xs font-semibold flex items-center gap-1.5 border border-[#81c784]/40 transition-all cursor-pointer shadow-sm"
                >
                  <span>Pilih Vidio ({videosData.findIndex(v => v.id === activeVideoId) + 1}/4)</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-1.5 w-64 sm:w-72 bg-[#0c2414] border border-[#81c784]/40 rounded-2xl shadow-2xl overflow-hidden z-30 p-1.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#81c784] px-3 py-1.5 border-b border-white/10">
                      Koleksi Vidio Edukasi (4 Vidio)
                    </div>
                    {videosData.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => handleSelectVideo(v.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer ${
                          activeVideoId === v.id
                            ? 'bg-[#2e7d32] text-white font-bold'
                            : 'text-[#c8e6c9] hover:bg-white/10'
                        }`}
                      >
                        <div className="truncate pr-2">
                          <p className="truncate font-medium">{v.judul}</p>
                          <p className="text-[10px] opacity-75">{v.pembuat} • {v.durasi}</p>
                        </div>
                        {activeVideoId === v.id && <Check size={14} className="shrink-0 text-white" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => {
                  soundFx.playChime(440);
                  onClose();
                }}
                title="Tutup vidio"
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* HTML5 VIDEO PLAYER */}
          <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
            <video
              key={activeVideo.id}
              ref={videoRef}
              controls
              autoPlay
              playsInline
              poster={activeVideo.poster}
              className="w-full h-full object-contain"
            >
              <source src={activeVideo.localSrc} type="video/mp4" />
              <source src={activeVideo.src} type="video/mp4" />
              Browser Anda tidak mendukung pemutar video HTML5.
            </video>
          </div>

          {/* QUICK PLAYLIST SELECTOR FOOTER */}
          <div className="px-4 sm:px-6 py-2.5 bg-[#0f3117] flex flex-wrap items-center justify-between gap-2 border-t border-white/10 text-xs">
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
              <span className="text-[#81c784] font-semibold text-[11px] shrink-0 mr-1">Putar:</span>
              {videosData.map((v, idx) => (
                <button
                  key={v.id}
                  onClick={() => handleSelectVideo(v.id)}
                  className={`px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap transition-all cursor-pointer ${
                    activeVideoId === v.id
                      ? 'bg-[#2e7d32] text-white font-bold shadow-sm'
                      : 'bg-white/10 text-[#c8e6c9] hover:bg-white/20'
                  }`}
                >
                  {idx + 1}. {v.judul.split(':')[0]} ({v.durasi})
                </button>
              ))}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors cursor-pointer text-xs shrink-0"
            >
              Tutup Pemutar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
