import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MeadowSection from './components/MeadowSection';
import ActionSection from './components/ActionSection';
import NightSection from './components/NightSection';
import Footer from './components/Footer';
import StoryReaderModal from './components/StoryReaderModal';
import VideoModal from './components/VideoModal';
import AppModal from './components/AppModal';

export default function App() {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState("detektif-sampah");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

  const handleOpenBook = (bookId = "detektif-sampah") => {
    setSelectedBookId(bookId);
    setIsStoryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f4f9f4] text-[#0e2b17] relative flex flex-col font-sans selection:bg-[#2e7d32] selection:text-white">
      {/* FIXED NAVIGATION (Home, Buku, Vidio, Tentang Kami) */}
      <Navbar
        onOpenAppModal={() => setIsAppModalOpen(true)}
        onOpenStoryModal={() => handleOpenBook("detektif-sampah")}
        onOpenVideoModal={() => setIsVideoModalOpen(true)}
      />

      {/* MAIN CONTENT SECTIONS */}
      <main className="flex-1">
        {/* 1. HERO SECTION: Lestarikan Alam, Rayakan Petualangan (Buku Carousel) */}
        <HeroSection
          onOpenStoryModal={(bookId) => handleOpenBook(bookId || "detektif-sampah")}
        />

        {/* 2. BUKU SECTION: 2 Buku Utama (Detektif Cilik & Rara dan Bimo) */}
        <MeadowSection
          onSelectBook={(bookId) => handleOpenBook(bookId)}
        />

        {/* 3. VIDIO SECTION: Vidio Animasi Aksi Hijau */}
        <ActionSection
          onOpenVideoModal={() => setIsVideoModalOpen(true)}
        />

        {/* 4. TENTANG KAMI SECTION: Membaca Digital, Lestarikan Hutan */}
        <NightSection
          onOpenStoryModal={() => handleOpenBook("rara-dan-bimo")}
        />
      </main>

      {/* FOOTER */}
      <Footer
        onOpenStoryModal={() => handleOpenBook("detektif-sampah")}
        onOpenVideoModal={() => setIsVideoModalOpen(true)}
      />

      {/* INTERACTIVE MODALS */}
      <StoryReaderModal
        isOpen={isStoryModalOpen}
        initialBookId={selectedBookId}
        onClose={() => setIsStoryModalOpen(false)}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <AppModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        onStartReading={() => handleOpenBook("detektif-sampah")}
      />
    </div>
  );
}
