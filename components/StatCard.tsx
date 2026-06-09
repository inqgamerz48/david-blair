"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface StatCardProps {
  number: string; // e.g. "500+"
  label: string; // e.g. "Students Taught"
  colorClass: string; // e.g. "text-badgeBlue" (matching palette)
}

export default function StatCard({ number, label, colorClass }: StatCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  // Parse suffix (+ or %) and value
  const numValue = parseInt(number.replace(/[^0-9]/g, ""), 10);
  const suffix = number.replace(/[0-9]/g, "");

  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      animate(0, numValue, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo: snappy & cinematic
        onUpdate: (latest) => {
          if (numberRef.current) {
            numberRef.current.textContent = `${Math.round(latest)}${suffix}`;
          }
        },
      });
    }
  }, [isInView, numValue, suffix]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center p-6 text-center"
    >
      <span
        ref={numberRef}
        className={`text-5xl md:text-6xl font-black ${colorClass} tracking-tight tabular-nums`}
      >
        0{suffix}
      </span>
      <span className="mt-2 text-sm font-semibold text-textSecondary uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
