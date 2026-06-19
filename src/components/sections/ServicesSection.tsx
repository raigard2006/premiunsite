"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Zap, Heart, Sun, AlertCircle, type LucideIcon } from "lucide-react";
import { services } from "@/data";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";

const iconMap: Record<string, LucideIcon> = {
  Sparkles, Shield, Zap, Heart, Sun, AlertCircle,
};

export default function ServicesSection() {
  const featured = services.filter((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
    <section className="relative py-24 lg:py-32 bg-warm-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <FadeIn className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-eyebrow mb-3">
              <span className="w-8 h-px bg-gold inline-block" />
              What We Offer
            </p>
            <h2 className="section-title">
              World-Class Dental<br />
              <span className="gold-text">Services</span>
            </h2>
          </div>
          <p className="section-subtitle lg:text-right max-w-sm">
            From preventive care to complete smile transformations — every service delivered with clinical excellence.
          </p>
        </FadeIn>

        {/* Featured cards — large */}
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {featured.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <StaggerItem key={service.id}>
                <motion.div
                  className="group relative rounded-3xl overflow-hidden cursor-pointer h-[420px]"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Background image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-7 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ background: `${service.color}25`, border: `1px solid ${service.color}40` }}
                      >
                        <Icon size={20} style={{ color: service.color }} />
                      </div>
                      <div className="glass px-3 py-1.5 rounded-full border border-white/20 text-white/80 text-xs font-medium">
                        {service.price}
                      </div>
                    </div>

                    <div>
                      <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-2">{service.subtitle}</p>
                      <h3 className="text-white text-xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                        {service.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">{service.description}</p>

                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-gold font-semibold text-sm group/link"
                      >
                        Learn More
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Rest of services — smaller cards */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {rest.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <StaggerItem key={service.id}>
                <motion.div
                  className="group premium-card p-6 cursor-pointer h-full"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}
                  >
                    <Icon size={20} style={{ color: service.color }} />
                  </div>
                  <h3 className="text-navy font-bold text-lg mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold text-sm font-semibold">{service.price}</span>
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all"
                    >
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* View all link */}
        <FadeIn delay={0.3} className="text-center mt-12">
          <Link href="/services" className="btn-outline inline-flex">
            View All Services
            <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
