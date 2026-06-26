"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Benefits", href: "#benefits" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <div className="pt-4 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto w-full relative z-50">
      {/* Main Navbar Bar */}
      <nav className="bg-[#FFF6F0] rounded-[32px] px-6 py-3 flex items-center justify-between shadow-sm relative">
        
        {/* Logo */}
        <div className="flex-shrink-0 z-20">
          <Link 
            href="/" 
            className="text-3xl md:text-4xl font-bold tracking-tight text-[#F26419]" 
            style={{ fontFamily: "cursive, sans-serif" }}
          >
            Dooyt
          </Link>
        </div>

        {/* Desktop Navigation Links (Absolutely centered) */}
        <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-zinc-600 hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex z-20">
          <button className="bg-black text-white text-[15px] font-medium px-6 py-2.5 rounded-xl hover:bg-zinc-800 transition-all">
            Request A Demo
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="lg:hidden flex items-center z-20">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-800 p-2 focus:outline-none hover:bg-[#ffe8d6] rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-[80px] left-4 right-4 bg-white rounded-2xl shadow-xl border border-zinc-100 p-4 lg:hidden flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-zinc-700 hover:text-black hover:bg-zinc-50 px-4 py-3 rounded-xl transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 mt-2 border-t border-zinc-100">
            <button className="w-full bg-black text-white text-base font-medium px-6 py-4 rounded-xl hover:bg-zinc-800 transition-all">
              Request A Demo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}