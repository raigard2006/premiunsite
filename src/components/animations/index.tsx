"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

export function FadeIn({ children, delay = 0, direction = "up", className = "", once = true }: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-50px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function Stagger({ children, className = "", staggerDelay = 0.1, once = true }: StaggerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({ end, duration = 2, suffix = "", prefix = "" }: { end: number; duration?: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
      >
        {inView ? (
          <motion.span>
            {end}
          </motion.span>
        ) : "0"}
      </motion.span>
      {suffix}
    </span>
  );
}

export function FloatingElement({ children, className = "", amplitude = 15, duration = 6 }: { children: ReactNode; className?: string; amplitude?: number; duration?: number }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude / 2, amplitude / 2],
        rotate: [-1, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
