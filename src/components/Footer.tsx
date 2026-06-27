import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 font-sans">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Left Column (Brand & App Buttons) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link 
              href="/" 
              className="text-4xl font-bold tracking-tight text-white mb-6" 
              style={{ fontFamily: "cursive, sans-serif" }}
            >
              Dooyt
            </Link>
            <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-8 max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            
            <div className="flex gap-4">
              {/* App Store Button */}
              <button className="flex items-center gap-2 border border-zinc-700 bg-black rounded-lg px-4 py-2 hover:bg-zinc-900 transition-colors">
                <svg viewBox="0 0 384 512" className="w-6 h-6 fill-white">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div className="text-left flex flex-col justify-center">
                  <span className="text-[9px] text-zinc-300 leading-none mb-0.5">Download on the</span>
                  <span className="text-[13px] font-semibold text-white leading-tight">App Store</span>
                </div>
              </button>

              {/* Google Play Button */}
              <button className="flex items-center gap-2 border border-zinc-700 bg-black rounded-lg px-4 py-2 hover:bg-zinc-900 transition-colors">
                 <svg viewBox="0 0 512 512" className="w-6 h-6 fill-white">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div className="text-left flex flex-col justify-center">
                  <span className="text-[9px] text-zinc-300 leading-none mb-0.5">GET IT ON</span>
                  <span className="text-[13px] font-semibold text-white leading-tight">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column (Links) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 pt-2">
            {/* Quick Links 1 */}
            <div>
              <h4 className="text-white text-[15px] font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-[#A1A1AA] text-sm hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#" className="text-[#A1A1AA] text-sm hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-[#A1A1AA] text-sm hover:text-white transition-colors">Modules</Link></li>
              </ul>
            </div>
            
            {/* Explore */}
            <div>
              <h4 className="text-white text-[15px] font-semibold mb-6">Explore</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-[#A1A1AA] text-sm hover:text-white transition-colors">Feature</Link></li>
                <li><Link href="#" className="text-[#A1A1AA] text-sm hover:text-white transition-colors">Benefits</Link></li>
                <li><Link href="#" className="text-[#A1A1AA] text-sm hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Quick Links 2 */}
            <div>
              <h4 className="text-white text-[15px] font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-[#A1A1AA] text-sm hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-[#A1A1AA] text-sm hover:text-white transition-colors">Privacy policy</Link></li>
                <li><Link href="#" className="text-[#A1A1AA] text-sm hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-[#1a1a1c] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#A1A1AA] text-[13px]">
            Copyright © 2025 DOOYT. All Rights Reserved
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-3">
            <Link href="#" className="w-11 h-11 rounded-[14px] bg-[#1a1a1c] hover:bg-[#27272a] flex items-center justify-center transition-colors">
              <svg className="w-[18px] h-[18px] fill-[#A1A1AA]" viewBox="0 0 320 512"><path d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"/></svg>
            </Link>
            <Link href="#" className="w-11 h-11 rounded-[14px] bg-[#1a1a1c] hover:bg-[#27272a] flex items-center justify-center transition-colors">
              <svg className="w-[18px] h-[18px] fill-[#A1A1AA]" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
            </Link>
            <Link href="#" className="w-11 h-11 rounded-[14px] bg-[#1a1a1c] hover:bg-[#27272a] flex items-center justify-center transition-colors">
              <svg className="w-[18px] h-[18px] fill-[#A1A1AA]" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}