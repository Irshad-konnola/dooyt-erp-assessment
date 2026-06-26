import { X } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#F26419] font-medium text-sm tracking-wide">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mt-4 mb-6 leading-[1.15]">
            How Dooyt Can Simplify Your Business <br className="hidden md:block" />
            Management?
          </h2>
          <p className="text-[17px] text-zinc-500 leading-relaxed max-w-2xl">
            Dooyt is renowned as the best ERP system for small companies and has many 
            features that help to simplify every aspect of your business on a single, easy-
            to-use platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Lead Source Donut Chart */}
          <div className="bg-gradient-to-br from-[#FF9800] to-[#F26419] rounded-3xl p-6 lg:p-8 flex items-center justify-center min-h-[400px] relative overflow-hidden shadow-sm">
            {/* Inner Dashboard UI Mock */}
            <div className="bg-white w-full h-full rounded-2xl shadow-xl flex flex-col overflow-hidden">
              <div className="border-b border-zinc-100 px-6 py-4">
                <h4 className="text-sm font-bold text-[#111]">Lead Source Summary</h4>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-6">
                {/* SVG Donut Chart */}
                <div className="relative w-40 h-40 mb-6">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#E5E7EB" strokeWidth="16" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#F87171" strokeWidth="16" strokeDasharray="60 220" strokeDashoffset="0" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#FBBF24" strokeWidth="16" strokeDasharray="40 220" strokeDashoffset="-60" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#34D399" strokeWidth="16" strokeDasharray="30 220" strokeDashoffset="-100" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#60A5FA" strokeWidth="16" strokeDasharray="50 220" strokeDashoffset="-130" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#A78BFA" strokeWidth="16" strokeDasharray="40 220" strokeDashoffset="-180" />
                  </svg>
                  <div className="absolute inset-0 bg-white rounded-full m-[28px] shadow-inner"></div>
                </div>
                {/* Legend Mock */}
                <div className="w-full px-2">
                  <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-[8px] font-semibold text-zinc-500">
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#A78BFA]"></div> Meta Ad</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#34D399]"></div> Public Reference</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#F87171]"></div> FACEBOOK</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#60A5FA]"></div> MURSHID</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#FBBF24]"></div> INSTAGRAM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Text Content */}
          <div className="bg-[#FFF6F0] rounded-3xl p-8 lg:p-10 flex flex-col justify-center min-h-[400px]">
            <h3 className="text-3xl font-bold text-[#111111] mb-6 leading-tight">
              Real-Time Dashboards <br /> for Every Department
            </h3>
            <p className="text-base text-zinc-500 leading-relaxed">
              Dooyt ERP has a dedicated dashboard for each module. This visually interactive dashboard provides instant access to data and business performance, tracks progress, and makes quick, informed decisions anytime.
            </p>
          </div>

          {/* Card 3: Task History UI */}
          <div className="bg-gradient-to-br from-[#4F46E5] to-[#3B82F6] rounded-3xl p-6 lg:p-8 flex items-center justify-center min-h-[400px]">
            {/* Inner Dashboard UI Mock */}
            <div className="bg-white w-full h-full rounded-2xl shadow-xl flex flex-col overflow-hidden">
              <div className="border-b border-zinc-100 px-6 py-4 flex justify-between items-center">
                <h4 className="text-base font-bold text-[#111]">Task History</h4>
                <X className="w-4 h-4 text-zinc-400" />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center gap-4 relative">
                
                {/* Timeline item 1 */}
                <div className="flex items-center gap-4 relative z-10">
                  <span className="text-[10px] font-semibold text-blue-500 w-12 text-right">09:20 am</span>
                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r text-blue-600 text-xs font-semibold py-2 px-4 flex-1">
                    Started
                  </div>
                </div>
                
                {/* Timeline item 2 */}
                <div className="flex items-center gap-4 relative z-10 ml-6">
                  <span className="text-[10px] font-semibold text-orange-400 w-12 text-right">10:25 am</span>
                  <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r text-orange-500 text-xs font-semibold py-2 px-4 w-3/4">
                    Hold
                  </div>
                </div>

                {/* Timeline item 3 */}
                <div className="flex items-center gap-4 relative z-10 ml-12">
                  <span className="text-[10px] font-semibold text-blue-500 w-12 text-right">11:45 am</span>
                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r text-blue-600 text-xs font-semibold py-2 px-4 flex-1">
                    Started
                  </div>
                </div>

                {/* Timeline item 4 */}
                <div className="flex items-center gap-4 relative z-10 ml-8">
                  <span className="text-[10px] font-semibold text-green-500 w-12 text-right">02:30 pm</span>
                  <div className="bg-green-50 border-l-4 border-green-500 rounded-r text-green-600 text-xs font-semibold py-2 px-4 flex-1">
                    Finished
                  </div>
                </div>

                {/* Vertical connecting line */}
                <div className="absolute left-[88px] top-8 bottom-8 w-px bg-zinc-100 z-0 hidden sm:block"></div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}