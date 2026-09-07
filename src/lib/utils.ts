import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Apple design spring configurations (WWDC Designing Fluid Interfaces)
export const appleSprings = {
  // Critically damped default for UI (response 0.35s, damping ratio 1.0 - no overshoot)
  default: {
    type: "spring" as const,
    stiffness: 320,
    damping: 32,
    mass: 1,
  },
  // Snappy responsive for buttons and toggles
  snappy: {
    type: "spring" as const,
    stiffness: 420,
    damping: 35,
    mass: 0.8,
  },
  // Momentum flick for interactive drag or carousels (damping ~0.8)
  momentum: {
    type: "spring" as const,
    stiffness: 280,
    damping: 24,
    mass: 1,
  },
  // Sheet and modal transitions
  sheet: {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    mass: 1,
  },
};

