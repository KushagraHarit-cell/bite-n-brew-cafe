"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PremiumLoader } from "@/components/loader/PremiumLoader";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ScrollProgress, CursorGlow } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
    setShowContent(true);
  }, []);

  return (
    <>
      {loading && <PremiumLoader onComplete={handleLoadComplete} />}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <SmoothScroll>
              <ScrollProgress />
              <CursorGlow />
              <div className="noise-overlay" aria-hidden />
              <Navbar />
              <main>{children}</main>
              <Footer />
            </SmoothScroll>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
