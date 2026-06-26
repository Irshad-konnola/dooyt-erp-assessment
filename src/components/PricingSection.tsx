"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Check, Zap, Rocket, Clock, Laptop, User, Users, Home, TrendingUp } from "lucide-react";

type Plan = {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  computedPrice?: number;
  currency: string;
  isPopular: boolean;
  features: string[];
};

export default function PricingSection({ initialPlans }: { initialPlans: Plan[] }) {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [plans, setPlans] = useState<Plan[]>(initialPlans);
  const [loading, setLoading] = useState(false);

  // Re-fetch plans when billing toggle changes to hit the server-side discount logic
  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/plans?billing=${billing}`);
        const json = await res.json();
        if (json.data) {
          setPlans(json.data);
        }
      } catch (error) {
        console.error("Failed to fetch plans", error);
      } finally {
        setLoading(false);
      }
    };

    // Skip initial fetch since we have initialPlans, only fetch on change
    if (billing !== "monthly") fetchPlans();
    else setPlans(initialPlans);
  }, [billing, initialPlans]);

  // Bottom advantages tags
  const advantages = [
    { icon: Rocket, label: "Grows with you" },
    { icon: Clock, label: "Save time" },
    { icon: Laptop, label: "1-month free trial" },
    { icon: User, label: "Work on the go" },
    { icon: Users, label: "Better Teamwork & Collaboration" },
    { icon: Home, label: "Stay compliant" },
    { icon: TrendingUp, label: "Keep Finances on Track" },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FAFAFA] font-sans">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Toggle */}
        <div className="text-center mb-12">
          <span className="text-[#F26419] font-semibold text-sm mb-4 block">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight mb-8">
            Find the Right Plan for You
          </h2>
          
          {/* Billing Toggle */}
          <div className="flex flex-col items-center gap-3">
            <div className="bg-zinc-200/60 p-1 rounded-full inline-flex relative">
              <button
                onClick={() => setBilling("monthly")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 z-10 w-32 ${
                  billing === "monthly" ? "bg-white text-[#111] shadow-sm" : "text-zinc-500 hover:text-[#111]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("annual")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 z-10 w-32 ${
                  billing === "annual" ? "bg-white text-[#111] shadow-sm" : "text-zinc-500 hover:text-[#111]"
                }`}
              >
                Annual
              </button>
            </div>
            <p className="text-[#F26419] text-sm font-medium">
              -15% off on annual payments
            </p>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-center mb-24">
          {plans.map((plan) => {
            const price = plan.computedPrice || plan.monthlyPrice;
            
            return (
              <div 
                key={plan.id}
                className={`relative transition-opacity duration-300 ${loading ? "opacity-50" : "opacity-100"} ${
                  plan.isPopular ? "md:-mt-8 md:-mb-8 z-10" : "mt-0 z-0"
                }`}
              >
                {/* Popular Plan Highlight Wrapper */}
                {plan.isPopular ? (
                  <div className="bg-[#F26419] rounded-[32px] pt-4 px-2 pb-2 shadow-2xl">
                    <div className="text-center text-white text-[11px] font-bold uppercase tracking-wider mb-3">
                      Most Popular Plan
                    </div>
                    <div className="bg-[#FFF9F5] rounded-[24px] p-8 h-full">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-[#111] flex items-center gap-2">
                          {plan.name} <Zap className="w-5 h-5 text-[#F26419] fill-[#F26419]" />
                        </h3>
                        <p className="text-zinc-500 text-sm mt-2">{plan.tagline}</p>
                      </div>
                      <div className="mb-8">
                        <span className="text-5xl font-black text-[#111]">₹{price.toLocaleString()}</span>
                        <span className="text-zinc-500 text-base font-medium"> /per user</span>
                      </div>
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            {/* The first feature of Pro has a filled orange check in the design */}
                            {i === 0 ? (
                              <div className="mt-0.5 min-w-[20px] w-5 h-5 bg-[#F26419] rounded-full flex justify-center items-center">
                                <Check className="w-3 h-3 text-white stroke-[3]" />
                              </div>
                            ) : (
                              <CheckCircle2 className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                            )}
                            <span className={`text-[15px] ${i === 0 ? "text-[#111] font-semibold" : "text-zinc-600"}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <button className="w-full bg-[#111] text-white font-semibold py-4 rounded-xl hover:bg-zinc-800 transition-colors">
                        Select plan
                      </button>
                      <p className="text-center text-xs text-zinc-500 mt-4">or contact sales</p>
                    </div>
                  </div>
                ) : (
                  // Standard Plans (Starter & Enterprise)
                  <div className="bg-white rounded-[32px] p-8 border border-zinc-200 shadow-sm">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[#111]">{plan.name}</h3>
                      <p className="text-zinc-500 text-sm mt-2">{plan.tagline}</p>
                    </div>
                    <div className="mb-8">
                      <span className="text-5xl font-black text-[#111]">₹{price.toLocaleString()}</span>
                      <span className="text-zinc-500 text-base font-medium"> /per user</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                           {/* Enterprise also highlights first feature */}
                           {plan.id === 'enterprise' && i === 0 ? (
                              <div className="mt-0.5 min-w-[20px] w-5 h-5 bg-[#F26419] rounded-full flex justify-center items-center">
                                <Check className="w-3 h-3 text-white stroke-[3]" />
                              </div>
                            ) : (
                              <CheckCircle2 className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                            )}
                          <span className={`text-[15px] ${plan.id === 'enterprise' && i === 0 ? "text-[#111] font-semibold" : "text-zinc-600"}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-[#111] text-white font-semibold py-4 rounded-xl hover:bg-zinc-800 transition-colors">
                      Select plan
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Advantages Section */}
        <div className="text-center">
          <p className="text-zinc-400 text-sm font-medium mb-8">Experience the Dooyt Advantage</p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {advantages.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <div key={i} className="flex items-center gap-2 bg-[#FFF9F5] px-5 py-2.5 rounded-full shadow-sm">
                  <Icon className="w-4 h-4 text-[#F26419]" />
                  <span className="text-[14px] font-medium text-zinc-700">{adv.label}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}