"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sparkles, ArrowRight, ChevronRight } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";

// Dynamically import Counter with no SSR to avoid hydration issues
const Counter = dynamic(() => import("./counter"), { ssr: false });
// const Marquee = dynamic(() => import("./magicui/marquee"), { ssr: false });

const stats = [
  "24% more diversity",
  "300% MoM growth",
  "92.5% fewer mis-hires",
  "40% fewer bias",
  "65% productivity boost",
];

export default function Support() {
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
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 dark:opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #3B82F6 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text py-2 text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Help Us Revolutionize Hiring - for Good
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A student-built platform empowering fairer careers and smarter
            teams. Be part of the change.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
        >
          {/* Card 1 */}
          <motion.div variants={item}>
            <Card className="relative h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-500" />
                  Student-Led Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Solve challenges mirroring actual job demands - debug APIs,
                  lead sprints, clean datasets. No more algorithm riffles.
                </CardDescription>
              </CardContent>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-blue-500"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </Card>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={item}>
            <Card className="relative h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-green-500" />
                  Capture the $7.3B HR Tech Market
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Get instant scores on code quality, system design, and soft
                  skills. AI flags biases so humans focus on potential.
                </CardDescription>
              </CardContent>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-green-500"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </Card>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={item}>
            <Card className="relative h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  Scalable Social Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Developers ship features. Leaders test their skills in chaotic
                  situations tailored to their job. PMs prioritize roadmaps.
                  Data scientists optimize pipelines. One platform, every role.
                </CardDescription>
              </CardContent>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-purple-500"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </Card>
          </motion.div>
        </motion.div>

        {/* Beta Testers Counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center text-4xl md:text-6xl font-bold">
            <Counter value={437} styling="text-blue-600" />
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-300">1000</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Beta Testers</p>
        </motion.div>

        {/* Stats Marquee - Enhanced */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-blue-500/10 dark:from-blue-500/5 dark:via-blue-600/5 dark:to-blue-500/5 blur-xl" />
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-12 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-white/50 dark:bg-gray-800/50"
            />
            <Marquee pauseOnHover className="[--duration:20s] relative">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="mx-8 flex items-center gap-4 text-lg font-semibold"
                >
                  <div className="flex items-center gap-3 rounded-full bg-blue-100/80 dark:bg-blue-900/80 px-4 py-2">
                    <div className="size-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                    <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-300">
                      {stat}
                    </span>
                  </div>
                </div>
              ))}
            </Marquee>
            {/* Add side fade effect */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-gray-900" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-gray-900" />
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="group relative overflow-hidden border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Share Opinion
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Help shape the future of hiring</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="lg"
                  className="group bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                >
                  Get Early Access
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Join our exclusive beta program</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      </div>
    </section>
  );
}
