"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  text?: string;
  decimals?: number;
  duration?: number;
};

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  text,
  decimals = 0,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(text ?? "0");

  useEffect(() => {
    if (!isInView) return;

    if (text) {
      setDisplay(text);
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => {
        setDisplay(
          prefix +
            (decimals > 0 ? v.toFixed(decimals) : Math.floor(v).toString()) +
            suffix
        );
      },
    });

    return () => controls.stop();
  }, [isInView, value, suffix, prefix, text, decimals, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}
