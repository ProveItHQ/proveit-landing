"use client";

import { Code, BarChart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Features() {
  // Use this array to check names and descriptions, while the actual cards are statically defined
  const featureItems = [
    {
      icon: <Code />,
      title: "Real Projects",
      description:
        "Evaluate candidates using real-world projects in a collaborative environment that mirrors actual work.",
    },
    {
      icon: <BarChart />,
      title: "AI Insights",
      description:
        "Get detailed analysis of candidate performance with our AI-powered assessment tools.",
    },
    {
      icon: <Users />,
      title: "Collaboration",
      description:
        "Collaborate with team members to review and discuss candidate performance in real-time.",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="features" className="relative py-6 bg-white dark:bg-gray-950">
      {/* Title */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
            Redefine Your Interview Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform offers a suite of tools designed to transform how you
            assess and hire technical talent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featureItems.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={
                  index === 0
                    ? "bg-blue-100 dark:bg-blue-900 rounded-full w-14 h-14 flex items-center justify-center mb-6"
                    : index === 1
                    ? "bg-purple-100 dark:bg-purple-900 rounded-full w-14 h-14 flex items-center justify-center mb-6"
                    : "bg-green-100 dark:bg-green-900 rounded-full w-14 h-14 flex items-center justify-center mb-6"
                }
              >
                {index === 0 && (
                  <Code className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                )}
                {index === 1 && (
                  <BarChart className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                )}
                {index === 2 && (
                  <Users className="h-7 w-7 text-green-600 dark:text-green-400" />
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-50">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => scrollToSection("audience-benefits")}
          >
            Explore Benefits
          </Button>
        </div>
      </div>
    </section>
  );
}
