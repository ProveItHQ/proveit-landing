import { CheckCircle, XCircle } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Traditional Interviews{" "}
            <span className="text-destructive">Fail</span>. We{" "}
            <span className="text-secondary">Succeed</span>.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The interview process hasn&apos;t evolved in decades. ProveIt brings
            a fresh approach that benefits everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-destructive flex items-center">
              <XCircle className="mr-2 h-6 w-6" />
              The Problem
            </h3>
            <ul className="space-y-4">
              {[
                "Outdated whiteboard tests that don't reflect real work",
                "One-dimensional assessments that miss candidate potential",
                "Stressful environments that hinder performance",
                "Biased evaluation processes",
                "Limited insight into practical skills",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="h-5 w-5 text-destructive shrink-0 mt-1 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-blue-600 flex items-center">
              <CheckCircle className="mr-2 h-6 w-6" />
              Our Solution
            </h3>
            <ul className="space-y-4">
              {[
                "Real-world projects that simulate actual work environments",
                "Multi-dimensional assessments that evaluate various skills",
                "Comfortable, flexible testing environments",
                "Objective, data-driven evaluation metrics",
                "Comprehensive insight into practical abilities and problem-solving",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-1 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
