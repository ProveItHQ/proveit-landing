"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Counter({
    value = 100,
    decimal = false,
    suffix = "",
    stiffness = 300,
    damping = 100,
    textColor = "text-destructive",
    textSize = "text-4xl",
    fontWeight = "font-bold",
}) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping, stiffness });

    useEffect(() => {
        if (!isNaN(value)) {
            motionValue.set(value);
        }
    }, [value]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                const formattedValue = isNaN(latest)
                    ? 0
                    : Intl.NumberFormat("en-US").format(
                          latest.toFixed(decimal ? 2 : 0)
                      );
                ref.current.textContent = `${formattedValue}${suffix}`;
            }
        });
        return () => unsubscribe();
    }, [springValue, decimal, suffix]);

    return (
        <motion.div className={`flex items-center justify-center ${textSize} ${fontWeight} ${textColor}`}>
            <span ref={ref}>0{suffix}</span>
        </motion.div>
    );
}
