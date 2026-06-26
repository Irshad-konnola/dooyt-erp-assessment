"use client";

import { useState } from "react";
import { 
  Users, 
  CheckSquare, 
  UserCog, 
  Kanban, 
  Calculator, 
  ShoppingCart, 
  Megaphone, 
  Boxes,
  FileText
} from "lucide-react";

// Define the type based on your Prisma schema / seed data
type Module = {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
};

// Map database icon strings to actual Lucide components
const iconMap: Record<string, React.ElementType> = {
  "users": FileText, // Using FileText for CRM to match the screenshot's document icon
  "check-square": CheckSquare,
  "user-cog": UserCog,
  "kanban": Kanban,
  "calculator": Calculator,
  "shopping-cart": ShoppingCart,
  "megaphone": Megaphone,
  "boxes": Boxes,
};

export default function ModulesSection({ modules }: { modules: Module[] }) {
  // Set the first module as active by default
  const [activeModuleId, setActiveModuleId] = useState<string>(modules[0]?.id || "");

  const activeModule = modules.find((m) => m.id === activeModuleId);

  return (
    <section id="modules" className="py-24 bg-white font-sans">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#F26419] font-medium mb-4">Modules</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight">
            Modules That Do More
          </h2>
        </div>

        {/* Module Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 max-w-4xl mx-auto">
          {modules.map((mod) => {
            const IconComponent = iconMap[mod.icon] || FileText;
            const isActive = activeModuleId === mod.id;

            return (
              <button
                key={mod.id}
                onClick={() => setActiveModuleId(mod.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[15px] font-medium transition-all duration-200 border
                  ${isActive 
                    ? "bg-[#F26419] text-white border-[#F26419] shadow-md" 
                    : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? "text-white" : "text-zinc-500"}`} />
                {mod.name}
              </button>
            );
          })}
        </div>

        {/* Active Module Content Display */}
        {activeModule && (
          <div className="bg-[#FFF9F5] rounded-3xl p-8 md:p-12 border border-orange-50/50 shadow-sm flex flex-col lg:flex-row gap-12 items-center min-h-[400px]">
            
            {/* Left Side: Dashboard Image/Mockup */}
            <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden bg-white shadow-sm border border-zinc-100 flex-shrink-0 aspect-[4/3] relative">
              {/* NOTE: Replace this div with a Next.js <Image /> tag when you have the actual dashboard screenshots */}
              <div className="absolute inset-0 bg-[#FFF5EE] p-4 flex flex-col">
                {/* Mock Header */}
                <div className="flex items-center gap-2 mb-4 bg-white p-2 rounded-lg shadow-sm w-fit">
                   <div className="w-6 h-6 bg-[#F26419] rounded-md flex items-center justify-center text-white text-xs font-bold">C</div>
                   <span className="font-bold text-sm">{activeModule.name} Dash</span>
                </div>
                {/* Mock Grid */}
                <div className="grid grid-cols-4 gap-4 flex-1">
                  <div className="col-span-1 bg-white rounded-xl shadow-sm border border-zinc-100 p-4">
                    <div className="w-full h-8 bg-zinc-100 rounded mb-2"></div>
                    <div className="w-3/4 h-4 bg-zinc-100 rounded mb-4"></div>
                    <div className="space-y-2">
                      {[1,2,3,4,5].map(i => <div key={i} className="w-full h-6 bg-zinc-50 rounded"></div>)}
                    </div>
                  </div>
                  <div className="col-span-3 flex flex-col gap-4">
                    <div className="flex gap-4 h-24">
                      <div className="flex-1 bg-white rounded-xl shadow-sm border border-zinc-100 p-4"><div className="text-2xl font-bold">7089</div><div className="text-xs text-zinc-400">New Leads</div></div>
                      <div className="flex-1 bg-white rounded-xl shadow-sm border border-zinc-100 p-4"><div className="text-2xl font-bold">65</div><div className="text-xs text-zinc-400">New Customers</div></div>
                      <div className="flex-1 bg-white rounded-xl shadow-sm border border-zinc-100 p-4"><div className="text-2xl font-bold">628</div><div className="text-xs text-zinc-400">Sent Invoices</div></div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl shadow-sm border border-zinc-100 p-4 flex items-end justify-center relative overflow-hidden">
                       <div className="w-48 h-24 border-[20px] border-b-0 border-[#F26419] rounded-t-full border-dashed"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Text Content */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-[#111111] mb-4">
                {activeModule.name}
              </h3>
              <p className="text-[17px] text-zinc-500 leading-relaxed">
                {activeModule.description}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}