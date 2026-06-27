"use client";

import { useState } from "react";
import { 
  CheckSquare, 
  UserCog, 
  Kanban, 
  Calculator, 
  ShoppingCart, 
  Megaphone, 
  Boxes,
  FileText
} from "lucide-react";

type Module = {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
};

const iconMap: Record<string, React.ElementType> = {
  "users": FileText,
  "check-square": CheckSquare,
  "user-cog": UserCog,
  "kanban": Kanban,
  "calculator": Calculator,
  "shopping-cart": ShoppingCart,
  "megaphone": Megaphone,
  "boxes": Boxes,
};

export default function ModulesSection({ modules }: { modules: Module[] }) {
  const [activeModuleId, setActiveModuleId] = useState<string>(modules[0]?.id || "");

  const activeModule = modules.find((m) => m.id === activeModuleId);

  return (
    <section id="modules" className="py-12 md:py-16 bg-white font-sans overflow-hidden flex justify-center min-h-[calc(100vh-100px)] items-center">
      
      <div className="max-w-[1200px] w-[90%] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8">
          <p className="text-[#F26419] font-medium text-sm mb-2">Modules</p>
          <h2 className="text-3xl md:text-[38px] font-bold text-[#111111] tracking-tight">
            Modules That Do More
          </h2>
        </div>

        {/* Module Navigation Pills */}
        {/* REDUCED margin bottom from mb-16 to mb-10 */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10 max-w-4xl mx-auto">
          {modules.map((mod) => {
            const IconComponent = iconMap[mod.icon] || FileText;
            const isActive = activeModuleId === mod.id;

            return (
              <button
                key={mod.id}
                onClick={() => setActiveModuleId(mod.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-[12px] text-[13px] md:text-sm font-medium transition-all duration-300 border
                  ${isActive 
                    ? "bg-[#F26419] text-white border-[#F26419] shadow-md transform scale-[1.02]" 
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
                  }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? "text-white" : "text-zinc-400"}`} />
                {mod.name}
              </button>
            );
          })}
        </div>

        {/* Active Module Content Display */}
        {activeModule && (
          <div className="bg-[#FFF9F5] rounded-[32px] p-6 sm:p-8 lg:p-10 border border-[#FDECE2] shadow-sm flex flex-col lg:flex-row gap-8 lg:gap-12 items-center w-full">
            
            {/* REDUCED fixed height from h-[400px] to h-[340px] */}
            <div className="w-full lg:w-3/5 min-w-0 bg-[#FFF5EE] rounded-2xl md:rounded-3xl p-4 shadow-inner border border-orange-100/50 flex flex-col h-auto sm:h-[340px] overflow-hidden relative">
              
              {/* Mock Header */}
              <div className="flex items-center gap-2 mb-4 bg-white px-3 py-2 rounded-xl shadow-sm w-fit border border-zinc-100">
                 <div className="w-6 h-6 bg-[#F26419] rounded-md flex items-center justify-center text-white text-xs font-bold">C</div>
                 <span className="font-bold text-[#111] text-xs pr-2">{activeModule.name} Dash</span>
              </div>

              {/* Mock Grid Layout */}
              <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full min-w-0">
                
                {/* Sidebar Mock */}
                <div className="hidden sm:flex col-span-1 bg-white rounded-xl shadow-sm border border-zinc-100 p-4 flex-col gap-3 w-[140px] shrink-0">
                  <div className="w-full h-6 bg-zinc-100/80 rounded-md"></div>
                  <div className="w-3/4 h-4 bg-zinc-50 rounded-sm"></div>
                  <div className="space-y-2 mt-2">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-full h-5 bg-zinc-50 rounded-md"></div>)}
                  </div>
                </div>

                {/* Main Cards Area */}
                <div className="flex-1 flex flex-col gap-4 min-w-0">
                  {/* Top Stats Row */}
                  <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full">
                    <div className="flex-1 min-w-[90px] bg-white rounded-xl shadow-sm border border-zinc-100 p-3 md:p-4">
                      <div className="text-lg md:text-xl font-bold text-[#111]">7089</div>
                      <div className="text-[10px] text-zinc-400 mt-1">New Leads</div>
                    </div>
                    <div className="flex-1 min-w-[90px] bg-white rounded-xl shadow-sm border border-zinc-100 p-3 md:p-4">
                      <div className="text-lg md:text-xl font-bold text-[#111]">65</div>
                      <div className="text-[10px] text-zinc-400 mt-1">New Customers</div>
                    </div>
                    <div className="flex-1 min-w-[90px] bg-white rounded-xl shadow-sm border border-zinc-100 p-3 md:p-4">
                      <div className="text-lg md:text-xl font-bold text-[#111]">628</div>
                      <div className="text-[10px] text-zinc-400 mt-1">Sent Invoices</div>
                    </div>
                  </div>

                  {/* Bottom Main Area */}
                  <div className="flex-1 bg-white rounded-xl shadow-sm border border-zinc-100 p-4 flex flex-col lg:flex-row gap-4 relative overflow-hidden min-h-[120px]">
                     <div className="flex-1 flex flex-col">
                        <div className="w-20 h-3 bg-zinc-100 rounded mb-3"></div>
                        <div className="flex-1 flex items-end justify-center pb-1">
                           {/* Half Donut Chart Mockup */}
                           <div className="w-28 md:w-36 h-14 md:h-18 border-[12px] md:border-[16px] border-b-0 border-[#F26419] rounded-t-full border-dashed relative">
                             <div className="absolute -bottom-1 left-0 right-0 text-center">
                               <div className="text-base md:text-lg font-bold text-[#111]">$7580</div>
                               <div className="text-[8px] text-zinc-400">Out Of 7000</div>
                             </div>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side: Text Content */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#111111] mb-4">
                {activeModule.name}
              </h3>
              <p className="text-sm md:text-base text-zinc-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {activeModule.description}
              </p>
            </div>
            
          </div>
        )}

      </div>
    </section>
  );
}