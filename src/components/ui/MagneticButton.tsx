"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  magneticStrength?: number;
  as?: "button" | "div" | "a";
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "data-cursor"?: string;
}

export default function MagneticButton({
  children,
  className,
  onClick,
  magneticStrength = 0.35,
  as = "button",
  href,
  target,
  rel,
  type = "button",
  disabled = false,
  "data-cursor": dataCursor = "pointer",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || disabled) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({
      x: middleX * magneticStrength,
      y: middleY * magneticStrength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 22, mass: 0.5 }}
      className={cn("inline-block", className)}
      data-cursor={dataCursor}
    >
      {children}
    </motion.div>
  );

  if (as === "a" && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className="inline-block"
      >
        {Content}
      </a>
    );
  }

  if (as === "button") {
    return (
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className="inline-block outline-none focus:outline-none disabled:opacity-50"
      >
        {Content}
      </button>
    );
  }

  return Content;
}
