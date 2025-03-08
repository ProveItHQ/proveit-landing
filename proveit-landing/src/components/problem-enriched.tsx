"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamically import Counter with no SSR to avoid hydration issues
const Counter = dynamic(() => import("./counter"), { ssr: false });
const StatisticCard = dynamic(() => import("./card"), { ssr: false });

export default function ProblemEnriched() {
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
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Traditional Interviews{" "}
            <span className="text-destructive">Fail</span>. We{" "}
            <span className="text-blue-600">Succeed</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl text-gray-400 max-w-5xl mx-auto font-bold"
          >
            Outdated Interviews Are
            <br />
            <span className="text-3xl text-gray-800 max-w-4xl mx-auto font-black">
              Draining Talent, Time and Trust.
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto mt-4 mb-12"
          >
            See the data - then join the fix.
          </motion.p>

          {/* Statistics Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <motion.div variants={item}>
              <StatisticCard
                title={
                  <Counter
                    value={44}
                    decimal={true}
                    suffix="%"
                    stiffness={200}
                    damping={50}
                  />
                }
                heading="Bad Hire & Skill Gap"
                subheading="Traditional behavioral Q&A fails to simulate real teamwork."
                titleColor="text-blue-600"
              />
            </motion.div>
            <motion.div variants={item}>
              <StatisticCard
                title={
                  <Counter
                    value={72}
                    decimal={true}
                    suffix="%"
                    stiffness={200}
                    damping={50}
                  />
                }
                heading="Candidate's Perspective"
                subheading="Algorithm puzzles and hypotheticals don't test job readiness."
                titleColor="text-green-600"
              />
            </motion.div>
            <motion.div variants={item}>
              <StatisticCard
                title={
                  <Counter
                    value={90}
                    decimal={true}
                    suffix="%"
                    stiffness={200}
                    damping={50}
                  />
                }
                heading="Candidates Ghosted"
                subheading="No feedback = no growth. ProveIt auto-generates 'Skill Gap Reports'."
                titleColor="text-purple-600"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
