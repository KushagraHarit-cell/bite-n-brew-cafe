"use client";

import { motion } from "framer-motion";
import { Star, Users, MessageSquare, Leaf } from "lucide-react";
import { TRUST_STATS } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const icons = {
  reviews: MessageSquare,
  rating: Star,
  customers: Users,
  fresh: Leaf,
};

export function Trust() {
  return (
    <section className="relative border-y border-white/5 bg-bg-secondary py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />

      <div className="container-custom relative px-5">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {TRUST_STATS.map((stat, i) => {
            const Icon = icons[stat.icon as keyof typeof icons];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full glass">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <p className="font-display text-3xl font-medium text-text-primary md:text-4xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={"decimals" in stat ? stat.decimals : 0}
                    text={"text" in stat ? stat.text : undefined}
                  />
                </p>
                <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
