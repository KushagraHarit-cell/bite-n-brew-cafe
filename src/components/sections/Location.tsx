"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SITE } from "@/lib/constants";

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address.full)}`;

export function Location() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-gold/5 blur-[100px]" />

      <div className="container-custom px-5">
        <SectionHeading
          label="Visit Us"
          title="Find Your Way to Flavor"
          subtitle="Located in the heart of Shahdara, we're ready to welcome you."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="glass-light rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-2xl text-text-primary">{SITE.name}</h3>
              <p className="mt-1 text-sm text-gold">{SITE.hindiName}</p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <MapPin className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Address</p>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      {SITE.address.street}
                      <br />
                      {SITE.address.area}
                      <br />
                      {SITE.address.city} {SITE.address.postalCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <Phone className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Phone</p>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="mt-1 text-sm text-text-secondary transition-colors hover:text-gold"
                    >
                      {SITE.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <Clock className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Hours</p>
                    <p className="mt-1 text-sm text-text-secondary">{SITE.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton href={directionsUrl} variant="primary">
                  <span className="flex items-center gap-2">
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </span>
                </MagneticButton>
                <MagneticButton href={`tel:${SITE.phone}`} variant="secondary">
                  Call Now
                </MagneticButton>
                <MagneticButton href={`tel:${SITE.phone}`} variant="ghost">
                  Order Online
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="luxury-shadow h-[400px] overflow-hidden rounded-2xl md:h-[500px]">
              <iframe
                title="Bite N Brew Cafe Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.address.full)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="h-full w-full border-0 grayscale-[30%] invert-[90%] contrast-[90%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
