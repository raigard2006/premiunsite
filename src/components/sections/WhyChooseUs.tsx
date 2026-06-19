"use client";

import { motion } from "framer-motion";
import { CheckCircle, Microscope, Clock, Heart, Shield, Users } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";

const reasons = [
  {
    icon: Microscope,
    title: "Cutting-Edge Technology",
    description: "CEREC same-day crowns, 3D cone beam CT imaging, digital smile design, guided implant surgery — we invest in technology so your outcomes are better.",
    color: "#1d6ae5",
  },
  {
    icon: Heart,
    title: "Anxiety-Free Experience",
    description: "Our comfort-first approach includes sedation options, noise-cancelling headphones, warm blankets, and a team trained in managing dental anxiety.",
    color: "#e53935",
  },
  {
    icon: Shield,
    title: "Guaranteed Results",
    description: "We stand behind every treatment. If you're not completely satisfied with the results within our guarantee period, we'll make it right at no cost.",
    color: "#C9A84C",
  },
  {
    icon: Users,
    title: "Fellowship-Trained Specialists",
    description: "Every specialist on our team holds advanced fellowship training. You're not seeing a general practitioner doing cosmetic work — you're seeing experts.",
    color: "#0A1628",
  },
  {
    icon: Clock,
    title: "Flexible Hours & Same-Day Access",
    description: "Early mornings, evenings, and Saturdays. Emergency appointments available same-day. We work around your schedule, not the other way around.",
    color: "#1d6ae5",
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description: "No surprises. Every treatment plan includes itemized pricing presented upfront. We also offer flexible financing so cost never prevents great care.",
    color: "#2e7d32",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -top-px left-0 w-80 h-80 bg-blue-electric/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Visual */}
          <FadeIn direction="right">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-navy-lg aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80"
                  alt="Advanced dental technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>

              {/* Floating stat card */}
              <motion.div
                className="absolute -bottom-8 -right-8 glass-dark rounded-2xl p-5 border border-white/15 shadow-glass-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  <span className="gold-text">98.3%</span>
                </div>
                <div className="text-white/70 text-sm">Implant Success Rate</div>
                <div className="text-white/40 text-xs mt-1">3,000+ implants placed</div>
              </motion.div>

              {/* Award badge */}
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold-lg"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="text-navy text-xs font-bold leading-tight">TOP</div>
                  <div className="text-navy text-lg font-bold leading-none">#1</div>
                  <div className="text-navy text-xs font-bold leading-tight">Toronto</div>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Right: Content */}
          <div>
            <FadeIn>
              <p className="section-eyebrow mb-3">
                <span className="w-8 h-px bg-gold inline-block" />
                Why Elite?
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
                Not Just a Dentist.{" "}
                <span className="gold-text">Your Partner</span>{" "}
                in Oral Health.
              </h2>
              <p className="text-white/60 leading-relaxed mb-10">
                We built Elite Dental around a simple belief: exceptional dental care should feel exceptional from the first call to the final result. Here&apos;s what that means in practice.
              </p>
            </FadeIn>

            <Stagger className="space-y-5">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <StaggerItem key={reason.title}>
                    <motion.div
                      className="group flex gap-4 p-4 rounded-xl border border-white/5 hover:border-white/15 hover:bg-white/5 transition-all duration-300 cursor-default"
                      whileHover={{ x: 4 }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                        style={{ background: `${reason.color}20`, border: `1px solid ${reason.color}30` }}
                      >
                        <Icon size={18} style={{ color: reason.color }} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{reason.title}</h3>
                        <p className="text-white/55 text-sm leading-relaxed">{reason.description}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
