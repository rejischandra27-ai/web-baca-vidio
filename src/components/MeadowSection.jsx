import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, Sparkles, User, FileText } from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function MeadowSection({ onSelectBook }) {
  const books = [
    {
      id: "detektif-sampah",
      judul: "Detektif Cilik Pemilah Sampah",
      subjudul: "Petualangan Kecil Menyelamatkan Bumi",
      penulis: "Evi Noviyah",
      usia: "Usia 5-6 Tahun",
      halaman: 16,
      badge: "Eco Green • Pilah Sampah",
      deskripsi: "Pagi itu di taman sekolah, Aisyah, Bima, dan Nala menemukan sampah berserakan. Mereka menjadi detektif pemilah sampah cilik untuk memilah sampah organik, kertas, dan plastik demi menyelamatkan bumi.",
      cover: "/assets/books/cover-detektif-sampah.jpg",
      pdf: "/assets/books/buku-detektif-pemilah-sampah.pdf"
    },
    {
      id: "rara-dan-bimo",
      judul: "Rara dan Bimo Sedih Karena Asap Pekat",
      subjudul: "Cerita Tentang Udara Bersih & Hutan yang Harus Kita Jaga",
      penulis: "Ana Tri Rahayu, S.Pd.",
      usia: "Semua Usia",
      halaman: 19,
      badge: "Hutan Lestari • Udara Bersih",
      deskripsi: "Rara dan Bimo sangat suka bermain layang-layang di lapangan. Suatu hari, langit biru cerah berubah menjadi abu-abu pekat karena kebakaran hutan. Mengajarkan anak pentingnya menjaga pohon agar udara tetap segar.",
      cover: "/assets/books/cover-rara-bimo.jpg",
      pdf: "/assets/books/buku-rara-dan-bimo.pdf"
    },
    {
      id: "rahasia-pohon-jambu",
      judul: "Nail, Alifa, dan Rahasia Pohon Jambu",
      subjudul: "Bumi Sejuk, Sekolahku Nyaman",
      penulis: "Wilda Widya Panji Buwani",
      usia: "Usia 4-7 Tahun",
      halaman: 16,
      badge: "Pohon Rindang • Sekolah Asri",
      deskripsi: "Nail dan Alifa berteduh di bawah pohon jambu Jamaika bernama Jaja. Bersama Ibu Guru Wilda, mereka belajar rahasia daun yang memberi keteduhan, merawat tanaman, dan menyayangi bumi.",
      cover: "/assets/books/cover-rahasia-pohon-jambu.jpg",
      pdf: "/assets/books/buku-rahasia-pohon-jambu.pdf"
    },
    {
      id: "kali-kecil",
      judul: "Kali Kecil, Sahabat Besar",
      subjudul: "Petualangan Anak-Anak Menjaga Lingkungan",
      penulis: "Ria Oktari Pamungkas",
      usia: "Semua Usia",
      halaman: 15,
      badge: "Sungai Bersih • Sahabat Air",
      deskripsi: "Bu Guru Ria bersama Raka, Naya, dan Bima melihat sampah berserakan di kali dekat sekolah. Mereka bergotong royong membersihkan kali agar air kembali jernih dan aliran sungai tetap lestari.",
      cover: "/assets/books/cover-kali-kecil.jpg",
      pdf: "/assets/books/buku-kali-kecil.pdf"
    }
  ];

  return (
    <section
      id="buku"
      className="relative py-28 px-6 overflow-hidden bg-[#26682a] text-white"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 80% 20%, rgba(200, 230, 201, 0.22) 0%, transparent 50%),
          radial-gradient(ellipse at 20% 80%, rgba(15, 60, 25, 0.35) 0%, transparent 60%)
        `,
      }}
    >
      {/* TORN PAPER TOP EDGE */}
      <div className="absolute top-0 left-0 right-0 h-10 md:h-14 overflow-hidden pointer-events-none select-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full text-[#f4f9f4] fill-current"
        >
          <path d="M0,0 L1200,0 L1200,45 C1080,75 920,20 780,55 C640,90 520,35 380,70 C240,105 120,40 0,65 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 my-4">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0.85, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-xs font-bold uppercase tracking-wider text-white mb-3 border border-white/20">
            <BookOpen size={14} />
            <span>Koleksi Buku Cerita Sahabat Alam</span>
          </div>

          <h2 className="font-storybook text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight drop-shadow-sm">
            4 Buku Cerita Sahabat Alam.
          </h2>

          <p className="mt-4 text-lg text-white/90 font-normal leading-relaxed">
            Koleksi buku cerita anak bergambar ramah lingkungan yang mengedukasi kepedulian alam: memilah sampah, mencegah polusi asap, merawat pohon rindang, dan menjaga aliran air bersih.
          </p>
        </motion.div>

        {/* 2 MAIN BOOKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {books.map((book, idx) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0.9, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="bg-white/95 text-[#0e2b17] rounded-3xl p-6 sm:p-7 shadow-2xl border-2 border-white/40 flex flex-col justify-between group hover:shadow-3xl transition-all duration-300 backdrop-blur-md"
            >
              {/* BOOK COVER IMAGE (LANDSCAPE ASPECT RATIO) */}
              <div>
                <div
                  className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-slate-100 shadow-md mb-6 cursor-pointer group-hover:scale-[1.01] transition-transform duration-300"
                  onClick={() => {
                    soundFx.playPageTurn();
                    onSelectBook(book.id);
                  }}
                >
                  <img
                    src={book.cover}
                    alt={book.judul}
                    className="w-full h-full object-cover select-none"
                    loading="lazy"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-[#2e7d32]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {book.badge}
                  </div>

                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                    {book.halaman} Hal
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-5 py-2.5 rounded-full bg-[#e69500] text-white text-xs font-bold tracking-wide shadow-lg flex items-center gap-2">
                      <BookOpen size={16} /> Buka & Baca Buku
                    </span>
                  </div>
                </div>

                {/* BOOK INFO */}
                <div className="text-left">
                  <div className="flex items-center gap-3 text-xs text-[#406349] font-medium mb-1">
                    <span className="flex items-center gap-1 font-semibold text-[#2e7d32]">
                      <User size={13} /> {book.penulis}
                    </span>
                    <span>•</span>
                    <span>{book.usia}</span>
                  </div>

                  <h3 className="font-storybook text-2xl font-bold text-[#0e2b17] leading-snug line-clamp-2 group-hover:text-[#2e7d32] transition-colors">
                    {book.judul}
                  </h3>

                  <p className="text-xs italic text-[#526978] mt-1 mb-3">
                    {book.subjudul}
                  </p>

                  <p className="text-sm text-[#335e3d] leading-relaxed line-clamp-3 bg-[#f2f8f1] p-3 rounded-xl border border-[#c8e6c9]/60">
                    {book.deskripsi}
                  </p>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <button
                  onClick={() => {
                    soundFx.playPageTurn();
                    onSelectBook(book.id);
                  }}
                  className="flex-1 py-3 px-5 rounded-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen size={16} />
                  <span>Baca Cerita</span>
                </button>

                <a
                  href={book.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#f2f8f1] hover:bg-[#c8e6c9] text-[#2e7d32] transition-colors"
                  title="Unduh Berkas PDF Asli"
                >
                  <Download size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* TORN PAPER BOTTOM EDGE */}
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-14 overflow-hidden pointer-events-none select-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full text-[#f4f9f4] fill-current"
        >
          <path d="M0,120 L1200,120 L1200,75 C1080,45 920,100 780,65 C640,30 520,85 380,50 C240,15 120,80 0,55 Z" />
        </svg>
      </div>
    </section>
  );
}
