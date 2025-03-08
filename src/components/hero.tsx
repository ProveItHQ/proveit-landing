"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Simple parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], ["0%", "5%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  // Spring animations for smoother movement
  const springConfig = { damping: 15, stiffness: 100 };
  const ySpring = useSpring(y, springConfig);
  const opacitySpring = useSpring(opacity, springConfig);
  const imageYSpring = useSpring(imageY, springConfig);
  const imageScaleSpring = useSpring(imageScale, springConfig);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10 dark:opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #2E8FFF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          y: ySpring,
          opacity: opacitySpring,
        }}
      />

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between min-h-screen">
        {/* Text Content */}
        <motion.div
          style={{
            opacity: opacitySpring,
          }}
          className="text-center md:text-left md:w-1/2 z-10 mb-12 md:mb-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              duration: 1,
            }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block">Reimagine</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Technical Interviews
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              Replace outdated interview methods with project-based assessments
              that actually reflect real-world skills across technical, design,
              and managerial roles.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg font-medium w-full">
                  Join Waitlist
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="outline"
                  className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-6 rounded-full text-lg font-medium w-full"
                  onClick={() => {
                    const featuresSection = document.getElementById("features");
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Image with Simple Animation */}
        <motion.div
          className="md:w-1/2 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            y: imageYSpring,
            scale: imageScaleSpring,
          }}
        >
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/hero_image/Candidates.png"
              alt="Technical Interview Platform"
              fill
              className="object-cover object-center"
              priority
            />

            {/* Simple Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={() => {
            const featuresSection = document.getElementById("features");
            if (featuresSection) {
              featuresSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full relative"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-gray-400 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
