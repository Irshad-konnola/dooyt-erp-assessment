import { Phone, ChevronRight, Star } from "lucide-react";
import DashboardShowCase from "@/components/DashboardShowCase";
import ModulesSection from "@/components/ModulesSection";
import FeaturesSection from "@/components/FeaturesSection";
import IndustriesSection from "@/components/IndustriesSection";
import CtaSection from "@/components/CtaSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
// modules
async function getModules() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/modules`, {
    cache: 'no-store' 
  });
  if (!res.ok) {
    return [];
  }
  const json = await res.json();
  return json.data;
}
// industries
async function getIndustries() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/industries`, { cache: 'no-store' });
  if (!res.ok) return [];
  const json = await res.json();
  return json.data;
}
// plans
async function getPlans() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/plans?billing=monthly`, { cache: 'no-store' });
  if (!res.ok) return [];
  const json = await res.json();
  return json.data;
}

async function getTestimonials() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/testimonials?limit=3`, { cache: 'no-store' });
  if (!res.ok) return [];
  const json = await res.json();
  return json.data;
}

async function getFaqs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/faqs`, { cache: 'no-store' });
  if (!res.ok) return [];
  const json = await res.json();
  return json.data;
}

export default async function Home() {
const [modules, industries, plans, testimonials, faqs] = await Promise.all([
    getModules(),
    getIndustries(),
    getPlans(),
    getTestimonials(), 
    getFaqs() 
  ]);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 flex flex-col items-center justify-center text-center px-4 sm:px-6">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF6F0] mb-8">
          <span className="text-lg leading-none">🔥</span>
          <span className="text-sm font-medium text-[#F26419]">Best ERP Software</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-bold tracking-tight text-[#111111] mb-2">
          Accuracy. Productivity.
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-bold tracking-tight text-[#F26419] mb-8">
          Business Wins
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-zinc-500 max-w-4xl mx-auto leading-relaxed mb-12">
          Instead of using many tools, just choose one to control your entire business effortlessly. Dooyt, the best ERP software that makes smarter decisions and drives business growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <button className="flex items-center justify-center gap-2 bg-[#F26419] text-white text-base font-semibold px-8 py-4 rounded-xl hover:bg-[#d95615] transition-all w-full sm:w-auto">
            <Phone className="w-5 h-5 fill-current" />
            Request A Demo
          </button>
          <button className="flex items-center justify-center gap-2 bg-white border border-zinc-300 text-[#111111] text-base font-semibold px-8 py-4 rounded-xl hover:bg-zinc-50 transition-all w-full sm:w-auto">
            Try Free for 30 Days
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1 text-[#FFB800]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-current border-none" />
            ))}
          </div>
          <span className="text-sm text-zinc-500 font-medium">(Rating 4.5 star)</span>
        </div>

      </section>
      <DashboardShowCase/>
      <ModulesSection modules={modules} />
      <FeaturesSection/>
      <IndustriesSection industries={industries} />
      <CtaSection />
      <PricingSection initialPlans={plans} />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </div>
  );
}