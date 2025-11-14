import { Link } from 'react-router-dom';
import { articleList } from '../data/articleList.ts';
import { useEffect, useState, useRef } from 'react';

function Article() {
  const [visibleArticles, setVisibleArticles] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleArticles(prev => [...prev, id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const articles = document.querySelectorAll('.article-card');
    articles.forEach(article => observer.observe(article));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="article" ref={sectionRef} className="pt-20 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-6 sm:mb-8 w-full animate-fade-in-up">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-black text-center">
              Berita & Artikel Terbaru
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#B8B8B8] text-center mt-2">
              Informasi terkini tentang perkembangan UMKM Indonesia
            </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {articleList.map((article: any, index) => (
            <div 
              key={article.id} 
              data-id={article.id}
              className={`article-card bg-white rounded-[10px] shadow-lg border border-[#E8E8EB] flex flex-col h-full group transition-all duration-300 hover:shadow-2xl hover:border-[#730700] relative overflow-hidden ${
                visibleArticles.includes(article.id) ? 'card-reveal revealed' : 'card-reveal'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-40 sm:h-48 w-full rounded-t-lg overflow-hidden flex items-center justify-center bg-gray-100 relative">
                <img src={article.image} alt={article.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              {/* Category Badge */}
              <span className="absolute left-3 top-[140px] sm:top-[175px] bg-[#730700] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-lg shadow-lg z-20">
                {article.category}
              </span>
              
              <div className="flex flex-col flex-1 px-4 sm:px-4 pt-6 sm:pt-8 pb-3 sm:pb-4">
                <h4 className="text-lg font-bold text-[#730700] mb-2 text-left line-clamp-2 group-hover:text-[#5a0500] transition-colors duration-300">
                  {article.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 text-left line-clamp-2">
                  {article.description}
                </p>
                <hr className="my-2 sm:my-3 border-t border-gray-200" />
                
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <img
                    src="/user.svg"
                    alt="icon"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                  />
                  <span className="text-xs text-[#71717B] font-semibold">
                    {article.creator}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <img
                    src="/calendar.svg"
                    alt="icon"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                  />
                  <span className="text-xs text-[#71717B] font-semibold">
                    {article.date}
                  </span>
                </div>

                <Link
                  to={`/article/${article.id}`}
                  className="bg-white border border-[#730700] text-center text-xs sm:text-sm text-[#730700] font-semibold rounded-[10px] py-3 transition-all duration-300 hover:bg-[#730700] hover:text-white hover:shadow-lg block"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 sm:mt-10 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <a href="#" className="bg-[#730700] hover:bg-[#5a0500] text-white font-bold px-6 py-2 sm:px-10 sm:py-3 rounded-lg text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Lihat Semua Berita
          </a>
        </div>
      </div>
    </section>
  );
}

export default Article;