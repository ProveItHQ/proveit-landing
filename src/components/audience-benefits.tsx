import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserCircle, Building2, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function AudienceBenefits() {
  return (
    <section className="bg-white">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefits for Everyone
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ProveIt creates value for all stakeholders in the hiring process.
          </p>
        </div>

        <Tabs defaultValue="candidates" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger
              value="candidates"
              className="flex items-center gap-2 py-3"
            >
              <UserCircle className="h-5 w-5" />
              <span className="hidden sm:inline">For Candidates</span>
            </TabsTrigger>
            <TabsTrigger
              value="recruiters"
              className="flex items-center gap-2 py-3"
            >
              <Building2 className="h-5 w-5" />
              <span className="hidden sm:inline">For Recruiters</span>
            </TabsTrigger>
            <TabsTrigger
              value="investors"
              className="flex items-center gap-2 py-3"
            >
              <TrendingUp className="h-5 w-5" />
              <span className="hidden sm:inline">For Investors</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="candidates" className="bg-gray-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  For Job Seekers
                </h3>
                <ul className="space-y-4">
                  {[
                    "Showcase your real-world skills beyond what's on your resume",
                    "Receive fair, objective assessments based on your actual abilities",
                    "Get detailed feedback to improve your skills, even if you don't get the job",
                    "Experience less stressful interviews in a comfortable environment",
                    "Stand out from other candidates with comprehensive skill demonstrations",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Candidate using ProveIt"
                  className="w-full h-auto rounded-lg"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recruiters" className="bg-gray-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  For Recruiters
                </h3>
                <ul className="space-y-4">
                  {[
                    "Make data-driven hiring decisions based on objective metrics",
                    "Reduce bad hires and improve team performance",
                    "Streamline the interview process and save valuable time",
                    "Evaluate candidates on skills that directly relate to job requirements",
                    "Access detailed performance reports for easier comparison between candidates",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Recruiter using ProveIt"
                  className="w-full h-auto rounded-lg"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="investors" className="bg-gray-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  For Investors
                </h3>
                <ul className="space-y-4">
                  {[
                    "Tap into the $200B+ global recruitment market",
                    "Invest in a platform that addresses a universal pain point in hiring",
                    "Benefit from a scalable SaaS model with recurring revenue",
                    "Support technology that improves diversity and reduces bias in hiring",
                    "Join early in a revolutionary approach to talent acquisition",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Investment growth chart"
                  className="w-full h-auto rounded-lg"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
