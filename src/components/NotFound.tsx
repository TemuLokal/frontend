import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/*  Illustration/image */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <img src="/404.svg" alt="404 illustration" className="w-full h-auto" />
            </div>
          </div>
          {/* Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-4">
              <div className="relative flex items-center">
                <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#730700] to-[#b33b3b] drop-shadow-sm">
                  404
                </span>
                <span
                  className="absolute left-0 right-0 top-1/2 h-2 rounded-full bg-[#730700] opacity-90"
                  style={{ transform: 'scaleX(0)', transformOrigin: 'left', animation: 'strike 1000ms cubic-bezier(.2,.9,.2,1) 450ms forwards' }}
                />
              </div>
              <div className="text-sm text-gray-500">Halaman tidak ditemukan</div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Ups — sepertinya halaman ini tidak ada atau telah dipindahkan.
            </h1>

            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                to="/"
                onClick={() => {
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#730700] text-[#730700] font-medium hover:bg-[#730700] hover:text-white transition"
              >
                Beranda
              </Link>

              <Link
                to="/#article"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#730700] text-[#730700] font-medium hover:bg-[#730700] hover:text-white transition"
              >
                Lihat Artikel
              </Link>

              <Link
                to="/#umkm"
                onClick={() => {
                  setTimeout(() => {
                    const elem = document.getElementById('umkm');
                    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#730700] text-[#730700] font-medium hover:bg-[#730700] hover:text-white transition"
              >
                UMKM
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              Jika kamu butuh bantuan lain, hubungi tim support atau kembali ke halaman utama.
            </div>
          </div>

        </div>
      </div>
      <style>{`@keyframes strike { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
    </main>
  );
}
