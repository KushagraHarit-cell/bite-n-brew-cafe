"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from "@/lib/data";
import { cn } from "@/lib/utils";

const heightMap = {
  short: "h-48 md:h-56",
  medium: "h-56 md:h-72",
  tall: "h-72 md:h-96",
};

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightbox, setLightbox] = useState<(typeof GALLERY_ITEMS)[0] | null>(
    null
  );

  const filtered =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding relative bg-bg-secondary">
      <div className="container-custom px-5">
        <SectionHeading
          label="Gallery"
          title="A Feast for the Eyes"
          subtitle="Explore our culinary creations, cozy ambiance, and memorable moments."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-medium transition-all md:text-sm",
                activeCategory === cat
                  ? "bg-gold text-bg-primary"
                  : "glass text-text-secondary hover:text-text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {filtered.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
              onClick={() => setLightbox(item)}
              className={`group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl ${heightMap[item.height]}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-bg-primary/0 transition-colors duration-300 group-hover:bg-bg-primary/40" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ZoomIn className="h-8 w-8 text-white" />
              </div>
              <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                {item.category}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9996] flex items-center justify-center bg-bg-primary/95 p-4 backdrop-blur-xl"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full glass"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.image}
                alt={lightbox.alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="font-display text-xl text-white">{lightbox.alt}</p>
                <p className="text-sm text-text-secondary">{lightbox.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
