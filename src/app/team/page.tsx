import type { Metadata } from "next";
import Link from "next/link";
import { Instagram, Linkedin, ArrowRight } from "lucide-react";
import { team } from "@/data";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";
import { CTASection } from "@/components/sections/ExtraSections";

export const metadata: Metadata = {
  title: "Our Team | Elite Dental & Wellness Toronto",
  description:
    "Meet the fellowship-trained specialists, hygienists, and support staff that make Elite Dental Toronto's most trusted dental practice.",
};

export default function TeamPage() {
  const specialists = team.filter((m) => m.role.includes("Dr.") || m.role.includes("Specialist") || m.role.includes("Dentist") || m.role.includes("Orthodontist") || m.role.includes("Periodontist"));
  const support = team.filter((m) => !m.role.includes("Dr.") && !m.role.includes("Specialist") && !m.role.includes("Orthodontist") && !m.role.includes("Periodontist"));

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy-dark" />
        <div className="section-container relative z-10 text-center">
          <FadeIn>
            <p className="section-eyebrow mb-4 justify-center">
              <span className="w-8 h-px bg-gold inline-block" />
              The Experts Behind the Smiles
              <span className="w-8 h-px bg-gold inline-block" />
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Meet Your<br />
              <span className="gold-text">Care Team</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Fellowship-trained specialists committed to delivering the highest standard of dental care.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Specialists */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="section-container">
          <FadeIn className="mb-12">
            <p className="section-eyebrow mb-2">
              <span className="w-8 h-px bg-gold inline-block" />
              Clinical Team
            </p>
            <h2 className="section-title">Our Specialists</h2>
          </FadeIn>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {specialists.map((member) => (
              <StaggerItem key={member.id}>
                <div className="group premium-card overflow-hidden h-full">
                  {/* Portrait */}
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />

                    {/* Hover socials */}
                    <div className="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                      <div className="flex gap-2">
                        {member.social.instagram && (
                          <a href={member.social.instagram} className="flex-1 bg-white/20 backdrop-blur-sm text-white py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-gold hover:text-navy transition-colors">
                            <Instagram size={14} /> Instagram
                          </a>
                        )}
                        <a href={member.social.linkedin} className="flex-1 bg-white/20 backdrop-blur-sm text-white py-2 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-gold hover:text-navy transition-colors">
                          <Linkedin size={14} /> LinkedIn
                        </a>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="absolute top-4 right-4">
                      <span className="glass text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                        {member.experience}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-7">
                    <div className="text-gold text-xs font-semibold tracking-widest uppercase mb-1">{member.specialization}</div>
                    <h3 className="text-navy font-bold text-xl mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{member.name}</h3>
                    <p className="text-slate-500 text-sm mb-4">{member.role}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">{member.bio}</p>

                    <div className="space-y-1 mb-5">
                      <p className="text-navy text-xs font-semibold uppercase tracking-wider">Education</p>
                      <p className="text-slate-500 text-sm">{member.education}</p>
                    </div>

                    <div>
                      <p className="text-navy text-xs font-semibold uppercase tracking-wider mb-2">Certifications</p>
                      <div className="flex flex-wrap gap-1.5">
                        {member.certifications.map((cert) => (
                          <span key={cert} className="bg-navy/5 text-navy text-xs px-2.5 py-1 rounded-full font-medium">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-20 bg-navy/5">
        <div className="section-container">
          <FadeIn className="mb-12">
            <p className="section-eyebrow mb-2">
              <span className="w-8 h-px bg-gold inline-block" />
              Support Team
            </p>
            <h2 className="section-title">The People Who Make It Happen</h2>
          </FadeIn>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {support.map((member) => (
              <StaggerItem key={member.id}>
                <div className="group flex gap-6 bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-2xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-gold text-xs font-semibold tracking-widest uppercase mb-1">{member.specialization}</div>
                    <h3 className="text-navy font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>{member.name}</h3>
                    <p className="text-slate-500 text-sm mb-2">{member.role} · {member.experience}</p>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">{member.bio}</p>
                    <div className="flex gap-2 mt-3">
                      <a href={member.social.linkedin} className="w-7 h-7 rounded-lg bg-navy/5 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors">
                        <Linkedin size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Join the team */}
      <section className="py-20 bg-warm-white">
        <div className="section-container">
          <FadeIn>
            <div className="bg-navy rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy-dark" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
              <div className="relative z-10 flex-1">
                <h3 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  Join Our Growing Team
                </h3>
                <p className="text-white/60 leading-relaxed">
                  We&apos;re always looking for passionate dental professionals who share our commitment to excellence and patient care. Check our current openings.
                </p>
              </div>
              <div className="relative z-10 shrink-0">
                <a href="mailto:careers@eliteclinic.com" className="btn-primary whitespace-nowrap">
                  View Openings <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
