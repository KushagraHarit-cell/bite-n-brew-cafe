"use client";

import { motion } from "framer-motion";
import {
  Wheat,
  Coffee,
  Leaf,
  Truck,
  Heart,
  Gem,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_US_FEATURES } from "@/lib/data";

const iconMap = {
  fermentation: Wheat,
  coffee: Coffee,
  ingredients: Leaf,
  delivery: Truck,
  family: Heart,
  luxury: Gem,
};

export function WhyUs() {
  return (
    <section className="section-padding relative bg-bg-secondary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_70%)]" />

      <div className="container-custom relative px-5">
        <SectionHeading
          label="Why Choose Us"
          title="Why Customers Love Us"
          subtitle="Every detail is designed to deliver an exceptional dining experience."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US_FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group glass-light rounded-2xl p-6 transition-all duration-300 hover:border-gold/20 hover:shadow-lg hover:shadow-gold/5 md:p-8"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 transition-colors group-hover:bg-gold/20"
                >
                  <Icon className="h-6 w-6 text-gold" />
                </motion.div>
                <h3 className="font-display text-xl text-text-primary">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
