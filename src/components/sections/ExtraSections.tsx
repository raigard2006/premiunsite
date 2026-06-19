"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";
import { team, processSteps, faqs } from "@/data";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";
import { useState } from "react";

// ─── Team Section ────────────────────────────────────────────────────────────
export function TeamSection() {
  const featured = team.filter((m) => m.featured);
  return (
    <section className="relative py-24 lg:py-32 bg-warm-white overflow-hidden">
      <div className="section-container">
        <FadeIn className="text-center mb-16">
          <p className="section-eyebrow mb-3">
            <span className="w-8 h-px bg-gold inline-block" />
            The Experts
            <span className="w-8 h-px bg-gold inline-block" />
          </p>
          <h2 className="section-title mb-4">Meet Our Specialists</h2>
          <p className="section-subtitle mx-auto">
            Fellowship-trained clinicians who have dedicated their careers to mastering their craft.
          </p>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((member) => (
            <StaggerItem key={member.id}>
              <motion.div
                className="group premium-card overflow-hidden"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-70" />
                  {/* Social overlay */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {member.social.instagram && (
                      <a href={member.social.instagram} className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-colors">
                        <Instagram size={14} />
                      </a>
                    )}
                    <a href={member.social.linkedin} className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-colors">
                      <Linkedin size={14} />
                    </a>
                  </div>
                  {/* Experience badge */}
                  <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-full border border-white/20 text-white text-xs font-medium">
                    {member.experience}
                  </div>
                </div>
                {/* Info */}
                <div className="p-6">
                  <div className="text-gold text-xs font-semibold tracking-widest uppercase mb-1">{member.specialization}</div>
                  <h3 className="text-navy font-bold text-lg mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{member.name}</h3>
                  <p className="text-slate-500 text-sm mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{member.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {member.certifications.slice(0, 2).map((cert) => (
                      <span key={cert} className="bg-navy/5 text-navy text-xs px-2.5 py-1 rounded-full font-medium">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.3} className="text-center mt-12">
          <Link href="/team" className="btn-outline inline-flex">
            Meet the Full Team <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Process Timeline ─────────────────────────────────────────────────────────
export function ProcessSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="section-container relative z-10">
        <FadeIn className="text-center mb-16">
          <p className="section-eyebrow mb-3">
            <span className="w-8 h-px bg-gold inline-block" />
            How It Works
            <span className="w-8 h-px bg-gold inline-block" />
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Your Journey to a{" "}
            <span className="gold-text">Perfect Smile</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A simple, transparent process from first contact to final result — with you in control every step of the way.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent hidden lg:block" />

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <StaggerItem key={step.step}>
                <div className="relative flex flex-col items-center text-center group">
                  {/* Step number bubble */}
                  <motion.div
                    className="relative w-20 h-20 rounded-full border-2 border-gold/30 flex items-center justify-center mb-5 bg-navy group-hover:border-gold transition-colors duration-300 z-10"
                    whileHover={{ scale: 1.08 }}
                  >
                    <span className="text-gold font-bold text-2xl" style={{ fontFamily: "var(--font-playfair)" }}>{step.step}</span>
                    {/* Glow on hover */}
                    <div className="absolute inset-0 rounded-full bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>

                  <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                  <div className="mt-3 text-gold/70 text-xs font-medium">{step.duration}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <FadeIn delay={0.4} className="text-center mt-14">
          <Link href="/book" className="btn-primary inline-flex">
            <span>Start My Journey</span>
            <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── FAQ Section ──────────────────────────────────────────────────────────────
export function FAQSection() {
  const [open, setOpen] = useState<string | null>(null);
  const allQuestions = faqs.flatMap((cat) => cat.questions).slice(0, 6);

  return (
    <section className="relative py-24 lg:py-32 bg-warm-white overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <p className="section-eyebrow mb-3">
              <span className="w-8 h-px bg-gold inline-block" />
              Got Questions?
            </p>
            <h2 className="section-title mb-6">
              Frequently Asked<br />
              <span className="gold-text">Questions</span>
            </h2>
            <p className="section-subtitle mb-8">
              Everything you need to know before your first visit. Still have questions? Our team is always here to help.
            </p>
            <Link href="/faq" className="btn-outline inline-flex">
              View All FAQs <ArrowRight size={16} />
            </Link>
          </FadeIn>

          <FadeIn delay={0.15} className="space-y-3">
            {allQuestions.map((item, i) => {
              const id = `faq-${i}`;
              const isOpen = open === id;
              return (
                <motion.div
                  key={id}
                  className={`rounded-2xl border overflow-hidden transition-colors duration-200 ${
                    isOpen ? "border-gold/30 bg-white shadow-card" : "border-slate-100 bg-white hover:border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : id)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className={`font-semibold text-sm pr-4 ${isOpen ? "text-navy" : "text-navy/80"}`}>
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-7 h-7 rounded-full bg-navy/5 flex items-center justify-center shrink-0 text-navy text-lg font-light"
                    >
                      +
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                      {item.a}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA Section ────────────────────────────────────────────────────────
export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy-dark" />
      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-electric/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/8 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10 text-center">
        <FadeIn>
          <p className="section-eyebrow mb-5 justify-center">
            <span className="w-8 h-px bg-gold inline-block" />
            Limited Availability
            <span className="w-8 h-px bg-gold inline-block" />
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            Ready to Transform<br />
            <span className="gold-text">Your Smile?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
            Book your free comprehensive consultation today. Limited appointments available each week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link href="/book" className="btn-primary group text-base px-10 py-5">
              <span>Book Free Consultation</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+14165550123" className="btn-secondary text-base px-10 py-5">
              Call (416) 555-0123
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/50">
            {[
              "✓ Free consultation ($200 value)",
              "✓ No obligation",
              "✓ Same-week appointments",
              "✓ Financing available",
            ].map((item) => (
              <span key={item} className="hover:text-white/80 transition-colors">{item}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
