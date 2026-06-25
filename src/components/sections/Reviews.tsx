"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { REVIEWS } from "@/lib/data";
import { SITE } from "@/lib/constants";

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <div className="glass-light mx-3 w-[320px] shrink-0 rounded-2xl p-6 md:w-[380px] md:p-8">
      <Quote className="mb-4 h-8 w-8 text-gold/40" />
      <div className="mb-4 flex gap-1">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-text-secondary md:text-base">
        &ldquo;{review.text}&rdquo;
      </p>
      <p className="mt-4 text-sm font-semibold text-text-primary">
        — {review.author}
      </p>
    </div>
  );
}

export function Reviews() {
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="section-padding relative overflow-hidden">
      <div className="container-custom px-5">
        <SectionHeading
          label="Testimonials"
          title="What Our Guests Say"
          subtitle={`Join ${SITE.reviews}+ happy customers who love Bite N Brew Cafe.`}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative -mx-5 overflow-hidden py-4"
        >
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-bg-primary to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-bg-primary to-transparent" />

          <div className="animate-marquee flex w-max">
            {doubled.map((review, i) => (
              <ReviewCard key={`${review.id}-${i}`} review={review} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full glass px-6 py-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-semibold text-text-primary">
              {SITE.reviews}+ Happy Reviews
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
