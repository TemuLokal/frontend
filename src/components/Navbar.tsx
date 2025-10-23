import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px] sm:h-[100px]">
          <div className="flex items-center space-x-6 md:space-x-20">
            <div className="flex-shrink-0">
              <span className="text-2xl sm:text-3xl text-black font-bold">ANU</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-6">
                <a href="#beranda" className="text-gray-700 hover:text-[#730700] px-3 py-2 text-base lg:text-lg font-medium">BERANDA</a>
                <a href="#umkm" className="text-gray-700 hover:text-[#730700] px-3 py-2 text-base lg:text-lg font-medium">UMKM</a>
                <a href="#berita" className="text-gray-700 hover:text-[#730700] px-3 py-2 text-base lg:text-lg font-medium">BERITA</a>
                <a href="#pemindai" className="text-gray-700 hover:text-[#730700] px-3 py-2 text-base lg:text-lg font-medium">PEMINDAI</a>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <div className="w-full max-w-xs flex items-center bg-white rounded-[10px] shadow border border-[#E8E8EB] px-3 py-2">
                <svg className="w-5 h-5 text-[#71717B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Cari Daftar UMKM disini"
                  className="w-full bg-transparent outline-none text-sm md:text-base"
                />
              </div>
              <a href="/login" className="bg-[#730700] text-white px-4 py-2 lg:px-6 lg:py-3 rounded-[10px] text-sm hover:bg-[#730700]/75 transition-colors">
                MASUK
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#730700] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#beranda" className="text-gray-700 hover:text-[#730700] block px-3 py-2 text-base font-medium transition-colors">BERANDA</a>
            <a href="#umkm" className="text-gray-700 hover:text-[#730700] block px-3 py-2 text-base font-medium transition-colors">UMKM</a>
            <a href="#berita" className="text-gray-700 hover:text-[#730700] block px-3 py-2 text-base font-medium transition-colors">BERITA</a>
            <a href="#pemindai" className="text-gray-700 hover:text-[#730700] block px-3 py-2 text-base font-medium transition-colors">PEMINDAI</a>
            <div className="px-3 py-2">
              <input
                type="text"
                placeholder="Cari Daftar UMKM disini"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#730700]"
              />
            </div>
            <div className="px-3 py-2">
            <a href="/login" className="bg-[#730700] text-white px-6 py-2 rounded-[10px] text-sm hover:bg-[#730700]/75 w-full block text-center transition-colors">
              MASUK
            </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
