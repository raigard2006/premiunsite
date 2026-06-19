import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyContact from "@/components/ui/StickyContact";
import ExitIntentModal from "@/components/ui/ExitIntentModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eliteclinic.com"),
  title: {
    default: "Elite Dental & Wellness Clinic | Award-Winning Care in Toronto",
    template: "%s | Elite Dental & Wellness Clinic",
  },
  description:
    "Experience world-class dental and wellness care with over 15 years of excellence. 10,000+ satisfied patients. Book your appointment today and discover the Elite difference.",
  keywords: [
    "dental clinic Toronto",
    "cosmetic dentist",
    "dental implants",
    "teeth whitening",
    "Invisalign Toronto",
    "emergency dentist",
    "family dentist",
    "smile makeover",
    "dental veneers",
    "root canal treatment",
  ],
  authors: [{ name: "Elite Dental & Wellness Clinic" }],
  creator: "Elite Dental & Wellness Clinic",
  publisher: "Elite Dental & Wellness Clinic",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://eliteclinic.com",
    siteName: "Elite Dental & Wellness Clinic",
    title: "Elite Dental & Wellness Clinic | Award-Winning Care in Toronto",
    description:
      "World-class dental and wellness care. 10,000+ satisfied patients. Book your appointment today.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Dental & Wellness Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Dental & Wellness Clinic",
    description: "World-class dental and wellness care in Toronto.",
    images: ["/og-image.jpg"],
    creator: "@eliteclinic",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-token",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Elite Dental & Wellness Clinic",
  image: "https://eliteclinic.com/og-image.jpg",
  "@id": "https://eliteclinic.com",
  url: "https://eliteclinic.com",
  telephone: "+1-416-555-0123",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "200 Bay Street, Suite 2800",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M5J 2J2",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6452,
    longitude: -79.3806,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    "https://facebook.com/eliteclinic",
    "https://instagram.com/eliteclinic",
    "https://twitter.com/eliteclinic",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "847",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://eliteclinic.com" />
        <meta name="theme-color" content="#0A1628" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyContact />
        <ExitIntentModal />
      </body>
    </html>
  );
}
