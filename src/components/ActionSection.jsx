import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Music, Sparkles, CheckCircle, Video, Clock, User, Film, BookOpen } from 'lucide-react';
import { soundFx } from '../utils/sound';
import { videosData } from '../data/videosData';

export default function ActionSection({ onOpenVideoModal, activeCategory = "all", onSelectCategory }) {
  const [selectedVideoId, setSelectedVideoId] = useState("jaga-bumi");
  const [categoryFilter, setCategoryFilter] = useState(activeCategory);

  useEffect(() => {
    setCategoryFilter(activeCategory);
    if (activeCategory === "animasi") {
      setSelectedVideoId("jaga-bumi");
    } else if (activeCategory === "bercerita") {
      setSelectedVideoId("rara-bimo");
    }
  }, [activeCategory]);

  const handleFilterChange = (cat) => {
    soundFx.playChime(620);
    setCategoryFilter(cat);
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    if (cat === "animasi") {
      setSelectedVideoId("jaga-bumi");
    } else if (cat === "bercerita") {
      setSelectedVideoId("rara-bimo");
    }
  };

  const filteredVideos = categoryFilter === "all"
    ? videosData
    : videosData.filter(v => v.tipe === categoryFilter);

  const activeVideo = videosData.find(v => v.id === selectedVideoId) || filteredVideos[0] || videosData[0];

  const handlePlayVideo = (id) => {
    soundFx.playChime(700);
    onOpenVideoModal(id);
  };

  return (
    <section
      id="vidio"
      className="relative py-28 px-4 sm:px-6 overflow-hidden bg-[#f4f9f4] text-center scroll-mt-12"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 50% 30%, rgba(200, 230, 201, 0.35) 0%, transparent 65%),
          radial-gradient(ellipse at 80% 80%, rgba(129, 199, 132, 0.15) 0%, transparent 55%)
        `,
      }}
    >
      {/* Scroll Anchors for Navbar Links */}
      <div id="vidio-animasi" className="absolute top-12 pointer-events-none" />
      <div id="vidio-bercerita" className="absolute top-12 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* SECTION HEADLINE & SUBTITLE */}
        <motion.div
          initial={{ opacity: 0.9, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mx-auto mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#2e7d32]/10 border border-[#2e7d32]/25 text-xs font-bold uppercase tracking-wider text-[#2e7d32] mb-3">
            <Video size={14} /> Koleksi Vidio Sahabat Alam
          </div>

          <h2 className="font-storybook text-4xl sm:text-5xl font-bold text-[#0e2b17] tracking-tight">
            Vidio Animasi & Vidio Bercerita.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#335e3d] font-normal max-w-xl mx-auto leading-relaxed">
            Pilih lagu animasi anak ramah lingkungan atau saksikan kegiatan mendongeng interaktif yang mengedukasi cinta alam sejak dini.
          </p>

          {/* CATEGORY TABS SWITCHER: Semua, Vidio Animasi, Vidio Bercerita */}
          <div className="mt-6 inline-flex items-center gap-2 p-1.5 rounded-full bg-white border border-[#2e7d32]/20 shadow-md">
            <button
              onClick={() => handleFilterChange("all")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                categoryFilter === "all"
                  ? 'bg-[#2e7d32] text-white shadow-sm'
                  : 'text-[#1b4d24] hover:bg-[#2e7d32]/10'
              }`}
            >
              Semua Vidio ({videosData.length})
            </button>

            <button
              onClick={() => handleFilterChange("animasi")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                categoryFilter === "animasi"
                  ? 'bg-[#2e7d32] text-white shadow-sm'
                  : 'text-[#1b4d24] hover:bg-[#2e7d32]/10'
              }`}
            >
              <Film size={14} /> Vidio Animasi ({videosData.filter(v => v.tipe === 'animasi').length})
            </button>

            <button
              onClick={() => handleFilterChange("bercerita")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                categoryFilter === "bercerita"
                  ? 'bg-[#2e7d32] text-white shadow-sm'
                  : 'text-[#1b4d24] hover:bg-[#2e7d32]/10'
              }`}
            >
              <BookOpen size={14} /> Vidio Bercerita ({videosData.filter(v => v.tipe === 'bercerita').length})
            </button>
          </div>
        </motion.div>

        {/* 1. FEATURED TABLET MOCKUP FOR ACTIVE VIDEO */}
        <motion.div
          initial={{ opacity: 0.9, scale: 0.98, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="relative cursor-pointer group w-full max-w-[620px] mb-12"
          onClick={() => handlePlayVideo(activeVideo.id)}
        >
          {/* Natural Soft Sunbeam Backdrop Glow */}
          <div className="absolute -inset-6 bg-[#2e7d32]/20 rounded-[44px] blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Ambient Floor Shadow */}
          <div className="absolute -bottom-6 left-12 right-12 h-8 bg-[#0e2b17]/35 rounded-[100%] blur-xl transform scale-y-60"></div>

          {/* Tablet Chassis */}
          <div className="relative rounded-[32px] sm:rounded-[42px] bg-gradient-to-b from-[#243026] via-[#1a231d] to-[#121814] p-3 sm:p-4 shadow-[0_25px_60px_-15px_rgba(14,43,23,0.45),0_12px_28px_-5px_rgba(0,0,0,0.4)] border border-white/20 transition-transform duration-300 group-hover:scale-[1.015]">
            
            {/* Tablet Camera */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none z-20">
              <div className="w-2.5 h-2.5 rounded-full bg-[#080d09] border border-white/20 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-[#1b4332]"></div>
              </div>
            </div>

            {/* Screen Glass */}
            <div className="relative aspect-video w-full rounded-[20px] sm:rounded-[26px] overflow-hidden bg-black shadow-inner">
              <img
                src={activeVideo.poster}
                alt={activeVideo.judul}
                className="w-full h-full object-cover object-center select-none block transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />

              {/* Diagonal Glass Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>

              {/* INTERACTIVE PULSING PLAY BUTTON OVERLAY */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/10 transition-colors">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-20 h-20 rounded-full bg-[#2e7d32]/40 animate-ping"></span>
                  <span className="absolute w-24 h-24 rounded-full bg-[#2e7d32]/25 animate-pulse"></span>

                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#2e7d32] text-white flex items-center justify-center shadow-2xl group-hover:bg-[#1b5e20] group-hover:scale-110 transition-all duration-300 border-2 border-white/40">
                    <Play size={28} className="ml-1 fill-white" />
                  </div>
                </div>
              </div>

              {/* Status Overlay Badges */}
              <div className="absolute top-3 left-3 bg-[#2e7d32]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                {activeVideo.badge}
              </div>

              <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold px-3.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                <Clock size={12} className="text-[#81c784]" />
                <span>{activeVideo.durasi}</span>
                <span>•</span>
                <span className="truncate max-w-[200px]">{activeVideo.pembuat}</span>
              </div>

              <div className="absolute bottom-3 right-3 bg-[#0e2b17]/90 backdrop-blur-sm text-white text-[11px] font-medium px-3.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-md border border-white/20">
                ▶ Klik untuk Putar Vidio
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. GALLERY OF VIDEOS (PLAYLIST CARDS) */}
        <div className="w-full">
          <div className="text-left mb-4 flex items-center justify-between">
            <h3 className="font-storybook text-2xl font-bold text-[#0e2b17] flex items-center gap-2">
              <span>
                {categoryFilter === "animasi"
                  ? "Koleksi Vidio Animasi"
                  : categoryFilter === "bercerita"
                  ? "Koleksi Vidio Bercerita"
                  : `Daftar ${videosData.length} Vidio Edukasi`}
              </span>
            </h3>
            <span className="text-xs font-semibold text-[#2e7d32]">Pilih vidio untuk ditonton</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {filteredVideos.map((v) => (
              <div
                key={v.id}
                onClick={() => {
                  setSelectedVideoId(v.id);
                  handlePlayVideo(v.id);
                }}
                className={`bg-white rounded-2xl p-3.5 shadow-md border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl ${
                  selectedVideoId === v.id
                    ? 'border-[#2e7d32] ring-2 ring-[#81c784]/30'
                    : 'border-slate-100 hover:border-[#81c784]/60'
                }`}
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-black mb-3">
                    <img
                      src={v.poster}
                      alt={v.judul}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Duration badge */}
                    <div className="absolute bottom-2 right-2 bg-black/75 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-sm">
                      {v.durasi}
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-2 left-2 bg-[#2e7d32]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
                      {v.badge}
                    </div>

                    {/* Hover play icon */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#2e7d32] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <Play size={16} className="ml-0.5 fill-white" />
                      </div>
                    </div>
                  </div>

                  {/* Creator */}
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-[#2e7d32] mb-1">
                    <User size={12} />
                    <span className="truncate">{v.pembuat}</span>
                  </div>

                  {/* Title */}
                  <h4 className="font-semibold text-sm text-[#0e2b17] leading-snug line-clamp-2 group-hover:text-[#2e7d32] transition-colors">
                    {v.judul}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-[#526978] mt-1 line-clamp-2 leading-relaxed">
                    {v.deskripsi}
                  </p>
                </div>

                {/* Play Button */}
                <div className="mt-3 pt-2.5 border-t border-slate-100">
                  <button
                    type="button"
                    className="w-full py-2 rounded-xl bg-[#2e7d32]/10 hover:bg-[#2e7d32] text-[#2e7d32] hover:text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Play size={13} className="fill-current" />
                    <span>Tonton Vidio</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
