function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-r from-[#730700] to-[#b33b3b] text-white py-8 sm:py-12 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="animate-fade-in-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">TemuLokal</h3>
            <p className="text-[#B8B8B8] text-sm sm:text-base">Platform marketplace untuk mendukung dan mempromosikan UMKM lokal Indonesia.</p>
          </div>
          
          <div className="animate-fade-in-left" style={{ animationDelay: '100ms' }}>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Menu</h4>
            <ul className="space-y-1 sm:space-y-2">
              {['Beranda', 'UMKM', 'Berita'].map((item, index) => (
                <li key={item}>
                  <a 
                    href={`/#${item.toLowerCase()}`} 
                    className="text-[#B8B8B8] hover:text-white text-sm sm:text-base transition-all duration-300 hover-lift inline-block"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-fade-in-left" style={{ animationDelay: '200ms' }}>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Menu</h4>
            <ul className="space-y-1 sm:space-y-2">
              {['Tentang Kami', 'Kebijakan Privasi', 'Syarat & Ketentuan', 'Hubungi Kami'].map((item, index) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
                    className="text-[#B8B8B8] hover:text-white text-sm sm:text-base transition-all duration-300 hover-lift inline-block"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-fade-in-left" style={{ animationDelay: '300ms' }}>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Kontak</h4>
            <ul className="space-y-1 sm:space-y-2">
              {[
                { icon: '/mail.svg', text: 'info@temulokal.id', link: '#email' },
                { icon: '/phone-call.svg', text: '+62 812 3456 7890', link: '#telp' },
                { icon: '/map-pin-2.svg', text: 'Jakarta, Indonesia.', link: '#lokasi' }
              ].map((contact, index) => (
                <li key={contact.text} className="flex items-center gap-2">
                  <img src={contact.icon} alt="icon" className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] transition-transform duration-300 hover:scale-110" />
                  <a 
                    href={contact.link} 
                    className="text-[#B8B8B8] hover:text-white text-sm sm:text-base transition-all duration-300 hover-lift"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#777777] text-center text-white text-sm sm:text-base animate-fade-in-up">
          <p>&copy; 2025 TemuLokal. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;