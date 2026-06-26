import React from "react";
import { Star } from "lucide-react";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
};

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section id="testimonials" className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#F26419] font-medium text-[13px] tracking-wide block mb-3">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight mb-4">
            Proven Results. Real Feedback.
          </h2>
          <p className="text-[16px] text-zinc-500">
            Here's what our customers experienced.
          </p>
        </div>

        {/* Testimonials Grid / Mobile Slider */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {testimonials.map((test) => (
            <div 
              key={test.id} 
              className="bg-white rounded-2xl border border-zinc-100 p-8 shadow-sm flex flex-col min-w-[300px] w-full snap-center"
            >
              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFB800] text-[#FFB800]" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-[#111] ml-1">
                  {test.rating.toFixed(1)}
                </span>
              </div>

              {/* Quote */}
              <p className="text-[15px] text-[#111] leading-relaxed font-medium mb-8 flex-1">
                {test.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-200 rounded-full flex-shrink-0 object-cover overflow-hidden">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full bg-zinc-300" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#111] leading-tight">
                    {test.name}
                  </h4>
                  <p className="text-[13px] text-zinc-500 mt-0.5">
                    {test.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}