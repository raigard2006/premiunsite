"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { FadeIn } from "@/components/animations";
import { CTASection } from "@/components/sections/ExtraSections";

const categories = ["All", "Smile Makeovers", "Implants", "Invisalign", "Veneers", "Whitening"];

const galleryItems = [
  { id: 1, category: "Smile Makeovers", before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80", after: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&q=80", label: "Full Smile Makeover", patient: "Catherine B.", tall: true },
  { id: 2, category: "Implants", before: "https://images.unsplash.com/photo-1588776814546-1ffedbe65e8b?w=600&q=80", after: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=600&q=80", label: "4 Dental Implants", patient: "Robert N.", tall: false },
  { id: 3, category: "Invisalign", before: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80", after: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&q=80", label: "Invisalign 14 months", patient: "Sophie L.", tall: false },
  { id: 4, category: "Veneers", before: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80", after: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&q=80", label: "8 Porcelain Veneers", patient: "James F.", tall: true },
  { id: 5, category: "Whitening", before: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80", after: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&q=80", label: "Zoom Whitening", patient: "Miranda H.", tall: false },
  { id: 6, category: "Smile Makeovers", before: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80", after: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&q=80", label: "Comprehensive Makeover", patient: "David O.", tall: false },
  { id: 7, category: "Implants", before: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80", after: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=600&q=80", label: "Full Arch Restoration", patient: "Marcus C.", tall: true },
  { id: 8, category: "Veneers", before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80", after: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&q=80", label: "10 Composite Veneers", patient: "Priya S.", tall: false },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[0] | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy-dark" />
        <div className="section-container relative z-10 text-center">
          <FadeIn>
            <p className="section-eyebrow mb-4 justify-center">
              <span className="w-8 h-px bg-gold inline-block" />
              Real Results
              <span className="w-8 h-px bg-gold inline-block" />
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Before &amp;<br /><span className="gold-text">After Gallery</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Real patient transformations from our clinic. Every result shown was achieved by our team.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="section-container">
          {/* Filter tabs */}
          <FadeIn className="flex flex-wrap justify-center gap-2 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-navy text-white shadow-navy"
                    : "bg-white text-navy border border-slate-200 hover:border-navy/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </FadeIn>

          {/* Masonry Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => setLightboxItem(item)}
                >
                  <div className={`relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 ${item.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                    {/* Split before/after */}
                    <div className="absolute inset-0 grid grid-cols-2">
                      <div className="relative overflow-hidden">
                        <img src={item.before} alt="Before" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                        <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full font-medium">Before</div>
                      </div>
                      <div className="relative overflow-hidden">
                        <img src={item.after} alt="After" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                        <div className="absolute bottom-2 right-2 bg-gold text-navy text-xs px-2 py-1 rounded-full font-medium">After</div>
                      </div>
                    </div>

                    {/* Center divider */}
                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/80 z-10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md z-10 flex items-center justify-center">
                      <div className="w-2 h-2 bg-navy rounded-full" />
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300 flex items-center justify-center z-20">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                          <ZoomIn size={20} className="text-navy" />
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/90 to-transparent z-10">
                      <p className="text-white font-semibold text-sm">{item.label}</p>
                      <p className="text-white/60 text-xs">{item.patient} · {item.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy/95 z-50 flex items-center justify-center p-4"
              onClick={() => setLightboxItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={lightboxItem.before} alt="Before" className="w-full h-80 lg:h-[500px] object-cover" />
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-4 py-2 rounded-full font-semibold">Before</div>
                  </div>
                  <div className="relative">
                    <img src={lightboxItem.after} alt="After" className="w-full h-80 lg:h-[500px] object-cover" />
                    <div className="absolute bottom-4 right-4 bg-gold text-navy text-sm px-4 py-2 rounded-full font-semibold">After</div>
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-navy font-bold text-lg">{lightboxItem.label}</h3>
                    <p className="text-slate-500 text-sm">{lightboxItem.patient} · {lightboxItem.category}</p>
                  </div>
                  <button
                    onClick={() => setLightboxItem(null)}
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                  >
                    <X size={18} className="text-navy" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  );
}
