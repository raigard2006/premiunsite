"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { testimonials } from "@/data";
import { FadeIn } from "@/components/animations";

export default function TestimonialsSection() {
  const featured = testimonials.filter((t) => t.featured);
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? featured.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === featured.length - 1 ? 0 : i + 1));

  return (
    <section className="relative py-24 lg:py-32 bg-warm-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <FadeIn className="text-center mb-16">
          <p className="section-eyebrow mb-3">
            <span className="w-8 h-px bg-gold inline-block" />
            Real Stories
            <span className="w-8 h-px bg-gold inline-block" />
          </p>
          <h2 className="section-title mb-4">
            What Our Patients Say
          </h2>
          <p className="section-subtitle mx-auto">
            Don&apos;t take our word for it. Here&apos;s what 847 Google-verified patients have to say.
          </p>
        </FadeIn>

        {/* Main testimonial carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white rounded-3xl p-10 lg:p-14 shadow-card"
            >
              {/* Gold quote */}
              <div className="absolute top-8 right-10 text-gold/10">
                <Quote size={80} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(featured[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-navy text-xl lg:text-2xl font-medium leading-relaxed mb-8 relative z-10" style={{ fontFamily: "var(--font-playfair)" }}>
                &ldquo;{featured[activeIndex].review}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={featured[activeIndex].image}
                  alt={featured[activeIndex].name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-gold/20"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-navy">{featured[activeIndex].name}</p>
                    {featured[activeIndex].verified && (
                      <CheckCircle size={16} className="text-blue-500" />
                    )}
                  </div>
                  <p className="text-slate-500 text-sm">{featured[activeIndex].role} · {featured[activeIndex].location}</p>
                </div>
                <div className="ml-auto text-right hidden sm:block">
                  <div className="text-gold text-sm font-semibold">{featured[activeIndex].service}</div>
                  <div className="text-slate-400 text-xs">Verified Patient</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === activeIndex ? "w-8 h-2 bg-gold" : "w-2 h-2 bg-navy/20 hover:bg-navy/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Google review strip */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {testimonials.slice(3, 6).map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-navy text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.location}</p>
                  </div>
                  <div className="ml-auto">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#4285F4">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">&ldquo;{t.review}&rdquo;</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
