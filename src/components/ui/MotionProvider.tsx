"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

/** Respects system reduced-motion preferences across interactive motion primitives. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
