import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

const footerLinks = {
  services: [
    { href: "/services/cosmetic-dentistry", label: "Cosmetic Dentistry" },
    { href: "/services/dental-implants", label: "Dental Implants" },
    { href: "/services/invisalign", label: "Invisalign" },
    { href: "/services/general-dentistry", label: "General Dentistry" },
    { href: "/services/teeth-whitening", label: "Teeth Whitening" },
    { href: "/services/emergency-dentistry", label: "Emergency Care" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Our Team" },
    { href: "/testimonials", label: "Patient Reviews" },
    { href: "/gallery", label: "Before & After" },
    { href: "/blog", label: "Dental Blog" },
    { href: "/contact", label: "Contact Us" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/accessibility", label: "Accessibility" },
    { href: "/sitemap", label: "Sitemap" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-electric/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                Stay Informed About Your Oral Health
              </h3>
              <p className="text-white/60 text-sm">Get expert tips, treatment updates, and exclusive offers delivered monthly.</p>
            </div>
            <div className="flex gap-3 w-full max-w-md">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-gold/60 transition-colors"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center">
                <span className="text-navy font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>E</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-none">Elite</div>
                <div className="text-gold text-xs tracking-widest uppercase">Dental & Wellness</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Toronto&apos;s premier dental clinic, delivering world-class care with advanced technology and genuine compassion since 2008.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone size={14} />
                </div>
                {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail size={14} />
                </div>
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mt-0.5 shrink-0">
                  <MapPin size={14} />
                </div>
                <span>{SITE_CONFIG.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8">
              {[
                { href: SITE_CONFIG.social.instagram, icon: Instagram, label: "Instagram" },
                { href: SITE_CONFIG.social.facebook, icon: Facebook, label: "Facebook" },
                { href: SITE_CONFIG.social.twitter, icon: Twitter, label: "Twitter" },
                { href: SITE_CONFIG.social.linkedin, icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-gold/20 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Office Hours</h4>
            <div className="space-y-3 text-sm">
              {[
                { day: "Monday – Friday", hours: "8:00am – 6:00pm" },
                { day: "Saturday", hours: "9:00am – 4:00pm" },
                { day: "Sunday", hours: "Closed" },
                { day: "Emergency", hours: "24 / 7 Line" },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between gap-4">
                  <span className="text-white/50">{day}</span>
                  <span className={hours === "24 / 7 Line" ? "text-gold font-medium" : "text-white/80"}>{hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-gold/10 border border-gold/20">
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-1">Dental Emergency?</p>
              <a href="tel:+14165550123" className="text-white font-bold text-lg hover:text-gold-light transition-colors">
                (416) 555-0123
              </a>
              <p className="text-white/50 text-xs mt-1">Available 24 hours a day</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Elite Dental & Wellness Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/40 hover:text-white/70 text-xs transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 text-gold fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/40 text-xs">4.9 · 847 Google Reviews</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
