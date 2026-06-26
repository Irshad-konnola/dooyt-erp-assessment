import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Wallet } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Column - Copy & CTA */}
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-tight">
                Accuracy. <br />
                <span className="text-blue-600">Productivity.</span> <br />
                Business Wins.
              </h1>
              <p className="text-lg text-zinc-600 mb-8 max-w-xl leading-relaxed">
                Streamline your operations, automate workflows, and gain real-time visibility into every department. The smart ERP solution built for modern teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-12 px-8 text-base gap-2 bg-blue-600 hover:bg-blue-700">
                  Try for 30 Days <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                  View Modules
                </Button>
              </div>
            </div>

            {/* Right Column - Dashboard / Metric Visuals */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Decorative background blob */}
              <div className="absolute -top-12 -right-12 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              
              <div className="relative grid gap-4 md:gap-6 bg-zinc-50 border border-zinc-100 p-6 rounded-2xl shadow-xl">
                {/* Metric Card 1 */}
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-zinc-100">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    <Wallet className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-500">Quarterly Revenue</p>
                    <h3 className="text-2xl font-bold text-zinc-900">€93,800,300</h3>
                  </div>
                </div>

                {/* Metric Card 2 */}
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-zinc-100 ml-8">
                  <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-500">Annual Projection</p>
                    <h3 className="text-2xl font-bold text-zinc-900">€120,993,000</h3>
                  </div>
                </div>

                {/* Metric Card 3 */}
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-zinc-100">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-500">Total Volume</p>
                    <h3 className="text-2xl font-bold text-zinc-900">€496,085,100</h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}