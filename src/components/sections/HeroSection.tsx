"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Calendar, Star, Shield, Award, ChevronDown, ArrowRight, Check } from "lucide-react";
import { FloatingElement } from "@/components/animations";
import { SITE_CONFIG } from "@/lib/utils";

const trustBadges = [
  { icon: Shield, text: "Certified Specialists" },
  { icon: Star, text: "4.9 Google Rating" },
  { icon: Award, text: "Award-Winning Care" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-navy"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0D1E38] to-[#07101E]" />

        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(29,106,229,0.12) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(29,106,229,0.05) 0%, transparent 60%)" }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>

      {/* Floating UI Elements */}
      <FloatingElement
        className="absolute top-32 right-12 xl:right-32 hidden lg:block"
        amplitude={12}
        duration={7}
      >
        <div className="glass rounded-2xl p-4 border border-white/10 shadow-glass-lg w-56">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
              <Star size={18} className="text-gold fill-gold" />
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-none">4.9 / 5.0</div>
              <div className="text-white/50 text-xs">847 Google Reviews</div>
            </div>
          </div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </FloatingElement>

      <FloatingElement
        className="absolute bottom-40 right-16 xl:right-40 hidden xl:block"
        amplitude={10}
        duration={9}
      >
        <div className="glass rounded-2xl p-4 border border-white/10 shadow-glass w-52">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/70 text-xs">Next available</span>
          </div>
          <p className="text-white font-semibold text-sm">Today at 2:30 PM</p>
          <p className="text-white/50 text-xs mt-1">Dr. Sarah Mitchell</p>
          <button className="mt-3 w-full py-2 rounded-xl bg-gold text-navy text-xs font-semibold hover:bg-gold-light transition-colors">
            Book Slot
          </button>
        </div>
      </FloatingElement>

      <FloatingElement
        className="absolute top-1/2 -translate-y-1/2 left-8 xl:left-16 hidden xl:block"
        amplitude={8}
        duration={8}
      >
        <div className="glass rounded-2xl p-4 border border-white/10 shadow-glass w-48">
          <div className="flex items-center gap-2 mb-1">
            <Check size={14} className="text-green-400" />
            <span className="text-white/70 text-xs">Just booked</span>
          </div>
          <p className="text-white text-sm font-medium">Smile Makeover</p>
          <p className="text-white/50 text-xs">Toronto, ON · 2 min ago</p>
        </div>
      </FloatingElement>

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 section-container w-full pt-32 pb-24 lg:pt-40 lg:pb-32"
      >
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-gold/20">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                Toronto&apos;s #1 Dental Experience
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Your Dream{" "}
            <span className="relative inline-block">
              <span className="gold-text">Smile</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gold-gradient"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              />
            </span>
            <br />
            Starts Here.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-xl mb-10"
          >
            Experience award-winning dental care from fellowship-trained specialists.
            Over 10,000 transformed smiles. Guaranteed results or your money back.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <Link href="/book" className="btn-primary group">
              <Calendar size={18} />
              Book Free Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-secondary group">
              <Phone size={18} />
              {SITE_CONFIG.phone}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-6"
          >
            {trustBadges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/60 text-sm">
                <div className="w-7 h-7 rounded-lg bg-gold/15 flex items-center justify-center">
                  <Icon size={14} className="text-gold" />
                </div>
                {text}
              </div>
            ))}
            <div className="flex items-center gap-3 pl-6 border-l border-white/10">
              <div className="flex -space-x-2">
                {["women/44", "men/32", "women/68", "men/54"].map((id) => (
                  <img
                    key={id}
                    src={`https://randomuser.me/api/portraits/${id}.jpg`}
                    alt="Patient"
                    className="w-8 h-8 rounded-full border-2 border-navy object-cover"
                  />
                ))}
              </div>
              <span className="text-white/60 text-sm">
                <span className="text-white font-semibold">2,400+</span> appointments booked this month
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
        />
        <ChevronDown size={16} className="text-white/30" />
      </motion.div>
    </section>
  );
}
