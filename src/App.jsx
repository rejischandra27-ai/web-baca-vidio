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
  const [selectedVideoId, setSelectedVideoId] = useState("pantai");
  const [videoCategory, setVideoCategory] = useState("all");
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

  const handleOpenBook = (bookId = "detektif-sampah") => {
    setSelectedBookId(bookId);
    setIsStoryModalOpen(true);
  };

  const handleOpenVideo = (videoId = "pantai") => {
    setSelectedVideoId(videoId);
    setIsVideoModalOpen(true);
  };

  const handleSelectVideoCategory = (category) => {
    setVideoCategory(category);
    if (category === "animasi") {
      setSelectedVideoId("pantai");
    } else if (category === "bercerita") {
      setSelectedVideoId("rara-bimo");
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f9f4] text-[#0e2b17] relative flex flex-col font-sans selection:bg-[#2e7d32] selection:text-white">
      {/* FIXED NAVIGATION (Home, Buku, Vidio Animasi, Vidio Bercerita, Tentang Kami) */}
      <Navbar
        onOpenAppModal={() => setIsAppModalOpen(true)}
        onOpenStoryModal={() => handleOpenBook("detektif-sampah")}
        onOpenVideoModal={() => handleOpenVideo("pantai")}
        onSelectVideoCategory={handleSelectVideoCategory}
      />

      {/* MAIN CONTENT SECTIONS */}
      <main className="flex-1">
        {/* 1. HERO SECTION: Lestarikan Alam, Rayakan Petualangan (Buku Carousel) */}
        <HeroSection
          onOpenStoryModal={(bookId) => handleOpenBook(bookId || "detektif-sampah")}
        />

        {/* 2. BUKU SECTION: 4 Buku Cerita Anak Sahabat Alam */}
        <MeadowSection
          onSelectBook={(bookId) => handleOpenBook(bookId)}
        />

        {/* 3. VIDIO SECTION: Vidio Animasi & Vidio Bercerita */}
        <ActionSection
          activeCategory={videoCategory}
          onSelectCategory={setVideoCategory}
          onOpenVideoModal={(videoId) => handleOpenVideo(videoId || "pantai")}
        />

        {/* 4. TENTANG KAMI SECTION: Membaca Digital, Lestarikan Hutan & Profil Tim */}
        <NightSection
          onOpenStoryModal={(bookId) => handleOpenBook(bookId || "rara-dan-bimo")}
          onOpenVideoModal={(videoId) => handleOpenVideo(videoId || "pantai")}
        />
      </main>

      {/* FOOTER */}
      <Footer
        onOpenStoryModal={() => handleOpenBook("detektif-sampah")}
        onOpenVideoModal={() => handleOpenVideo("pantai")}
        onSelectVideoCategory={handleSelectVideoCategory}
      />

      {/* INTERACTIVE MODALS */}
      <StoryReaderModal
        isOpen={isStoryModalOpen}
        initialBookId={selectedBookId}
        onClose={() => setIsStoryModalOpen(false)}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        initialVideoId={selectedVideoId}
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
