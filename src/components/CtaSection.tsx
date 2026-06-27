"use client";
import React from "react";
import {
  ChevronRight,
  Phone,
  CheckCircle2,
  Clock,
  PlayCircle,
  Home,
  Calendar,
  LayoutGrid,
  User,
} from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-20 bg-white font-sans flex justify-center mt-10 md:mt-20 mb-24">
      <div className="w-[90%] max-w-300 relative">
        <div className="bg-linear-to-r from-[#F26419] to-[#E35205] rounded-[32px] md:rounded-[40px] relative flex flex-col md:flex-row items-center md:h-[380px] shadow-lg">
          <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-linear-to-tr from-white/20 to-transparent rounded-bl-[32px] md:rounded-bl-[40px] pointer-events-none z-0"></div>

          <div className="w-full md:w-[55%] lg:w-[60%] p-8 sm:p-10 md:p-16 relative z-30">
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] tracking-tight mb-5">
              Make Every Day A Win <br className="hidden lg:block" /> with Dooyt
            </h2>
            <p className="text-white/95 text-[15px] mb-8 max-w-105 leading-relaxed">
              Are you looking to boost your business productivity? Replace all
              those multiple apps with a single powerful solution, Dooyt.
            </p>
            <button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-demo-modal"))
              }
              className="bg-white text-[#111] text-[15px] font-bold px-6 py-3.5 rounded-[12px] inline-flex items-center gap-2 hover:bg-zinc-50 transition-colors shadow-sm relative z-40"
            >
              Schedule a demo{" "}
              <ChevronRight className="w-4 h-4 text-zinc-400 stroke-[3]" />
            </button>
          </div>

          <div className=" w-full md:w-[45%] lg:w-[40%] flex justify-center md:justify-end relative h-[400px] md:h-full z-20">
            <div className="absolute bottom-0 md:-bottom-[70px] md:right-10 lg:right-16 w-[260px] h-[530px] bg-white rounded-[36px] border-[10px] border-[#1C1C1E] shadow-2xl flex flex-col overflow-hidden transform scale-[0.8] md:scale-100 origin-bottom">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-[#1C1C1E] rounded-full z-30 flex items-center justify-end px-2">
                <div className="w-2 h-2 rounded-full bg-[#0A0A0A] shadow-[inset_0_0_2px_rgba(255,255,255,0.1)]"></div>
              </div>

              <div className="flex-1 bg-[#FFF9F5] w-full pt-10 flex flex-col relative">
                <div className="absolute top-2 left-5 text-[10px] font-bold text-[#111]">
                  9:41
                </div>
                <div className="absolute top-2 right-4 flex gap-1 items-center">
                  <div className="w-3 h-2.5 bg-[#111] rounded-[2px]"></div>
                  <div className="w-4 h-2.5 bg-[#111] rounded-[2px]"></div>
                </div>

                <div className="flex-1 overflow-hidden px-4 flex flex-col gap-3">
                  <div className="flex justify-between items-center mt-2">
                    <div className="w-6 h-6 rounded-full bg-zinc-200"></div>
                    <div className="text-[11px] font-bold text-[#111]">
                      Hello Anna 👋
                    </div>
                    <div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>

                  <div className="text-center text-[11px] font-bold leading-tight px-2 text-[#111]">
                    Get real-time insights and manage all your tasks in one
                    place
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-1">
                    <div className="bg-[#F26419]/10 rounded-xl py-2 flex flex-col justify-center items-center">
                      <span className="font-bold text-[#F26419] text-sm">
                        4
                      </span>
                      <span className="text-[7px] font-semibold text-zinc-600 mt-0.5">
                        Completed
                      </span>
                    </div>
                    <div className="bg-[#F26419]/10 rounded-xl py-2 flex flex-col justify-center items-center">
                      <span className="font-bold text-[#F26419] text-sm">
                        5
                      </span>
                      <span className="text-[7px] font-semibold text-zinc-600 mt-0.5">
                        Overdue
                      </span>
                    </div>
                    <div className="bg-[#F26419]/10 rounded-xl py-2 flex flex-col justify-center items-center">
                      <span className="font-bold text-[#F26419] text-sm">
                        6
                      </span>
                      <span className="text-[7px] font-semibold text-zinc-600 mt-0.5">
                        Pending
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 mt-1 px-1">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 bg-white rounded-[10px] shadow-sm flex items-center justify-center border border-zinc-100">
                        <Phone className="w-4 h-4 text-[#F26419]" />
                      </div>
                      <span className="text-[6px] font-bold text-zinc-500">
                        Follow-up
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 bg-white rounded-[10px] shadow-sm flex items-center justify-center border border-zinc-100">
                        <CheckCircle2 className="w-4 h-4 text-[#F26419]" />
                      </div>
                      <span className="text-[6px] font-bold text-zinc-500">
                        Enquiry
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 bg-white rounded-[10px] shadow-sm flex items-center justify-center border border-zinc-100">
                        <LayoutGrid className="w-4 h-4 text-[#F26419]" />
                      </div>
                      <span className="text-[6px] font-bold text-zinc-500">
                        Quotation
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 bg-white rounded-[10px] shadow-sm flex items-center justify-center border border-zinc-100">
                        <Clock className="w-4 h-4 text-[#F26419]" />
                      </div>
                      <span className="text-[6px] font-bold text-zinc-500">
                        Activity
                      </span>
                    </div>
                  </div>

                  {/* Task List */}
                  <div className="flex justify-between items-end mt-1">
                    <span className="text-[10px] font-bold text-[#111]">
                      Today Tasks
                    </span>
                    <span className="text-[7px] text-zinc-400">View All</span>
                  </div>

                  {/* Task Card */}
                  <div className="bg-white rounded-xl p-2.5 shadow-sm border border-zinc-100 flex gap-2">
                    <div className="bg-[#F26419] rounded-lg w-10 h-12 flex flex-col items-center justify-center text-white">
                      <span className="text-[7px]">May</span>
                      <span className="font-bold text-xs">1</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="text-[9px] font-bold text-[#111]">
                          Call Task
                        </span>
                        <span className="bg-[#F26419]/10 text-[#F26419] text-[6px] font-bold px-1.5 py-0.5 rounded">
                          Medium
                        </span>
                      </div>
                      <span className="text-[8px] text-zinc-600 font-medium">
                        Create a landing page design...
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex -space-x-1">
                          <div className="w-3 h-3 rounded-full bg-zinc-200 border border-white"></div>
                          <div className="w-3 h-3 rounded-full bg-zinc-300 border border-white"></div>
                        </div>
                        <span className="text-[6px] text-zinc-400">
                          Arab industrial supply
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Running Task */}
                  <span className="text-[10px] font-bold text-[#111] mt-1">
                    Running Task
                  </span>
                  <div className="bg-white rounded-xl p-2.5 shadow-sm border border-zinc-100 flex flex-col gap-2 relative overflow-hidden">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 text-[7px] text-zinc-500 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F26419]"></div>{" "}
                        Sunstar Movers
                      </div>
                      <div className="text-[10px] font-bold text-[#111]">
                        03:32:10
                      </div>
                    </div>
                    <span className="text-[8px] text-[#111] font-bold">
                      Create a landing page desi..
                    </span>
                    <div className="flex justify-between items-center mt-1">
                      <span className="bg-zinc-100 text-zinc-500 text-[6px] font-bold px-1.5 py-0.5 rounded">
                        Medium
                      </span>
                      <div className="flex gap-1">
                        <div className="w-4 h-4 bg-zinc-100 rounded flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-zinc-400"></div>
                        </div>
                        <div className="w-4 h-4 bg-red-100 rounded flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-red-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom App Nav Bar Mock */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-white border-t border-zinc-100 flex justify-between items-center px-6 pb-2">
                  <Home className="w-4 h-4 text-[#F26419]" />
                  <Calendar className="w-4 h-4 text-zinc-400" />
                  <div className="w-10 h-10 bg-[#F26419] rounded-full flex items-center justify-center shadow-lg -mt-6 border-4 border-[#FFF9F5] text-white">
                    +
                  </div>
                  <PlayCircle className="w-4 h-4 text-zinc-400" />
                  <User className="w-4 h-4 text-zinc-400" />
                  {/* Home Bar */}
                  <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-zinc-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
