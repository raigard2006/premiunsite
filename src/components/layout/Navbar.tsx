"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, Calendar } from "lucide-react";
import { cn, SITE_CONFIG } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "Our Story" },
      { href: "/team", label: "Meet the Team" },
    ],
  },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services", label: "All Services" },
      { href: "/services/cosmetic-dentistry", label: "Cosmetic Dentistry" },
      { href: "/services/dental-implants", label: "Dental Implants" },
      { href: "/services/invisalign", label: "Invisalign" },
      { href: "/services/general-dentistry", label: "General Dentistry" },
      { href: "/services/teeth-whitening", label: "Teeth Whitening" },
      { href: "/services/emergency-dentistry", label: "Emergency Care" },
    ],
  },
  { href: "/testimonials", label: "Reviews" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-white/70 text-xs py-2 hidden lg:block">
        <div className="section-container flex items-center justify-between">
          <span>Mon–Fri: 8am–6pm | Sat: 9am–4pm | Emergency: 24/7</span>
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={12} />
              {SITE_CONFIG.phone}
            </a>
            <a href="/book" className="bg-gold text-navy px-4 py-1 rounded-full text-xs font-semibold hover:bg-gold-light transition-colors">
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-dark shadow-navy-lg py-3 lg:top-0"
            : "bg-transparent py-5 lg:top-8"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold">
                  <span className="text-navy font-bold text-lg font-display">E</span>
                </div>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-none tracking-tight">Elite</div>
                <div className="text-gold text-xs tracking-widest uppercase font-medium">Dental & Wellness</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      pathname === link.href
                        ? "text-gold"
                        : "text-white/80 hover:text-white"
                    )}
                  >
                    {link.label}
                    {link.children && <ChevronDown size={14} className="opacity-60" />}
                  </Link>

                  {/* Dropdown */}
                  {link.children && (
                    <AnimatePresence>
                      {activeDropdown === link.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-56 glass-dark rounded-xl overflow-hidden shadow-navy-lg border border-white/10"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
              >
                <Phone size={16} />
                <span className="font-medium">{SITE_CONFIG.phone}</span>
              </a>
              <Link href="/book" className="btn-primary text-sm px-6 py-3">
                <Calendar size={16} />
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="glass-dark border-t border-white/10 px-6 py-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "text-gold bg-gold/10"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 mt-1 space-y-0.5">
                        {link.children.slice(1).map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-white/60 hover:text-white/90 transition-colors"
                          >
                            → {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <a href={`tel:${SITE_CONFIG.phone}`} className="btn-secondary justify-center text-sm">
                    <Phone size={16} />
                    {SITE_CONFIG.phone}
                  </a>
                  <Link href="/book" className="btn-primary justify-center text-sm">
                    <Calendar size={16} />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
