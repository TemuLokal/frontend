import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { articleList } from "../data/articleList.ts";
import NotFound from "./NotFound";

export default function DetailArticle() {
    const { id } = useParams();
    const article = articleList.find((item: any) => item.id === parseInt(id || ""));

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [id]);

    if (!article) {
        return <NotFound />;
    }

    const relatedArticles = articleList.filter((item: any) => item.id !== article.id).slice(0, 3);

    return (
        <section className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="w-full bg-white mt-8 sm:mt-12 md:mt-16">
                <div className="px-6 max-w-7xl mx-auto">
                    <div className="mb-2 md:mb-0 w-full mx-auto">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Article */}
                    <div className="mt-8 py-4 max-w-7xl mx-auto">
                        <div className="flex items-center gap-6 mb-4">
                            {/* <span className="bg-[#730700] text-white text-xs sm:text-sm px-4 py-1.5 rounded font-semibold">
                                {article.category}
                            </span> */}
                            <div className="flex items-center gap-2 text-gray-600 text-lg">
                                <img src="/user.svg" alt="Icon" className="w-5 h-5" />
                                <span>{article.creator}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 text-lg">
                                <img src="/calendar.svg" alt="Icon" className="w-5 h-5" />
                                <span>{article.date}</span>
                            </div>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            {article.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto">
                <div className="px-6 py-4 max-w-7xl mx-auto">
                    {/* Article Intro Content */}
                    <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                        {article.content.split('\n\n').map((paragraph: string, idx: number) => (
                            <p key={idx} className="text-base lg:text-lg">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Article Sections */}
                    {article.sections && article.sections.map((section: any, sectionIdx: number) => (
                        <div key={sectionIdx} className="mb-12">
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8">
                                {section.title}
                            </h2>

                            {section.content && (
                                <p className="text-gray-700 leading-relaxed mb-6 text-base lg:text-lg">
                                    {section.content}
                                </p>
                            )}

                            {/* Items List */}
                            {section.items && section.items.length > 0 && (
                                <ul className="space-y-3 mb-6">
                                    {section.items.map((item: string, itemIdx: number) => (
                                        <li key={itemIdx} className="flex items-start gap-3 text-gray-700">
                                            <span className="text-[#730700] font-bold mt-1 flex-shrink-0">•</span>
                                            <span className="text-base lg:text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Steps List */}
                            {section.steps && section.steps.length > 0 && (
                                <ol className="space-y-3 mb-6">
                                    {section.steps.map((step: string, stepIdx: number) => (
                                        <li key={stepIdx} className="flex items-start gap-3 text-gray-700">
                                            <span className="text-[#730700] font-bold bg-gray-100 w-8 h-8 flex items-center justify-center rounded flex-shrink-0">
                                                {stepIdx + 1}
                                            </span>
                                            <span className="text-base lg:text-lg pt-0.5">{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            )}
                        </div>
                    ))}

                    {/* Back Button */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <Link
                            to="/article"
                            className="inline-flex items-center gap-2 text-[#730700] font-semibold hover:text-[#730700]/80 transition text-base lg:text-lg"
                        >
                            ← Kembali ke Artikel
                        </Link>
                    </div>
                </div>
            </div>

            {/* Related Articles Section */}
            <div className="px-6 py-4 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Berita & Artikel Lainnya</h2>
                    <p className="text-gray-600">Informasi terkini tentang perkembangan UMKM Indonesia</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedArticles.map((relatedArticle: any) => (
                        <Link
                            key={relatedArticle.id}
                            to={`/article/${relatedArticle.id}`}
                            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#730700] transition-all group"
                        >
                            <div className="h-40 sm:h-48 overflow-hidden bg-gray-100">
                                <img
                                    src={relatedArticle.image}
                                    alt={relatedArticle.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4 sm:p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                        {relatedArticle.category}
                                    </span>
                                    <span className="text-gray-500 text-xs">{relatedArticle.date}</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm lg:text-base truncate">
                                    {relatedArticle.title}
                                </h3>
                                <p className="text-gray-600 text-xs lg:text-sm line-clamp-2 mb-4 truncate">
                                    {relatedArticle.description}
                                </p>
                                <button className="w-full bg-white border border-[#730700] text-[#730700] text-xs sm:text-sm font-semibold py-2 rounded hover:bg-[#730700] hover:text-white transition">
                                    Lihat Detail
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12 mb-8">
                    <Link
                        to="/article"
                        className="inline-block bg-[#730700] hover:bg-[#730700]/90 text-white font-bold px-8 py-3 rounded-lg transition"
                    >
                        Lihat Semua Berita
                    </Link>
                </div>
            </div>
        </section>
    );
}
