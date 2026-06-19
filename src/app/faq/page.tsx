"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { faqs } from "@/data";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";
import { CTASection } from "@/components/sections/ExtraSections";
import type { Metadata } from "next";

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...faqs.map((f) => f.category)];

  const filtered = faqs
    .filter((cat) => activeCategory === "All" || cat.category === activeCategory)
    .map((cat) => ({
      ...cat,
      questions: cat.questions.filter(
        (q) =>
          !search ||
          q.q.toLowerCase().includes(search.toLowerCase()) ||
          q.a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.questions.length > 0);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy-dark" />
        <div className="section-container relative z-10 text-center">
          <FadeIn>
            <p className="section-eyebrow mb-4 justify-center">
              <span className="w-8 h-px bg-gold inline-block" />
              Got Questions?
              <span className="w-8 h-px bg-gold inline-block" />
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              We Have<br /><span className="gold-text">Answers</span>
            </h1>
            <p className="text-white/60 text-xl max-w-xl mx-auto mb-10">
              Everything you need to know about our services, team, pricing, and process.
            </p>
            {/* Search */}
            <div className="max-w-lg mx-auto relative">
              <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions..."
                className="w-full bg-white/10 border border-white/20 rounded-full pl-12 pr-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-gold/60 transition-colors"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="section-container max-w-4xl">
          {/* Category tabs */}
          <FadeIn className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-navy text-white"
                    : "bg-white text-navy border border-slate-200 hover:border-navy/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </FadeIn>

          {filtered.length === 0 ? (
            <FadeIn>
              <div className="text-center py-20">
                <p className="text-slate-400 text-lg mb-4">No questions found for &ldquo;{search}&rdquo;</p>
                <button onClick={() => setSearch("")} className="btn-outline inline-flex">
                  Clear Search
                </button>
              </div>
            </FadeIn>
          ) : (
            <div className="space-y-12">
              {filtered.map((category) => (
                <FadeIn key={category.category}>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="section-eyebrow">{category.category}</span>
                      <span className="text-slate-300 text-sm">({category.questions.length})</span>
                    </div>
                    <div className="space-y-3">
                      {category.questions.map((item, i) => {
                        const id = `${category.category}-${i}`;
                        const isOpen = openId === id;
                        return (
                          <div
                            key={id}
                            className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                              isOpen
                                ? "border-gold/30 shadow-card"
                                : "border-slate-100 hover:border-slate-200"
                            } bg-white`}
                          >
                            <button
                              onClick={() => setOpenId(isOpen ? null : id)}
                              className="w-full flex items-center justify-between p-6 text-left group"
                            >
                              <span className="font-semibold text-navy pr-6 text-sm lg:text-base leading-relaxed">
                                {item.q}
                              </span>
                              <motion.div
                                animate={{ rotate: isOpen ? 45 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center shrink-0 text-navy text-xl font-light group-hover:bg-gold/10 transition-colors"
                              >
                                +
                              </motion.div>
                            </button>
                            <motion.div
                              initial={false}
                              animate={{ height: isOpen ? "auto" : 0 }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6">
                                <div className="h-px bg-slate-100 mb-5" />
                                <p className="text-slate-600 leading-relaxed">{item.a}</p>
                              </div>
                            </motion.div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}

          {/* Still have questions */}
          <FadeIn delay={0.3} className="mt-16">
            <div className="bg-navy rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-navy to-charcoal" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
              <div className="relative z-10 flex-1 text-center md:text-left">
                <h3 className="text-white font-bold text-2xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  Still Have Questions?
                </h3>
                <p className="text-white/60">
                  Our patient coordinators are available 7 days a week to answer any question you have.
                </p>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-3 shrink-0">
                <a href="tel:+14165550123" className="btn-secondary text-sm px-6 py-3 whitespace-nowrap">
                  Call Us Now
                </a>
                <Link href="/contact" className="btn-primary text-sm px-6 py-3 whitespace-nowrap">
                  Send a Message <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
