import {
  Search,
  Bell,
  Home,
  PieChart,
  Users,
  Settings,
  FolderGit2,
  ChevronUp,
  Play,
  Pause,
} from "lucide-react";

export default function DashboardShowCase() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-white via-[#fffaf5] to-[#ffe8d6] overflow-hidden flex justify-center items-center min-h-[800px]">
      <div className="hidden xl:flex absolute left-[-15%] 2xl:left-[-5%] top-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-white rounded-[28px] shadow-[0_0_50px_-12px_rgba(0,0,0,0.1)] opacity-60 scale-[0.8] rotate-[-3deg] pointer-events-none z-0 overflow-hidden border-[6px] border-white/50">
        <div className="w-[72px] border-r border-zinc-100 flex flex-col items-center py-6 gap-8 bg-[#F8F9FA]">
          <div className="w-8 h-8 rounded-full bg-zinc-200 mb-4" />
          <div className="w-5 h-5 rounded bg-zinc-200" />
          <div className="w-5 h-5 rounded bg-zinc-200" />
        </div>
        <div className="flex-1 p-8 bg-white flex flex-col gap-6">
          <div className="flex justify-end gap-3">
            <div className="bg-green-100 text-green-600 px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />{" "}
              00:00:00
            </div>
            <div className="bg-[#F26419] text-white px-4 py-2 rounded-lg text-xs font-bold">
              + Create New Task
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F8F9FA] p-4 rounded-xl border border-zinc-100 h-24 flex items-center justify-center text-zinc-300 font-bold text-lg">
              122
            </div>
            <div className="bg-[#F8F9FA] p-4 rounded-xl border border-zinc-100 h-24 flex flex-col justify-center items-center">
              <span className="text-[10px] text-zinc-400 mb-1">
                Completed Projects
              </span>
              <span className="text-2xl font-bold text-[#111]">122</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3 mt-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex justify-between items-center p-4 border border-zinc-100 rounded-xl"
              >
                <div className="w-1/3 h-3 bg-zinc-100 rounded" />
                <div className="flex gap-2 items-center">
                  <div className="text-xs text-zinc-400">01:40:20</div>
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                    <Pause className="w-3 h-3 text-red-500 fill-current" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden xl:flex absolute right-[-15%] 2xl:right-[-5%] top-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-white rounded-[28px] shadow-[0_0_50px_-12px_rgba(0,0,0,0.1)] opacity-60 scale-[0.8] rotate-[3deg] pointer-events-none z-0 overflow-hidden border-[6px] border-white/50">
        <div className="flex-1 p-8 bg-white flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-zinc-200" />
            <div>
              <div className="text-sm font-bold text-[#111]">
                leyy, Mr. Razil Raazi 👋
              </div>
              <div className="text-[10px] text-zinc-400">
                Time's running. All your tasks and insights right here!
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="border border-zinc-100 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500">
                P
              </div>
              <div>
                <div className="text-[10px] text-zinc-400">
                  Pending Projects
                </div>
                <div className="text-lg font-bold">122</div>
              </div>
            </div>
            <div className="border border-zinc-100 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-500">
                O
              </div>
              <div>
                <div className="text-[10px] text-zinc-400">
                  Overdue Projects
                </div>
                <div className="text-lg font-bold">122</div>
              </div>
            </div>
          </div>

          <div className="text-xs font-bold text-[#111] mb-4">
            Working Schedule
          </div>
          <div className="flex flex-col gap-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="border border-zinc-100 rounded-xl p-4 flex justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50" />
                  <div>
                    <div className="text-xs font-bold text-blue-500">
                      Floor Meeting{" "}
                      <span className="bg-red-100 text-red-500 text-[8px] px-1 py-0.5 rounded ml-1">
                        High
                      </span>
                    </div>
                    <div className="text-[9px] text-zinc-400 mt-1">
                      09:00 AM - 12:00 PM
                    </div>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Play className="w-3 h-3 text-green-500 fill-current" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto flex justify-start lg:justify-center px-4 sm:px-8 pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative z-10">
        <div className="relative w-full min-w-[950px] max-w-[1050px] shrink-0 bg-[#F8F9FA] rounded-[28px] border-[10px] border-[#111111] shadow-2xl overflow-hidden flex h-[620px]">
          {/* Sidebar */}
          <div className="w-[72px] bg-white border-r border-zinc-100 flex flex-col items-center py-6 gap-8 shrink-0 z-10">
            <div className="w-10 h-10 bg-[#F26419] rounded-[10px] flex justify-center items-center text-white shadow-sm">
              <FolderGit2 size={20} strokeWidth={2.5} />
            </div>
            <Home className="w-5 h-5 text-[#111111]" />
            <PieChart className="w-5 h-5 text-zinc-400" />
            <Users className="w-5 h-5 text-zinc-400" />
            <Settings className="w-5 h-5 text-zinc-400 mt-auto" />
          </div>

          {/* Main Dashboard Area */}
          <div className="flex-1 p-7 overflow-hidden flex flex-col bg-[#F8F9FA]">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-[22px] font-bold text-[#111111] leading-tight">
                  Dashboard
                </h2>
                <p className="text-[13px] text-zinc-500 mt-0.5">
                  Your current dashboard for today
                </p>
              </div>
              <div className="flex items-center gap-5">
                <Search className="w-[18px] h-[18px] text-zinc-500" />
                <Bell className="w-[18px] h-[18px] text-zinc-500" />
                <div className="w-8 h-8 bg-zinc-200 rounded-full border-[2px] border-white shadow-sm" />
              </div>
            </div>

            {/* Grid Content */}
            <div className="flex-1 grid grid-cols-12 gap-5 h-full min-h-0">
              {/* LEFT COLUMN: Metric Cards */}
              <div className="col-span-5 flex flex-col gap-4">
                {/* Orange Card */}
                <div className="bg-[#F26419] rounded-2xl p-5 text-white shadow-lg relative overflow-hidden flex-1 flex flex-col justify-between">
                  <div className="z-10 relative">
                    <p className="text-white/90 text-[13px] font-medium mb-1">
                      Total Balance
                    </p>
                    <h3 className="text-[32px] font-bold tracking-tight mb-4">
                      €938,003,200
                    </h3>
                    <div className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded text-[11px] font-medium mb-2">
                      <ChevronUp className="w-3 h-3" /> 12.84%
                    </div>
                    <p className="text-[11px] text-white/80 leading-snug">
                      Balance bigger
                      <br />
                      €6,259.00 last month
                    </p>
                  </div>
                  {/* Wavy Sparkline */}
                  <svg
                    className="absolute bottom-4 right-4 w-32 h-16 stroke-white/40"
                    fill="none"
                    viewBox="0 0 100 50"
                  >
                    <path
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      d="M0 40 C 20 40, 30 20, 50 30 S 80 40, 100 15"
                    />
                  </svg>
                </div>

                {/* Dark Card */}
                <div className="bg-[#1C1C1C] rounded-2xl p-5 text-white shadow-lg relative overflow-hidden flex-1 flex flex-col justify-between">
                  <div className="z-10 relative">
                    <p className="text-zinc-400 text-[13px] font-medium mb-1">
                      Total Income
                    </p>
                    <h3 className="text-[28px] font-bold tracking-tight mb-4">
                      €120,993,000
                    </h3>
                    <div className="inline-flex items-center gap-1 bg-white/10 text-[#F26419] px-2 py-0.5 rounded text-[11px] font-medium mb-2">
                      <ChevronUp className="w-3 h-3" /> 11.49%
                    </div>
                    <p className="text-[11px] text-zinc-500 leading-snug">
                      Balance bigger
                      <br />
                      €5,953.00 last month
                    </p>
                  </div>
                  {/* Angular Sparkline */}
                  <svg
                    className="absolute bottom-5 right-5 w-28 h-12 stroke-zinc-600"
                    fill="none"
                    viewBox="0 0 100 50"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M0 45 L 40 40 L 70 30 L 100 15"
                    />
                  </svg>
                </div>

                {/* White Card */}
                <div className="bg-white rounded-2xl p-5 text-[#111] shadow-sm border border-zinc-100/80 relative overflow-hidden h-[120px]">
                  <p className="text-zinc-500 text-[13px] font-medium mb-1">
                    Total Expend
                  </p>
                  <h3 className="text-[22px] font-bold tracking-tight mb-2">
                    €496,085,100
                  </h3>
                </div>
              </div>

              {/* RIGHT COLUMN: Charts & Analytics */}
              <div className="col-span-7 flex flex-col gap-4">
                {/* Line Chart Area */}
                <div className="bg-white rounded-2xl p-6 border border-zinc-100/80 shadow-sm flex-1 relative flex flex-col">
                  <div className="flex justify-between items-center mb-4 z-10">
                    <h3 className="font-bold text-[#111] text-[15px]">
                      Sales Overview
                    </h3>
                    <div className="flex gap-4 text-[11px] font-medium text-zinc-500">
                      <span className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#F26419]" />{" "}
                        Revenue
                      </span>
                      <span className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#222]" />{" "}
                        Transactions
                      </span>
                    </div>
                  </div>

                  {/* Detailed SVG Chart Mockup */}
                  <div className="flex-1 relative mt-2 w-full">
                    <svg
                      className="w-full h-full overflow-visible"
                      preserveAspectRatio="none"
                      viewBox="0 0 400 200"
                      fill="none"
                    >
                      <path
                        d="M0 50 H400 M0 100 H400 M0 150 H400"
                        className="stroke-zinc-100"
                        strokeWidth="1"
                      />
                      <path
                        d="M0 100 C 40 100, 60 160, 110 160 C 160 160, 190 70, 240 100 C 290 130, 340 140, 400 110"
                        className="stroke-[#F26419]"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0 150 C 40 150, 80 120, 130 140 C 180 160, 210 50, 260 70 C 310 90, 350 110, 400 90"
                        className="stroke-[#222]"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Bottom Split (Schedule & Donut) */}
                <div className="grid grid-cols-2 gap-4 h-[130px]">
                  <div className="bg-white rounded-2xl p-4 border border-zinc-100/80 shadow-sm flex flex-col justify-between">
                    <div>
                      <p className="text-[11px] text-zinc-500 mb-0.5">
                        Upcoming Schedule
                      </p>
                      <h4 className="font-bold text-[#111] text-sm leading-tight">
                        Business Analytics Press
                      </h4>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-zinc-100/80 shadow-sm flex items-center justify-center relative">
                    <svg
                      className="w-20 h-20 transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        className="stroke-zinc-100"
                        strokeWidth="12"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        className="stroke-[#F26419]"
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray="180 251"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center mt-1">
                      <span className="text-sm font-bold text-[#111] leading-none">
                        10,980
                      </span>
                      <span className="text-[8px] text-zinc-500 mt-1">
                        Email Activity
                      </span>
                    </div>
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
