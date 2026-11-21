import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, Heart, Users, BookOpen, Video, ArrowUpRight, GraduationCap } from 'lucide-react';
import { soundFx } from '../utils/sound';
import NightDevicesMockup from './NightDevicesMockup';

export default function NightSection({ onOpenStoryModal, onOpenVideoModal }) {
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

  // 7 Anggota Tim Pendidik & Penulis Karya Nyata
  const teamMembers = [
    {
      id: "evi",
      nama: "Evi Noviyah, S.Pd.",
      inisial: "EN",
      role: "Praktisi PAUD & Kurikulum",
      instansi: "Magister PAUD Univ. PancaSakti",
      accent: "from-emerald-500 to-teal-700",
      bukuJudul: "Detektif Cilik Pemilah Sampah",
      bukuHal: "16 Halaman",
      bookId: "detektif-sampah",
      vidioJudul: "Animasi 2D & Praktik Kelas",
      videoId: "animasi-detektif-sampah"
    },
    {
      id: "ana",
      nama: "Ana Tri Rahayu, S.Pd.",
      inisial: "AT",
      role: "Pendidik PAUD (15 Tahun Pengalaman)",
      instansi: "Wisudawan Terbaik UMB 2025",
      accent: "from-amber-500 to-emerald-700",
      bukuJudul: "Rara dan Bimo Sedih Karena Asap Pekat",
      bukuHal: "19 Halaman",
      bookId: "rara-dan-bimo",
      vidioJudul: "Animasi 3D Layang-Layang & Gazebo",
      videoId: "animasi-rara-bimo"
    },
    {
      id: "wilda",
      nama: "Wilda Widya Panji Buwani, S.Pd.",
      inisial: "WW",
      role: "Kepala TK Putra Pertiwi",
      instansi: "Ketua PKG Kec. Ciputat Timur",
      accent: "from-teal-500 to-green-700",
      bukuJudul: "Nail, Alifa, & Rahasia Pohon Jambu",
      bukuHal: "16 Halaman",
      bookId: "rahasia-pohon-jambu",
      vidioJudul: "Animasi 3D Jaga Bumi & Mendongeng",
      videoId: "jaga-bumi"
    },
    {
      id: "ria",
      nama: "Ria Oktari Pamungkas, S.Pd.",
      inisial: "RO",
      role: "Pendidik Anak Usia Dini",
      instansi: "TK Islam Al Falah Jakarta Pusat",
      accent: "from-cyan-500 to-emerald-700",
      bukuJudul: "Kali Kecil, Sahabat Besar",
      bukuHal: "15 Halaman",
      bookId: "kali-kecil",
      vidioJudul: "Animasi Cerita & Mendongeng B1",
      videoId: "kali-kecil-animasi"
    },
    {
      id: "effi",
      nama: "Effi Tugiarti, S.Pd.",
      inisial: "ET",
      role: "Pendidik PAUD (7 Tahun Pengalaman)",
      instansi: "Penggiat Edukasi Lingkungan Hidup",
      accent: "from-blue-500 to-teal-700",
      bukuJudul: "Baim dan Rani Sedih Melihat Ikan Kecil",
      bukuHal: "19 Halaman",
      bookId: "baim-dan-rani",
      vidioJudul: "Animasi 3D Ikan Kecil & Mendongeng",
      videoId: "ikan-kecil"
    },
    {
      id: "hartati",
      nama: "Hartati, S.Kom.",
      inisial: "HT",
      role: "Kepala Sekolah RA Ash-Shafa",
      instansi: "Magister PAUD Univ. PancaSakti",
      accent: "from-lime-500 to-emerald-700",
      bukuJudul: "Jejak Kaki Kiki di Tepi Pantai",
      bukuHal: "19 Halaman",
      bookId: "jejak-kaki-kiki",
      vidioJudul: "Animasi Musik Pantai & Dongeng Outdoor",
      videoId: "pantai"
    },
    {
      id: "yanike",
      nama: "Yanike Martinawaty, S.Pd.",
      inisial: "YM",
      role: "Pendidik & Mahasiswa Magister PAUD",
      instansi: "NIM: 4862560113",
      accent: "from-emerald-400 to-green-600",
      bukuJudul: "Bumi Sedang Kepanasan",
      bukuHal: "14 Halaman",
      bookId: "bumi-kepanasan",
      vidioJudul: "Animasi 3D & Dongeng Kelas",
      videoId: "bumi-kepanasan-bercerita"
    }
  ];

  const handleReadBook = (bookId) => {
    soundFx.playChime(660);
    soundFx.playPageTurn();
    if (onOpenStoryModal) onOpenStoryModal(bookId);
  };

  const handleWatchVideo = (videoId) => {
    soundFx.playChime(700);
    if (onOpenVideoModal) onOpenVideoModal(videoId);
  };

  return (
    <section
      id="tentang"
      className="relative py-28 px-4 sm:px-6 overflow-hidden bg-[#0d2818] text-white scroll-mt-12"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 85% 25%, rgba(129, 199, 132, 0.2) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 70%, rgba(5, 20, 10, 0.6) 0%, transparent 70%)
        `,
      }}
    >
      {/* TORN PAPER TOP EDGE (Entering Night Forest) */}
      <div className="absolute top-0 left-0 right-0 h-10 md:h-14 overflow-hidden pointer-events-none select-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full text-[#f4f9f4] fill-current"
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

      <div className="max-w-6xl mx-auto relative z-10 my-4">
        
        {/* ROW 1: MISSION & INTERACTIVE TABLET MOCKUP */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
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

            <p className="mt-4 text-base sm:text-lg text-[#c8e6c9] font-normal max-w-md leading-relaxed">
              Platform <b>Echo Green</b> mengusung misi literasi hijau tanpa kertas (<i>paperless</i>), menghadirkan 7 buku cerita digital dan 14 vidio edukasi bernilai ekologis karya pendidik PAUD.
            </p>

            {/* 2 Pillars */}
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
                onClick={() => handleReadBook("detektif-sampah")}
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
            <NightDevicesMockup onOpenBook={(bookId) => handleReadBook(bookId || "rara-dan-bimo")} />
          </motion.div>
        </div>

        {/* ROW 2: TIM PENYUSUN & KONTRIBUTOR KARYA */}
        <div className="mt-20 pt-16 border-t border-white/15 relative z-10">
          
          {/* Section Headline */}
          <motion.div
            initial={{ opacity: 0.9, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#81c784]/15 border border-[#81c784]/30 text-xs font-bold uppercase tracking-widest text-[#a5d6a7] mb-3 backdrop-blur-sm">
              <Users size={14} /> Tim Penyusun & Kontributor
            </div>

            <h3 className="font-storybook text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Profil Pendidik & Penulis Cerita Alam
            </h3>

            <p className="mt-3 text-sm sm:text-base text-[#c8e6c9] leading-relaxed">
              Kolaborasi 7 pendidik anak usia dini yang berdedikasi menciptakan media literasi hijau ramah anak, lengkap dengan buku cerita dan vidio edukasi lingkungan hidup.
            </p>
          </motion.div>

          {/* 7 Members Responsive Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0.9, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-5 bg-white/[0.08] hover:bg-white/[0.13] border border-white/15 hover:border-[#81c784]/50 backdrop-blur-md shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Header: Avatar Initial & Member Info */}
                <div>
                  <div className="flex items-start gap-3 mb-3.5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.accent} text-white font-bold flex items-center justify-center text-base shrink-0 shadow-md border border-white/20 group-hover:scale-105 transition-transform`}>
                      {member.inisial}
                    </div>

                    <div className="overflow-hidden">
                      <h4 className="font-bold text-base text-white group-hover:text-[#a5d6a7] transition-colors leading-tight">
                        {member.nama}
                      </h4>
                      <p className="text-xs text-[#a5d6a7] font-medium mt-0.5 leading-snug">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Institution Badge */}
                  <div className="flex items-center gap-1.5 text-[11px] text-white/70 mb-4 bg-black/25 px-2.5 py-1 rounded-lg border border-white/10">
                    <GraduationCap size={13} className="text-[#81c784] shrink-0" />
                    <span className="truncate">{member.instansi}</span>
                  </div>

                  {/* Karya Section Divider */}
                  <div className="pt-3 border-t border-white/10 space-y-2.5 text-xs">
                    
                    {/* 1. Buku Karya */}
                    <div className="bg-black/20 rounded-xl p-2.5 border border-white/10 hover:border-emerald-500/40 transition-colors">
                      <div className="flex items-center justify-between text-[11px] text-[#81c784] font-semibold mb-1">
                        <span className="flex items-center gap-1">
                          <BookOpen size={12} /> Buku Cerita
                        </span>
                        <span className="text-[10px] text-white/60 font-normal">{member.bukuHal}</span>
                      </div>
                      <p className="text-white text-xs font-medium line-clamp-1 mb-2">
                        {member.bukuJudul}
                      </p>
                      <button
                        onClick={() => handleReadBook(member.bookId)}
                        className="w-full py-1.5 px-3 rounded-lg bg-[#2e7d32]/50 hover:bg-[#2e7d32] text-white text-[11px] font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer border border-[#81c784]/30"
                      >
                        <span>Baca Buku</span>
                        <ArrowUpRight size={12} />
                      </button>
                    </div>

                    {/* 2. Vidio Karya */}
                    <div className="bg-black/20 rounded-xl p-2.5 border border-white/10 hover:border-emerald-500/40 transition-colors">
                      <div className="flex items-center justify-between text-[11px] text-[#81c784] font-semibold mb-1">
                        <span className="flex items-center gap-1">
                          <Video size={12} /> Vidio Edukasi
                        </span>
                        <span className="text-[10px] text-emerald-300 font-normal">HD</span>
                      </div>
                      <p className="text-white text-xs font-medium line-clamp-1 mb-2">
                        {member.vidioJudul}
                      </p>
                      <button
                        onClick={() => handleWatchVideo(member.videoId)}
                        className="w-full py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer border border-white/15"
                      >
                        <span>Tonton Vidio</span>
                        <ArrowUpRight size={12} />
                      </button>
                    </div>

                  </div>
                </div>

                {/* Footer status inside card */}
                <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60">
                  <span>Kontributor Nyata</span>
                  <span className="text-[#81c784] font-medium">✓ Terverifikasi</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* TORN PAPER BOTTOM EDGE (Returning to Eco Paper Footer) */}
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-14 overflow-hidden pointer-events-none select-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full text-[#f4f9f4] fill-current"
        >
          <path d="M0,120 L1200,120 L1200,70 C1070,40 930,95 790,65 C650,35 510,85 370,55 C230,25 110,80 0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
