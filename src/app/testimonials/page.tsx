import type { Metadata } from "next";
import Link from "next/link";
import { Star, CheckCircle, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/data";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";
import { CTASection } from "@/components/sections/ExtraSections";

export const metadata: Metadata = {
  title: "Patient Reviews & Testimonials | Elite Dental & Wellness",
  description:
    "Read 847 verified patient reviews for Elite Dental Toronto. 4.9 stars on Google. Real stories, real results from real patients.",
};

const stats = [
  { value: "4.9", label: "Average Google Rating", sub: "Out of 5.0" },
  { value: "847", label: "Verified Reviews", sub: "On Google Maps" },
  { value: "98%", label: "Would Recommend", sub: "To friends & family" },
  { value: "10k+", label: "Happy Patients", sub: "Since 2008" },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy-dark" />
        <div className="section-container relative z-10 text-center">
          <FadeIn>
            <p className="section-eyebrow mb-4 justify-center">
              <span className="w-8 h-px bg-gold inline-block" />
              Real Stories
              <span className="w-8 h-px bg-gold inline-block" />
            </p>
            <h1
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              847 Reasons to<br />
              <span className="gold-text">Choose Elite</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto mb-10">
              Don't take our word for it. Read what our patients are saying — every review is verified directly through Google.
            </p>
            {/* Stars */}
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={28} className="text-gold fill-gold" />
                ))}
              </div>
              <span className="text-white text-2xl font-bold ml-2">4.9</span>
              <span className="text-white/50 text-sm">/ 5.0 · 847 reviews</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats row */}
      <section className="py-12 bg-warm-white border-b border-slate-100">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08}>
                <div className="text-center">
                  <div
                    className="text-4xl font-bold mb-1 gold-text"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-navy font-semibold text-sm">{s.label}</div>
                  <div className="text-slate-400 text-xs">{s.sub}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured testimonial */}
      <section className="py-24 bg-warm-white">
        <div className="section-container">
          <FadeIn>
            <div className="relative bg-navy rounded-3xl overflow-hidden p-10 lg:p-16 mb-16">
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy-dark" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
              <div className="absolute top-8 right-12 text-gold/10">
                <Quote size={120} />
              </div>
              <div className="relative z-10 max-w-3xl">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={22} className="text-gold fill-gold" />
                  ))}
                </div>
                <blockquote
                  className="text-white text-2xl lg:text-3xl font-medium leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  &ldquo;{testimonials[0].review}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-gold/30"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-white font-bold">{testimonials[0].name}</p>
                      <CheckCircle size={16} className="text-blue-400" />
                    </div>
                    <p className="text-white/60 text-sm">
                      {testimonials[0].role} · {testimonials[0].location}
                    </p>
                  </div>
                  <div className="ml-auto hidden sm:block">
                    <span className="glass px-4 py-2 rounded-full border border-gold/30 text-gold text-sm font-medium">
                      {testimonials[0].service}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* All reviews grid */}
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(1).map((t) => (
              <StaggerItem key={t.id}>
                <div className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover border border-slate-100 hover:border-gold/20 transition-all duration-300 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-gold fill-gold" />
                      ))}
                    </div>
                    {/* Google G */}
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>

                  {/* Review text */}
                  <blockquote className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">
                    &ldquo;{t.review}&rdquo;
                  </blockquote>

                  {/* Service tag */}
                  <div className="mb-4">
                    <span className="bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full">
                      {t.service}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="font-semibold text-navy text-sm">{t.name}</p>
                        {t.verified && (
                          <CheckCircle size={13} className="text-blue-400" />
                        )}
                      </div>
                      <p className="text-slate-400 text-xs">{t.role} · {t.location}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Leave a review CTA */}
          <FadeIn delay={0.3} className="text-center mt-14">
            <p className="text-slate-500 mb-4">Had a great experience? We&apos;d love to hear from you.</p>
            <a
              href="https://g.page/eliteclinic/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex"
            >
              Leave a Google Review <ArrowRight size={16} />
            </a>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
