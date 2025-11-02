function UMKM() {
  const umkmList = [
    {
      id: 1,
      name: "Budidaya Pembibitan Lada",
      category: "Pertanian",
      location: "Bekasi, Jawa Barat (4 km)",
      rating: 4.8,
      reviews: 128,
      image: "/image 1.webp",
      description: "Pendampingan penanaman lada dan suplai bibit lada."
    },
    {
      id: 2,
      name: "Kripik Singkong Pak Mul",
      category: "Jajanan",
      location: "Tangerang, Banten (28 km)",
      rating: 4.9,
      reviews: 52,
      image: "/image 2.webp",
      description: "Keripik singkong berbagai rasa seperti pedas, manis dan asin."
    },
    {
      id: 3,
      name: "Chaa Risoles",
      category: "Jajanan",
      location: "Bandung, Jawa Barat (130 km)",
      rating: 4.2,
      reviews: 324,
      image: "/image 3.webp",
      description: "Menjual berbagai jenis makanan risol dan berbagai cemilan/minuman lainnya."
    },
    {
      id: 4,
      name: "Sahabat Autoparts Service",
      category: "Bengkel",
      location: "Maroswali, Sulawesi Tengah",
      rating: 4.3,
      reviews: 124,
      image: "/image 4.webp",
      description: "Bengkel reparasi mobil dan penjualan alat sparepart mobil."
    },
    {
      id: 5,
      name: "Batik Nusantara",
      category: "Pakaian",
      location: "Yogyakarta, DIY (520 km)",
      rating: 4.9,
      reviews: 524,
      image: "/batik.webp",
      description: "Batik tradisional dengan desain modern yang memukau."
    },
    {
      id: 6,
      name: "Tas Kulit Bandoeng",
      category: "Aksesoris",
      location: "Bandung, Jawa Barat (130 km)",
      rating: 4.8,
      reviews: 154,
      image: "/tas.webp",
      description: "Tas kulit asli dengan desain ekslusif dan berkualitas."
    },
    {
      id: 7,
      name: "Bali Keramik Creative",
      category: "Kerajinan",
      location: "Ubud, Bali (1100 km)",
      rating: 4.7,
      reviews: 842,
      image: "/keramik.webp",
      description: "Keramik seni dan produk ornamen tradisional khas Bali."
    },
    {
      id: 8,
      name: "Tenunin Flores",
      category: "Kerajinan",
      location: "Flores, NTT (1500 km)",
      rating: 4.9,
      reviews: 424,
      image: "/tenun.webp",
      description: "Kain tenun ikat asli dengan warna alami khas Flores."
    }
  ];

  return (
    <section id="umkm" className="pt-20 sm:pt-30 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-6 sm:mb-8 w-full">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-black text-center">Jelajahi UMKM Pilihan</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-[#B8B8B8] text-center mt-2">Temukan produk dan layanan terbaik dari UMKM terpercaya</p>
            <div className="w-full max-w-md sm:max-w-xl flex items-center bg-white rounded-[10px] shadow border border-[#E8E8EB] px-3 sm:px-4 py-2 sm:py-3 my-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#B08B8B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Cari Daftar UMKM disini"
                className="w-full bg-transparent outline-none text-sm sm:text-base md:text-lg"
              />
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {umkmList.map((umkm) => (
            <div key={umkm.id} className="bg-white rounded-[10px] shadow-md border border-[#E8E8EB] flex flex-col h-full group transition-all hover:shadow-xl hover:border-[#F83600] relative">
              
              <div className="h-40 sm:h-48 w-full rounded-t-[10px] overflow-hidden flex items-center justify-center bg-gray-100">
                <img src={umkm.image} alt={umkm.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <span className="absolute top-[155px] sm:top-[185px] left-3 sm:left-4 bg-[#730700] text-white text-xs sm:text-sm font-semibold px-3 sm:px-5 py-1 sm:py-2 rounded-lg shadow-xl z-20">
                {umkm.category}
              </span>
              <div className="flex flex-col flex-1 px-3 sm:px-4 pt-6 sm:pt-8 pb-3 sm:pb-4"> 
                <h4 className="text-base sm:text-lg font-bold text-[#730700] mb-1 text-left line-clamp-2">{umkm.name}</h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 text-left line-clamp-2">{umkm.description}</p>
                <hr className="my-2 sm:my-3 border-t border-gray-200" />
                
                <div className="flex items-center gap-2 mb-2">
                  <img src="/map-pin.svg" alt="icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs text-[#71717B] font-semibold">{umkm.location}</span>
                </div>
                <div className="flex items-center gap-1 mb-2 sm:mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className={`w-3 h-3 sm:w-4 sm:h-4 ${star <= Math.round(umkm.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-[#71717B] ml-1">{umkm.rating} ({umkm.reviews} Ulasan)</span>
                </div>
                <button className="mt-auto bg-white border border-[#730700] text-xs sm:text-sm text-[#730700] font-semibold rounded-[10px] py-2 transition hover:bg-[#730700] hover:text-white hover:shadow">Lihat Detail</button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 sm:mt-10">
          <a href="#" className="bg-[#730700] hover:bg-white text-white hover:text-[#730700] hover:border hover:border-1 hover:border-[#730700] font-bold px-6 py-2 sm:px-10 sm:py-3 rounded-lg text-base sm:text-lg shadow transition">Lihat Semua UMKM</a>
        </div>
      </div>
    </section>
  );
}

export default UMKM;