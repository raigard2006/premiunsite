import { MetadataRoute } from "next";
import { services, blogPosts } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eliteclinic.com";

  const staticPages = [
    { url: baseUrl, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/services`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/team`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/testimonials`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/gallery`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/faq`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly" as const, priority: 0.8 },
    { url: `${baseUrl}/book`, changeFrequency: "yearly" as const, priority: 0.9 },
    { url: `${baseUrl}/case-studies`, changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
    lastModified: p.date,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
