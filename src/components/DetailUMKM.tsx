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

                <div className="relative max-w-7xl mx-auto h-full flex items-center justify-between px-12">
                    <div className="flex flex-col text-white">
                        <h1 className="text-4xl sm:text-6xl font-bold">{umkm.name}</h1>
                        <div className="flex items-center gap-3 mt-2">
                            <div className="w-8 h-1 rounded-full bg-[#730700]"></div>
                            <p className="text-lg sm:text-2xl text-[#B8B8B8]">
                                Owner <span className="font-semibold text-white">Khaesya Koria Silalahi</span>
                            </p>
                        </div>

                        <div className="flex items-center gap-3 mt-4">
                            <span className="bg-[#730700] text-white text-sm sm:text-md px-5 py-1 rounded-lg uppercase">
                                {umkm.category}
                            </span>
                            <div className="flex items-center gap-1 text-white text-sm sm:text-md font-semibold px-4 py-1 rounded-lg">
                                BUKA
                                <img src="/check.svg" alt="icon" className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mt-6 text-sm sm:text-md font-bold">
                            <div className="flex items-center gap-4">
                                <img src="/phone.svg" alt="icon" className="w-5 h-5" />
                                <span>083121102304</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="/map-pin-white.svg" alt="icon" className="w-5 h-5" />
                                <span>{umkm.location}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="/mail-white.svg" alt="icon" className="w-5 h-5" />
                                <span>kesyy28@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block bg-[#730700]/50 w-fit h-fit p-2 rounded-full hover:bg-[#730700]/70 transition">
                        <button className="flex items-center gap-4 bg-[#730700] text-white px-6 py-3 rounded-full transition">
                            BAGIKAN
                            <div className="bg-white rounded-full p-3 flex items-center justify-center">
                                <img
                                    src="/share-2.svg"
                                    alt="icon"
                                    className="w-5 h-5 object-contain"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 px-6 py-12 max-w-7xl mx-auto">
                <div className="flex flex-col gap-8 flex-1">
                    <div className="flex flex-col bg-[#730700] rounded-xl py-5 px-10 text-white">
                        Beranda - Detail UMKM
                    </div>
                    <div className="flex flex-col bg-white border border-[#E8E8EB] rounded-xl shadow p-10">
                        <div className="flex">
                            <div className="text-black text-2xl font-bold">
                                Tentang Kami
                            </div>
                        </div>
                        <p className="text-[#71717B] mt-2">
                            {umkm.description}
                        </p>
                    </div>
                    <div className="flex flex-col bg-[#730700] rounded-xl py-5 px-10 text-white">
                        Deskripsi Produk dan Jasa
                    </div>
                    <div className="flex flex-col bg-white border border-[#E8E8EB] rounded-xl shadow p-6">
                        <p className="text-[#71717B] leading-relaxed">
                            {umkm.longDescription}
                        </p>
                    </div>

                    <div className="flex flex-col bg-white border border-[#E8E8EB] rounded-xl shadow p-6">
                        <div className="flex">
                            <div className="text-black px-4 py-2 rounded-md font-semibold">
                                Galeri / Foto
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-4">
                            {umkm.gallery?.map((img, i) => (
                                <div key={i} className="flex-1 min-w-[150px] max-w-[200px]">
                                    <img
                                        src={img}
                                        alt={`foto-${i}`}
                                        className="rounded-lg object-cover w-full h-40"
                                    />
                                </div>
                            ))}

                            {!umkm.gallery && (
                                <>
                                    <div className="flex-1 min-w-[150px] max-w-[275px]">
                                        <div className="bg-gray-200 w-full h-55 flex items-center justify-center">
                                            <span className="text-gray-500">Foto 1</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-[150px] max-w-[275px]">
                                        <div className="bg-gray-200 w-full h-55 flex items-center justify-center">
                                            <span className="text-gray-500">Foto 2</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-[150px] max-w-[275px]">
                                        <div className="bg-gray-200 w-full h-55 flex items-center justify-center">
                                            <span className="text-gray-500">Foto 3</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-[150px] max-w-[275px]">
                                        <div className="bg-gray-200 w-full h-55 flex items-center justify-center">
                                            <span className="text-gray-500">Foto 4</span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 w-full lg:w-80">
                    <h3 className="font-bold text-black text-xl">Lokasi / Kontak Usaha :</h3>
                    <div className="flex flex-col bg-white border border-[#E8E8EB] rounded-lg shadow">
                        <div className="flex">
                            <iframe
                                title="map"
                                src={umkm.map}
                                className="flex-1 h-56 rounded-lg mb-4"
                                loading="lazy"
                            ></iframe>
                        </div>

                        <div className="flex flex-col gap-2 text-gray-700 text-sm px-6">
                            <div className="flex items-center gap-4 truncate">
                                <img src="/map-pin.svg" alt="icon" className="w-5 h-5" />
                                <span>{umkm.location}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="/phone-brown.svg" alt="icon" className="w-5 h-5" />
                                <span>083121102304</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="/mail-brown.svg" alt="icon" className="w-5 h-5" />
                                <span>kesyy28@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="/globe.svg" alt="icon" className="w-5 h-5" />
                                <span>Website: -</span>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-4 pb-6 px-6">
                            {[1, 2, 3, 4].map((_, i) => (
                                <div key={i} className="flex-1 h-10 bg-[#730700] rounded-lg"></div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col bg-white border border-[#E8E8EB] rounded-lg shadow p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/clock.svg" alt="icon" className="w-5 h-5" />
                            <h3 className="font-bold text-black text-lg">Buka</h3>
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-black">
                            {["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"].map((day) => (
                                <div key={day} className="flex justify-between items-center">
                                    <span className="font-bold">{day}</span>
                                    <span>10:00 - 22:00</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-4 right-4 flex justify-center md:hidden z-50">
                <button className="flex items-center gap-3 bg-[#730700] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#730700]/80 transition">
                    BAGIKAN
                    <div className="bg-white rounded-full p-2 flex items-center justify-center">
                        <img
                            src="/share-2.svg"
                            alt="icon"
                            className="w-5 h-5 object-contain"
                        />
                    </div>
                </button>
            </div>
        </section>
    );
}