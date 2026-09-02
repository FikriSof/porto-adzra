/**
 * ============================================================
 *  PORTFOLIO TEMPLATE — CONFIG FILE
 * ============================================================
 *  Untuk membuat portfolio baru, cukup edit file ini saja!
 *  Ganti gambar di folder images/, lalu sesuaikan path di sini.
 * ============================================================
 */

const CONFIG = {

  /* ── IDENTITAS ─────────────────────────────────────────── */
  name:        "Shafira Adzra Erminabilah",   // nama lengkap (di hero section)
  shortName:   "ADZRA",                        // nama singkat di navbar
  tagline:     "Digital marketing enthusiast", // kalimat pertama di hero
  description: "with a demonstrated history of working as <span>social media and kol specialist</span>",
  // Uncomment baris di bawah jika ingin tombol Download CV
  // cvFile: "assets/CV_Shafira Adzra Erminabilah.pdf",

  /* ── WARNA TEMA ─────────────────────────────────────────── */
  colors: {
    primary:    "#107668",   // warna utama (hijau teal)
    secondary:  "#9c2052",   // warna aksen (merah marun)
    background: "#f3f4e6",   // warna background halaman
    navBg:      "#e6e8c9",   // background mobile nav
  },

  /* ── GAMBAR HERO ────────────────────────────────────────── */
  backgroundImage:         "images/background.png",    // background hero desktop
  backgroundImageMobile:   "images/responsive.png",    // background hero mobile

  /* ── ABOUT ──────────────────────────────────────────────── */
  aboutImages: [
    "images/about-1.png",
    "images/about-2.png",
  ],

  /* ── TAB SKILLS ─────────────────────────────────────────── */
  // Setiap tab berisi satu gambar (buat di Canva/Figma lalu export)
  skills: [
    { id: "soft-skills", label: "SOFT SKILLS",  image: "images/soft-skills.png" },
    { id: "hard-skills", label: "HARD SKILLS",  image: "images/hard-skills.png" },
    { id: "tools",       label: "TOOLS",        image: "images/skills.png"      },
    { id: "experience",  label: "EXPERIENCE",   image: "images/experiences.png" },
    { id: "education",   label: "EDUCATION",    image: "images/education.png"   },
  ],

  /* ── JOURNEY ────────────────────────────────────────────── */
  journeyImage: "images/journey.png",   // banner atas section portfolio

  /* ── SERTIFIKASI ────────────────────────────────────────── */
  certifTitleImage: "images/certif.png",  // gambar judul "Certification"
  certifImages: [
    "images/certif-1.jpg",
    "images/certif-2.jpg",
    "images/certif-3.png",
    "images/certif-4.jpg",
    "images/certif-5.jpg",
    "images/certif-6.jpg",
    "images/certif-7.jpg",
    "images/certif-8.jpg",
  ],

  /* ── PORTFOLIO SECTIONS ─────────────────────────────────── */
  // Setiap section punya titleImage (banner) dan daftar items.
  // isTitle: true  → gambar lebar penuh (judul sub-section)
  // isTitle: false → gambar konten biasa
  portfolioTitleImage: "images/portofolio.png",

  portfolioSections: [
    {
      titleImage: "images/lf-1.png",
      items: [
        { src: "images/lf-2.png",  isTitle: false },
        { src: "images/lf-3.png",  isTitle: true  },
        { src: "images/lf-4.png",  isTitle: false },
        { src: "images/lf-5.png",  isTitle: false },
        { src: "images/lf-6.png",  isTitle: false },
        { src: "images/lf-7.png",  isTitle: true  },
        { src: "images/lf-8.png",  isTitle: false },
        { src: "images/lf-9.png",  isTitle: false },
        { src: "images/lf-10.png", isTitle: false },
      ],
    },
    {
      titleImage: "images/era-1.png",
      items: [
        { src: "images/era-2.png",  isTitle: false },
        { src: "images/era-3.png",  isTitle: false },
        { src: "images/era-4.png",  isTitle: false },
        { src: "images/era-5.png",  isTitle: false },
        { src: "images/era-6.png",  isTitle: true  },
        { src: "images/era-7.png",  isTitle: false },
        { src: "images/era-8.png",  isTitle: false },
        { src: "images/era-9.png",  isTitle: true  },
        { src: "images/era-10.png", isTitle: false },
        { src: "images/era-11.png", isTitle: false },
        { src: "images/era-12.png", isTitle: false },
        { src: "images/era-13.png", isTitle: true  },
        { src: "images/era-14.png", isTitle: false },
        { src: "images/era-15.png", isTitle: false },
        { src: "images/era-16.png", isTitle: false },
        { src: "images/era-17.png", isTitle: false },
        { src: "images/era-18.png", isTitle: true  },
        { src: "images/era-19.png", isTitle: false },
        { src: "images/era-20.png", isTitle: false },
        { src: "images/era-21.png", isTitle: false },
      ],
    },
    {
      titleImage: "images/kompas-1.png",
      items: [
        { src: "images/kompas-2.png", isTitle: false },
        { src: "images/kompas-3.png", isTitle: true  },
        { src: "images/kompas-4.png", isTitle: false },
        { src: "images/kompas-5.png", isTitle: false },
        { src: "images/kompas-6.png", isTitle: false },
        { src: "images/kompas-7.png", isTitle: false },
      ],
    },
    {
      titleImage: "images/telkom-1.png",
      items: [
        { src: "images/telkom-2.png",  isTitle: false },
        { src: "images/telkom-3.png",  isTitle: false },
        { src: "images/telkom-4.png",  isTitle: true  },
        { src: "images/telkom-5.png",  isTitle: false },
        { src: "images/telkom-6.png",  isTitle: false },
        { src: "images/telkom-7.png",  isTitle: false },
        { src: "images/telkom-8.png",  isTitle: true  },
        { src: "images/telkom-9.png",  isTitle: false },
        { src: "images/telkom-10.png", isTitle: false },
        { src: "images/telkom-11.png", isTitle: false },
        { src: "images/telkom-12.png", isTitle: true  },
        { src: "images/telkom-13.png", isTitle: false },
        { src: "images/telkom-14.png", isTitle: true  },
        { src: "images/telkom-15.png", isTitle: false },
      ],
    },
    {
      titleImage: "images/scx-1.png",
      items: [
        { src: "images/scx-2.png", isTitle: false },
        { src: "images/scx-3.png", isTitle: true  },
        { src: "images/scx-4.png", isTitle: false },
        { src: "images/scx-5.png", isTitle: true  },
        { src: "images/scx-6.png", isTitle: false },
      ],
    },
  ],

  /* ── PENUTUP ─────────────────────────────────────────────── */
  endImage:  "images/end.png",
  copyright: "Copyright 2022, Developed by MFS. All Rights Reserved",
};
