function Article() {
  // Data artikel berita UMKM
  const articleList = [
    {
      id: 1,
      title: "Program Pendampingan UMKM 2025 Dibuka",
      description: "Pemerintah membuka program pendampingan gratis untuk UMKM yang ingin naik kelas dan memperluas pasar.",
      date: "13 Oktober 2025",
      image: "/artikel1.png",
      category: "Berita"
    },
    {
      id: 2,
      title: "UMKM Indonesia Raih Penghargaan Internasional",
      description: "Tiga UMKM Indonesia berhasil meraih penghargaan di ajang kompetisi bisnis tingkat dunia.",
      date: "12 Oktober 2025",
      image: "/artikel2.png",
      category: "Berita"
    },
    {
      id: 3,
      title: "Tips Meningkatkan Penjualan di Era Digital",
      description: "Strategi marketing digital yang terbukti efektif meningkatkan penjualan UMKM.",
      date: "10 Oktober 2025",
      image: "/artikel3.png",
      category: "Artikel"
    },
    {
      id: 4,
      title: "Tools Penting yang Wajib Dipelajari UMKM",
      description: "Dalam era digital seperti sekarang, pelaku usaha mikro, kecil, dan menengah wajib menguasai tools berikut.",
      date: "08 Oktober 2025",
      image: "/artikel4.png",
      category: "Artikel"
    }
  ];

  return (
    <section id="berita" className="pt-26 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-6 sm:mb-8 w-full">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-black text-center">Berita & Artikel Terbaru</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#B8B8B8] text-center mt-2">Informasi terkini tentang perkembangan UMKM Indonesia</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {articleList.map((article) => (
            <div key={article.id} className="bg-white rounded-[9px] shadow-md border border-[#E8E8EB] flex flex-col h-full group transition-all hover:shadow-xl hover:border-[#F83600] relative">
              <div className="h-40 sm:h-48 w-full rounded-t-[9px] overflow-hidden flex items-center justify-center bg-gray-100">
                <img src={article.image} alt={article.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex flex-col flex-1 px-3 sm:px-4 py-3 sm:py-4">
                <h4 className="text-base sm:text-lg font-bold text-black mb-1 text-left line-clamp-2">{article.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 text-left line-clamp-2">{article.description}</p>
                <hr className="my-2 sm:my-3 border-t border-gray-200" />
                
                <div className="flex items-center gap-2 mb-2">
                  <img src="/calendar.svg" alt="icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs text-[#71717B] font-semibold">{article.date}</span>
                </div>
                <button className="mt-auto bg-white border border-[#730700] text-[#730700] text-xs sm:text-sm font-semibold rounded-[10px] py-2 transition hover:bg-[#730700] hover:text-white hover:shadow">Lihat Detail</button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 sm:mt-10">
          <button className="bg-[#730700] hover:bg-[#730700] text-white font-bold px-6 py-2 sm:px-10 sm:py-3 rounded-lg text-base sm:text-lg shadow transition">Lihat Semua Berita</button>
        </div>
      </div>
    </section>
  );
}

export default Article;