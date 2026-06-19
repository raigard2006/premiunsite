"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { coverageAreas } from "@/data";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";

export default function CoverageSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-warm-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-warm-white via-blue-50/30 to-warm-white pointer-events-none" />
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <FadeIn>
            <p className="section-eyebrow mb-3">
              <span className="w-8 h-px bg-gold inline-block" />
              Serving Greater Toronto
            </p>
            <h2 className="section-title">
              Proudly Serving<br />
              <span className="gold-text">Your Community</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="section-subtitle lg:text-right max-w-sm">
              Conveniently located in downtown Toronto, easily accessible from across the GTA.
            </p>
          </FadeIn>
        </div>

        <Stagger className="flex flex-wrap gap-3">
          {coverageAreas.map((area) => (
            <StaggerItem key={area}>
              <motion.div
                className="flex items-center gap-2 bg-white border border-slate-100 rounded-full px-5 py-2.5 shadow-sm hover:shadow-md hover:border-gold/30 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                whileHover={{ scale: 1.02 }}
              >
                <MapPin size={14} className="text-gold" />
                <span className="text-navy text-sm font-medium">{area}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.4} className="mt-10">
          <Link href="/contact" className="inline-flex items-center gap-2 text-blue-electric font-semibold text-sm hover:gap-3 transition-all">
            Get Directions to Our Clinic <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
