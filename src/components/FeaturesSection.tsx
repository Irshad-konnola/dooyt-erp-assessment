import { X } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-20 bg-white font-sans overflow-hidden flex justify-center">
      <div className="max-w-[1200px] w-[90%] mx-auto">
        
        {/* Header Section (Tightened margins for vertical space) */}
        <div className="max-w-3xl mb-10">
          <span className="text-[#F26419] font-medium text-[13px] tracking-wide mb-2 block">Features</span>
          <h2 className="text-3xl md:text-[42px] font-bold text-[#111111] mt-2 mb-4 leading-[1.15]">
            How Dooyt Can Simplify Your Business <br className="hidden md:block" />
            Management?
          </h2>
          <p className="text-[15px] text-zinc-500 leading-relaxed max-w-2xl">
            Dooyt is renowned as the best ERP system for small companies and has many 
            features that help to simplify every aspect of your business on a single, easy-to-use platform.
          </p>
        </div>

        {/* Features Grid (Fixed uniform height) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Lead Source Donut Chart (Bleeds Right & Bottom) */}
          <div className="bg-gradient-to-br from-[#FF9800] to-[#F26419] rounded-3xl pt-6 pl-6 lg:pt-8 lg:pl-8 flex h-[340px] relative overflow-hidden shadow-sm">
            
            {/* Inner Dashboard UI Mock (Clipped) */}
            <div className="bg-white w-full h-full rounded-tl-2xl shadow-xl flex flex-col relative">
              <div className="border-b border-zinc-100 px-5 py-3">
                <h4 className="text-[13px] font-bold text-[#111]">Lead Source Summary</h4>
              </div>
              
              <div className="flex-1 flex flex-col items-center p-4">
                {/* Detailed SVG Donut Chart */}
                <div className="relative w-32 h-32 mb-4">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#E5E7EB" strokeWidth="18" />
                    {/* Complex segments matching the image */}
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#F87171" strokeWidth="18" strokeDasharray="30 220" strokeDashoffset="0" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#FBBF24" strokeWidth="18" strokeDasharray="20 220" strokeDashoffset="-32" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#34D399" strokeWidth="18" strokeDasharray="40 220" strokeDashoffset="-54" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#60A5FA" strokeWidth="18" strokeDasharray="15 220" strokeDashoffset="-96" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#A78BFA" strokeWidth="18" strokeDasharray="25 220" strokeDashoffset="-113" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#EC4899" strokeWidth="18" strokeDasharray="35 220" strokeDashoffset="-140" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#F43F5E" strokeWidth="18" strokeDasharray="20 220" strokeDashoffset="-177" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#10B981" strokeWidth="18" strokeDasharray="10 220" strokeDashoffset="-199" />
                  </svg>
                  {/* Inner white cutout to make it a donut */}
                  <div className="absolute inset-0 bg-white rounded-full m-[24px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"></div>
                </div>
                
                {/* Dense Legend Mock */}
                <div className="w-full px-2">
                  <div className="flex flex-wrap justify-center gap-x-2 gap-y-1.5 text-[7px] font-semibold text-zinc-500">
                    <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]"></div> Meta Ad</span>
                    <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#34D399]"></div> Public Reference</span>
                    <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#F87171]"></div> FACEBOOK</span>
                    <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]"></div> MURSHID</span>
                    <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#EC4899]"></div> Not Defined</span>
                    <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]"></div> INSTAGRAM</span>
                    <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></div> Whatsapp</span>
                    <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#F43F5E]"></div> Google Ad</span>
                    <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#E5E7EB]"></div> Call</span>
                    <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]"></div> BNI</span>
                    <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]"></div> Facebook ERP</span>
                    <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#34D399]"></div> Website</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Text Content */}
          <div className="bg-[#FFF9F5] rounded-3xl p-8 lg:p-10 flex flex-col justify-center h-[340px]">
            <h3 className="text-[26px] lg:text-[28px] font-bold text-[#111111] mb-4 leading-[1.2]">
              Real-Time Dashboards <br className="hidden xl:block" /> for Every Department
            </h3>
            <p className="text-[14px] text-zinc-500 leading-relaxed">
              Dooyt ERP has a dedicated dashboard for each module. This visually interactive dashboard provides instant access to data and business performance, tracks progress, and makes quick, informed decisions anytime.
            </p>
          </div>

          {/* Card 3: Task History UI (Bleeds Right & Bottom) */}
          <div className="bg-gradient-to-br from-[#4F46E5] to-[#3B82F6] rounded-3xl pt-6 pl-6 lg:pt-8 lg:pl-8 flex h-[340px] relative overflow-hidden shadow-sm">
            
            {/* Inner Dashboard UI Mock (Clipped) */}
            <div className="bg-white w-full h-full rounded-tl-2xl shadow-xl flex flex-col relative">
              <div className="border-b border-zinc-100 px-5 py-3 flex justify-between items-center">
                <h4 className="text-[13px] font-bold text-[#111]">Task History</h4>
                <X className="w-3 h-3 text-zinc-400 mr-2" />
              </div>
              
              <div className="flex-1 px-5 py-6 flex flex-col justify-between relative overflow-hidden">
                
                {/* Horizontal Background Grid Lines */}
                <div className="absolute left-[60px] right-0 top-[25%] h-px bg-zinc-100/80"></div>
                <div className="absolute left-[60px] right-0 top-[50%] h-px bg-zinc-100/80"></div>
                <div className="absolute left-[60px] right-0 top-[75%] h-px bg-zinc-100/80"></div>

                {/* Timeline item 1 */}
                <div className="flex items-center gap-3 relative z-10">
                  <span className="text-[9px] font-semibold text-blue-500 w-10 text-right shrink-0">09:20 am</span>
                  <div className="bg-blue-50 border-l-[3px] border-blue-500 rounded text-blue-600 text-[10px] font-semibold py-1.5 px-3 w-1/3 shadow-sm">
                    Started
                  </div>
                </div>
                
                {/* Timeline item 2 */}
                <div className="flex items-center gap-3 relative z-10">
                  <span className="text-[9px] font-semibold text-orange-400 w-10 text-right shrink-0">10:25 am</span>
                  <div className="bg-orange-50 border-l-[3px] border-orange-400 rounded text-orange-500 text-[10px] font-semibold py-1.5 px-3 w-2/5 ml-[10%] shadow-sm">
                    Hold
                  </div>
                </div>

                {/* Timeline item 3 */}
                <div className="flex items-center gap-3 relative z-10">
                  <span className="text-[9px] font-semibold text-blue-500 w-10 text-right shrink-0">11:45 am</span>
                  <div className="bg-blue-50 border-l-[3px] border-blue-500 rounded text-blue-600 text-[10px] font-semibold py-1.5 px-3 w-2/3 ml-[15%] shadow-sm">
                    Started
                  </div>
                </div>

                {/* Timeline item 4 */}
                <div className="flex items-center gap-3 relative z-10">
                  <span className="text-[9px] font-semibold text-green-500 w-10 text-right shrink-0">02:30 pm</span>
                  <div className="bg-green-50 border-l-[3px] border-green-500 rounded text-green-600 text-[10px] font-semibold py-1.5 px-3 flex-1 ml-[25%] shadow-sm">
                    Finished
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}