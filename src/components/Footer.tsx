function Footer() {
  return (
    <footer className="bg-[#730700] text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">ANU - MIA 2025</h3>
            <p className="text-[#B8B8B8] text-sm sm:text-base">Platform marketplace untuk mendukung dan mempromosikan UMKM lokal Indonesia.</p>
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Menu</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#beranda" className="text-[#B8B8B8] hover:text-white text-sm sm:text-base">Beranda</a></li>
              <li><a href="#umkm" className="text-[#B8B8B8] hover:text-white text-sm sm:text-base">UMKM</a></li>
              <li><a href="#berita" className="text-[#B8B8B8] hover:text-white text-sm sm:text-base">Berita</a></li>
              <li><a href="#pemindai" className="text-[#B8B8B8] hover:text-white text-sm sm:text-base">Pemindai</a></li>
            </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Menu</h4>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="#about" className="text-[#B8B8B8] hover:text-white text-sm sm:text-base">Tentang Kami</a></li>
                <li><a href="#kebijakan" className="text-[#B8B8B8] hover:text-white text-sm sm:text-base">Kebijakan Privasi</a></li>
                <li><a href="#syarat" className="text-[#B8B8B8] hover:text-white text-sm sm:text-base">Syarat & Ketentuan</a></li>
                <li><a href="#contact" className="text-[#B8B8B8] hover:text-white text-sm sm:text-base">Hubungi Kami</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Kontak</h4>
              <ul className="space-y-1 sm:space-y-2">
                <li className="flex items-center gap-2">
                  <img src="/mail.svg" alt="icon" className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px]" />
                  <a href="#email" className="text-[#B8B8B8] hover:text-white text-sm sm:text-base">info@umkm.id</a></li>
                <li>
                <li className="flex items-center gap-2">
                  <img src="/phone-call.svg" alt="icon" className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px]" />
                  <a href="#telp" className="text-[#B8B8B8] hover:text-white text-sm sm:text-base">+62 812 3456 7890</a></li>
                </li>
                <li className="flex items-center gap-2">
                  <img src="/map-pin-2.svg" alt="icon" className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px]" />
                  <a href="#lokasi" className="text-[#B8B8B8] hover:text-white text-sm sm:text-base">Jakarta, Indonesia.</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#777777] text-center text-white text-sm sm:text-base">
            <p>&copy; 2025 UMKM ID. Semua hak dilindungi.</p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;