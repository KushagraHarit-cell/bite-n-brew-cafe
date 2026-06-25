"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { POPULAR_DISHES } from "@/lib/data";

const bentoLayout = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

function BentoItem({
  item,
  layoutClass,
  index,
}: {
  item: (typeof POPULAR_DISHES)[0];
  layoutClass: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl luxury-shadow ${layoutClass}`}
    >
      <div className="relative h-full min-h-[200px] md:min-h-0">
        <motion.div style={{ y }} className="absolute inset-0 h-[120%] -top-[10%]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold">
            {item.category}
          </span>
          <h3 className="mt-1 font-display text-xl text-text-primary md:text-2xl">
            {item.title}
          </h3>
          <p className="mt-1 text-sm font-semibold text-gold">{item.price}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function PopularDishes() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom px-5">
        <SectionHeading
          label="Fan Favorites"
          title="Popular Dishes"
          subtitle="The dishes our customers can't stop talking about."
        />

        <div className="grid auto-rows-[200px] gap-4 md:grid-cols-4 md:auto-rows-[180px]">
          {POPULAR_DISHES.map((item, i) => (
            <BentoItem
              key={item.id}
              item={item}
              layoutClass={bentoLayout[i] ?? ""}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
