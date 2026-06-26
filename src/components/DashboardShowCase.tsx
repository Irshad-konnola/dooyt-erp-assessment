import { 
  Search, 
  Bell, 
  Home, 
  PieChart, 
  Users, 
  Settings, 
  FolderGit2, 
  ChevronUp, 
  ChevronDown 
} from "lucide-react";

export default function DashboardShowCase() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-white via-[#fffaf5] to-[#ffe8d6] overflow-hidden flex justify-center items-center">
      
      {/* BACKGROUND ELEMENT 1: Faded Left Dashboard */}
      <div className="hidden lg:block absolute left-[-15%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/60 backdrop-blur-sm rounded-[32px] border border-white shadow-2xl opacity-50 scale-75 rotate-[-2deg] pointer-events-none" />

      {/* BACKGROUND ELEMENT 2: Faded Right Dashboard */}
      <div className="hidden lg:block absolute right-[-15%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/60 backdrop-blur-sm rounded-[32px] border border-white shadow-2xl opacity-50 scale-75 rotate-[2deg] pointer-events-none" />

      {/* MAIN CENTER DASHBOARD */}
      <div className="relative z-10 w-full max-w-[1000px] mx-4 bg-[#F8F9FA] rounded-[32px] border-[12px] border-[#111111] shadow-2xl overflow-hidden flex h-[600px]">
        
        {/* Sidebar */}
        <div className="w-[80px] bg-white border-r border-zinc-200 flex flex-col items-center py-6 gap-8">
          <div className="w-10 h-10 bg-[#F26419] rounded-xl flex justify-center items-center text-white font-bold text-xl mb-4">
            <FolderGit2 size={24} />
          </div>
          <Home className="w-6 h-6 text-[#111111]" />
          <PieChart className="w-6 h-6 text-zinc-400" />
          <Users className="w-6 h-6 text-zinc-400" />
          <Settings className="w-6 h-6 text-zinc-400 mt-auto" />
        </div>

        {/* Main Dashboard Area */}
        <div className="flex-1 p-8 overflow-hidden flex flex-col">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#111111]">Dashboard</h2>
              <p className="text-sm text-zinc-500">Your current dashboard for today</p>
            </div>
            <div className="flex items-center gap-4">
              <Search className="w-5 h-5 text-zinc-600" />
              <Bell className="w-5 h-5 text-zinc-600" />
              <div className="w-8 h-8 bg-zinc-300 rounded-full border-2 border-white shadow-sm" />
            </div>
          </div>

          {/* Grid Content */}
          <div className="flex-1 grid grid-cols-12 gap-6">
            
            {/* LEFT COLUMN: Metric Cards */}
            <div className="col-span-5 flex flex-col gap-4">
              
              {/* Orange Card */}
              <div className="bg-[#F26419] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden transform hover:-translate-y-1 transition-transform">
                <p className="text-white/80 text-sm font-medium mb-1">Total Balance</p>
                <h3 className="text-3xl font-bold mb-6">€938,003,200</h3>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-black/20 text-xs px-2 py-0.5 rounded-full flex items-center">
                    <ChevronUp className="w-3 h-3 mr-1" /> 12.84%
                  </span>
                </div>
                <p className="text-xs text-white/70">Balance bigger<br/>€6,259.00 last month</p>
                {/* Decorative Sparkline */}
                <svg className="absolute bottom-4 right-4 w-24 h-12 stroke-white/50" fill="none" viewBox="0 0 100 50">
                  <path strokeWidth="3" strokeLinecap="round" d="M0 40 Q 25 30 50 40 T 100 10" />
                </svg>
              </div>

              {/* Dark Card */}
              <div className="bg-[#222222] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
                <p className="text-zinc-400 text-sm font-medium mb-1">Total Income</p>
                <h3 className="text-3xl font-bold mb-6">€120,993,000</h3>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-white/10 text-[#F26419] text-xs px-2 py-0.5 rounded-full flex items-center">
                    <ChevronUp className="w-3 h-3 mr-1" /> 11.49%
                  </span>
                </div>
                <p className="text-xs text-zinc-400">Balance bigger<br/>€5,953.00 last month</p>
                {/* Decorative Sparkline */}
                <svg className="absolute bottom-4 right-4 w-24 h-12 stroke-zinc-500" fill="none" viewBox="0 0 100 50">
                  <path strokeWidth="3" strokeLinecap="round" d="M0 45 L 30 40 L 60 40 L 100 20" />
                </svg>
              </div>

              {/* White Card */}
              <div className="bg-white rounded-2xl p-6 text-[#111] shadow-sm border border-zinc-100 relative overflow-hidden">
                <p className="text-zinc-500 text-sm font-medium mb-1">Total Expend</p>
                <h3 className="text-2xl font-bold mb-4">€496,085,100</h3>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-zinc-100 text-zinc-700 text-xs px-2 py-0.5 rounded-full flex items-center">
                    <ChevronDown className="w-3 h-3 mr-1" /> -20.57%
                  </span>
                </div>
                <p className="text-xs text-zinc-500">Balance bigger<br/>€4,234.00 last month</p>
                 {/* Decorative Sparkline */}
                 <svg className="absolute bottom-4 right-4 w-24 h-12 stroke-[#F26419]" fill="none" viewBox="0 0 100 50">
                  <path strokeWidth="3" strokeLinecap="round" d="M0 40 Q 20 20 40 40 T 100 10" />
                </svg>
              </div>

            </div>

            {/* RIGHT COLUMN: Charts & Analytics */}
            <div className="col-span-7 flex flex-col gap-4">
              
              {/* Line Chart Area */}
              <div className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm flex-1 relative">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-[#111]">Sales Overview</h3>
                  <div className="flex gap-3 text-xs font-medium text-zinc-500">
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#F26419]" /> Revenue</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-zinc-800" /> Transactions</span>
                  </div>
                </div>
                
                {/* SVG mock of the curved chart to match UI without a heavy library */}
                <div className="absolute inset-x-6 bottom-8 top-20">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 200" fill="none">
                    {/* Grid lines */}
                    <path d="M0 40 H400 M0 80 H400 M0 120 H400 M0 160 H400" className="stroke-zinc-100" strokeWidth="1"/>
                    {/* Black line */}
                    <path d="M0 160 C 50 160, 80 80, 150 120 C 200 150, 250 40, 280 40 C 320 40, 350 100, 400 80" className="stroke-zinc-800" strokeWidth="2.5" />
                    {/* Orange line */}
                    <path d="M0 80 C 40 80, 80 120, 120 150 C 180 190, 220 50, 250 100 C 280 150, 350 150, 400 120" className="stroke-[#F26419]" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>

              {/* Bottom Split (Schedule & Donut) */}
              <div className="grid grid-cols-2 gap-4 h-[160px]">
                <div className="bg-white rounded-2xl p-5 border border-zinc-100 shadow-sm flex flex-col justify-center">
                  <p className="text-xs text-zinc-500 mb-1">Upcoming Schedule</p>
                  <h4 className="font-bold text-[#111] leading-tight mb-3">Business Analytics Press</h4>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-zinc-400">Thu, 24 Aug</p>
                      <p className="text-xl font-bold text-[#F26419]">9:30 AM</p>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-200 border-2 border-white" />
                      <div className="w-6 h-6 rounded-full bg-zinc-300 border-2 border-white" />
                      <div className="w-6 h-6 rounded-full bg-zinc-400 border-2 border-white" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-5 border border-zinc-100 shadow-sm flex items-center justify-center relative">
                  {/* Mock Donut Chart */}
                  <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" className="stroke-zinc-100" strokeWidth="12" fill="none" />
                    <circle cx="50" cy="50" r="40" className="stroke-[#F26419]" strokeWidth="12" fill="none" strokeDasharray="180 251" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-[#111]">10,980</span>
                    <span className="text-[10px] text-zinc-500">Email Activity</span>
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