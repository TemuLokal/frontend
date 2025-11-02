import { useParams, Link } from "react-router-dom";
import { umkmList } from "../data/umkmList";

export default function DetailUMKM() {
  const { id } = useParams();
  const umkm = umkmList.find((item) => item.id === parseInt(id || ""));

  if (!umkm) {
    return (
      <div className="pt-20 pb-16 text-center">
        <h2 className="text-2xl font-bold text-red-600">UMKM Tidak Ditemukan</h2>
        <Link to="/umkm" className="text-[#730700] font-semibold mt-4 inline-block">
          ← Kembali ke Daftar UMKM
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen">
      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${umkm.image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute bottom-1/2 left-12 text-white">
          <h1 className="text-4xl font-bold">{umkm.name}</h1>
          <p className="text-lg">
            Owner <span className="font-semibold text-white">Khaesya Koria Silalahi</span>
          </p>

          <div className="flex items-center gap-3 mt-3">
            <span className="bg-[#730700] text-white text-sm px-4 py-1 rounded-lg uppercase">
              {umkm.category}
            </span>
            <button className="bg-green-600 text-white text-sm font-semibold px-4 py-1 rounded-lg flex items-center gap-1">
              BUKA
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9 16.172l-3.536-3.536-1.414 1.414L9 19 20.95 7.05l-1.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 space-y-1 text-sm">
            <p>📞 083121102304</p>
            <p>📍 Jl Starban Gg Citra No.9 Medan, Kec. Polonia, Kota Medan</p>
            <p>✉️ kesyy28@gmail.com</p>
          </div>
        </div>

        <button className="absolute right-16 bottom-1/2 bg-[#730700] text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-[#8e0b0b] transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 12l8.25-4.5v9L7.5 12z"
            />
          </svg>
          BAGIKAN
        </button>
      </div>

      {/* ===== Konten (Flex) ===== */}
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
        {/* Kolom kiri */}
        <div className="flex-[2] space-y-8">
          <div className="bg-white border rounded-xl shadow p-6">
            <div className="bg-[#730700] text-white px-4 py-2 rounded-md inline-block mb-4 font-semibold">
              Tentang Kami
            </div>
            <p className="text-gray-700">
              Menjual berbagai jenis makanan risol dan berbagai cemilan/minuman lainnya.
            </p>
          </div>

          <div className="bg-white border rounded-xl shadow p-6">
            <div className="bg-[#730700] text-white px-4 py-2 rounded-md inline-block mb-4 font-semibold">
              Deskripsi Produk dan Jasa
            </div>
            <p className="text-gray-700 leading-relaxed">
              Risol Chaa Food adalah usaha rumahan yang menjual berbagai jenis makanan dan
              minuman seperti risol, aneka jus, serta cemilan lainnya seperti cendol keebeng.
              Produk dijual melalui media sosial, merchant GoFood, Shopee Food, atau langsung.
              Target pasar mencakup semua kalangan, dan produk dijaga kualitas serta kebersihannya.
            </p>
          </div>

          <div className="bg-white border rounded-xl shadow p-6">
            <div className="bg-[#730700] text-white px-4 py-2 rounded-md inline-block mb-4 font-semibold">
              Galeri / Foto
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {umkm.gallery?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`foto-${i}`}
                  className="rounded-lg object-cover w-full h-40"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Kolom kanan */}
        <div className="flex-[1] space-y-6">
          <div className="bg-white border rounded-xl shadow p-6">
            <h3 className="font-bold text-[#730700] text-lg mb-3">Lokasi / Kontak Usaha :</h3>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!...your-map-link..."
              className="w-full h-56 rounded-lg mb-4"
              loading="lazy"
            ></iframe>
            <div className="text-gray-700 text-sm space-y-1">
              <p>📍 Jl Starban Gg Citra No.9 Medan</p>
              <p>📞 083121102304</p>
              <p>✉️ kesyy28@gmail.com</p>
              <p>🌐 Website: -</p>
            </div>
            <div className="flex gap-2 mt-3">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-[#730700] rounded-md"></div>
              ))}
            </div>
          </div>

          <div className="bg-white border rounded-xl shadow p-6">
            <h3 className="font-bold text-[#730700] text-lg mb-3">Buka</h3>
            <div className="text-sm text-gray-700 space-y-1">
              {["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"].map((d) => (
                <div className="flex justify-between" key={d}>
                  <span>{d}</span>
                  <span>10:00 - 22:00</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
