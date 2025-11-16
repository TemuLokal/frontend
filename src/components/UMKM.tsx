import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { umkmList } from '../data/umkmList.ts';

function UMKM() {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredUMKM = umkmList
    .filter((umkm: any) =>
      umkm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      umkm.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a: any, b: any) => b.reviews - a.reviews)
    .slice(0, 8);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleCards(prev => [...prev, id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.umkm-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredUMKM]);

  return (
    <section id="umkm" ref={sectionRef} className="pt-16 sm:pt-20 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-6 sm:mb-8 w-full animate-fade-in-up">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-black text-center">
            Jelajahi UMKM Pilihan
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-[#B8B8B8] text-center mt-2">
            Temukan produk dan layanan terbaik dari UMKM terpercaya
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-md sm:max-w-xl flex items-center bg-white rounded-[10px] shadow-lg border border-[#E8E8EB] px-3 sm:px-4 py-2 sm:py-3 my-4 sm:gap-2 transition-all duration-300 hover:shadow-xl">
            <img
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#B08B8B] mr-2"
              src={`${import.meta.env.BASE_URL}search.svg`}
            />
            <input
              type="text"
              placeholder="Cari Daftar UMKM disini"
              className="w-full bg-transparent outline-none text-sm sm:text-base md:text-lg placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Daftar UMKM */}
        {filteredUMKM.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredUMKM.map((umkm: any, index) => (
              <div
                key={umkm.id}
                data-id={umkm.id}
                className={`umkm-card bg-white rounded-[10px] shadow-lg border border-[#E8E8EB] flex flex-col h-full group transition-all duration-300 hover:shadow-2xl hover:border-[#730700] relative overflow-hidden ${
                  visibleCards.includes(umkm.id) ? 'card-reveal revealed' : 'card-reveal'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-40 sm:h-48 w-full rounded-t-lg overflow-hidden flex items-center justify-center bg-gray-100 relative">
                  <img
                    src={umkm.image}
                    alt={umkm.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <span className="absolute left-3 top-[140px] sm:top-[175px] bg-[#730700] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-lg shadow-lg z-20">
                  {umkm.category}
                </span>
                
                <div className="flex flex-col flex-1 px-4 sm:px-4 pt-6 sm:pt-8 pb-3 sm:pb-4">
                  <h4 className="text-lg font-bold text-[#730700] mb-2 text-left line-clamp-2 group-hover:text-[#5a0500] transition-colors duration-300">
                    {umkm.name}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm mb-2 text-left line-clamp-2">
                    {umkm.description}
                  </p>
                  <hr className="my-2 sm:my-3 border-t border-gray-200" />

                  <div className="flex items-center gap-2 mb-2 mt-2">
                    <img
                      src={`${import.meta.env.BASE_URL}map-pin.svg`}
                      alt="icon"
                      className="w-3 h-3 sm:w-4 sm:h-4"
                    />
                    <span className="text-xs text-[#71717B] font-semibold">
                      {umkm.location}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3 sm:mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 ${
                          star <= Math.round(umkm.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-[#71717B] ml-1">
                      {umkm.rating} ({umkm.reviews} Ulasan)
                    </span>
                  </div>

                  <Link
                    to={`/umkm/${umkm.id}`}
                    className="bg-white border border-[#730700] text-center text-xs sm:text-sm text-[#730700] font-semibold rounded-[10px] py-3 transition-all duration-300 hover:bg-[#730700] hover:text-white hover:shadow-lg block"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="animate-fade-in-up">
            <p className="text-center text-gray-500 mt-8">
              UMKM tidak ditemukan untuk pencarian "<b>{searchTerm}</b>"
            </p>
          </div>
        )}

        {/* Tombol Lihat Semua */}
        <div className="flex justify-center mt-8 sm:mt-10 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <Link
            to="/umkm"
            className="bg-[#730700] hover:bg-[#5a0500] text-white font-bold px-6 py-2 sm:px-10 sm:py-3 rounded-lg text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Lihat Semua UMKM
          </Link>
        </div>
      </div>
    </section>
  );
}

export default UMKM;