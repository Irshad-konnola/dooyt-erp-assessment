import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-100 flex flex-col items-center justify-center font-sans">
      <div className="flex flex-col items-center animate-in fade-in duration-500">
        <h1 
          className="text-5xl font-bold tracking-tight text-[#F26419] mb-8 animate-pulse" 
          style={{ fontFamily: "cursive, sans-serif" }}
        >
          Dooyt
        </h1>
        <div className="flex items-center gap-3 text-zinc-500 font-medium">
          <Loader2 className="w-6 h-6 animate-spin text-[#111]" />
          Loading experience...
        </div>
      </div>
    </div>
  );
}