"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type Faq = {
  id: string;
  order: number;
  question: string;
  answer: string;
};

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  // Store the ID of the currently open FAQ. Null means all closed.
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-white font-sans">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <h2 className="text-3xl md:text-[40px] font-bold text-[#111111] tracking-tight mb-10 text-left">
          Frequently Asked Questions (FAQ)
        </h2>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div 
                key={faq.id} 
                className="bg-[#F8F9FA] rounded-[16px] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="text-[17px] font-bold text-[#111]">
                    {faq.question}
                  </span>
                  
                  {/* Custom Circle Icon */}
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center flex-shrink-0 ml-4 transition-transform duration-300">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-white" />
                    )}
                  </div>
                </button>

                {/* Expanding Answer Section */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15px] text-zinc-500 leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}