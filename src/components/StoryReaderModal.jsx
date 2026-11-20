import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, BookOpen, Download, ChevronDown, Check } from 'lucide-react';
import { PageFlip } from 'page-flip';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/sound';

export default function StoryReaderModal({ isOpen, onClose, initialBookId = "detektif-sampah" }) {
  const [selectedBookId, setSelectedBookId] = useState(initialBookId);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(16);
  const [isLoading, setIsLoading] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const wrapperRef = useRef(null);
  const pageFlipRef = useRef(null);

  const booksData = {
    "detektif-sampah": {
      id: "detektif-sampah",
      judul: "Detektif Cilik Pemilah Sampah",
      penulis: "Evi Noviyah",
      total: 16,
      badge: "Pilah Sampah",
      pdf: "https://github.com/rejischandra27-ai/web-baca-vidio/releases/download/v1.0.0/buku-detektif-pemilah-sampah.pdf",
      pages: Array.from({ length: 16 }, (_, i) => `/assets/books/detektif-sampah/page_${i + 1}.jpg`)
    },
    "rara-dan-bimo": {
      id: "rara-dan-bimo",
      judul: "Rara dan Bimo Sedih Karena Asap Pekat",
      penulis: "Ana Tri Rahayu, S.Pd.",
      total: 19,
      badge: "Hutan Lestari",
      pdf: "https://github.com/rejischandra27-ai/web-baca-vidio/releases/download/v1.0.0/buku-rara-dan-bimo.pdf",
      pages: Array.from({ length: 19 }, (_, i) => `/assets/books/rara-bimo/page_${i + 1}.jpg`)
    },
    "rahasia-pohon-jambu": {
      id: "rahasia-pohon-jambu",
      judul: "Nail, Alifa, dan Rahasia Pohon Jambu",
      penulis: "Wilda Widya Panji Buwani",
      total: 16,
      badge: "Pohon Rindang",
      pdf: "https://github.com/rejischandra27-ai/web-baca-vidio/releases/download/v1.0.0/buku-rahasia-pohon-jambu.pdf",
      pages: Array.from({ length: 16 }, (_, i) => `/assets/books/rahasia-pohon-jambu/page_${i + 1}.jpg`)
    },
    "kali-kecil": {
      id: "kali-kecil",
      judul: "Kali Kecil, Sahabat Besar",
      penulis: "Ria Oktari Pamungkas",
      total: 15,
      badge: "Sungai Bersih",
      pdf: "https://github.com/rejischandra27-ai/web-baca-vidio/releases/download/v1.0.0/buku-kali-kecil.pdf",
      pages: Array.from({ length: 15 }, (_, i) => `/assets/books/kali-kecil/page_${i + 1}.jpg`)
    },
    "baim-dan-rani": {
      id: "baim-dan-rani",
      judul: "Baim dan Rani",
      subjudul: "Sedih Melihat Ikan Kecil yang Tidak Bisa Berenang karena Dikelilingi Sampah",
      penulis: "Effi Tugiarti, S.Pd",
      total: 19,
      badge: "Sungai Bersih",
      pdf: "/assets/books/buku-baim-dan-rani.pdf",
      pages: Array.from({ length: 19 }, (_, i) => `/assets/books/baim-dan-rani/page_${i + 1}.jpg`)
    },
    "jejak-kaki-kiki": {
      id: "jejak-kaki-kiki",
      judul: "Jejak Kaki Kiki di Tepi Pantai",
      subjudul: "Petualangan Kiki & Bimo Menjaga Laut Bersih",
      penulis: "Hartati",
      total: 19,
      badge: "Pantai Bersih",
      pdf: "/assets/books/buku-jejak-kaki-kiki.pdf",
      pages: Array.from({ length: 19 }, (_, i) => `/assets/books/jejak-kaki-kiki/page_${i + 1}.jpg`)
    },
    "bumi-kepanasan": {
      id: "bumi-kepanasan",
      judul: "Bumi Sedang Kepanasan",
      subjudul: "Kisah Lala & Bimo Menjaga Suhu Bumi Tetap Sejuk",
      penulis: "Yanike Martinawaty, S.Pd",
      total: 14,
      badge: "Bumi Sejuk",
      pdf: "https://github.com/rejischandra27-ai/web-baca-vidio/releases/download/v1.0.0/buku-bumi-sedang-kepanasan.pdf",
      pages: Array.from({ length: 14 }, (_, i) => `/assets/books/bumi-kepanasan/page_${i + 1}.jpg`)
    }
  };

  useEffect(() => {
    if (initialBookId && booksData[initialBookId]) {
      setSelectedBookId(initialBookId);
      setCurrentPage(0);
      setIsDropdownOpen(false);
    }
  }, [initialBookId, isOpen]);

  // INITIALIZE PAGE-FLIP ENGINE
  useEffect(() => {
    if (!isOpen || !wrapperRef.current) return;

    setIsLoading(true);
    setCurrentPage(0);
    setIsDropdownOpen(false);

    // Destroy existing instance safely
    if (pageFlipRef.current) {
      try {
        pageFlipRef.current.destroy();
      } catch (e) {}
      pageFlipRef.current = null;
    }

    // Clean wrapper inner DOM
    wrapperRef.current.innerHTML = '';

    // Create target mount element
    const bookEl = document.createElement('div');
    bookEl.className = 'stf__parent';
    wrapperRef.current.appendChild(bookEl);

    const currentBook = booksData[selectedBookId] || booksData["detektif-sampah"];
    setTotalPages(currentBook.total);

    // Responsive size calculation
    const containerWidth = wrapperRef.current.clientWidth || 800;
    const baseW = Math.min(840, Math.max(320, containerWidth - 24));
    const baseH = Math.round(baseW * (1241 / 1755)); // exact aspect ratio of book

    const flip = new PageFlip(bookEl, {
      width: baseW,
      height: baseH,
      size: 'stretch',
      minWidth: 300,
      maxWidth: 960,
      minHeight: 210,
      maxHeight: 680,
      drawShadow: true,
      maxShadowOpacity: 0.65,
      showCover: false,
      usePortrait: true, // Clean single landscape page flip
      startPage: 0,
      flippingTime: 750,
      useMouseEvents: true,
      swipeDistance: 30,
      showPageCorners: true, // Curled corner hint on hover!
    });

    // Load book pages
    flip.loadFromImages(currentBook.pages);

    flip.on('init', () => {
      setIsLoading(false);
    });

    flip.on('flip', (e) => {
      const pageIndex = e.data;
      setCurrentPage(pageIndex);
      soundFx.playPageTurn();

      // Final page celebration!
      if (pageIndex === currentBook.total - 1) {
        confetti({
          particleCount: 110,
          spread: 85,
          origin: { y: 0.6 },
          colors: ['#2e7d32', '#81c784', '#e69500', '#ffffff']
        });
        soundFx.playChime(880);
      }
    });

    pageFlipRef.current = flip;

    // Window resize handler
    const handleResize = () => {
      if (pageFlipRef.current && wrapperRef.current) {
        pageFlipRef.current.update();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (pageFlipRef.current) {
        try {
          pageFlipRef.current.destroy();
        } catch (e) {}
        pageFlipRef.current = null;
      }
    };
  }, [isOpen, selectedBookId]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleNext = () => {
    if (pageFlipRef.current) {
      pageFlipRef.current.flipNext('top');
    }
  };

  const handlePrev = () => {
    if (pageFlipRef.current) {
      pageFlipRef.current.flipPrev('top');
    }
  };

  const handleJumpToPage = (idx) => {
    if (pageFlipRef.current) {
      pageFlipRef.current.turnToPage(idx);
    }
  };

  const handleSwitchBook = (bookId) => {
    if (bookId !== selectedBookId) {
      soundFx.playChime(620);
      setSelectedBookId(bookId);
      setIsDropdownOpen(false);
    }
  };

  if (!isOpen) return null;

  const currentBook = booksData[selectedBookId] || booksData["detektif-sampah"];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        {/* MODAL CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-[#f4f9f4] rounded-3xl shadow-2xl border-2 border-[#c8e6c9] overflow-hidden flex flex-col max-h-[96vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER BAR: SINGLE CLEAN LINE WITH SCALABLE BOOK DROPDOWN */}
          <div className="px-4 sm:px-6 py-3 bg-[#e2f0e0] border-b border-[#c8e6c9] flex items-center justify-between gap-3 select-none relative z-30">
            
            {/* LEFT: BOOK TITLE & SCALABLE DROPDOWN */}
            <div className="relative min-w-0 flex items-center gap-2">
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-storybook font-bold text-sm sm:text-base text-[#0e2b17] truncate max-w-[190px] sm:max-w-xs md:max-w-md">
                    {currentBook.judul}
                  </h3>

                  {/* SCALABLE BOOK SWITCHER DROPDOWN BUTTON */}
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/80 hover:bg-white text-[11px] font-bold text-[#1b5e20] border border-[#c8e6c9] shadow-sm transition-all cursor-pointer shrink-0"
                    title="Ganti Judul Buku"
                  >
                    <span>Ganti Buku</span>
                    <ChevronDown size={13} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <span className="text-[11px] text-[#406349] font-medium truncate">
                  Penulis: {currentBook.penulis}
                </span>
              </div>

              {/* DROPDOWN MENU POPOVER (CAN FIT 2, 10, OR 100 BOOKS WITHOUT OVERFLOWING HEADER!) */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-[#c8e6c9] p-2 z-50 animate-fadeIn max-h-72 overflow-y-auto">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#406349] px-3 py-1.5 border-b border-slate-100">
                    Pilih Buku Cerita Digital:
                  </div>
                  
                  {Object.values(booksData).map((b) => (
                    <button
                      key={b.id}
                      onClick={() => handleSwitchBook(b.id)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start justify-between gap-2 text-xs cursor-pointer ${
                        selectedBookId === b.id
                          ? 'bg-[#2e7d32]/10 text-[#1b5e20] font-bold'
                          : 'hover:bg-slate-50 text-[#0e2b17]'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="truncate font-semibold">{b.judul}</div>
                        <div className="text-[10px] text-slate-500">{b.penulis} • {b.total} Halaman</div>
                      </div>
                      {selectedBookId === b.id && <Check size={16} className="text-[#2e7d32] shrink-0 mt-0.5" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT CONTROLS: DOWNLOAD, PAGE COUNTER, CLOSE BUTTON */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <a
                href={currentBook.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-[#2e7d32] transition-colors shadow-sm"
                title="Buka atau Unduh Berkas PDF Asli"
              >
                <Download size={13} /> Unduh PDF
              </a>

              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#c8e6c9] text-[#0e2b17]">
                {currentPage + 1} / {totalPages}
              </span>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white/80 text-[#0e2b17] transition-colors cursor-pointer"
                aria-label="Tutup Buku"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* PAGE FLIP STAGE (CLEAN 100% UNOBSTRUCTED READING AREA) */}
          <div className="flex-1 overflow-hidden p-2 sm:p-5 bg-[#0a1f11] flex flex-col items-center justify-center relative min-h-[420px] select-none">
            
            {/* LOADING SPINNER */}
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a1f11] z-30">
                <div className="w-10 h-10 border-4 border-[#2e7d32] border-t-transparent rounded-full animate-spin mb-3"></div>
                <p className="text-xs font-bold text-white/80">Menyiapkan Halaman Buku 3D...</p>
              </div>
            )}

            {/* MOUNT ELEMENT FOR PAGEFLIP (NO FLOATING ARROWS OVERLAPPING CONTENT!) */}
            <div
              ref={wrapperRef}
              className="w-full flex-1 flex items-center justify-center max-h-[74vh] relative"
            ></div>
          </div>

          {/* BOTTOM BAR: DEDICATED, INTUITIVE NAVIGATION CONTROLS */}
          <div className="px-4 sm:px-6 py-3 bg-[#e2f0e0] border-t border-[#c8e6c9] flex items-center justify-between select-none z-20">
            {/* PREVIOUS BUTTON */}
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className={`inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                currentPage === 0
                  ? 'opacity-40 cursor-not-allowed text-slate-400 bg-slate-100'
                  : 'bg-white hover:bg-white/90 text-[#0e2b17] shadow-sm cursor-pointer'
              }`}
            >
              <ChevronLeft size={16} /> Sebelumnya
            </button>

            {/* QUICK PAGE JUMP DOTS / INDICATORS */}
            <div className="flex items-center gap-1 overflow-x-auto max-w-[160px] sm:max-w-md py-1 px-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleJumpToPage(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentPage === idx
                      ? 'w-7 bg-[#2e7d32]'
                      : 'w-2 bg-[#c8e6c9] hover:bg-[#81c784]'
                  }`}
                  title={`Ke Halaman ${idx + 1}`}
                />
              ))}
            </div>

            {/* NEXT BUTTON */}
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-1 px-5 py-2 rounded-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
            >
              {currentPage === totalPages - 1 ? (
                <>Selesai 🎉</>
              ) : (
                <>Selanjutnya <ChevronRight size={16} /></>
              )}
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
