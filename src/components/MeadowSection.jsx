import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, User, CheckCircle, Sparkles, Filter } from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function MeadowSection({ onSelectBook }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const books = [
    {
      id: "detektif-sampah",
      judul: "Detektif Cilik Pemilah Sampah",
      subjudul: "Petualangan Kecil Menyelamatkan Bumi",
      penulis: "Evi Noviyah",
      usia: "Usia 5-6 Tahun",
      halaman: 16,
      badge: "Pilah Sampah",
      category: "sampah",
      deskripsi: "Aisyah, Bima, dan Nala belajar memilah sampah organik, kertas, dan plastik di sekolah demi bumi yang asri.",
      cover: "/assets/books/cover-detektif-sampah.jpg",
      pdf: "https://github.com/rejischandra27-ai/web-baca-vidio/releases/download/v1.0.0/buku-detektif-pemilah-sampah.pdf"
    },
    {
      id: "rara-dan-bimo",
      judul: "Rara dan Bimo Sedih Karena Asap Pekat",
      subjudul: "Cerita Tentang Udara Bersih & Hutan yang Harus Kita Jaga",
      penulis: "Ana Tri Rahayu, S.Pd.",
      usia: "Semua Usia",
      halaman: 19,
      badge: "Hutan Lestari",
      category: "hutan",
      deskripsi: "Langit biru berubah kelabu karena kebakaran hutan. Mengajarkan anak pentingnya merawat pohon agar udara tetap sejuk.",
      cover: "/assets/books/cover-rara-bimo.jpg",
      pdf: "https://github.com/rejischandra27-ai/web-baca-vidio/releases/download/v1.0.0/buku-rara-dan-bimo.pdf"
    },
    {
      id: "rahasia-pohon-jambu",
      judul: "Nail, Alifa, dan Rahasia Pohon Jambu",
      subjudul: "Bumi Sejuk, Sekolahku Nyaman",
      penulis: "Wilda Widya Panji Buwani",
      usia: "Usia 4-7 Tahun",
      halaman: 16,
      badge: "Pohon Rindang",
      category: "pohon",
      deskripsi: "Nail dan Alifa bertemu pohon jambu 'Jaja', belajar rahasia daun yang teduh serta merawat alam di sekolah.",
      cover: "/assets/books/cover-rahasia-pohon-jambu.jpg",
      pdf: "https://github.com/rejischandra27-ai/web-baca-vidio/releases/download/v1.0.0/buku-rahasia-pohon-jambu.pdf"
    },
    {
      id: "kali-kecil",
      judul: "Kali Kecil, Sahabat Besar",
      subjudul: "Petualangan Anak-Anak Menjaga Lingkungan",
      penulis: "Ria Oktari Pamungkas",
      usia: "Semua Usia",
      halaman: 15,
      badge: "Sungai Bersih",
      category: "air",
      deskripsi: "Bu Guru Ria bersama anak-anak bergotong royong membersihkan kali kecil dekat sekolah agar air kembali jernih.",
      cover: "/assets/books/cover-kali-kecil.jpg",
      pdf: "https://github.com/rejischandra27-ai/web-baca-vidio/releases/download/v1.0.0/buku-kali-kecil.pdf"
    },
    {
      id: "baim-dan-rani",
      judul: "Baim dan Rani",
      subjudul: "Sedih Melihat Ikan Kecil yang Tidak Bisa Berenang karena Dikelilingi Sampah",
      penulis: "Effi Tugiarti, S.Pd",
      usia: "Usia 4-8 Tahun",
      halaman: 19,
      badge: "Sungai Bersih",
      category: "air",
      deskripsi: "Baim dan Rani melihat ikan kecil kesulitan berenang di sungai karena tumpukan sampah. Bersama Pak Sungai, mereka belajar menjaga kebersihan air.",
      cover: "/assets/books/cover-baim-dan-rani.jpg",
      pdf: "/assets/books/buku-baim-dan-rani.pdf"
    },
    {
      id: "jejak-kaki-kiki",
      judul: "Jejak Kaki Kiki di Tepi Pantai",
      subjudul: "Petualangan Kiki & Bimo Menjaga Laut Bersih",
      penulis: "Hartati",
      usia: "Semua Usia",
      halaman: 19,
      badge: "Pantai Bersih",
      category: "pantai",
      deskripsi: "Kiki dan Bimo bermain di pantai yang indah. Ketika Kiki membuang sampah plastik sembarangan, ia menyadari bahayanya bagi laut dan satwa. Cerita edukatif menjaga kebersihan pantai.",
      cover: "/assets/books/cover-jejak-kaki-kiki.jpg",
      pdf: "/assets/books/buku-jejak-kaki-kiki.pdf"
    },
    {
      id: "bumi-kepanasan",
      judul: "Bumi Sedang Kepanasan",
      subjudul: "Kisah Lala & Bimo Menjaga Suhu Bumi Tetap Sejuk",
      penulis: "Yanike Martinawaty, S.Pd",
      usia: "Usia 4-8 Tahun",
      halaman: 14,
      badge: "Bumi Sejuk",
      category: "bumi",
      deskripsi: "Lala dan Bimo merasakan terik matahari yang semakin panas akibat berkurangnya pohon dan banyaknya sampah. Mereka belajar menanam pohon, memilah sampah, dan menghemat energi demi bumi yang asri.",
      cover: "/assets/books/cover-bumi-kepanasan.jpg",
      pdf: "https://github.com/rejischandra27-ai/web-baca-vidio/releases/download/v1.0.0/buku-bumi-sedang-kepanasan.pdf"
    }
  ];

  const filteredBooks = activeFilter === "all"
    ? books
    : books.filter(b => b.category === activeFilter);

  return (
    <section
      id="buku"
      className="relative py-28 px-4 sm:px-6 overflow-hidden bg-[#26682a] text-white"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 80% 20%, rgba(200, 230, 201, 0.22) 0%, transparent 50%),
          radial-gradient(ellipse at 20% 80%, rgba(15, 60, 25, 0.45) 0%, transparent 60%)
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
          initial={{ opacity: 0.9, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-xs font-bold uppercase tracking-wider text-white mb-3 border border-white/20 backdrop-blur-sm">
            <BookOpen size={14} />
            <span>Perpustakaan Digital Sahabat Alam</span>
          </div>

          <h2 className="font-storybook text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight drop-shadow-sm">
            Koleksi {books.length} Buku Cerita Asli.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-white/90 font-normal leading-relaxed">
            Sentuh sampul buku mana saja untuk membuka pembaca Flipbook 3D interaktif lengkap dengan efek lipatan kertas nyata.
          </p>

          {/* THEMATIC FILTER PILLS */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
            <button
              onClick={() => {
                soundFx.playChime(500);
                setActiveFilter("all");
              }}
              className={`px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                activeFilter === "all"
                  ? "bg-white text-[#1b5e20] shadow-md font-bold scale-105"
                  : "bg-white/15 text-white hover:bg-white/25 border border-white/20"
              }`}
            >
              Semua Buku ({books.length})
            </button>
            <button
              onClick={() => {
                soundFx.playChime(550);
                setActiveFilter("sampah");
              }}
              className={`px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                activeFilter === "sampah"
                  ? "bg-white text-[#1b5e20] shadow-md font-bold scale-105"
                  : "bg-white/15 text-white hover:bg-white/25 border border-white/20"
              }`}
            >
              ♻️ Pilah Sampah
            </button>
            <button
              onClick={() => {
                soundFx.playChime(600);
                setActiveFilter("hutan");
              }}
              className={`px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                activeFilter === "hutan"
                  ? "bg-white text-[#1b5e20] shadow-md font-bold scale-105"
                  : "bg-white/15 text-white hover:bg-white/25 border border-white/20"
              }`}
            >
              🌲 Hutan & Udara
            </button>
            <button
              onClick={() => {
                soundFx.playChime(650);
                setActiveFilter("pohon");
              }}
              className={`px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                activeFilter === "pohon"
                  ? "bg-white text-[#1b5e20] shadow-md font-bold scale-105"
                  : "bg-white/15 text-white hover:bg-white/25 border border-white/20"
              }`}
            >
              🌳 Pohon Jambu
            </button>
            <button
              onClick={() => {
                soundFx.playChime(700);
                setActiveFilter("air");
              }}
              className={`px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                activeFilter === "air"
                  ? "bg-white text-[#1b5e20] shadow-md font-bold scale-105"
                  : "bg-white/15 text-white hover:bg-white/25 border border-white/20"
              }`}
            >
              💧 Sungai Bersih
            </button>
            <button
              onClick={() => {
                soundFx.playChime(750);
                setActiveFilter("pantai");
              }}
              className={`px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                activeFilter === "pantai"
                  ? "bg-white text-[#1b5e20] shadow-md font-bold scale-105"
                  : "bg-white/15 text-white hover:bg-white/25 border border-white/20"
              }`}
            >
              🏖️ Pantai & Laut
            </button>
            <button
              onClick={() => {
                soundFx.playChime(800);
                setActiveFilter("bumi");
              }}
              className={`px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                activeFilter === "bumi"
                  ? "bg-white text-[#1b5e20] shadow-md font-bold scale-105"
                  : "bg-white/15 text-white hover:bg-white/25 border border-white/20"
              }`}
            >
              🌍 Bumi Sejuk
            </button>
          </div>
        </motion.div>

        {/* 4 ELEGANT BOOKSHELF CARDS (NO CLUMSY STACKS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {filteredBooks.map((book, idx) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0.9, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className="bg-[#12381b]/85 border border-[#81c784]/35 rounded-[24px] p-4 sm:p-5 shadow-[0_15px_35px_rgba(0,0,0,0.35)] flex flex-col justify-between group hover:border-[#81c784] hover:shadow-[0_22px_50px_rgba(46,125,50,0.4)] transition-all duration-300 backdrop-blur-md"
            >
              <div>
                {/* 3D HARDCOVER BOOK PREVIEW */}
                <div
                  className="relative aspect-[16/11.3] rounded-xl overflow-hidden bg-black shadow-lg mb-4 cursor-pointer group-hover:-translate-y-1.5 transition-transform duration-300"
                  onClick={() => {
                    soundFx.playPageTurn();
                    onSelectBook(book.id);
                  }}
                  title={`Klik untuk membaca ${book.judul}`}
                >
                  {/* Left Spine Crease Depth */}
                  <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10 pointer-events-none"></div>

                  {/* Cover Image */}
                  <img
                    src={book.cover}
                    alt={book.judul}
                    className="w-full h-full object-cover select-none block transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Sheen Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>

                  {/* Page Count Badge */}
                  <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/20 z-10">
                    {book.halaman} Hal
                  </div>

                  {/* Theme Badge */}
                  <div className="absolute top-2.5 left-3 bg-[#2e7d32]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm z-10">
                    {book.badge}
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <span className="px-4 py-2 rounded-full bg-[#2e7d32] text-white text-xs font-bold tracking-wide shadow-xl flex items-center gap-1.5 transform group-hover:scale-105 transition-transform border border-white/30">
                      <BookOpen size={14} /> Buka Buku 3D
                    </span>
                  </div>
                </div>

                {/* BOOK TYPOGRAPHY */}
                <div className="text-left">
                  {/* Author & Age Tag */}
                  <div className="flex items-center gap-1.5 text-xs text-[#a5d6a7] font-medium mb-1">
                    <User size={12} className="text-[#81c784] shrink-0" />
                    <span className="truncate">{book.penulis}</span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => {
                      soundFx.playPageTurn();
                      onSelectBook(book.id);
                    }}
                    className="font-storybook text-lg font-bold text-white leading-snug line-clamp-2 cursor-pointer group-hover:text-[#a5d6a7] transition-colors"
                  >
                    {book.judul}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-xs text-[#c8e6c9]/90 mt-2 line-clamp-2 leading-relaxed">
                    {book.deskripsi}
                  </p>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-5 pt-3 border-t border-white/10 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    soundFx.playPageTurn();
                    onSelectBook(book.id);
                  }}
                  className="w-full py-2.5 rounded-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer border border-[#81c784]/40 hover:shadow-lg"
                >
                  <BookOpen size={14} />
                  <span>Baca Flipbook 3D</span>
                </button>

                <a
                  href={book.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 text-[11px] font-semibold text-[#81c784] hover:text-white transition-colors py-1"
                >
                  <Download size={12} />
                  <span>Unduh PDF Asli</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
