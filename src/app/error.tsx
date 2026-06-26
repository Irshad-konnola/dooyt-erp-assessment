"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service in a real production app
    console.error("Global Error Boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-lg border border-zinc-100 text-center">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-500" />
        </div>
        
        <h2 className="text-2xl font-bold text-[#111] mb-3">
          Something went wrong
        </h2>
        
        <p className="text-zinc-500 text-[15px] mb-8 leading-relaxed">
          We encountered an unexpected error while trying to load this page. 
          Our team has been notified.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <button
            onClick={() => reset()}
            className="flex-1 bg-[#111] text-white font-semibold py-3.5 rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCcw className="w-4 h-4" /> Try again
          </button>
          
          <Link 
            href="/"
            className="flex-1 bg-white border border-zinc-200 text-[#111] font-semibold py-3.5 rounded-xl hover:bg-zinc-50 transition-colors flex items-center justify-center"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}