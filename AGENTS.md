# AGENTS.md - Kontrak Navigasi & Operasi Proyek

## 1. Identitas Proyek & Status Saat Ini
- **Nama Proyek:** Echo Green (Web Cerita & Animasi Anak Ramah Lingkungan)
- **Fase Saat Ini:** `BUILD` (7 Real Books, 13 Real Eco Videos & 7 Member Profiles Integrated)
- **Tujuan:** Mengembangkan landing page interaktif bertema **Echo Green** dengan menu canonical: **Home**, **Buku**, **Vidio Animasi**, **Vidio Bercerita**, **Tentang Kami**. Dilengkapi profil 7 anggota kelompok / pendidik PAUD beserta etalase karya nyata:
  1. *Evi Noviyah, S.Pd.* (Buku *Detektif Cilik Pemilah Sampah*, Animasi 2D & Praktik Kelas)
  2. *Ana Tri Rahayu, S.Pd.* (Buku *Rara dan Bimo Sedih Karena Asap Pekat*, Animasi 3D & Gazebo)
  3. *Wilda Widya Panji Buwani, S.Pd.* (Buku *Nail, Alifa, & Rahasia Pohon Jambu*, Animasi 3D & Mendongeng)
  4. *Ria Oktari Pamungkas, S.Pd.* (Buku *Kali Kecil, Sahabat Besar*, Animasi Cerita & Mendongeng TK Islam Al Falah)
  5. *Effi Tugiarti, S.Pd.* (Buku *Baim dan Rani Sedih Melihat Ikan Kecil*, Animasi 3D & Mendongeng)
  6. *Hartati, S.Kom.* (Buku *Jejak Kaki Kiki di Tepi Pantai*, Animasi Musik & Mendongeng RA Ash-Shafa)
  7. *Yanike Martinawaty, S.Pd.* (Buku *Bumi Sedang Kepanasan*, Animasi 3D Jaga Bumi Kita - NIM 4862560113)
  Serta galeri 13 video edukasi anak asli dari pengguna:
  - **Vidio Animasi (7 Video):**
    1. *Jaga Bumi Kita* (Karya Yanike Martinawaty, S.Pd, Animasi 3D 0:58)
    2. *Ayo-Ayo Jaga Hutan (Rara dan Bimo)* (Karya Ana Tri Rahayu, S.Pd., Animasi 3D 1:32)
    3. *Detektif Cilik Pemilah Sampah* (Karya Evi Noviyah, S.Pd., Animasi 2D 2:20)
    4. *Kali Kecil Sahabat Besar* (Karya Ria Oktari Pamungkas, Animasi Cerita 2:05)
    5. *Ikan Kecil Riang* (Karya Effi Tugiarti, S.Pd, Animasi 3D 1:11)
    6. *Jaga Bumi* (Karya Wilda Widya Panji Buwani, Animasi 3D 1:37)
    7. *Jangan Buang Sampah di Pantai* (Karya Hartati, Animasi Musik 1:55)
  - **Vidio Bercerita (6 Video):**
    1. *Mendongeng: Kali Kecil, Sahabat Besar* (Karya Ria Oktari Pamungkas, TK Islam Al Falah 10:08)
    2. *Implementasi Detektif Cilik Pemilah Sampah* (Karya Evi Noviyah, Praktik Kelas 4:45)
    3. *Mendongeng: Rara dan Bimo Sedih* (Karya Ana Tri Rahayu, S.Pd., Gazebo 8:16)
    4. *Mendongeng Nail, Alifa, dan Rahasia Pohon Jambu* (Karya Ibu Wilda, TK Putra Pertiwi 12:58)
    5. *Mendongeng Baim dan Rani Sedih Melihat Ikan Kecil* (Karya Effi Tugiarti, S.Pd, TK Islam 6:19)
    6. *Mendongeng Jejak Kaki Kiki di Tepi Pantai* (Karya Hartati, RA Ash-Shafa 10:26)
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
