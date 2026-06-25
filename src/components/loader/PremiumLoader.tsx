"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PremiumLoaderProps = {
  onComplete: () => void;
};

export function PremiumLoader({ onComplete }: PremiumLoaderProps) {
  const [phase, setPhase] = useState<"logo" | "text" | "exit">("logo");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("text"), 800);
    const t2 = setTimeout(() => setPhase("exit"), 2200);
    const t3 = setTimeout(() => setVisible(false), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-bg-primary"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-8"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-bg-card">
              <span className="font-display text-3xl font-bold text-gold">B</span>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 rounded-full border border-dashed border-gold/20"
            />
          </motion.div>

          <AnimatePresence>
            {phase === "text" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h1 className="font-display text-4xl font-medium tracking-wide text-text-primary md:text-5xl">
                  Bite N Brew
                </h1>
                <p className="mt-2 text-sm tracking-[0.3em] text-text-secondary uppercase">
                  Cafe
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase === "text" || phase === "exit" ? 1 : 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-16 h-px w-32 origin-left bg-gradient-to-r from-gold to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
