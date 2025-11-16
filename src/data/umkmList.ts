interface UMKM {
  id: number;
  name: string;
  category: string;
  location: string;
  map: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  longDescription: string;
  gallery?: string[];
}

export const umkmList: UMKM[] = [
  {
    id: 1,
    name: "Budidaya Pembibitan Lada",
    category: "Pertanian",
    location: "Bekasi, Jawa Barat (4 km)",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10014.709771835282!2d104.5364031!3d-5.2973895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e47115f85cf418b%3A0xc9d764348997d7fb!2sNgarip%2C%20Kec.%20Ulubelu%2C%20Kabupaten%20Tanggamus%2C%20Lampung!5e1!3m2!1sid!2sid!4v1762109857804!5m2!1sid!2sid",
    rating: 4.8,
    reviews: 128,
    image: import.meta.env.BASE_URL + "image1.webp",
    description: "Pendampingan penanaman lada dan suplai bibit lada.",
    longDescription: "Kami menyediakan layanan lengkap mulai dari penyediaan bibit lada unggul hingga pendampingan teknis penanaman, pemeliharaan, dan pascapanen. Mitra kami tersebar di seluruh Jawa Barat."
  },
  {
    id: 2,
    name: "Kripik Singkong Pak Mul",
    category: "Jajanan",
    location: "Tangerang, Banten (28 km)",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d624.6275771876507!2d106.822166!3d-6.4481448!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ea1c1ea6025f%3A0x17bdf94b9d36382d!2sJl.%20Swadaya%20No.88%2C%20Pd.%20Rajeg%2C%20Kec.%20Cibinong%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016914!5e1!3m2!1sid!2sid!4v1762109954687!5m2!1sid!2sid",
    rating: 4.9,
    reviews: 52,
    image: import.meta.env.BASE_URL + "image2.webp",
    description: "Keripik singkong berbagai rasa seperti pedas, manis dan asin.",
    longDescription: "Dibuat dari singkong pilihan, diproses higienis tanpa bahan pengawet. Tersedia dalam kemasan 100gr, 250gr, dan 500gr. Bisa grosir!"
  },
  {
    id: 3,
    name: "Chaa Risoles",
    category: "Jajanan",
    location: "Bandung, Jawa Barat (130 km)",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5019.134286554406!2d98.665768!3d3.5591169999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMzMnMzIuOCJOIDk4wrAzOSc1Ni44IkU!5e1!3m2!1sid!2sid!4v1762109793263!5m2!1sid!2sid",
    rating: 4.2,
    reviews: 324,
    image: import.meta.env.BASE_URL + "image3.webp",
    description: "Menjual berbagai jenis makanan risol dan berbagai cemilan/minuman lainnya.",
    longDescription: "Risol chaa food adalah usaha rumahan yg menjual berbagai jenis makanan dan minuman seperti aneka risol , aneka ricebowl, aneka jus atau minuman lainnya seperti cendol kecebong . produk dijual melalui sosial media, merchant gofood, shoppe food, atau orang orang terdekat. Target pasarnya disemua kalangan dewasa ataupun anak anak . produk yg dijual menjaga kualitas rasa dan kebersihan nya ."
  },
  {
    id: 4,
    name: "Sahabat Autoparts Service",
    category: "Bengkel",
    location: "Maroswali, Sulawesi Tengah",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5022.734235400727!2d122.18138889999999!3d-2.8221944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwNDknMTkuOSJTIDEyMsKwMTAnNTMuMCJF!5e1!3m2!1sid!2sid!4v1762109988951!5m2!1sid!2sid",
    rating: 4.3,
    reviews: 124,
    image: import.meta.env.BASE_URL + "image4.webp",
    description: "Bengkel reparasi mobil dan penjualan alat sparepart mobil.",
    longDescription: "Melayani service ringan hingga berat, ganti oli, tune-up, dan jual beli sparepart orisinal. Gratis cek mesin!"
  },
  {
    id: 5,
    name: "Batik Nusantara",
    category: "Pakaian",
    location: "Yogyakarta, DIY (520 km)",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5022.734235400727!2d122.18138889999999!3d-2.8221944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwNDknMTkuOSJTIDEyMsKwMTAnNTMuMCJF!5e1!3m2!1sid!2sid!4v1762109988951!5m2!1sid!2sid",
    rating: 4.9,
    reviews: 524,
    image: import.meta.env.BASE_URL + "batik.webp",
    description: "Batik tradisional dengan desain modern yang memukau.",
    longDescription: "Menggabungkan motif klasik dengan sentuhan kontemporer. Setiap produk dibuat oleh pengrajin lokal Yogyakarta dengan teknik tulis dan cap."
  },
  {
    id: 6,
    name: "Tas Kulit Bandoeng",
    category: "Aksesoris",
    location: "Bandung, Jawa Barat (130 km)",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5022.734235400727!2d122.18138889999999!3d-2.8221944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwNDknMTkuOSJTIDEyMsKwMTAnNTMuMCJF!5e1!3m2!1sid!2sid!4v1762109988951!5m2!1sid!2sid",
    rating: 4.8,
    reviews: 154,
    image: import.meta.env.BASE_URL + "tas.webp",
    description: "Tas kulit asli dengan desain ekslusif dan berkualitas.",
    longDescription: "Kulit sapi asli 100%, dijahit tangan oleh pengrajin Bandung. Garansi 1 tahun untuk jahitan dan perangkat keras."
  },
  {
    id: 7,
    name: "Bali Keramik Creative",
    category: "Kerajinan",
    location: "Ubud, Bali (1100 km)",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5022.734235400727!2d122.18138889999999!3d-2.8221944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwNDknMTkuOSJTIDEyMsKwMTAnNTMuMCJF!5e1!3m2!1sid!2sid!4v1762109988951!5m2!1sid!2sid",
    rating: 4.7,
    reviews: 842,
    image: import.meta.env.BASE_URL + "keramik.webp",
    description: "Keramik seni dan produk ornamen tradisional khas Bali.",
    longDescription: "Setiap karya dibuat secara handmade menggunakan tanah liat lokal Bali. Cocok untuk dekorasi rumah atau oleh-oleh premium."
  },
  {
    id: 8,
    name: "Tenunin Flores",
    category: "Kerajinan",
    location: "Flores, NTT (1500 km)",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5022.734235400727!2d122.18138889999999!3d-2.8221944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwNDknMTkuOSJTIDEyMsKwMTAnNTMuMCJF!5e1!3m2!1sid!2sid!4v1762109988951!5m2!1sid!2sid",
    rating: 4.9,
    reviews: 424,
    image: import.meta.env.BASE_URL + "tenun.webp",
    description: "Kain tenun ikat asli dengan warna alami khas Flores.",
    longDescription: "Dibuat oleh ibu-ibu penenun di desa Flores menggunakan pewarna alami dari daun, akar, dan tanah. Proses pembuatan bisa memakan waktu 1–3 bulan per kain."
  }
];
