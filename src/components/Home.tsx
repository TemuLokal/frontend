// import Chart from './Chart';
function Home() {
  return (
    <section id="beranda" className="relative px-4 sm:px-6 lg:px-8 bg-cover bg-center min-h-screen flex items-center" style={{ backgroundImage: "url('/hero.webp')" }}>
      <div className="max-w-7xl mx-auto w-full pt-[100px] md:pt-0">
        <div className="flex items-center justify-center">
          <div className="text-center py-12 md:py-0">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">Dukung UMKM Lokal Indonesia</h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-xl lg:text-2xl text-[#B8B8B8] mb-6 sm:mb-8">Temukan produk dan layanan berkualitas dari UMKM terpercaya di seluruh Indonesia. Bersama kita tumbuh, bersama kita maju.</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              <a
                href="#umkm"
                className="bg-[#730700] hover:bg-[#730700]/75 w-full sm:w-auto text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-lg transition-colors"
              >
                Jelajahi UMKM
              </a>
              <a
                href="#contact"
                className="bg-[#730700] hover:bg-[#730700]/75 w-full sm:w-auto text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-lg transition-colors"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>

        {/* Desktop - Chart row layout */}
        {/* <div className="absolute left-1/2 -bottom-[15vh] transform -translate-x-1/2 w-full z-10 hidden lg:block">
          <Chart widthPercent={0.95} layout="row" />
        </div> */}

        {/* Tablet - Chart column layout dengan width lebih kecil */}
        {/* <div className="absolute left-1/2 -bottom-[29vh] transform -translate-x-1/2 w-full z-10 hidden md:block lg:hidden">
          <Chart widthPercent={0.8} layout="column" />
        </div> */}

        {/* Mobile - Chart column layout full width */}
        {/* <div className="absolute left-1/2 -bottom-[22vh] transform -translate-x-1/2 w-full z-10 block md:hidden">
          <Chart widthPercent={1} layout="column" />
        </div> */}

        <div className="h-40 md:h-44 lg:h-36" />
      </div>
    </section>
  );
}

export default Home;