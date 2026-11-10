"use client";

import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  icon: LucideIcon;
  badge: string;
  heading1: string;
  heading2: string;
  subtitle?: string;
  /** "split" puts the subtitle beside the heading on desktop, "stacked" puts it underneath. */
  layout?: "split" | "stacked";
  className?: string;
}

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const lineUp: Variants = {
  hidden: { y: "105%" },
  show: { y: 0, transition: { duration: 0.85, ease } },
};

export default function SectionHeader({
  icon: Icon,
  badge,
  heading1,
  heading2,
  subtitle,
  layout = "split",
  className,
}: SectionHeaderProps) {
  const isSplit = layout === "split";

  const subtitleNode = subtitle && (
    <motion.p
      variants={fadeUp}
      className={
        isSplit
          ? "max-w-md text-sm md:text-base text-white/50 leading-relaxed"
          : "max-w-2xl text-base md:text-lg text-white/60 font-normal leading-relaxed mt-5"
      }
    >
      {subtitle}
    </motion.p>
  );

  // The viewport trigger lives on the root: the heading lines start clipped by
  // their overflow-hidden wrappers, so they can never report as "in view" themselves.
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={stagger}
      className={cn(
        isSplit && "flex flex-col md:flex-row md:items-end justify-between gap-6",
        className
      )}
    >
      <div>
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-3 text-xs uppercase tracking-widest text-sky-400 font-mono mb-4"
        >
          <Icon size={14} />
          <span>{badge}</span>
          <span aria-hidden className="h-px w-10 bg-gradient-to-r from-sky-400/60 to-transparent" />
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white display-title">
          {/* pb/-mb keeps descenders and cedillas out of the reveal clip */}
          <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
            <motion.span variants={lineUp} className="block">
              {heading1}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
            <motion.span variants={lineUp} className="block text-white/40">
              {heading2}
            </motion.span>
          </span>
        </h2>

        {!isSplit && subtitleNode}
      </div>

      {isSplit && subtitleNode}
    </motion.div>
  );
}
