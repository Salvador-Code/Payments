"use client";

import { motion, type TargetAndTransition } from "framer-motion";
import { ReactNode } from "react";

type Variant = "fade-up" | "fade" | "scale" | "slide-left" | "slide-right";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
}

const variants: Record<Variant, { initial: TargetAndTransition; whileInView: TargetAndTransition }> = {
  "fade-up": {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
  },
  "slide-left": {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
  },
  "slide-right": {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
  },
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
}: Props) {
  const v = variants[variant];
  return (
    <motion.div
      initial={v.initial}
      whileInView={v.whileInView}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
