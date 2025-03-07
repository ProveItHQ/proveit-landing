import Hero from "@/components/hero"
import ProblemSolution from "@/components/problem-solution"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import AudienceBenefits from "@/components/audience-benefits"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import ProblemEnriched from "@/components/problem-enriched"

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-background">
      <Hero />
      <ProblemEnriched />
      <ProblemSolution />
      <Features />
      <Testimonials />
      <AudienceBenefits />
      <Footer />
    </main>
    </>
  )
}

