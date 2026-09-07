"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function TextReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  yOffset = 24,
}: TextRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple / cubic-bezier for natural editorial entrance
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface SplitWordsRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}

export function SplitWordsReveal({
  text,
  className,
  wordClassName,
  delay = 0,
}: SplitWordsRevealProps) {
  const words = text.split(" ");

  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span
            className={cn("inline-block", wordClassName)}
            initial={{ y: "115%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              delay: delay + index * 0.045,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

