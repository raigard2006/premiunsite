import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Heart, Target, Users } from "lucide-react";
import { FadeIn, Stagger, StaggerItem, ScaleIn } from "@/components/animations";
import { CTASection } from "@/components/sections/ExtraSections";

export const metadata: Metadata = {
  title: "About Us | Elite Dental & Wellness",
  description:
    "Learn about Elite Dental's 15-year history of transforming smiles in Toronto. Meet our leadership, discover our values, and see our clinic milestones.",
};

const milestones = [
  { year: "2008", title: "Founded", desc: "Dr. Mitchell opens Elite Dental with 3 chairs and a vision." },
  { year: "2011", title: "Expanded", desc: "Moved to 200 Bay Street. Added Dr. Okonkwo for implant services." },
  { year: "2014", title: "Award-Winning", desc: "Named Best Dental Clinic in Toronto by NOW Magazine." },
  { year: "2017", title: "Technology Leader", desc: "First Toronto clinic to offer CEREC same-day crowns." },
  { year: "2020", title: "Diamond Invisalign", desc: "Achieved Diamond Plus Invisalign Provider status." },
  { year: "2024", title: "10,000 Patients", desc: "Celebrated serving 10,000 patients with a community event." },
];

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    desc: "We treat every patient like family. Dental anxiety is real, and our entire team is trained to make every visit comfortable and stress-free.",
    color: "#e53935",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    desc: "We pursue mastery in everything we do. Every team member is required to complete 100+ hours of continuing education annually.",
    color: "#C9A84C",
  },
  {
    icon: Target,
    title: "Outcomes-Obsessed",
    desc: "We measure success by your results. Our 98% patient satisfaction score isn't a metric — it's a daily commitment.",
    color: "#1d6ae5",
  },
  {
    icon: Users,
    title: "Inclusive Community",
    desc: "Great dental care should be accessible. We offer flexible financing, direct insurance billing, and sliding-scale options for qualifying patients.",
    color: "#0A1628",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy-dark" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="section-container relative z-10">
          <FadeIn>
            <p className="section-eyebrow mb-4 justify-center text-center">
              <span className="w-8 h-px bg-gold inline-block" />
              Our Story
              <span className="w-8 h-px bg-gold inline-block" />
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white text-center mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              15 Years of<br />
              <span className="gold-text">Exceptional Care</span>
            </h1>
            <p className="text-white/60 text-xl text-center max-w-2xl mx-auto">
              From a 3-chair clinic to Toronto's most trusted dental practice. Here's the story behind the smiles.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80"
                    alt="Dr. Sarah Mitchell"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-card border border-slate-100">
                  <p className="text-navy font-bold text-xl mb-0.5" style={{ fontFamily: "var(--font-playfair)" }}>Dr. Sarah Mitchell</p>
                  <p className="text-gold text-sm font-medium">Founder & Lead Dentist</p>
                  <p className="text-slate-400 text-xs mt-1">20+ years transforming smiles</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <p className="section-eyebrow mb-3">
                <span className="w-8 h-px bg-gold inline-block" />
                The Founder&apos;s Story
              </p>
              <h2 className="section-title mb-6">
                Built on a Belief That Dentistry Should Feel Different
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  In 2008, Dr. Sarah Mitchell walked away from a prestigious group practice and opened Elite Dental with three chairs, a small team, and an unwavering belief: dental care could — and should — be a genuinely positive experience.
                </p>
                <p>
                  Having watched too many patients leave with anxiety, incomplete treatment plans, and unanswered questions, she set out to build something entirely different. A practice where clinical excellence was paired with genuine compassion, advanced technology with transparent communication.
                </p>
                <p>
                  Fifteen years later, Elite Dental has grown into a multi-specialist clinic serving thousands of patients annually — but the founding belief hasn't changed by a single word.
                </p>
              </div>
              <Link href="/team" className="btn-outline inline-flex mt-8">
                Meet the Full Team <ArrowRight size={16} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 lg:py-32 bg-navy">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="section-container">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Our <span className="gold-text">Mission & Values</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ScaleIn>
              <div className="glass rounded-3xl p-10 border border-gold/20 h-full">
                <div className="text-gold text-sm font-bold tracking-widest uppercase mb-4">Mission</div>
                <p className="text-white text-xl leading-relaxed" style={{ fontFamily: "var(--font-playfair)" }}>
                  &ldquo;To deliver world-class dental care that transforms not just smiles, but lives — with technology, compassion, and an uncompromising commitment to clinical excellence.&rdquo;
                </p>
              </div>
            </ScaleIn>
            <ScaleIn delay={0.1}>
              <div className="glass rounded-3xl p-10 border border-blue-electric/20 h-full">
                <div className="text-blue-electric text-sm font-bold tracking-widest uppercase mb-4">Vision</div>
                <p className="text-white text-xl leading-relaxed" style={{ fontFamily: "var(--font-playfair)" }}>
                  &ldquo;A Toronto where every person has access to exceptional oral health care — and where going to the dentist is something patients actually look forward to.&rdquo;
                </p>
              </div>
            </ScaleIn>
          </div>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <StaggerItem key={v.title}>
                  <div className="glass rounded-2xl p-6 border border-white/10 h-full hover:border-white/20 transition-colors group">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ background: `${v.color}20`, border: `1px solid ${v.color}30` }}
                    >
                      <Icon size={20} style={{ color: v.color }} />
                    </div>
                    <h3 className="text-white font-bold mb-2">{v.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="section-container">
          <FadeIn className="text-center mb-16">
            <p className="section-eyebrow mb-3 justify-center">
              <span className="w-8 h-px bg-gold inline-block" />
              Our Journey
              <span className="w-8 h-px bg-gold inline-block" />
            </p>
            <h2 className="section-title">15 Years of Milestones</h2>
          </FadeIn>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent hidden md:block" />

            <div className="space-y-8 md:space-y-12">
              {milestones.map((m, i) => (
                <FadeIn key={m.year} delay={i * 0.1}>
                  <div className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 text-center md:text-${i % 2 === 0 ? "right" : "left"}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 hover:border-gold/20 hover:shadow-card-hover transition-all duration-300">
                        <div className="text-gold font-bold text-2xl mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{m.year}</div>
                        <h3 className="text-navy font-bold text-lg mb-2">{m.title}</h3>
                        <p className="text-slate-500 text-sm">{m.desc}</p>
                      </div>
                    </div>
                    {/* Center dot */}
                    <div className="w-4 h-4 rounded-full bg-gold shadow-gold shrink-0 relative z-10 hidden md:block">
                      <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-30" />
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
