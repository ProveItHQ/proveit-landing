"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
  value?: number;
  decimal?: boolean;
  suffix?: string;
  styling?: string;
}

export default function Counter({
  value = 100,
  decimal = false,
  suffix = "",
  styling = "text-destructive text-4xl font-bold",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  // Fixed spring configuration for optimal counting animation
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 200 });

  useEffect(() => {
    if (!isNaN(value)) {
      motionValue.set(value);
    }
  }, [value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const formattedValue = isNaN(latest)
          ? 0
          : Intl.NumberFormat("en-US").format(
              Number(latest.toFixed(decimal ? 2 : 0))
            );
        ref.current.textContent = `${formattedValue}${suffix}`;
      }
    });
    return () => unsubscribe();
  }, [springValue, decimal, suffix]);

  return (
    <motion.div className={`flex items-center justify-center ${styling}`}>
      <span ref={ref}>0{suffix}</span>
    </motion.div>
  );
}
