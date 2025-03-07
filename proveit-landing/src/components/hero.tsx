import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-70 z-0"></div>
      <div className="section-padding relative z-10 flex flex-col items-center justify-center min-h-[90vh]">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Job Interviews That Feel </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">Like The Real Work. 
            {/* <span className="gradient-text">Prove It.</span> */}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Showcase skills through real projects - whether you code, lead teams, or analyze data. ProveIt redefines how candidates and recruiters connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 text-lg rounded-full"
            >
              SignUp for Early Access
              {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-medium px-8 py-6 text-lg rounded-full"
            >
              Provide Feedback
            </Button> */}
          </div>
        </div>

        <div className="mt-16 w-full max-w-5xl mx-auto relative">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <img
              src="./mockups/sand-full.svg"
              alt="ProveIt platform interface"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-secondary text-white px-6 py-3 rounded-lg shadow-lg transform rotate-3 font-medium">
            Real projects. Real skills.
          </div>
        </div>
      </div>
    </section>
  )
}

