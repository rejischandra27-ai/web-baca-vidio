import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Leaf, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function Navbar({ onOpenAppModal, onOpenStoryModal, onOpenVideoModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !isAudioOn;
    setIsAudioOn(nextState);
    soundFx.toggleAmbient(nextState);
    if (nextState) soundFx.playChime(660);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Buku', href: '#buku', onClick: onOpenStoryModal },
    { name: 'Vidio', href: '#vidio', onClick: onOpenVideoModal },
    { name: 'Tentang Kami', href: '#tentang' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f2f8f1]/90 backdrop-blur-md shadow-sm py-3 border-b border-[#c8e6c9]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO: ECHO GREEN */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group cursor-pointer"
          onClick={() => soundFx.playChime(580)}
        >
          <span className="p-1.5 rounded-xl bg-[#2e7d32]/10 text-[#2e7d32] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Leaf size={22} className="fill-[#2e7d32]/20 text-[#2e7d32]" />
          </span>
          <div className="flex flex-col">
            <span className="font-storybook text-lg tracking-[0.16em] font-extrabold text-[#0e2b17]">
              ECHO GREEN
            </span>
            <span className="text-[10px] tracking-wider font-semibold text-[#2e7d32] uppercase -mt-1">
              Petualangan Sahabat Alam
            </span>
          </div>
        </a>

        {/* DESKTOP MENU: Home, Buku, Vidio, Tentang Kami */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#1b4d24]">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                if (item.onClick) {
                  e.preventDefault();
                  item.onClick();
                }
                soundFx.playChime(520);
              }}
              className="hover:text-[#2e7d32] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2e7d32] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* RIGHT ACTIONS: AMBIENT SOUND & CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Ambient Sound Button */}
          <button
            onClick={toggleSound}
            title={isAudioOn ? 'Matikan Suara Alam' : 'Putar Suara Angin & Kicau Burung Hutan'}
            className={`p-2 rounded-full transition-all duration-300 ${
              isAudioOn
                ? 'bg-[#2e7d32] text-white shadow-md shadow-[#2e7d32]/25 animate-pulse'
                : 'bg-[#c8e6c9]/60 text-[#406349] hover:text-[#2e7d32] hover:bg-[#c8e6c9]'
            }`}
          >
            {isAudioOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* CTA: Mulai Membaca */}
          <button
            onClick={() => {
              soundFx.playChime(620);
              onOpenStoryModal();
            }}
            className="px-6 py-2.5 rounded-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white text-xs font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Mulai Membaca 🌱
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleSound}
            className={`p-2 rounded-full ${
              isAudioOn ? 'bg-[#2e7d32] text-white' : 'bg-[#c8e6c9]/60 text-[#406349]'
            }`}
          >
            {isAudioOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#0e2b17] p-1.5 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f2f8f1] border-b border-[#c8e6c9] px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-4 text-base font-semibold text-[#0e2b17]">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                  soundFx.playChime(520);
                }}
                className="py-1 hover:text-[#2e7d32]"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStoryModal();
              }}
              className="mt-2 w-full py-2.5 rounded-full bg-[#2e7d32] text-white text-sm font-semibold shadow"
            >
              Mulai Membaca 🌱
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
