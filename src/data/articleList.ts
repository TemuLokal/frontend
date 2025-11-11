interface Article {
  id: number;
  title: string;
  description: string;
  creator: string;
  date: string;
  image: string;
  category: string;
  content: string;
  sections?: ArticleSection[];
}

interface ArticleSection {
  title: string;
  content: string;
  items?: string[];
  steps?: string[];
}

export const articleList: Article[] = [
  {
    id: 1,
    title: "Program Pendampingan UMKM 2025 Dibuka",
    description: "Pemerintah membuka program pendampingan gratis untuk UMKM yang ingin naik kelas dan memperluas pasar.",
    creator: "Muhammad Islami Kaffah",
    date: "13 Oktober 2025",
    image: "/artikel1.webp",
    category: "Berita",
    content: "Kementerian Ketenagakerjaan kembali membuka pendaftaran bantuan UMKM 2025 melalui program Tenaga Kerja Mandiri (TKM) Pemula, TKM Lanjutan, dan Padat Karya pada pertenjamaaran Agustus 2025. Berikut petunjuk cara pendaftarannya dahulu.\n\nSedianya program TKM Pemula yang menerima pendaftaran hingga 22 Agustus kemarin. Sementara untuk program TKM Lanjutan buka hingga per 24 Agustus, sedangkan TKM Lanjutan 23 Agustus 2025.\n\nMeski begitu, menutut informasi dari instansi resmi Direktorat Bina Perusahaan Kesempatan Kerja, jati bimpinghk.kemenkumkm dan Padat Karya diperpanjang hingga 31 Agustus.",
    sections: [
      {
        title: "Tentang Program Pendampingan UMKM 2025",
        content: "Program Tenaga Kerja Mandiri (TKM) Pemula merupakan pendampingan sempit daftar atau masih melengkapi berkas, ini kesempatan terakhir sebelum ditutup. Jangan sampai melewaatkan hari momen (28/8/2025).",
        items: [
          "TKM Pemula dengan fokus pada pembinaan bisnis dasar",
          "TKM Lanjutan untuk pengembangan bisnis yang sudah berjalan",
          "Program Padat Karya untuk penciptaan lapangan kerja"
        ]
      },
      {
        title: "Cara Daftar Program TKM Pemula Kemnaker dan Syaratnya",
        content: "Sama seperti pendaftaran program TKM Pemula, detikpers harus sudah terdaftar dahulu mendaftarkan akun di SIAPerja. Di samping itu, harus sudah login ke Bizhub. Setelah itu, begini urutan pendaftarannya:",
        steps: [
          "Klik 'Dashboard'",
          "Tekan 'Ke Dashboard untuk Daftar'",
          "Pilih 'Daftar Padat Karya'",
          "Isi data identitas padat karya, yakni nama pendaftar, nama lembaga, dan kategori lembaga",
          "Lengkapi form data lembaga yang dipersyaratkan, seperti kategori kegiatan, kode pos, dan alamat",
          "Tekan button 'Buat Padat Karya' di atas kanan",
          "Klik 'Pilih Workspace'",
          "Di meru Dokumen Proposal, tekan 'Lihat Halaman'",
          "Untuk upload dokumen, tekan 'Terapkan'",
          "Setelah berhasil unggahan dokumen, tekan 'Terapkan'",
          "Perlu dicatat, ada pembukaan pilahan yang sudah ditutup dimulai phak Bizhub",
          "Unggah seluruh dokumen yang dipersyaratkan",
          "Usai dokumen seleksi diunggah, kembalai ke workspace dan lengkapi 'Data Anggota Caranya'. Caranya, klik 'Lihat Halaman' untuk verifikasi Edit Bizhub",
          "Isi data anggota, mutasi dari Nomor Induk Kependudukan (NIK), nama, hingga alamat",
          "Seleksi Tanggal verifikasi Edit Bizhub",
          "Sama dengan TKM Pemula, pendaftar Padat Karya harus sudah punya akun SIAPerja terdaftar daan"
        ]
      },
      {
        title: "Informasi Lebih Lanjut",
        content: "Demikian penjelasan lengkap mengenai cara daftar bantuan UMKM 2025 dari Kementerian Ketenagakerjaan. Semoga membantu!"
      }
    ]
  },
  {
    id: 2,
    title: "UMKM Indonesia Raih Penghargaan Internasional",
    description: "Tiga UMKM Indonesia berhasil meraih penghargaan di ajang kompetisi bisnis tingkat dunia.",
    creator: "Muhammad Islami Kaffah",
    date: "12 Oktober 2025",
    image: "/artikel2.webp",
    category: "Berita",
    content: "Prestasi membanggakan telah diraih oleh tiga UMKM Indonesia dalam ajang kompetisi bisnis internasional. Ketiga perusahaan ini telah menunjukkan inovasi dan dedikasi yang luar biasa dalam mengembangkan produk dan layanan mereka.\n\nKompetisi tingkat dunia ini melibatkan ribuan peserta dari berbagai negara. Kemenangan ini membuktikan bahwa UMKM Indonesia memiliki potensi yang sangat besar untuk bersaing di pasar global.\n\nKeberhasilan ini diharapkan dapat menginspirasi UMKM lainnya untuk terus berinovasi dan meningkatkan kualitas produk mereka.",
    sections: [
      {
        title: "Pencapaian Luar Biasa",
        content: "Ketiga UMKM pemenang telah menunjukkan komitmen tinggi terhadap inovasi, kualitas, dan kepuasan pelanggan. Mereka juga aktif dalam pengembangan sumber daya manusia dan adopsi teknologi terbaru."
      },
      {
        title: "Dampak Ekonomi",
        content: "Kemenangan ini diharapkan dapat membuka peluang ekspor yang lebih luas dan meningkatkan visibilitas produk Indonesia di pasar internasional."
      }
    ]
  },
  {
    id: 3,
    title: "Tips Meningkatkan Penjualan di Era Digital",
    description: "Strategi marketing digital yang terbukti efektif meningkatkan penjualan UMKM.",
    creator: "Admin",
    date: "10 Oktober 2025",
    image: "/artikel3.webp",
    category: "Artikel",
    content: "Di era digital seperti sekarang, UMKM harus mengadopsi strategi pemasaran digital untuk tetap kompetitif. Berikut adalah beberapa tips yang telah terbukti efektif meningkatkan penjualan.\n\nStrategi pemasaran digital bukan lagi pilihan tetapi keharusan bagi bisnis yang ingin berkembang. Dengan memanfaatkan berbagai platform digital, UMKM dapat menjangkau pasar yang lebih luas dan meningkatkan penjualan mereka secara signifikan.",
    sections: [
      {
        title: "Optimasi Media Sosial",
        content: "Manfaatkan semua platform media sosial yang tersedia untuk membangun brand awareness dan engagement dengan pelanggan.",
        items: [
          "Instagram untuk visual content",
          "TikTok untuk konten viral",
          "Facebook untuk community building",
          "LinkedIn untuk B2B marketing"
        ]
      },
      {
        title: "Strategi SEO dan Content Marketing",
        content: "Buat konten berkualitas yang SEO-friendly untuk meningkatkan visibilitas website Anda di search engine.",
        items: [
          "Riset kata kunci yang relevan",
          "Buat artikel berkualitas tinggi",
          "Optimize meta description dan title",
          "Build backlinks dari website autoritas"
        ]
      },
      {
        title: "Email Marketing",
        content: "Email masih menjadi salah satu channel paling efektif untuk nurturing leads dan meningkatkan customer retention.",
        items: [
          "Bangun email list secara konsisten",
          "Segment email berdasarkan behavior",
          "Personalisasi email content",
          "A/B test subject line dan content"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Tools Penting yang Wajib Dipelajari UMKM",
    description: "Dalam era digital seperti sekarang, pelaku usaha mikro, kecil, dan menengah wajib menguasai tools berikut.",
    creator: "Admin",
    date: "08 Oktober 2025",
    image: "/artikel4.webp",
    category: "Artikel",
    content: "Teknologi telah mengubah cara bisnis beroperasi. UMKM yang ingin tetap relevan dan kompetitif harus menguasai berbagai tools digital. Berikut adalah tools penting yang wajib dipelajari oleh setiap UMKM di era digital ini.",
    sections: [
      {
        title: "Tools Produktivitas",
        content: "Tools ini membantu mengorganisir pekerjaan dan meningkatkan efisiensi operasional.",
        items: [
          "Google Workspace untuk kolaborasi tim",
          "Notion untuk project management",
          "Asana untuk task tracking",
          "Trello untuk workflow visualization"
        ]
      },
      {
        title: "Tools Analytics dan Data",
        content: "Memahami data adalah kunci untuk membuat keputusan bisnis yang lebih baik.",
        items: [
          "Google Analytics untuk website tracking",
          "Hotjar untuk user behavior analysis",
          "Tableau untuk data visualization",
          "Power BI untuk business intelligence"
        ]
      },
      {
        title: "Tools Marketing dan Sales",
        content: "Tools ini membantu dalam mengautomasi proses pemasaran dan penjualan.",
        items: [
          "Mailchimp untuk email marketing",
          "Hootsuite untuk social media management",
          "Canva untuk design content",
          "Shopify untuk e-commerce"
        ]
      }
    ]
  }
];
