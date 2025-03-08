"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY * 0.5); // Adjust the multiplier to control the parallax effect
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        damping: 20,
      },
    },
  };

  return (
    <section
      className="relative w-full min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center overflow-hidden"
      id="hero"
      ref={heroRef}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 w-full h-full bg-white dark:bg-gray-950">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 w-full h-full bg-grid-slate-200/80 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content container with scroll animation */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-48 flex flex-col items-center text-center">
        {/* Hero content */}
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300"
          >
            Project-based
            <span className="relative">
              <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
                Technical
                <motion.svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 -bottom-[0.15em] h-[0.3em] w-full fill-indigo-400/60 dark:fill-indigo-300/60"
                  preserveAspectRatio="none"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      pathLength: 1,
                      opacity: 1,
                      transition: {
                        pathLength: { type: "spring", duration: 2, bounce: 0 },
                        opacity: { duration: 0.6 },
                      },
                    },
                    hidden: {
                      opacity: 0,
                      pathLength: 0,
                    },
                  }}
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.58 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </motion.svg>
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
                Assessments
              </span>
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-4xl mx-auto"
          >
            A comprehensive interview platform designed for the modern tech
            industry, helping candidates demonstrate real skills and companies
            find the best talent through hands-on projects.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300 text-lg px-8 py-6"
              onClick={() => scrollToSection("support")}
            >
              Get Early Access
            </Button>
            <Button
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/50 transition-all duration-300 text-lg px-8 py-6"
              onClick={() => scrollToSection("features")}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating image */}
      <motion.div
        className="absolute bottom-0 right-0 max-w-full"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: scrollY, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="./hero_image/Candidates.png"
          alt="Candidates using ProveIt"
          width={700}
          height={700}
          className="max-w-full h-auto"
          priority
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-500 dark:text-gray-400 text-sm mb-2">
            Scroll to explore
          </span>
          <ChevronDown className="h-6 w-6 text-gray-500 dark:text-gray-400" />
        </div>
      </motion.div>
    </section>
  );
}
