import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, User } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";
import { CTASection } from "@/components/sections/ExtraSections";

export const metadata: Metadata = {
  title: "Case Studies | Real Patient Transformations | Elite Dental",
  description:
    "Detailed case studies from Elite Dental patients — full treatment breakdowns, challenge, solution, process, and measurable results.",
};

const caseStudies = [
  {
    id: 1,
    title: "Complete Smile Restoration After 20 Years of Dental Neglect",
    patient: "Robert T., 54 · Financial Consultant",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
    category: "Full Mouth Restoration",
    duration: "8 months",
    treatments: ["Dental implants ×4", "Porcelain crowns ×6", "Gum disease therapy", "Teeth whitening"],
    challenge: "Robert came to us with severe dental anxiety, significant bone loss from untreated gum disease, four missing teeth, and several failing restorations. He had avoided the dentist for nearly 20 years and had no confidence in his smile.",
    solution: "Our multidisciplinary team developed a phased treatment plan that prioritized oral health stabilization before aesthetics. We began with laser periodontal therapy, then proceeded to strategic implant placement using guided surgery, and completed with all-ceramic crowns.",
    results: [
      { metric: "Missing teeth replaced", value: "4 of 4" },
      { metric: "Bone loss halted", value: "100%" },
      { metric: "Patient satisfaction", value: "10/10" },
      { metric: "Treatment time", value: "8 months" },
    ],
    quote: "I went from hiding my smile in every photo to getting compliments from strangers. Elite Dental gave me back confidence I didn't know I could have.",
    slug: "robert-full-mouth-restoration",
    featured: true,
  },
  {
    id: 2,
    title: "Teen's Severe Crowding Resolved in 16 Months with Invisalign",
    patient: "Sophia K., 19 · University Student",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
    category: "Invisalign",
    duration: "16 months",
    treatments: ["Invisalign Full ×38 aligners", "IPR (interproximal reduction)", "Retainers"],
    challenge: "Sophia presented with severe crowding on both arches, a crossbite, and midline discrepancy. Previous orthodontists had recommended extractions and traditional braces. She came to us for a second opinion.",
    solution: "Dr. Sharma developed an Invisalign treatment plan that used IPR to create space without extractions. Digital treatment planning allowed us to show Sophia the expected outcome before a single aligner was made.",
    results: [
      { metric: "Extractions avoided", value: "4 teeth" },
      { metric: "Crossbite corrected", value: "100%" },
      { metric: "Aligners used", value: "38" },
      { metric: "Total duration", value: "16 months" },
    ],
    quote: "I was told I absolutely needed teeth pulled. Dr. Sharma showed me how it could be done without that. The results speak for themselves.",
    slug: "sophia-invisalign-teen",
    featured: false,
  },
  {
    id: 3,
    title: "Emergency Implant & Crown in 48 Hours After Workplace Accident",
    patient: "Marcus D., 41 · Construction Manager",
    image: "https://images.unsplash.com/photo-1588776814546-1ffedbe65e8b?w=800&q=80",
    category: "Emergency / Implants",
    duration: "48 hours (immediate), 4 months (final)",
    treatments: ["Emergency extraction", "Bone graft", "Immediate implant placement", "Temporary crown", "Final porcelain crown"],
    challenge: "Marcus suffered a traumatic tooth avulsion on a Friday afternoon — his upper central incisor was completely knocked out at a job site. He called our emergency line and was in our chair within 90 minutes of the incident.",
    solution: "We performed emergency evaluation, determined the tooth was non-salvageable, extracted the root fragments, placed an immediate implant with a simultaneous bone graft, and fitted a same-day temporary crown. He returned to work Monday looking completely normal.",
    results: [
      { metric: "Time to temp crown", value: "Same day" },
      { metric: "Days off work", value: "0" },
      { metric: "Final crown placed", value: "4 months" },
      { metric: "Aesthetics matched", value: "Perfect" },
    ],
    quote: "I went in on a Friday afternoon with a missing front tooth and left with a temporary crown. By Monday no one at work knew anything happened.",
    slug: "marcus-emergency-implant",
    featured: false,
  },
];

export default function CaseStudiesPage() {
  const featured = caseStudies.find((c) => c.featured);
  const rest = caseStudies.filter((c) => !c.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy-dark" />
        <div className="section-container relative z-10 text-center">
          <FadeIn>
            <p className="section-eyebrow mb-4 justify-center">
              <span className="w-8 h-px bg-gold inline-block" />
              Proven Results
              <span className="w-8 h-px bg-gold inline-block" />
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Real Cases,<br /><span className="gold-text">Real Outcomes</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Detailed breakdowns of complex cases handled by our team — the challenges, our approach, and the measurable results achieved.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="section-container">
          {/* Featured case */}
          {featured && (
            <FadeIn className="mb-16">
              <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-card bg-white border border-slate-100">
                <div className="relative overflow-hidden min-h-[400px]">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover absolute inset-0" />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent lg:bg-gradient-to-t lg:from-navy/60 lg:to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-gold text-navy text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                      Featured Case
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                    <h2 className="text-white font-bold text-2xl" style={{ fontFamily: "var(--font-playfair)" }}>{featured.title}</h2>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-electric/10 text-blue-electric text-xs font-semibold px-3 py-1 rounded-full">{featured.category}</span>
                    <span className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5"><Clock size={11} /> {featured.duration}</span>
                  </div>
                  <h2 className="text-navy font-bold text-2xl mb-3 leading-tight hidden lg:block" style={{ fontFamily: "var(--font-playfair)" }}>
                    {featured.title}
                  </h2>
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-5">
                    <User size={14} /> {featured.patient}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{featured.challenge}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {featured.results.map((r) => (
                      <div key={r.metric} className="bg-navy/3 rounded-xl p-3 text-center">
                        <div className="text-gold font-bold text-xl" style={{ fontFamily: "var(--font-playfair)" }}>{r.value}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{r.metric}</div>
                      </div>
                    ))}
                  </div>
                  <blockquote className="border-l-2 border-gold pl-4 text-slate-600 text-sm italic mb-6">
                    &ldquo;{featured.quote}&rdquo;
                  </blockquote>
                  <Link href={`/case-studies/${featured.slug}`} className="btn-outline inline-flex text-sm">
                    Read Full Case Study <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Rest */}
          <Stagger className="grid md:grid-cols-2 gap-8">
            {rest.map((c) => (
              <StaggerItem key={c.id}>
                <div className="premium-card overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-video">
                    <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-navy text-xs font-semibold px-3 py-1 rounded-full">{c.category}</span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                      <User size={13} /> {c.patient}
                      <span className="mx-2">·</span>
                      <Clock size={13} /> {c.duration}
                    </div>
                    <h3 className="text-navy font-bold text-xl mb-3 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>{c.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{c.challenge}</p>
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {c.results.slice(0, 2).map((r) => (
                        <div key={r.metric} className="bg-slate-50 rounded-xl p-3 text-center">
                          <div className="text-gold font-bold text-lg">{r.value}</div>
                          <div className="text-slate-400 text-xs">{r.metric}</div>
                        </div>
                      ))}
                    </div>
                    <Link href={`/case-studies/${c.slug}`} className="text-navy font-semibold text-sm flex items-center gap-2 hover:text-blue-electric transition-colors">
                      Read Full Case <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}
