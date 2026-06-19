import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Zap, Heart, Sun, AlertCircle, Activity, type LucideIcon } from "lucide-react";
import { services } from "@/data";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";
import { CTASection } from "@/components/sections/ExtraSections";

export const metadata: Metadata = {
  title: "Dental Services | Elite Dental & Wellness Toronto",
  description:
    "From cosmetic dentistry to dental implants, Invisalign, and emergency care — Elite Dental offers the full spectrum of dental services delivered by fellowship-trained specialists.",
};

const iconMap: Record<string, LucideIcon> = {
  Sparkles, Shield, Zap, Heart, Sun, AlertCircle, Activity,
  Crown: Shield, // fallback
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy-dark" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-40" />
        <div className="section-container relative z-10 text-center">
          <FadeIn>
            <p className="section-eyebrow mb-4 justify-center">
              <span className="w-8 h-px bg-gold inline-block" />
              What We Offer
              <span className="w-8 h-px bg-gold inline-block" />
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Every Service Your<br />
              <span className="gold-text">Smile Needs</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              From routine cleanings to full smile transformations — all delivered by fellowship-trained specialists with the latest technology.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="section-container">
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Shield;
              return (
                <StaggerItem key={service.id}>
                  <Link href={`/services/${service.slug}`} className="group block">
                    <div className="premium-card overflow-hidden h-full">
                      {/* Image */}
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ background: `${service.color}25`, border: `1px solid ${service.color}40` }}
                          >
                            <Icon size={18} style={{ color: service.color }} />
                          </div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="glass text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                            {service.price}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">{service.subtitle}</p>
                        <h2 className="text-navy font-bold text-xl mb-3 group-hover:text-blue-electric transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                          {service.title}
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>

                        {/* Benefits */}
                        <ul className="space-y-1.5 mb-5">
                          {service.benefits.slice(0, 3).map((b) => (
                            <li key={b} className="flex items-start gap-2 text-slate-600 text-sm">
                              <span className="w-4 h-4 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                                <svg className="w-2.5 h-2.5 text-gold fill-current" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </span>
                              {b}
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <span className="text-slate-400 text-xs">{service.duration}</span>
                          <span className="flex items-center gap-1.5 text-navy font-semibold text-sm group-hover:text-blue-electric transition-colors">
                            Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}
