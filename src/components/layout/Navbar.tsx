"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[9990] transition-all duration-500",
          scrolled
            ? "glass py-3 shadow-lg shadow-black/20"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-custom flex items-center justify-between px-5 md:px-8">
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-bg-card transition-colors group-hover:border-gold">
              <span className="font-display text-lg font-bold text-gold">B</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-lg font-medium text-text-primary">
                Bite N Brew
              </span>
              <span className="block text-[10px] tracking-[0.2em] text-text-secondary uppercase">
                Cafe
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-text-secondary transition-colors hover:text-text-primary after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton href={`tel:${SITE.phone}`} variant="primary">
              Order Now
            </MagneticButton>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full glass lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-text-primary" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9995] bg-bg-primary/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between p-5">
                <span className="font-display text-xl text-gold">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full glass"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col items-center justify-center gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-3xl text-text-primary transition-colors hover:text-gold"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="p-8 text-center">
                <MagneticButton
                  href={`tel:${SITE.phone}`}
                  variant="primary"
                  className="w-full"
                >
                  Order Now
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
