# AGENTS.md - Kontrak Navigasi & Operasi Proyek

## 1. Identitas Proyek & Status Saat Ini
- **Nama Proyek:** Echo Green (Web Cerita & Animasi Anak Ramah Lingkungan)
- **Fase Saat Ini:** `BUILD` (4 Real Books & 4 Real Storytelling Videos Fully Integrated)
- **Tujuan:** Mengembangkan landing page interaktif bertema **Echo Green** dengan menu canonical: **Home**, **Buku**, **Vidio Animasi**, **Vidio Bercerita**, **Tentang Kami**. Dilengkapi 4 buku cerita digital nyata dari pengguna:
  1. *Detektif Cilik Pemilah Sampah* (Evi Noviyah, 16 Halaman)
  2. *Rara dan Bimo Sedih Karena Asap Pekat* (Ana Tri Rahayu, S.Pd., 19 Halaman)
  3. *Nail, Alifa, dan Rahasia Pohon Jambu* (Wilda Widya Panji Buwani, 16 Halaman)
  4. *Kali Kecil, Sahabat Besar* (Ria Oktari Pamungkas, 15 Halaman)
  Serta galeri 4 video edukasi anak asli dari pengguna:
  1. *Jangan Buang Sampah di Pantai* (Karya Hartati, Animasi Musik 1:55)
  2. *Implementasi Detektif Cilik Pemilah Sampah* (Karya Evi Noviyah, Praktik Kelas 4:45)
  3. *Mendongeng Rara dan Bimo Sedih* (Karya Ana Tri Rahayu, S.Pd., Gazebo 8:16)
  4. *Mendongeng Nail, Alifa, dan Rahasia Pohon Jambu* (Karya Ibu Wilda, TK Putra Pertiwi 12:58)
  Dilengkapi mockup tablet interaktif dan modal pemutar video dengan switcher playlist.

## 2. Peta Dokumen & Tanggung Jawab Subjek
- `docs/PLAN.md` : Rencana implementasi, urutan pengerjaan, dan spesifikasi buku & animasi.
- `docs/DESIGN.md` : Panduan warna alam hijau segar, tipografi ramah anak, dan tata letak responsif.

## 3. Aturan Non-Negotiable
- Menu wajib persis: `Home`, `Buku`, `Vidio Animasi`, `Vidio Bercerita`, `Tentang Kami`.
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
