# 📁 Portfolio Template — Panduan Penggunaan

Template ini dibuat berdasarkan portfolio Shafira Adzra Erminabilah. Untuk membuat portfolio baru dari template ini, ikuti langkah-langkah berikut.

---

## 🚀 Cara Membuat Portfolio Baru

### Langkah 1 — Duplikat Folder

Salin seluruh folder proyek ini ke lokasi baru:
```
porto-adzra/          ← folder asli (jangan diubah)
porto-[namabaru]/     ← duplikat untuk klien baru
```

### Langkah 2 — Siapkan Gambar

Letakkan semua gambar klien baru di folder `images/`. Gambar yang perlu disiapkan:

| Gambar | Keterangan |
|---|---|
| `background.png` | Background hero section (desktop) |
| `responsive.png` | Background hero section (mobile) |
| `about-1.png` | Gambar about (kiri/atas) |
| `about-2.png` | Gambar about (kanan/bawah) |
| `soft-skills.png` | Gambar tab Soft Skills |
| `hard-skills.png` | Gambar tab Hard Skills |
| `skills.png` | Gambar tab Tools |
| `experiences.png` | Gambar tab Experience |
| `education.png` | Gambar tab Education |
| `journey.png` | Banner atas section Portfolio |
| `certif.png` | Gambar judul "Certification" |
| `certif-1.jpg` … `certif-N.jpg` | Foto-foto sertifikat |
| `portofolio.png` | Gambar judul "Portfolio" |
| `[company]-1.png` … | Gambar per section portfolio |
| `end.png` | Gambar penutup |

> 💡 **Tips:** Nama file bebas, yang penting path-nya sesuai dengan yang didaftarkan di `config.js`.

### Langkah 3 — Edit `config.js`

Buka file `config.js` dan ganti isi sesuai data klien baru. File ini adalah **satu-satunya file yang perlu diedit**.

```js
const CONFIG = {
  name:      "Nama Lengkap Klien",
  shortName: "NAMA",
  tagline:   "Profesi/tagline klien",
  description: "with a demonstrated history of working as <span>...</span>",

  colors: {
    primary:    "#107668",   // warna utama
    secondary:  "#9c2052",   // warna aksen
    background: "#f3f4e6",
    navBg:      "#e6e8c9",
  },

  // ... gambar dan portfolio sections
};
```

#### Cara menambah/mengurangi sertifikat:
```js
certifImages: [
  "images/certif-1.jpg",
  "images/certif-2.jpg",
  // tambah atau hapus baris sesuai jumlah sertifikat
],
```

#### Cara menambah section portfolio baru:
```js
portfolioSections: [
  {
    titleImage: "images/company-1.png",   // banner judul section
    items: [
      { src: "images/company-2.png", isTitle: false },  // gambar biasa (lebar penuh)
      { src: "images/company-3.png", isTitle: true  },  // gambar judul sub-section
      // tambah item sesuai kebutuhan
    ],
  },
  // tambah section lain...
],
```

### Langkah 4 — Buka di Browser

Buka `index.html` langsung di browser, atau jalankan live server jika menggunakan VS Code.

---

## 🎨 Mengganti Tema Warna

Setiap klien bisa punya warna tema berbeda. Cukup ubah di `config.js`:

```js
colors: {
  primary:    "#107668",   // warna navbar, underline, tombol CV
  secondary:  "#9c2052",   // warna aksen nama, link nav, copyright
  background: "#f3f4e6",   // warna background halaman
  navBg:      "#e6e8c9",   // background mobile nav drawer
},
```

---

## 📂 Struktur File

```
porto-[namabaru]/
├── index.html          ← ⛔ JANGAN DIEDIT
├── style.css           ← ⛔ JANGAN DIEDIT
├── config.js           ← ✅ EDIT INI untuk data klien baru
├── README_TEMPLATE.md  ← panduan ini
├── images/             ← ✅ GANTI SEMUA GAMBAR di sini
│   ├── background.png
│   ├── about-1.png
│   ├── certif-1.jpg
│   └── ...
└── assets/
    └── CV_NamaKlien.pdf   (opsional)
```

---

## ❓ FAQ

**Q: Apakah nama file gambar harus sama persis?**
A: Tidak! Nama file bebas asalkan path-nya sesuai yang ditulis di `config.js`.

**Q: Bagaimana cara menambah tab skills baru?**
A: Tambahkan entry baru di array `skills` di `config.js`:
```js
{ id: "new-tab", label: "NAMA TAB", image: "images/new-tab.png" },
```

**Q: Bagaimana cara menghapus tombol Download CV?**
A: Pastikan `cvFile` tidak ada (atau dikomentari) di `config.js`. Tombol otomatis tersembunyi.

**Q: Apakah bisa lebih dari 8 sertifikat?**
A: Bisa! Cukup tambahkan path gambar di array `certifImages`. Grid akan otomatis menyesuaikan.
