import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Gradient background with more modern colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-slate-50/25 to-transparent"></div>

      <div className="section-padding relative z-10 flex flex-col items-center justify-start pt-16 lg:pt-24">
        {/* Text content with reduced bottom margin on larger screens */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Job Interviews That Feel{" "}
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Like The Real Work.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Showcase skills through real projects - whether you code, lead
            teams, or analyze data. ProveIt redefines how candidates and
            recruiters connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 text-lg rounded-full"
            >
              SignUp for Early Access
            </Button>
          </div>
        </div>

        {/* Modern Browser Mockup - Enlarged and more responsive */}
        <div className="w-full max-w-[95%] xl:max-w-[85%] 2xl:max-w-[1500px] mx-auto relative">
          {/* Browser Window Frame */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transform-gpu">
            {/* Browser Top Bar - Scaled up */}
            <div className="flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 bg-gray-900/90 border-b border-gray-700/50">
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500/80"></div>
              </div>
              {/* URL Bar - Scaled up */}
              <div className="flex-1 ml-4 md:ml-6">
                <div className="max-w-sm mx-auto px-3 md:px-4 py-1.5 md:py-2 rounded-md bg-gray-800/50 border border-gray-700/50 text-gray-400 text-sm md:text-base">
                  proveit.me/softw-1UI45DAMZN
                </div>
              </div>
            </div>

            {/* Platform Preview */}
            <div className="relative bg-gray-900/90 p-4 md:p-6 lg:p-8">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="./sandbox.png"
                  alt="ProveIt platform interface"
                  className="w-full h-auto object-cover scale-105"
                />
                {/* Enhanced depth effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/5"></div>
              </div>
            </div>
          </div>

          {/* Feature Callout - Scaled up */}
          <div
            className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gradient-to-r from-blue-600 to-blue-700 
            text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-medium shadow-lg shadow-blue-500/20 
            border border-blue-500/20 text-base md:text-lg"
          >
            Real projects. Real skills. Real impact.
          </div>
        </div>
      </div>
    </section>
  );
}
