"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Star, Clock } from "lucide-react";

export default function ExitIntentModal() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const hasShown = sessionStorage.getItem("exitModalShown");
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem("exitModalShown", "true");
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 30000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dismissed]);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/80 backdrop-blur-sm z-50"
            onClick={handleDismiss}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg"
          >
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl mx-4">
              {/* Gold header bar */}
              <div className="bg-navy px-8 py-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy-dark" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                    <Clock size={12} />
                    Limited Time Offer
                  </div>
                  <h2 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                    Wait — Before You Go!
                  </h2>
                  <p className="text-white/70 text-sm">
                    Book your consultation today and receive:
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="px-8 py-6">
                <div className="space-y-3 mb-6">
                  {[
                    "FREE comprehensive oral health examination ($200 value)",
                    "FREE digital X-rays included with your first visit",
                    "FREE smile simulation with any cosmetic consultation",
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-gold fill-current" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-navy text-sm font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6 pb-6 border-b border-slate-100">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <span className="text-slate-500 text-xs">Rated 4.9 by 847 patients on Google</span>
                </div>

                <Link
                  href="/book"
                  onClick={handleDismiss}
                  className="btn-primary w-full justify-center text-sm"
                >
                  <Calendar size={16} />
                  Claim My Free Consultation
                </Link>
                <button
                  onClick={handleDismiss}
                  className="w-full mt-3 text-slate-400 hover:text-slate-600 text-xs transition-colors"
                >
                  No thanks, I&apos;ll pay full price later
                </button>
              </div>

              {/* Close */}
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
