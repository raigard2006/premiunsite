import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Clock, DollarSign, Phone, Calendar, Star } from "lucide-react";
import { services, testimonials, faqs } from "@/data";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";
import { CTASection } from "@/components/sections/ExtraSections";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Elite Dental & Wellness Toronto`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services.filter((s) => s.id !== service.id).slice(0, 3);
  const serviceTestimonials = testimonials.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-0 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy-dark" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-end pb-0">
            <FadeIn className="pb-16">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-white/40 text-sm mb-8">
                <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
                <span>/</span>
                <span className="text-white/70">{service.title}</span>
              </nav>

              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">{service.subtitle}</p>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                {service.title}
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">{service.description}</p>

              {/* Quick info */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10 text-white/80 text-sm">
                  <DollarSign size={14} className="text-gold" />
                  {service.price}
                </div>
                <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10 text-white/80 text-sm">
                  <Clock size={14} className="text-gold" />
                  {service.duration}
                </div>
                <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10 text-white/80 text-sm">
                  <Star size={14} className="text-gold fill-gold" />
                  4.9 Rated
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book" className="btn-primary">
                  <Calendar size={16} />
                  Book Consultation
                </Link>
                <a href="tel:+14165550123" className="btn-secondary">
                  <Phone size={16} />
                  Call Now
                </a>
              </div>
            </FadeIn>

            {/* Hero image */}
            <FadeIn direction="left" className="relative">
              <div className="rounded-t-3xl overflow-hidden aspect-[4/3] shadow-navy-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-warm-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="section-eyebrow mb-3">
                <span className="w-8 h-px bg-gold inline-block" />
                What&apos;s Included
              </p>
              <h2 className="section-title mb-6">
                Why Choose Elite for<br />
                <span className="gold-text">{service.title}</span>
              </h2>
              <p className="section-subtitle mb-8">
                Our {service.title.toLowerCase()} service is designed to deliver exceptional, lasting results using the most advanced techniques available.
              </p>
              <ul className="space-y-4">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-gold" />
                    </div>
                    <span className="text-navy font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-navy rounded-3xl p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy-dark" />
                <div className="relative z-10">
                  <div className="text-5xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                    <span className="gold-text">Free</span>
                  </div>
                  <div className="text-white text-2xl font-bold mb-4">Consultation</div>
                  <p className="text-white/60 mb-6 text-sm">Book a no-obligation consultation with one of our specialists. Includes a full assessment and personalized treatment plan.</p>
                  <div className="space-y-2 text-sm mb-8">
                    {["Full oral examination ($200 value)", "Digital X-rays included", "Personalized treatment plan", "Transparent pricing", "No pressure, no commitment"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-white/70 justify-center">
                        <Check size={14} className="text-gold" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link href="/book" className="btn-primary w-full justify-center">
                    Book Free Consultation
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials for this service */}
      <section className="py-20 bg-navy/5">
        <div className="section-container">
          <FadeIn className="text-center mb-10">
            <h2 className="section-title mb-2">Patient Experiences</h2>
            <p className="section-subtitle mx-auto">Real results from real patients.</p>
          </FadeIn>
          <Stagger className="grid sm:grid-cols-3 gap-6">
            {serviceTestimonials.map((t) => (
              <StaggerItem key={t.id}>
                <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-4">&ldquo;{t.review}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <img src={t.image} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-navy text-sm">{t.name}</p>
                      <p className="text-slate-400 text-xs">{t.location}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 bg-warm-white">
        <div className="section-container">
          <FadeIn className="mb-10">
            <h2 className="section-title">Related Services</h2>
          </FadeIn>
          <Stagger className="grid sm:grid-cols-3 gap-6">
            {related.map((s) => (
              <StaggerItem key={s.id}>
                <Link href={`/services/${s.slug}`} className="group block premium-card overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-navy font-bold mb-1 group-hover:text-blue-electric transition-colors">{s.title}</h3>
                    <p className="text-slate-500 text-sm line-clamp-2">{s.description}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-gold font-semibold text-sm">
                      Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}
