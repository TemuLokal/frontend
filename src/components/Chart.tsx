function Chart({ widthPercent = 0.8, layout = "row" }: { widthPercent?: number; layout?: "row" | "column" }) {
  const pct = Math.max(0.2, Math.min(1, widthPercent));
  const isColumn = layout === "column";
  
  return (
    <section className="w-full flex justify-center items-center px-2 sm:px-4 md:px-8">
      <div className="w-full flex justify-center">
        <div
          className={`bg-white rounded-[10px] shadow-xl hover:shadow-2xl transition-shadow duration-300 px-3 sm:px-4 md:px-6 lg:px-16 py-3 md:py-4 lg:py-12 flex ${isColumn ? 'flex-col' : 'flex-col md:flex-row'} justify-between items-stretch gap-3 sm:gap-4 md:gap-4 lg:gap-10 xl:gap-32`}
          style={{ width: `${pct * 100}%` }}
        >
          {/* UMKM Terdaftar */}
          <div className={`flex-1 min-w-0 max-w-full flex flex-col items-center text-center py-2 sm:py-3 ${!isColumn ? 'border-b md:border-b-0 md:border-r border-gray-200 last:border-b-0 last:border-r-0' : 'border-b border-gray-200 last:border-b-0'}`}>
            <div className="flex items-center justify-center mb-2 sm:mb-3">
              <img src="/bar-chart-2.svg" alt="icon" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-20 xl:h-20" />
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1">120.349</div>
            <div className="text-gray-500 font-semibold text-sm sm:text-base md:text-lg whitespace-normal break-words">UMKM TERDAFTAR</div>
          </div>
          {/* UMKM Aktif */}
          <div className={`flex-1 min-w-0 max-w-full flex flex-col items-center text-center py-2 sm:py-3 ${!isColumn ? 'border-b md:border-b-0 md:border-r border-gray-200 last:border-b-0 last:border-r-0' : 'border-b border-gray-200 last:border-b-0'}`}>
            <div className="flex items-center justify-center mb-2 sm:mb-3">
              <img src="/shopping-bag.svg" alt="icon" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-20 xl:h-20" />
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1">96.434</div>
            <div className="text-gray-500 font-semibold text-sm sm:text-base md:text-lg whitespace-normal break-words">UMKM AKTIF</div>
          </div>
          {/* Daerah di Indonesia */}
          <div className="flex-1 min-w-0 max-w-full flex flex-col items-center text-center py-2 sm:py-3">
            <div className="flex items-center justify-center mb-2 sm:mb-3">
              <img src="/map.svg" alt="icon" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-20 xl:h-20" />
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1">26</div>
            <div className="text-gray-500 font-semibold text-sm sm:text-base md:text-lg whitespace-normal break-words">DAERAH DI INDONESIA</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chart;