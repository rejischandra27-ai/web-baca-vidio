# Implementation Plan: Echo Green Interactive Landing Page

## 1. Scope & Objective
Mengintegrasikan 4 buku cerita anak bertema lingkungan hidup (Echo Green):
1. `Detektif Pemilah SampH (29.7 x 21 cm) (1).pdf` (16 Halaman, Evi Noviyah)
2. `Ana Tri Rahayu_Buku Cerita Rara dan Bimo Sedih.pdf` (19 Halaman, Ana Tri Rahayu, S.Pd.)
3. `Wilda Widya PB_4862560109_Nail, Alifa, dan Rahasia Pohon Jambu (2).pdf` (16 Halaman, Wilda Widya Panji Buwani)
4. `Ria Oktari Pamungkas_4862560112_Kali Kecil, Sahabat Besar.pdf` (15 Halaman, Ria Oktari Pamungkas)

## 2. Aset & Koleksi 4 Buku Baru yang Diimplementasikan:
1. **Detektif Cilik Pemilah Sampah:**
   - Penulis: Evi Noviyah (Usia 5-6 Tahun, 16 Halaman)
   - Tema: Petualangan memilah sampah organik, kertas, dan plastik demi bumi asri.
   - Cover: `public/assets/books/cover-detektif-sampah.jpg`
   - PDF: `public/assets/books/buku-detektif-pemilah-sampah.pdf`
   - Halaman Baca: `public/assets/books/detektif-sampah/page_1.jpg` s/d `page_16.jpg`
2. **Rara dan Bimo Sedih Karena Asap Pekat:**
   - Penulis: Ana Tri Rahayu, S.Pd. (Semua Usia, 19 Halaman)
   - Tema: Dampak kebakaran hutan & polusi asap, pentingnya merawat pohon agar udara tetap segar.
   - Cover: `public/assets/books/cover-rara-bimo.jpg`
   - PDF: `public/assets/books/buku-rara-dan-bimo.pdf`
   - Halaman Baca: `public/assets/books/rara-bimo/page_1.jpg` s/d `page_19.jpg`
3. **Nail, Alifa, dan Rahasia Pohon Jambu:**
   - Penulis: Wilda Widya Panji Buwani (Usia 4-7 Tahun, 16 Halaman)
   - Tema: Rahasia keteduhan pohon jambu Jamaika "Jaja", merawat tanaman sekolah, dan menjaga kebersihan Setu Bungur.
   - Cover: `public/assets/books/cover-rahasia-pohon-jambu.jpg`
   - PDF: `public/assets/books/buku-rahasia-pohon-jambu.pdf`
   - Halaman Baca: `public/assets/books/rahasia-pohon-jambu/page_1.jpg` s/d `page_16.jpg`
4. **Kali Kecil, Sahabat Besar:**
   - Penulis: Ria Oktari Pamungkas (Semua Usia, 15 Halaman)
   - Tema: Bu Guru Ria bersama anak-anak bergotong royong membersihkan kali kecil dekat sekolah agar aliran air bersih dan jernih.
   - Cover: `public/assets/books/cover-kali-kecil.jpg`
   - PDF: `public/assets/books/buku-kali-kecil.pdf`
   - Halaman Baca: `public/assets/books/kali-kecil/page_1.jpg` s/d `page_15.jpg`

## 3. Fitur Interaktif Pembaca Buku (Flipbook / Page Curl Effect):
- **Tampilan Bersih Bebas Obstruksi (100% Unobstructed):**
  * Tombol panah bulat mengambang di tengah yang menutupi konten/foto telah **dihapus sepenuhnya**.
  * Pengguna bernavigasi menggunakan tombol dedicated di bilah bawah: `[ < Sebelumnya ]` dan `[ Selanjutnya > ]`, titik slider halaman, tombol panah keyboard, atau langsung menarik sudut kertas (Page Curl).
- **Arsitektur Header Skalabel (Scalable Book Switcher):**
  * Tab horizontal yang sebelumnya berpotensi bertumpuk jika bukunya banyak telah diganti dengan **Dropdown Menu Elegan ("Ganti Buku ▾")**.
  * Mampu menampung 2, 10, hingga ratusan buku tanpa pernah menumpuk atau merusak tata letak header.
  * Judul dan penulis buku yang sedang dibaca ditampilkan dengan jelas dan rapi.
- **True Page Flip / Page Curl Engine (`page-flip`):**
  * Efek lipatan ujung kertas (*page curl*) nyata berbasis kalkulasi geometri dan bayangan lengkung (*curved shadow*).
  * Pengguna dapat mengarahkan kursor/jari ke ujung sudut kertas (atas/bawah), menarik (*drag & peel*), dan melipat kertas secara realistis.
  * Suara kertas membalik akustik via Web Audio API.
  * Selebrasi confetti di halaman akhir saat anak selesai membaca.

## 4. Status Verifikasi & Akses Demo:
- `npm run build`: **LULUS** (Bundle sukses di-generate di `dist/`)
- Dev Server Lokal: `http://localhost:3000/`
- **Cloudflare Public Tunnel (Demo Online):** `https://cycles-stat-set-hold.trycloudflare.com` (Status: **Aktif & Terverifikasi HTTP 200**)
