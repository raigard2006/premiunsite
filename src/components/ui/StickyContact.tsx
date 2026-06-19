"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Calendar, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";

export default function StickyContact() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed right-6 bottom-6 z-40 flex flex-col items-end gap-3"
        >
          {/* Expanded actions */}
          <AnimatePresence>
            {expanded && (
              <>
                {[
                  {
                    href: "/book",
                    icon: Calendar,
                    label: "Book Appointment",
                    bg: "bg-gold",
                    color: "text-navy",
                    delay: 0.1,
                  },
                  {
                    href: `https://wa.me/14165550123`,
                    icon: MessageCircle,
                    label: "WhatsApp",
                    bg: "bg-green-500",
                    color: "text-white",
                    delay: 0.05,
                  },
                  {
                    href: `tel:${SITE_CONFIG.phone}`,
                    icon: Phone,
                    label: "Call Now",
                    bg: "bg-blue-electric",
                    color: "text-white",
                    delay: 0,
                  },
                ].map(({ href, icon: Icon, label, bg, color, delay }) => (
                  <motion.a
                    key={label}
                    href={href}
                    initial={{ scale: 0, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0, opacity: 0, y: 20 }}
                    transition={{ delay, type: "spring", stiffness: 400, damping: 25 }}
                    className={`flex items-center gap-3 ${bg} ${color} px-5 py-3 rounded-full shadow-lg font-semibold text-sm whitespace-nowrap hover:-translate-y-0.5 transition-transform`}
                  >
                    <Icon size={18} />
                    {label}
                  </motion.a>
                ))}
              </>
            )}
          </AnimatePresence>

          {/* Main toggle button */}
          <motion.button
            onClick={() => setExpanded(!expanded)}
            className="w-14 h-14 rounded-full bg-navy text-white shadow-navy-lg flex items-center justify-center hover:bg-charcoal-light transition-colors relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={expanded ? "Close contact options" : "Open contact options"}
          >
            {/* Pulse ring */}
            {!expanded && (
              <span className="absolute inset-0 rounded-full bg-gold/30 animate-ping" />
            )}
            <AnimatePresence mode="wait">
              {expanded ? (
                <motion.span key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="phone" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                  <Phone size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
