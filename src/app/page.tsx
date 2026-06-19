import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { TeamSection, ProcessSection, FAQSection, CTASection } from "@/components/sections/ExtraSections";
import CoverageSection from "@/components/sections/CoverageSection";

export const metadata: Metadata = {
  title: "Elite Dental & Wellness | Toronto's Premier Dental Clinic",
  description:
    "Award-winning dental care in Toronto. Cosmetic dentistry, dental implants, Invisalign, and more. 10,000+ patients served. 4.9 Google rating. Book your free consultation today.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <TeamSection />
      <ProcessSection />
      <CoverageSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
