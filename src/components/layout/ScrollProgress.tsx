"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 z-[9999] h-[2px] bg-gradient-to-r from-gold-dark via-gold to-gold-light"
    />
  );
}

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        className="pointer-events-none fixed z-[9998] h-3 w-3 rounded-full bg-gold mix-blend-difference"
      />
      <motion.div
        animate={{
          x: position.x - 150,
          y: position.y - 150,
          opacity: visible ? 0.15 : 0,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
        className="pointer-events-none fixed z-[9997] h-[300px] w-[300px] rounded-full bg-gold blur-[80px]"
      />
    </>
  );
}
