"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Info } from "lucide-react";

// Dynamically import Counter with no SSR to avoid hydration issues
const Counter = dynamic(() => import("./counter"), { ssr: false });

interface Citation {
  id: string;
  source: string;
  link: string;
  year: string;
}

const citations: Citation[] = [
  {
    id: "employer-roi",
    source: "TestGorilla",
    link: "https://www.testgorilla.com/blog/skills-based-hiring-increases-hiring-speed/-success-and-budgets",
    year: "2023",
  },
  {
    id: "quality-hire",
    source: "Vivo Talent Solutions",
    link: "https://vivotalent.com/why-recruitment-is-crucial-for-business-success/",
    year: "2024",
  },
  {
    id: "candidate-experience",
    source: "Testlify",
    link: "https://shrm.org/interview-stress-study",
    year: "2024",
  },
];

export default function ProjectStats() {
  const sectionRef = useRef(null);
  const [activeCitation, setActiveCitation] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9, 1],
    [0.8, 1, 1, 0.8]
  );

  // Optimized spring configs for different purposes
  const springConfigs = {
    parallax: { damping: 15, stiffness: 100 }, // Smooth parallax
    fade: { damping: 25, stiffness: 120 }, // Quick fade
    scale: { damping: 20, stiffness: 150 }, // Responsive scaling
  };

  const ySpring = useSpring(y, springConfigs.parallax);
  const opacitySpring = useSpring(opacity, springConfigs.fade);
  const scaleSpring = useSpring(scale, springConfigs.scale);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #6ABF4B 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          y: ySpring,
          opacity: opacitySpring,
        }}
      />

      <motion.div
        style={{
          scale: scaleSpring,
          opacity: opacitySpring,
        }}
        className="container mx-auto px-4"
      >
        <div className="text-center max-w-5xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Project-based interviews let your work{" "}
            <span className="text-blue-600">speak louder</span> than algorithms.{" "}
            <span className="text-green-600">Smarter evaluations</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "spring",
              damping: 200,
              stiffness: 50,
              delay: 0.2,
            }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
          >
            Fairer results. Less guesswork.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {/* Stat Card 1 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
          >
            <div className="flex justify-between items-start mb-4">
              <Counter
                value={56}
                suffix="%"
                styling="text-5xl md:text-6xl font-bold text-blue-600"
              />
              <button
                onClick={() => setActiveCitation("candidate-experience")}
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Info size={20} />
              </button>
            </div>
            <h3 className="text-xl font-bold mb-2">Candidate Experience</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Job seekers prefer hiring processes that incorporate skills-based
              assessments, highlighting the market demand for ProveIt&apos;s
              solution.
            </p>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
          >
            <div className="flex justify-between items-start mb-4">
              <Counter
                value={88}
                suffix="%"
                styling="text-5xl md:text-6xl font-bold text-green-600"
              />
              <button
                onClick={() => setActiveCitation("employer-roi")}
                className="text-gray-400 hover:text-green-600 transition-colors"
              >
                <Info size={20} />
              </button>
            </div>
            <h3 className="text-xl font-bold mb-2">ROI for Employers</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Companies reduced mis-hires when implementing skills-based hiring
              approaches, showing the financial benefits of ProveIt&apos;s
              assessment model.
            </p>
          </motion.div>

          {/* Stat Card 3 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
          >
            <div className="flex justify-between items-start mb-4">
              <Counter
                value={89}
                suffix="%"
                styling="text-5xl md:text-6xl font-bold text-purple-600"
              />
              <button
                onClick={() => setActiveCitation("quality-hire")}
                className="text-gray-400 hover:text-purple-600 transition-colors"
              >
                <Info size={20} />
              </button>
            </div>
            <h3 className="text-xl font-bold mb-2">Quality of Hire</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Hiring failures attributed to poor cultural fit, which
              ProveIt&apos;s comprehensive skills assessment can help prevent by
              evaluating both technical abilities and workplace compatibility.
            </p>
          </motion.div>
        </motion.div>

        {/* Citations Panel */}
        {activeCitation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 max-w-md w-full mx-4 z-200"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold">Source</h4>
              <button
                onClick={() => setActiveCitation(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                ✕
              </button>
            </div>
            {citations.find((c) => c.id === activeCitation) && (
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {citations.find((c) => c.id === activeCitation)?.source}
                </p>
                <a
                  href={citations.find((c) => c.id === activeCitation)?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Source (
                  {citations.find((c) => c.id === activeCitation)?.year})
                </a>
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
