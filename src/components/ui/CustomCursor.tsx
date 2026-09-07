"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

type CursorMode = "default" | "pointer" | "project" | "external" | "hidden";

export default function CustomCursor() {
  const [cursorMode, setCursorMode] = useState<CursorMode>("default");
  const [cursorLabel, setCursorLabel] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Mouse position motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth Apple-style spring physics for the trailing ring
  const springConfig = { damping: 28, stiffness: 320, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Inspect hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest("[data-cursor='project']");
      const externalEl = target.closest("[data-cursor='external']");
      const buttonEl = target.closest("button, a, [role='button'], input, textarea, [data-cursor='pointer']");

      if (projectEl) {
        setCursorMode("project");
        setCursorLabel(projectEl.getAttribute("data-cursor-label") || "View Project ↗");
      } else if (externalEl) {
        setCursorMode("external");
        setCursorLabel("Visit Site ↗");
      } else if (buttonEl) {
        setCursorMode("pointer");
        setCursorLabel("");
      } else {
        setCursorMode("default");
        setCursorLabel("");
      }
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  const isProjectOrExternal = cursorMode === "project" || cursorMode === "external";

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: isProjectOrExternal ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer fluid spring follower */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center text-center select-none"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          width: isProjectOrExternal ? 130 : cursorMode === "pointer" ? 44 : 32,
          height: isProjectOrExternal ? 38 : cursorMode === "pointer" ? 44 : 32,
          borderRadius: isProjectOrExternal ? 20 : 9999,
          backgroundColor: isProjectOrExternal
            ? "rgba(18, 18, 22, 0.85)"
            : cursorMode === "pointer"
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(255, 255, 255, 0.02)",
          borderColor: isProjectOrExternal
            ? "rgba(56, 189, 248, 0.5)"
            : cursorMode === "pointer"
            ? "rgba(255, 255, 255, 0.3)"
            : "rgba(255, 255, 255, 0.18)",
          scale: isPressed ? 0.88 : 1,
          backdropFilter: isProjectOrExternal ? "blur(16px)" : "blur(4px)",
        }}
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 30,
        }}
      >
        {isProjectOrExternal && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-[11px] font-medium tracking-tight text-white/90 px-3 whitespace-nowrap"
          >
            {cursorLabel}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}

