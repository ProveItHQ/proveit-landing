"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Info } from "lucide-react";

// Dynamically import Counter with no SSR to avoid hydration issues
const Counter = dynamic(() => import("./counter"), { ssr: false });
const StatisticCard = dynamic(() => import("./card"), { ssr: false });

interface Citation {
  id: string;
  source: string;
  link: string;
  year: string;
}

const citations: Citation[] = [
  {
    id: "hiring-time-increase",
    source: "Goodtime.io",
    link: "https://goodtime.io/blog/talent-operations/hiring-statistics/",
    year: "2025",
    // 60%
  },
  {
    id: "hiring-confidence",
    source: "SmartRecruiters",
    link: "https://www.smartrecruiters.com/blog/recruitment-statistics-for-2025/",
    year: "2025",
    // 15%
  },
  {
    id: "candidate-ghosting",
    source: "HRDive",
    link: "https://www.hrdive.com/news/hiring-managers-responsive-applicants/716173/",
    year: "2024",
    // 80%
  },
];

export default function ProblemEnriched() {
  const sectionRef = useRef(null);
  const [activeCitation, setActiveCitation] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100]);
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

  const scaleSpring = useSpring(scale, springConfigs.scale);
  const ySpring = useSpring(y, springConfigs.parallax);
  const opacitySpring = useSpring(opacity, springConfigs.fade);

  const container = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-gray-50 py-10 relative overflow-hidden"
      id="problem-enriched"
    >
      <motion.div
        style={{
          opacity: opacitySpring,
          y: ySpring,
          scale: scaleSpring,
        }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              duration: 1,
            }}
            className="space-y-6"
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-4 relative"
              style={{
                perspective: "1000px",
              }}
            >
              <motion.span
                initial={{ opacity: 0, rotateX: 90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                  delay: 0.2,
                }}
                className="inline-block text-gray-800"
              >
                Traditional Interviews&nbsp;
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 1.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-destructive inline-block"
              >
                Fail
              </motion.span>
              <motion.span
                initial={{ opacity: 0, rotateX: 90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                  delay: 0.6,
                }}
                className="inline-block text-gray-800"
              >
                . We&nbsp;
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 1.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-blue-600 inline-block"
              >
                Succeed
              </motion.span>
              <motion.span
                className="text-blue-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                .
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                type: "spring",
                damping: 200,
                stiffness: 50,
                delay: 0.4,
              }}
              className="text-2xl md:text-4xl text-gray-400 max-w-5xl mx-auto font-bold"
            >
              Outdated Interviews Are
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-3xl text-gray-800 max-w-4xl mx-auto font-black inline-block"
              >
                Draining Talent, Time and Trust.
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20"
          >
            <motion.div
              variants={item}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", damping: 15 },
              }}
              className="relative"
            >
              <StatisticCard
                title={
                  <div className="flex items-start justify-between">
                    <Counter
                      value={15}
                      suffix="%"
                      styling="text-5xl md:text-6xl font-bold text-blue-600"
                    />
                    <button
                      onClick={() => setActiveCitation("hiring-confidence")}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Info size={20} />
                    </button>
                  </div>
                }
                heading="Low Hiring Confidence"
                subheading="Traditional interviews fail to provide the insights needed for confident hiring choices."
                titleColor="text-blue-600"
              />
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", damping: 15 },
              }}
              className="relative"
            >
              <StatisticCard
                title={
                  <div className="flex items-start justify-between">
                    <Counter
                      value={60}
                      suffix="%"
                      styling="text-5xl md:text-6xl font-bold text-green-600"
                    />
                    <button
                      onClick={() => setActiveCitation("hiring-time-increase")}
                      className="text-gray-400 hover:text-green-600 transition-colors"
                    >
                      <Info size={20} />
                    </button>
                  </div>
                }
                heading="Hiring Takes Longer"
                subheading="Companies are struggling with prolonged recruitment cycles, losing top candidates to competitors with faster processes."
                titleColor="text-green-600"
              />
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", damping: 15 },
              }}
              className="relative"
            >
              <StatisticCard
                title={
                  <div className="flex items-start justify-between">
                    <Counter
                      value={80}
                      suffix="%"
                      styling="text-5xl md:text-6xl font-bold text-purple-600"
                    />
                    <button
                      onClick={() => setActiveCitation("candidate-ghosting")}
                      className="text-gray-400 hover:text-purple-600 transition-colors"
                    >
                      <Info size={20} />
                    </button>
                  </div>
                }
                heading="Widespread Ghosting Problem"
                subheading="The vast majority of hiring managers admit to leaving candidates without feedback or updates during the hiring process."
                titleColor="text-purple-600"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Citations Panel */}
        {activeCitation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 max-w-md w-full mx-4 z-50"
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
