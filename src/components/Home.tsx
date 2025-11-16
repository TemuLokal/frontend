import { useEffect, useState } from 'react';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="beranda" className="relative px-4 sm:px-6 lg:px-8 bg-cover bg-center min-h-screen flex items-center" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}hero.webp')` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/50"></div>
      
      <div className="max-w-7xl mx-auto w-full pt-[80px] md:pt-0 relative z-10">
        <div className="flex items-center justify-center">
          <div className={`text-center py-12 md:py-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up">
              Dukung <span className="text-gradient">UMKM Lokal</span> Indonesia
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-xl lg:text-2xl text-[#B8B8B8] mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Temukan produk dan layanan berkualitas dari UMKM terpercaya di seluruh Indonesia. 
                <span className="block mt-2">Bersama kita tumbuh, bersama kita maju.</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <a
                href="#umkm"
                className="bg-gradient-to-r from-[#730700] to-[#b33b3b] hover:from-[#5a0500] hover:to-[#8c2d2d] w-full sm:w-auto text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-2xl hover-lift transition-all duration-300"
              >
                Jelajahi UMKM
              </a>
              <a
                href="#contact"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 w-full sm:w-auto text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-2xl hover-lift transition-all duration-300 glass-effect border border-white/50"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;