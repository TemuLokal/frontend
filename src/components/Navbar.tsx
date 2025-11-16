import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    setActiveSection(window.location.hash || "#beranda");

    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#beranda");
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && location.pathname === "/") {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const navItems = [
    { name: "BERANDA", hash: "#beranda" },
    { name: "UMKM", hash: "#umkm" },
    { name: "BERITA", hash: "#article" },
    { name: "TERDEKAT", hash: "#nearest" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setActiveSection(hash);

    if (location.pathname === "/") {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      window.history.pushState(null, "", hash);
    } else {
      navigate("/" + hash);
    }
  };

  const isBerandaActive =
    location.pathname === "/" &&
    (window.location.hash === "" || window.location.hash === "#" || window.location.hash === "#beranda");

  const linkClass = (hash: string) => {
    if (hash === "#beranda") {
      return `relative px-3 py-2 text-base lg:text-lg font-medium transition-all duration-300 cursor-pointer
        ${isBerandaActive ? "text-[#730700] font-semibold" : "text-gray-700 hover:text-[#730700]"}`;
    }
    return `relative px-3 py-2 text-base lg:text-lg font-medium transition-all duration-300 cursor-pointer
      ${activeSection === hash ? "text-[#730700] font-semibold" : "text-gray-700 hover:text-[#730700]"}`;
  };

  return (
    <nav className={`sticky-nav ${isScrolled ? 'scrolled' : ''} transition-all duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px] sm:h-[90px]">
          <div className="flex items-center space-x-6 md:space-x-20">
            <div className="flex-shrink-0">
              <Link
                to="/"
                onClick={() => {
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                }}
              >
                    <span className="text-2xl sm:text-3xl text-black font-bold">
                      Temu Lokal
                    </span>
              </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item, index) => (
                <a
                  key={item.hash}
                  href={item.hash}
                  onClick={(e) => handleNavClick(e, item.hash)}
                  className={linkClass(item.hash)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[#730700] to-[#b33b3b] rounded-full transition-all duration-500 ease-out ${item.hash === "#beranda"
                      ? isBerandaActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                      : activeSection === item.hash
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                      }`}
                  ></span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/login"
            className="bg-gradient-to-r from-[#730700] to-[#b33b3b] text-white px-4 py-2 lg:px-6 lg:py-3 rounded-[10px] text-sm hover-lift transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            MASUK
          </a>
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden flex items-center justify-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#730700] focus:outline-none transition-all duration-300"
          >
            <svg
              className="h-6 w-6 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>

      {/* Mobile */ }
  {
    isMenuOpen && (
      <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl animate-scale-in">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <a
              key={item.hash}
              href={item.hash}
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                handleNavClick(e as any, item.hash);
              }}
              className={`relative block px-2 py-3 text-base font-medium transition-all duration-500 ${item.hash === "#beranda"
                ? isBerandaActive
                  ? "text-[#730700] font-semibold"
                  : "text-gray-700 hover:text-[#730700]"
                : activeSection === item.hash
                  ? "text-[#730700] font-semibold"
                  : "text-gray-700 hover:text-[#730700]"
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
              <span
                className={`absolute left-2 right-2 bottom-0 h-[2px] bg-gradient-to-r from-[#730700] to-[#b33b3b] rounded-full transition-all duration-500 ease-out ${item.hash === "#beranda"
                  ? isBerandaActive
                    ? "opacity-100"
                    : "opacity-0"
                  : activeSection === item.hash
                    ? "opacity-100"
                    : "opacity-0"
                  }`}
              ></span>
            </a>
          ))}

          <div className="px-2 py-2">
            <a
              href="/login"
              className="bg-gradient-to-r from-[#730700] to-[#b33b3b] text-white px-6 py-3 rounded-[10px] text-sm hover-lift w-full block text-center transition-all duration-300 shadow-lg"
            >
              MASUK
            </a>
          </div>
        </div>
      </div>
    )
  }
    </nav >
  );
}