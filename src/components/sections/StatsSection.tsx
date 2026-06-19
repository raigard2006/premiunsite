"use client";

import { motion } from "framer-motion";
import { stats } from "@/data";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";

export default function StatsSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-navy overflow-hidden">
      {/* Gradient line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-charcoal to-navy opacity-60" />

      <div className="section-container relative z-10">
        <FadeIn className="text-center mb-14">
          <p className="section-eyebrow mb-3">
            <span className="w-8 h-px bg-gold inline-block" />
            Our Track Record
            <span className="w-8 h-px bg-gold inline-block" />
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            Numbers That Speak for Themselves
          </h2>
        </FadeIn>

        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <StaggerItem key={stat.label}>
              <motion.div
                className="relative group"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="relative glass rounded-2xl p-8 text-center border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-gold/30">
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)" }}
                  />

                  {/* Number */}
                  <div
                    className="text-4xl lg:text-5xl font-bold mb-2 relative"
                    style={{
                      background: "linear-gradient(135deg, #C9A84C, #E8C96B)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontFamily: "var(--font-playfair)",
                    }}
                  >
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-white font-semibold text-base mb-1">{stat.label}</div>

                  {/* Description */}
                  <div className="text-white/40 text-xs">{stat.description}</div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Certification logos */}
        <FadeIn delay={0.3} className="mt-16 pt-12 border-t border-white/10">
          <p className="text-center text-white/30 text-xs tracking-widest uppercase mb-8">
            Trusted & Certified By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {[
              "Royal College of Dentists",
              "Canadian Dental Association",
              "Diamond Plus Invisalign",
              "Straumann Certified",
              "CEREC Certified",
            ].map((cert) => (
              <div key={cert} className="text-white/25 text-sm font-semibold tracking-wide hover:text-white/50 transition-colors cursor-default">
                {cert}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
