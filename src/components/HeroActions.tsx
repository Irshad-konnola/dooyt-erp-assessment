"use client";

import { Phone, ChevronRight } from "lucide-react";

export default function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
      <button
        onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal'))}
        className="flex items-center justify-center gap-2 bg-[#F26419] text-white text-base font-semibold px-8 py-4 rounded-xl hover:bg-[#d95615] transition-all w-full sm:w-auto"
      >
        <Phone className="w-5 h-5 fill-current" />
        Request A Demo
      </button>
      <button className="flex items-center justify-center gap-2 bg-white border border-zinc-300 text-[#111111] text-base font-semibold px-8 py-4 rounded-xl hover:bg-zinc-50 transition-all w-full sm:w-auto">
        Try Free for 30 Days
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}