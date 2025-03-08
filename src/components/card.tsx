"use client";

import React from "react";
import { motion } from "framer-motion";

interface StatisticCardProps {
  title: React.ReactNode;
  unit?: string;
  heading?: string;
  subheading?: string;
  titleColor?: string;
  unitColor?: string;
  headingColor?: string;
  subheadingColor?: string;
}

export default function StatisticCard({
  title,
  unit,
  heading,
  subheading,
  titleColor = "text-black",
  unitColor = "text-blue-500",
  headingColor = "text-gray-700",
  subheadingColor = "text-gray-500",
}: StatisticCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="group relative p-6 bg-white rounded-2xl flex flex-col items-center space-y-4 border border-gray-200
        hover:border-blue-200 transition-colors duration-300
        before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-blue-50/50 before:to-transparent before:opacity-0 
        before:transition-opacity before:duration-300 hover:before:opacity-100"
    >
      {/* Subtle glow effect on hover */}
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 
        group-hover:opacity-10 blur-xl transition-opacity duration-300"
      />

      {/* Content container */}
      <div className="relative flex flex-col items-center space-y-4 w-full">
        {/* Title and unit */}
        <div className="flex items-baseline gap-2 transform transition-transform duration-300 group-hover:scale-105">
          <div className={`text-4xl font-bold ${titleColor}`}>{title}</div>
          {unit && (
            <span className={`text-2xl font-semibold ${unitColor}`}>
              {unit}
            </span>
          )}
        </div>

        {/* Heading with hover effect */}
        {heading && (
          <h3
            className={`text-lg font-medium ${headingColor} text-center
            transform transition-all duration-300 group-hover:text-blue-700`}
          >
            {heading}
          </h3>
        )}

        {/* Subheading with hover effect */}
        {subheading && (
          <p
            className={`text-sm ${subheadingColor} text-center max-w-[90%]
            transform transition-all duration-300 group-hover:text-gray-600`}
          >
            {subheading}
          </p>
        )}

        {/* Hover indicator */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-blue-500 scale-x-0 
          group-hover:scale-x-100 transition-transform duration-300"
        />
      </div>
    </motion.div>
  );
}
