import React from 'react';
import { Leaf } from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function Footer({ onOpenStoryModal, onOpenVideoModal, onSelectVideoCategory }) {
  return (
    <footer className="relative pt-16 pb-12 px-6 bg-[#edf5ec] overflow-hidden text-center border-t border-[#d5ead3]">
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* BRAND LOGO */}
        <div
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => {
            soundFx.playChime(660);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="p-2 rounded-2xl bg-[#2e7d32]/10 text-[#2e7d32] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Leaf size={30} className="fill-[#2e7d32]/25 text-[#2e7d32]" />
          </span>

          <h3 className="font-storybook text-2xl tracking-[0.2em] font-extrabold text-[#0e2b17]">
            ECHO GREEN
          </h3>
        </div>

        {/* TAGLINE */}
        <p className="mt-3 text-base text-[#335e3d] font-normal italic font-storybook">
          Petualangan Kecil. Dampak Besar Bagi Kelestarian Bumi.
        </p>

        {/* EXACT MENU: Home, Buku, Vidio Animasi, Vidio Bercerita, Tentang Kami */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-[#1b4d24] font-semibold">
          <a
            href="#home"
            className="hover:text-[#2e7d32] transition-colors"
            onClick={() => soundFx.playChime(520)}
          >
            Home
          </a>
          <a
            href="#buku"
            onClick={() => {
              soundFx.playPageTurn();
            }}
            className="hover:text-[#2e7d32] transition-colors"
          >
            Buku
          </a>
          <a
            href="#vidio"
            onClick={() => {
              soundFx.playChime(520);
              if (onSelectVideoCategory) onSelectVideoCategory('animasi');
            }}
            className="hover:text-[#2e7d32] transition-colors"
          >
            Vidio Animasi
          </a>
          <a
            href="#vidio"
            onClick={() => {
              soundFx.playChime(520);
              if (onSelectVideoCategory) onSelectVideoCategory('bercerita');
            }}
            className="hover:text-[#2e7d32] transition-colors"
          >
            Vidio Bercerita
          </a>
          <a
            href="#tentang"
            className="hover:text-[#2e7d32] transition-colors"
            onClick={() => soundFx.playChime(520)}
          >
            Tentang Kami
          </a>
        </div>

        {/* ATTRIBUTION */}
        <div className="mt-8 pt-6 border-t border-[#c8e6c9]/60 w-full max-w-md text-xs text-[#5c8567] leading-relaxed">
          <p>© {new Date().getFullYear()} Echo Green • Rumah Cerita & Animasi Ramah Lingkungan.</p>
          <p className="mt-1">
            Mendukung literasi hijau dan pembelajaran bebas limbah kertas untuk anak Nusantara.
          </p>
        </div>
      </div>
    </footer>
  );
}
