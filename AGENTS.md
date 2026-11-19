# AGENTS.md - Kontrak Navigasi & Operasi Proyek

## 1. Identitas Proyek & Status Saat Ini
- **Nama Proyek:** Echo Green (Web Cerita & Animasi Anak Ramah Lingkungan)
- **Fase Saat Ini:** `BUILD` (4 Real Books Integrated: Detektif Cilik, Rara & Bimo, Rahasia Pohon Jambu, Kali Kecil)
- **Tujuan:** Mengembangkan landing page interaktif bertema **Echo Green** dengan menu canonical: **Home**, **Buku**, **Vidio**, **Tentang Kami**. Dilengkapi 4 buku cerita digital nyata dari pengguna:
  1. *Detektif Cilik Pemilah Sampah* (Evi Noviyah, 16 Halaman)
  2. *Rara dan Bimo Sedih Karena Asap Pekat* (Ana Tri Rahayu, S.Pd., 19 Halaman)
  3. *Nail, Alifa, dan Rahasia Pohon Jambu* (Wilda Widya Panji Buwani, 16 Halaman)
  4. *Kali Kecil, Sahabat Besar* (Ria Oktari Pamungkas, 15 Halaman)
  Dilengkapi carousel slider 4 buku pada mockup tablet di Hero Section, interactive flipbook reader (Page Flip / Curl 3D), unduhan PDF asli, pemutar video animasi, dan audio ambient.

## 2. Peta Dokumen & Tanggung Jawab Subjek
- `docs/PLAN.md` : Rencana implementasi, urutan pengerjaan, dan spesifikasi buku & animasi.
- `docs/DESIGN.md` : Panduan warna alam hijau segar, tipografi ramah anak, dan tata letak responsif.

## 3. Aturan Non-Negotiable
- Menu wajib persis: `Home`, `Buku`, `Vidio`, `Tentang Kami`.
- Visual bertema alam/lingkungan hijau (Eco Green).
- Background menyatu bersih tanpa potongan gambar goyang.
- Buku yang ditampilkan dan dapat dibaca adalah buku nyata dari pengguna di `public/assets/books/`.
- Stack teknologi canonical: Vite + React 18 + Tailwind CSS + Framer Motion.

## 4. Perintah Canonical
- Install: `npm install`
- Dev Server: `npm run dev` (Aktif di http://localhost:3000/)
- Cloudflare Tunnel Demo: `https://cycles-stat-set-hold.trycloudflare.com` (Live & Publik)
- Build: `npm run build` (Terverifikasi sukses, bundle siap produksi di `dist/`)
- Preview: `npm run preview`
