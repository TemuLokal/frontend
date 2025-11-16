import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { umkmList } from "../data/umkmList";
import NotFound from "./NotFound";

export default function DetailUMKM() {
    const { slug } = useParams();
    const umkm = umkmList.find((item) => item.slug === slug);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [slug]);

    const handleShare = async () => {
        const shareData = {
            title: umkm?.name || "UMKM Lokal",
            text: `Lihat detail UMKM ${umkm?.name}`,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                alert("Browser kamu belum mendukung fitur share otomatis.\nSilakan salin link ini:\n" + window.location.href);
            }
        } catch (err) {
            console.error("Gagal membagikan:", err);
        }
    };

    if (!umkm) {
        return <NotFound />;
    }

    return (
        <section className="min-h-screen">
            {/* Hero Section dengan Animasi */}
            <div
                className="relative h-screen w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${umkm.image})` }}
            >
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative max-w-7xl mx-auto h-full flex items-center justify-between px-6 lg:px-12">
                    <div className={`flex flex-col text-white transition-all duration-1000`}>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
                            {umkm.name}
                        </h1>
                        <div className="flex items-center gap-3 mb-6 animate-fade-in-up" style={{ animationDelay: '250ms' }}>
                            <div className="w-8 h-1 rounded-full bg-[#730700]"></div>
                            <p className="text-lg sm:text-xl lg:text-2xl text-[#E8E8E8]">
                                Owner <span className="font-semibold text-white">Khaesya Koria Silalahi</span>
                            </p>
                        </div>

                        <div className="flex items-center gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                            <span className="bg-[#730700] text-white text-sm sm:text-base px-6 py-2 rounded-lg uppercase font-semibold shadow-lg">
                                {umkm.category}
                            </span>
                            <div className="flex items-center gap-2 text-white text-sm sm:text-base font-semibold px-4 py-2">
                                BUKA
                                <img src={`${import.meta.env.BASE_URL}check.svg`} alt="icon" className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                            <div className="flex items-center gap-4 text-base sm:text-lg">
                                <img src={`${import.meta.env.BASE_URL}phone.svg`} alt="icon" className="w-5 h-5" />
                                <span>083121102304</span>
                            </div>
                            <div className="flex items-center gap-4 text-base sm:text-lg">
                                <img src={`${import.meta.env.BASE_URL}map-pin-white.svg`} alt="icon" className="w-5 h-5" />
                                <span>{umkm.location}</span>
                            </div>
                            <div className="flex items-center gap-4 text-base sm:text-lg">
                                <img src={`${import.meta.env.BASE_URL}mail-white.svg`} alt="icon" className="w-5 h-5" />
                                <span>kesyy28@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Share Button */}
                    <div className={`hidden md:block transition-all duration-1000 animate-fade-in-up`} style={{ animationDelay: '600ms' }}>
                        <div className="bg-[#730700]/50 w-fit h-fit p-2 rounded-full hover:bg-[#730700]/70 transition-all duration-300 hover:scale-105">
                            <button
                                onClick={handleShare}
                                className="flex items-center gap-4 bg-[#730700] text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#5a0500] shadow-lg hover:shadow-xl"
                            >
                                BAGIKAN
                                <div className="bg-white rounded-full p-3 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                                    <img
                                        src={`${import.meta.env.BASE_URL}share-2.svg`}
                                        alt="icon"
                                        className="w-5 h-5 object-contain"
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 py-12 max-w-7xl mx-auto">
                {/* Main Content */}
                <div className="flex flex-col gap-6 flex-1">
                    <div className="bg-[#730700] rounded-xl py-4 sm:py-5 px-4 sm:px-10 text-white">
                        Beranda - Detail UMKM
                    </div>

                    {/* About Section */}
                    <div className="bg-white border border-[#E8E8EB] rounded-xl shadow-lg p-6 sm:p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-8 bg-[#730700] rounded-full"></div>
                            <h2 className="text-xl sm:text-2xl font-bold text-black">
                                Tentang Kami
                            </h2>
                        </div>
                        <p className="text-[#71717B] leading-relaxed text-base sm:text-lg">
                            {umkm.description}
                        </p>
                    </div>

                    {/* Product Description */}
                    <div className="bg-[#730700] rounded-xl py-4 sm:py-5 px-4 sm:px-10 text-white">
                        Deskripsi Produk dan Jasa
                    </div>

                    <div className="bg-white border border-[#E8E8EB] rounded-xl shadow-lg p-6 sm:p-8">
                        <p className="text-[#71717B] leading-relaxed text-base sm:text-lg">
                            {umkm.longDescription}
                        </p>
                    </div>

                    {/* Gallery Section */}
                    <div className="bg-white border border-[#E8E8EB] rounded-xl shadow-lg p-6 sm:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-8 bg-[#730700] rounded-full"></div>
                            <h2 className="text-xl sm:text-2xl font-bold text-black">
                                Galeri / Foto
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {umkm.gallery && umkm.gallery.length > 0 ? (
                                umkm.gallery.map((img, i) => (
                                    <div key={i} className="group cursor-pointer">
                                        <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                                            <img
                                                src={img}
                                                alt={`Galeri ${i + 1} - ${umkm.name}`}
                                                className="w-full h-32 sm:h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                                                onError={(e) => {
                                                    e.currentTarget.src = `${import.meta.env.BASE_URL}placeholder.webp`;
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                Array.from({ length: 4 }, (_, i) => (
                                    <div key={i} className="group cursor-pointer">
                                        <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                                            <img
                                                src={`${import.meta.env.BASE_URL}placeholder.webp`}
                                                alt={`Placeholder galeri ${i + 1}`}
                                                className="w-full h-32 sm:h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="flex flex-col gap-6 w-full lg:w-80">
                    <h3 className="font-bold text-black text-lg sm:text-xl">Lokasi / Kontak Usaha :</h3>

                    {/* Map Card */}
                    <div className="bg-white border border-[#E8E8EB] rounded-xl shadow-lg overflow-hidden">
                        <div className="w-full aspect-video overflow-hidden">
                            <iframe
                                title="map"
                                src={umkm.map}
                                className="w-full h-full transition-transform duration-300 hover:scale-105"
                                loading="lazy"
                            ></iframe>
                        </div>

                        <div className="flex flex-col gap-4 text-gray-700 p-6">
                            {[
                                { icon: `${import.meta.env.BASE_URL}map-pin.svg`, text: umkm.location },
                                { icon: `${import.meta.env.BASE_URL}phone-brown.svg`, text: '083121102304' },
                                { icon: `${import.meta.env.BASE_URL}mail-brown.svg`, text: 'kesyy28@gmail.com' },
                                { icon: `${import.meta.env.BASE_URL}globe.svg`, text: 'Website: -' }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4 transition-all duration-300 hover:text-[#730700]">
                                    <img src={item.icon} alt="icon" className="w-5 h-5 flex-shrink-0" />
                                    <span className="text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Social Media */}
                        <div className="flex gap-3 px-6 pb-6 flex-wrap">
                            {['facebook', 'twitter', 'instagram', 'whatsapp'].map((social, index) => (
                                <div
                                    key={social}
                                    className="flex justify-center items-center w-10 h-10 rounded-lg bg-[#730700] transition-all duration-300 hover:bg-[#5a0500] hover:scale-110 cursor-pointer"
                                >
                                    <img src={`${import.meta.env.BASE_URL}${social}.svg`} alt={social} className="w-5 h-5" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="bg-white border border-[#E8E8EB] rounded-xl shadow-lg p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <img src={`${import.meta.env.BASE_URL}clock.svg`} alt="icon" className="w-5 h-5" />
                            <h3 className="font-bold text-black text-lg">Jam Operasional</h3>
                        </div>
                        <div className="flex flex-col gap-3 text-sm text-black">
                            {["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"].map((day, index) => (
                                <div
                                    key={day}
                                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0 transition-all duration-300 hover:bg-gray-50 hover:px-3 hover:rounded-lg"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <span className="font-semibold">{day}</span>
                                    <span className="text-[#730700] font-medium">10:00 - 22:00</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Share Button */}
            <div className="fixed bottom-6 right-6 flex justify-center md:hidden z-50 animate-scale-in">
                <button
                    onClick={handleShare}
                    className="flex items-center gap-3 bg-[#730700] text-white px-6 py-3 rounded-full shadow-xl hover:bg-[#5a0500] transition-all duration-300 hover:scale-105"
                >
                    BAGIKAN
                    <div className="bg-white rounded-full p-2 flex items-center justify-center">
                        <img
                            src={`${import.meta.env.BASE_URL}share-2.svg`}
                            alt="icon"
                            className="w-5 h-5 object-contain"
                        />
                    </div>
                </button>
            </div>
        </section>
    );
}