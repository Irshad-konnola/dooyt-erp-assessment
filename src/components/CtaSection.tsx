import React from "react";
import { ChevronRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-12 bg-white font-sans px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
      {/* Massive Gradient Banner */}
      <div className="bg-gradient-to-r from-[#F26419] to-[#D95615] rounded-[40px] relative overflow-hidden flex flex-col md:flex-row items-center min-h-[400px]">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 p-10 md:p-16 lg:p-20 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Make Every Day A Win <br className="hidden lg:block" /> with Dooyt
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-lg leading-relaxed">
            Are you looking to boost your business productivity? Replace all those multiple 
            apps with a single powerful solution, Dooyt.
          </p>
          <button className="bg-white text-[#111] font-semibold px-6 py-3.5 rounded-xl flex items-center gap-2 hover:bg-zinc-50 transition-colors">
            Schedule a demo <ChevronRight className="w-4 h-4 text-zinc-400" />
          </button>
        </div>

        {/* Right Side: Phone Mockup */}
        <div className="w-full md:w-1/2 flex justify-center items-end relative h-64 md:h-full mt-10 md:mt-0">
          {/* Pure CSS iPhone Mockup peaking from the bottom */}
          <div className="absolute -bottom-10 md:-bottom-16 w-[280px] h-[550px] bg-white rounded-[40px] border-[8px] border-zinc-900 shadow-2xl flex flex-col overflow-hidden rotate-12 md:rotate-6 transform hover:-translate-y-4 transition-transform duration-500">
            {/* Dynamic Island Notch */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-zinc-900 rounded-full z-20"></div>
            
            {/* Fake App UI inside phone */}
            <div className="flex-1 bg-[#FFF6F0] w-full pt-12 px-4 pb-4 flex flex-col gap-4">
               {/* App Header */}
               <div className="flex justify-between items-center">
                 <div className="w-8 h-8 rounded-full bg-zinc-200"></div>
                 <div className="text-center">
                   <div className="text-[10px] text-zinc-500">Hello Anna 👋</div>
                 </div>
                 <div className="w-6 h-6 rounded-full bg-zinc-200"></div>
               </div>
               <div className="text-center text-sm font-bold leading-tight px-4 mt-2">
                 Get real-time insights and manage all your tasks in one place
               </div>
               
               {/* App Grid */}
               <div className="grid grid-cols-3 gap-2 mt-2">
                 <div className="bg-[#F26419]/10 rounded-xl h-16 flex flex-col justify-center items-center">
                   <span className="font-bold text-[#F26419]">4</span>
                   <span className="text-[8px] text-zinc-500">Completed</span>
                 </div>
                 <div className="bg-[#F26419]/10 rounded-xl h-16 flex flex-col justify-center items-center">
                   <span className="font-bold text-[#F26419]">5</span>
                   <span className="text-[8px] text-zinc-500">Overdue</span>
                 </div>
                 <div className="bg-[#F26419]/10 rounded-xl h-16 flex flex-col justify-center items-center">
                   <span className="font-bold text-[#F26419]">6</span>
                   <span className="text-[8px] text-zinc-500">Pending</span>
                 </div>
               </div>

               {/* App Card */}
               <div className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-100 flex-1 mt-2">
                 <div className="w-full h-4 bg-zinc-100 rounded mb-4"></div>
                 <div className="w-2/3 h-4 bg-zinc-100 rounded"></div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}