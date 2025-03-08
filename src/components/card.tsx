"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StatisticCardProps {
  title: ReactNode;
  heading: string;
  subheading: string;
  titleColor?: string;
}

export default function StatisticCard({
  title,
  heading,
  subheading,
  titleColor = "text-blue-600",
}: StatisticCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl h-full"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="space-y-4">
        <div className={`text-5xl md:text-6xl font-bold ${titleColor}`}>
          {title}
        </div>
        <h3 className="text-xl font-bold">{heading}</h3>
        <p className="text-gray-600 dark:text-gray-300">{subheading}</p>
      </div>
    </motion.div>
  );
}
