import React from "react";

type Industry = {
  id: string;
  name: string;
  description: string;
};

export default function IndustriesSection({ industries }: { industries: Industry[] }) {
  // Separate the top 6 standard cards from the bottom 2 horizontal cards
  const topIndustries = industries.slice(0, 6);
  const bottomIndustries = industries.slice(6, 8);

  return (
    <section className="py-24 bg-[#FAFAFA] font-sans">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#F26419] font-medium text-xs tracking-wider uppercase mb-2 block">
            Industries
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight">
            Smart Solutions for Every Industry
          </h2>
          <p className="text-[16px] text-zinc-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Dooyt is recognized as a reliable and customized ERP solution that adapts to 
            the unique needs of every industry.
          </p>
        </div>

        {/* Top 6 Cards Grid (Masonry-style alignment) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 items-start">
          {topIndustries.map((ind, index) => {
            // Match the specific layout seen in the image based on index
            const isImageTop = index === 1 || index === 3 || index === 5;
            
            return (
              <div 
                key={ind.id} 
                className="bg-white rounded-[24px] border border-zinc-100 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow"
              >
                {/* Image Top Layout */}
                {isImageTop && (
                  <div className="w-full h-48 bg-zinc-200 p-2">
                     <div className="w-full h-full rounded-xl bg-zinc-300 object-cover" />
                  </div>
                )}

                {/* Text Content */}
                <div className="p-8 flex-1">
                  <h3 className="text-2xl font-bold text-[#111111] mb-3">{ind.name}</h3>
                  <p className="text-[15px] text-zinc-500 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                {/* Image Bottom Layout */}
                {!isImageTop && (
                  <div className="w-full h-48 bg-zinc-200 p-2">
                     <div className="w-full h-full rounded-xl bg-zinc-300 object-cover" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom 2 Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomIndustries.map((ind) => (
            <div 
              key={ind.id} 
              className="bg-white rounded-[24px] border border-zinc-100 shadow-sm overflow-hidden flex flex-col sm:flex-row hover:shadow-md transition-shadow"
            >
              {/* Image Left */}
              <div className="w-full sm:w-2/5 h-48 sm:h-auto bg-zinc-200 p-2 shrink-0">
                <div className="w-full h-full rounded-xl bg-zinc-300" />
              </div>
              {/* Text Right */}
              <div className="p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#111111] mb-3">{ind.name}</h3>
                <p className="text-[15px] text-zinc-500 leading-relaxed">
                  {ind.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}