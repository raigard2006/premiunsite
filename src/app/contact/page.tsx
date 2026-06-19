"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, Linkedin, Send, MessageCircle } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";
import { SITE_CONFIG } from "@/lib/utils";

const contactInfo = [
  { icon: Phone, label: "Phone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
  { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  { icon: MapPin, label: "Address", value: SITE_CONFIG.address, href: "https://maps.google.com" },
  { icon: Clock, label: "Hours", value: "Mon–Fri 8am–6pm · Sat 9am–4pm", href: null },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy-dark" />
        <div className="section-container relative z-10 text-center">
          <FadeIn>
            <p className="section-eyebrow mb-4 justify-center">
              <span className="w-8 h-px bg-gold inline-block" />
              Get in Touch
              <span className="w-8 h-px bg-gold inline-block" />
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              We&apos;re Here<br /><span className="gold-text">for You</span>
            </h1>
            <p className="text-white/60 text-xl max-w-xl mx-auto">
              Questions, appointments, emergencies — we respond to every message within 2 hours during business hours.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
            {/* Left: Info */}
            <FadeIn direction="right">
              <div>
                <h2 className="section-title mb-3">Contact Information</h2>
                <p className="section-subtitle mb-10">Multiple ways to reach us — choose what works best for you.</p>

                <Stagger className="space-y-4 mb-10">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <StaggerItem key={label}>
                      <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-card border border-slate-100 hover:border-gold/20 hover:shadow-card-hover transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                          <Icon size={20} className="text-navy" />
                        </div>
                        <div>
                          <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-0.5">{label}</p>
                          {href ? (
                            <a href={href} className="text-navy font-medium hover:text-blue-electric transition-colors">
                              {value}
                            </a>
                          ) : (
                            <p className="text-navy font-medium">{value}</p>
                          )}
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>

                {/* Emergency */}
                <div className="p-6 rounded-2xl border-2 border-red-100 bg-red-50/50 mb-10">
                  <p className="text-red-600 font-bold text-sm uppercase tracking-wider mb-1">Dental Emergency?</p>
                  <p className="text-slate-600 text-sm mb-3">For urgent dental pain, broken teeth, or trauma, call our emergency line immediately.</p>
                  <a href="tel:+14165550123" className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors">
                    <Phone size={16} /> Emergency Line: (416) 555-0123
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="p-6 rounded-2xl border border-green-200 bg-green-50/50 mb-10">
                  <p className="text-green-700 font-bold text-sm uppercase tracking-wider mb-1">WhatsApp Us</p>
                  <p className="text-slate-600 text-sm mb-3">Prefer messaging? Chat with our team on WhatsApp — we respond within minutes.</p>
                  <a
                    href="https://wa.me/14165550123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle size={16} /> Chat on WhatsApp
                  </a>
                </div>

                {/* Social */}
                <div>
                  <p className="text-navy font-semibold text-sm uppercase tracking-wider mb-4">Follow Us</p>
                  <div className="flex gap-3">
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
                        className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-all shadow-sm"
                      >
                        <Icon size={17} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right: Form */}
            <FadeIn>
              <div className="bg-white rounded-3xl shadow-card p-8 lg:p-10 border border-slate-100">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-navy font-bold text-2xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      Message Received!
                    </h3>
                    <p className="text-slate-500">
                      Thank you, {form.name}. We&apos;ll get back to you within 2 hours during business hours.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-navy font-bold text-2xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        Send Us a Message
                      </h2>
                      <p className="text-slate-500 text-sm">We respond within 2 hours during business hours.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-navy text-sm font-medium mb-1.5">Full Name *</label>
                          <input
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Your name"
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-slate-400"
                          />
                        </div>
                        <div>
                          <label className="block text-navy text-sm font-medium mb-1.5">Phone</label>
                          <input
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="(416) 000-0000"
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-slate-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-navy text-sm font-medium mb-1.5">Email *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-slate-400"
                        />
                      </div>

                      <div>
                        <label className="block text-navy text-sm font-medium mb-1.5">Service of Interest</label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-gold transition-colors bg-white"
                        >
                          <option value="">Select a service...</option>
                          <option>Cosmetic Dentistry</option>
                          <option>Dental Implants</option>
                          <option>Invisalign</option>
                          <option>Teeth Whitening</option>
                          <option>General Dentistry</option>
                          <option>Emergency Care</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-navy text-sm font-medium mb-1.5">Message *</label>
                        <textarea
                          required
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us about your needs or questions..."
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-slate-400 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <>
                            <Send size={16} /> Send Message
                          </>
                        )}
                      </button>
                      <p className="text-slate-400 text-xs text-center">
                        Your information is 100% secure and will never be shared.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Map */}
          <FadeIn delay={0.2} className="mt-16">
            <div className="rounded-3xl overflow-hidden shadow-card border border-slate-100 h-80 lg:h-96 bg-slate-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2691888707647!2d-79.38338!3d43.6452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7e21!2s200+Bay+St%2C+Toronto%2C+ON!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elite Dental & Wellness location"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
