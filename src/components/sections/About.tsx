"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STORY =
  "The art of fermentation has been a cornerstone of bread-making for centuries. At Bite N Brew Cafe, every pizza begins with carefully fermented dough crafted to perfection. Combined with premium ingredients, artisan coffee and exceptional service, we create experiences that bring people together.";

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-gold/5 blur-[100px]" />

      <div className="container-custom px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl luxury-shadow">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80"
                alt="Bite N Brew Cafe interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-2xl border border-gold/20 bg-bg-card p-4 md:block">
              <p className="font-display text-3xl font-medium text-gold">4.7</p>
              <p className="mt-1 text-xs text-text-secondary">Google Rating</p>
            </div>
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full border border-dashed border-gold/20" />
          </motion.div>

          <div>
            <SectionHeading
              label="Our Story"
              title="Crafted with Passion, Served with Love"
              align="left"
              className="!mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base leading-[1.8] text-text-secondary md:text-lg"
            >
              {STORY}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 grid grid-cols-2 gap-6"
            >
              {[
                { num: "10+", label: "Years of Craft" },
                { num: "50+", label: "Menu Items" },
              ].map((item) => (
                <div key={item.label} className="glass-light rounded-xl p-5">
                  <p className="font-display text-2xl text-gold">{item.num}</p>
                  <p className="mt-1 text-sm text-text-secondary">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
