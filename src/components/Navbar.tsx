import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveSection(window.location.hash || "#beranda");

    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#beranda");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
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
      return `relative px-3 py-2 text-base lg:text-lg font-medium transition-colors duration-300 cursor-pointer
        ${isBerandaActive ? "text-[#730700]" : "text-gray-700 hover:text-[#730700]"}`;
    }
    return `relative px-3 py-2 text-base lg:text-lg font-medium transition-colors duration-300 cursor-pointer
      ${activeSection === hash ? "text-[#730700]" : "text-gray-700 hover:text-[#730700]"}`;
  };

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px] sm:h-[100px]">
          {/* Logo */}
          <div className="flex items-center space-x-6 md:space-x-20">
            <div className="flex-shrink-0">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/";
                }}
              >
                <span className="text-2xl sm:text-3xl text-black font-bold">Temu Lokal</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <a
                    key={item.hash}
                    href={item.hash}
                    onClick={(e) => handleNavClick(e, item.hash)}
                    className={linkClass(item.hash)}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-[#730700] rounded-full transition-all duration-300 ease-in-out ${item.hash === "#beranda"
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
              className="bg-[#730700] text-white px-4 py-2 lg:px-6 lg:py-3 rounded-[10px] text-sm hover:bg-[#730700]/75 transition-colors"
            >
              MASUK
            </a>
          </div>

          {/* Hamburger Button (Mobile) */}
          <div className="md:hidden flex items-center justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#730700] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={item.hash}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  handleNavClick(e as any, item.hash);
                }}
                className={`relative block px-2 py-2 text-base font-medium transition-all duration-300 ${
                  item.hash === "#beranda"
                    ? isBerandaActive
                      ? "text-[#730700]"
                      : "text-gray-700 hover:text-[#730700]"
                    : activeSection === item.hash
                      ? "text-[#730700]"
                      : "text-gray-700 hover:text-[#730700]"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-2 right-2 bottom-0 h-[2px] bg-[#730700] rounded-full transition-all duration-300 ease-in-out ${
                    item.hash === "#beranda"
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

            {/* <div className="px-3 py-2">
              <input
                type="text"
                placeholder="Cari Daftar UMKM disini"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#730700]"
              />
            </div> */}
            <div className="px-2 py-2">
              <a
                href="/login"
                className="bg-[#730700] text-white px-6 py-2 rounded-[10px] text-sm hover:bg-[#730700]/75 w-full block text-center transition-colors"
              >
                MASUK
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
