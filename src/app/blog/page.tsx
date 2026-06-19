import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, User, Tag } from "lucide-react";
import { blogPosts } from "@/data";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations";
import { CTASection } from "@/components/sections/ExtraSections";

export const metadata: Metadata = {
  title: "Dental Blog | Expert Advice | Elite Dental & Wellness",
  description:
    "Expert dental advice, treatment guides, and oral health tips from Elite Dental's fellowship-trained specialists. Stay informed about your oral health.",
};

const allCategories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured || p.id !== featured?.id);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy-dark" />
        <div className="section-container relative z-10 text-center">
          <FadeIn>
            <p className="section-eyebrow mb-4 justify-center">
              <span className="w-8 h-px bg-gold inline-block" />
              Knowledge & Insights
              <span className="w-8 h-px bg-gold inline-block" />
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              The Elite<br /><span className="gold-text">Dental Blog</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Expert guides, treatment overviews, and oral health insights written by our specialists — not marketing copy.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="section-container">
          {/* Featured post */}
          {featured && (
            <FadeIn className="mb-16">
              <Link href={`/blog/${featured.slug}`} className="group block">
                <div className="grid lg:grid-cols-2 overflow-hidden rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-500 bg-white border border-slate-100">
                  <div className="relative overflow-hidden aspect-video lg:aspect-auto">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-navy text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-electric/10 text-blue-electric text-xs font-semibold px-3 py-1 rounded-full">
                        {featured.category}
                      </span>
                      <span className="text-slate-400 text-sm flex items-center gap-1.5">
                        <Clock size={13} /> {featured.readTime}
                      </span>
                    </div>
                    <h2
                      className="text-navy text-2xl lg:text-3xl font-bold mb-4 leading-tight group-hover:text-blue-electric transition-colors"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {featured.title}
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-6">{featured.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <User size={14} />
                        {featured.author}
                      </div>
                      <span className="flex items-center gap-1.5 text-navy font-semibold text-sm group-hover:text-blue-electric transition-colors">
                        Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          )}

          {/* Categories */}
          <FadeIn className="flex flex-wrap gap-2 mb-10">
            {allCategories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-white border border-slate-200 text-navy hover:border-navy/30 hover:bg-navy/5 transition-all"
              >
                {cat}
              </button>
            ))}
          </FadeIn>

          {/* Article grid */}
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <StaggerItem key={post.id}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="premium-card overflow-hidden h-full flex flex-col">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 text-navy text-xs font-semibold px-2.5 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3 text-slate-400 text-xs">
                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                        <span className="flex items-center gap-1"><User size={12} /> {post.author.split(" ").slice(-1)[0]}</span>
                      </div>
                      <h3
                        className="text-navy font-bold text-lg mb-2 leading-snug flex-1 group-hover:text-blue-electric transition-colors"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Tag size={10} /> {tag}
                          </span>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-slate-400 text-xs">{post.date}</span>
                        <span className="flex items-center gap-1.5 text-navy font-semibold text-sm group-hover:text-blue-electric transition-colors">
                          Read <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
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
