"use client";

import { motion } from "framer-motion";
import { CheckCircle, Linkedin, Github, Mail } from "lucide-react";

// About component with Tailwind styling
const AboutSection = () => {
  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 20 },
  //   show: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       type: "spring",
  //       duration: 0.6,
  //       damping: 25,
  //     },
  //   },
  // };

  const fadeInRight = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.7,
        damping: 25,
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.7,
        damping: 25,
      },
    },
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          <motion.div variants={fadeInRight} className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
              About ProveIt
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              ProveIt was born out of frustration with traditional interview
              processes that fail to capture candidates&apos; true abilities. As
              students at Simon Fraser University, we experienced firsthand how
              conventional interviews often reward memorization and theoretical
              knowledge rather than practical skills and problem-solving
              abilities.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              Our mission is to revolutionize professional assessment by
              creating project-based evaluations that actually measure what
              matters: the ability to solve real-world problems, make sound
              decisions, and deliver quality results—regardless of industry or
              role.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              Founded in 2025, ProveIt is transforming how organizations
              evaluate talent across technical, creative, analytical, and
              leadership roles. Our platform provides comprehensive assessment
              environments where candidates can showcase their practical skills
              while hiring teams gain deeper insights into their capabilities.
            </p>
            <div className="border-l-4 border-blue-500 pl-6 py-2 italic text-gray-600 dark:text-gray-400 mb-8 bg-blue-50 dark:bg-gray-800/50 rounded-r-lg">
              <p className="text-lg">
                &quot;We believe that the best way to evaluate someone
                isn&apos;t through rehearsed answers or theoretical questions,
                but by watching them tackle realistic challenges they&apos;ll
                face on the job.&quot;
              </p>
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Our Core Values
            </h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 shrink-0 mt-0.5 mr-3" />
                <span className="text-lg">
                  <strong>Fairness:</strong> Creating a level playing field
                  where skills matter more than credentials
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 shrink-0 mt-0.5 mr-3" />
                <span className="text-lg">
                  <strong>Practicality:</strong> Focusing on real-world
                  competencies that translate to job performance
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 shrink-0 mt-0.5 mr-3" />
                <span className="text-lg">
                  <strong>Innovation:</strong> Continuously improving how
                  professional talent is discovered and evaluated
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 shrink-0 mt-0.5 mr-3" />
                <span className="text-lg">
                  <strong>Growth:</strong> Providing clear feedback to help
                  candidates develop, regardless of outcome
                </span>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={fadeInLeft} className="md:w-1/2">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
                The Team
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                Students at Simon Fraser University building the future of
                technical interviews
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Team member cards */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-100 dark:border-gray-600">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-300 dark:from-blue-400 dark:to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    SJ
                  </div>
                  <h4 className="font-semibold text-center text-gray-900 dark:text-white text-xl mb-1">
                    Sanchit
                  </h4>
                  <p className="text-center text-blue-500 dark:text-blue-400 text-sm mb-3">
                    Full Stack Developer
                  </p>
                  <div className="flex justify-center space-x-3 mt-2">
                    <a
                      href="https://linkedin.com/in/sanchit27"
                      className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://github.com/Undiluted7027"
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="mailto:sanchit@proveit.me"
                      className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-100 dark:border-gray-600">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-300 dark:from-blue-400 dark:to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    CY
                  </div>
                  <h4 className="font-semibold text-center text-gray-900 dark:text-white text-xl mb-1">
                    Yasir
                  </h4>
                  <p className="text-center text-blue-500 dark:text-blue-400 text-sm mb-3">
                    Frontend Developer
                  </p>
                  <div className="flex justify-center space-x-2 mt-2">
                    <a
                      href="https://www.linkedin.com/in/chowdhuryyasirsayem/"
                      className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://github.com/cys278"
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="mailto:yasir@proveit.me"
                      className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-100 dark:border-gray-600">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-300 dark:from-blue-400 dark:to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    PS
                  </div>
                  <h4 className="font-semibold text-center text-gray-900 dark:text-white text-xl mb-1">
                    Priyansh
                  </h4>
                  <p className="text-center text-blue-500 dark:text-blue-400 text-sm mb-3">
                    ML Developer
                  </p>
                  <div className="flex justify-center space-x-3 mt-2">
                    <a
                      href="https://www.linkedin.com/in/priyanshsarvaiya/"
                      className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://github.com/Priyanshsarvaiya"
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="mailto:priyansh@proveit.me"
                      className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-100 dark:border-gray-600">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-300 dark:from-blue-400 dark:to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    LSL
                  </div>
                  <h4 className="font-semibold text-center text-gray-900 dark:text-white text-xl mb-1">
                    Luvveer
                  </h4>
                  <p className="text-center text-blue-500 dark:text-blue-400 text-sm mb-3">
                    Backend Developer
                  </p>
                  <div className="flex justify-center space-x-3 mt-2">
                    <a
                      href="https://www.linkedin.com/in/luvveer-singh-lamba-a78017247/"
                      className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://github.com/Luvveer"
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="mailto:luvveer@proveit.me"
                      className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
