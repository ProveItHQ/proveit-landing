import Hero from "@/components/hero";
import ProblemSolution from "@/components/problem-solution";
import Features from "@/components/features";
import AudienceBenefits from "@/components/audience-benefits";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProblemEnriched from "@/components/problem-enriched";
import ProjectStats from "@/components/project-stats";
import Support from "@/components/support";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <Hero />
        <ProblemEnriched />
        <ProblemSolution />
        <Features />
        <ProjectStats />
        <AudienceBenefits />
        <Support />
        <Footer />
      </main>
    </>
  );
}
