import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { articleList } from "../data/articleList.ts";
import NotFound from "./NotFound";

export default function DetailArticle() {
    const { id } = useParams();
    const article = articleList.find((item: any) => item.id === parseInt(id || ""));
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsVisible(true);
    }, [id]);

    if (!article) {
        return <NotFound />;
    }

    const relatedArticles = articleList.filter((item: any) => item.id !== article.id).slice(0, 3);

    return (
        <section className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="w-full bg-white pt-8 sm:pt-12 md:pt-16">
                <div className="px-4 sm:px-6 max-w-4xl mx-auto">
                    <div className={`mb-6 md:mb-8 w-full mx-auto overflow-hidden rounded-xl shadow-lg transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-64 sm:h-80 md:h-96 object-cover"
                        />
                    </div>

                    {/* Article Header */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="bg-[#730700] text-white text-sm px-4 py-2 rounded-lg font-semibold shadow-lg">
                                {article.category}
                            </span>
                            <div className="flex items-center gap-2 text-gray-600">
                                <img src="/user.svg" alt="Icon" className="w-5 h-5" />
                                <span className="font-medium">{article.creator}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <img src="/calendar.svg" alt="Icon" className="w-5 h-5" />
                                <span className="font-medium">{article.date}</span>
                            </div>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {article.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="py-8">
                    <div className={`text-gray-700 leading-relaxed mb-12 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {article.content.split('\n\n').map((paragraph: string, idx: number) => (
                            <p key={idx} className="text-base lg:text-lg">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Article Sections */}
                    {article.sections && article.sections.map((section: any, sectionIdx: number) => (
                        <div key={sectionIdx} className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-2 h-8 bg-[#730700] rounded-full"></div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                    {section.title}
                                </h2>
                            </div>

                            {section.content && (
                                <p className="text-gray-700 leading-relaxed mb-6 text-base lg:text-lg">
                                    {section.content}
                                </p>
                            )}

                            {/* Items List */}
                            {section.items && section.items.length > 0 && (
                                <ul className="space-y-4 mb-8">
                                    {section.items.map((item: string, itemIdx: number) => (
                                        <li 
                                            key={itemIdx} 
                                            className="flex items-start gap-4 text-gray-700 p-4 rounded-lg bg-gray-50 transition-all duration-300 hover:bg-gray-100"
                                            style={{ animationDelay: `${itemIdx * 100}ms` }}
                                        >
                                            <span className="text-[#730700] font-bold mt-1 flex-shrink-0">•</span>
                                            <span className="text-base lg:text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Steps List */}
                            {section.steps && section.steps.length > 0 && (
                                <ol className="space-y-4 mb-8">
                                    {section.steps.map((step: string, stepIdx: number) => (
                                        <li 
                                            key={stepIdx} 
                                            className="flex items-start gap-4 text-gray-700 p-4 rounded-lg bg-gray-50 transition-all duration-300 hover:bg-gray-100"
                                        >
                                            <span className="text-white font-bold bg-[#730700] w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 text-sm">
                                                {stepIdx + 1}
                                            </span>
                                            <span className="text-base lg:text-lg pt-1">{step}</span>
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
                            className="inline-flex items-center gap-3 text-[#730700] font-semibold hover:text-[#5a0500] transition-all duration-300 hover:gap-4 group"
                        >
                            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                            Kembali ke Artikel
                        </Link>
                    </div>
                </div>
            </div>

            {/* Related Articles Section */}
            <div className="px-4 sm:px-6 py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Berita & Artikel Lainnya</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Informasi terkini tentang perkembangan UMKM Indonesia</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedArticles.map((relatedArticle: any, index: number) => (
                            <Link
                                key={relatedArticle.id}
                                to={`/article/${relatedArticle.id}`}
                                className="bg-white rounded-xl shadow-lg border border-[#E8E8EB] overflow-hidden hover:shadow-2xl hover:border-[#730700] transition-all duration-300 group"
                            >
                                <div className="h-48 overflow-hidden bg-gray-100">
                                    <img
                                        src={relatedArticle.image}
                                        alt={relatedArticle.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded font-medium">
                                            {relatedArticle.category}
                                        </span>
                                        <span className="text-gray-500 text-xs">{relatedArticle.date}</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 text-lg leading-tight group-hover:text-[#730700] transition-colors duration-300">
                                        {relatedArticle.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">
                                        {relatedArticle.description}
                                    </p>
                                    <button className="w-full bg-white border border-[#730700] text-[#730700] text-sm font-semibold py-3 rounded-lg transition-all duration-300 hover:bg-[#730700] hover:text-white group-hover:shadow-lg">
                                        Lihat Detail
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/article"
                            className="inline-block bg-[#730700] hover:bg-[#5a0500] text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Lihat Semua Berita
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}