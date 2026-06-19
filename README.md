# Elite Dental & Wellness — Premium Service Website

A production-ready, fully-featured service business website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Designed to convert visitors into booked appointments.

---

## 🚀 Quick Start

```bash
# 1. Unzip the project
unzip premium-service-website.zip
cd premiumsite

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open http://localhost:3000
```

---

## 📁 Project Structure

```
premiumsite/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── page.tsx                  # Home page
│   │   ├── layout.tsx                # Root layout (Navbar, Footer, SEO)
│   │   ├── globals.css               # Global styles + design tokens
│   │   ├── about/page.tsx            # About page
│   │   ├── services/
│   │   │   ├── page.tsx              # Services listing
│   │   │   └── [slug]/page.tsx       # Dynamic service detail
│   │   ├── team/page.tsx             # Team page
│   │   ├── testimonials/page.tsx     # Reviews & testimonials
│   │   ├── gallery/page.tsx          # Before & after gallery
│   │   ├── blog/page.tsx             # Blog listing
│   │   ├── faq/page.tsx              # FAQ accordion
│   │   ├── contact/page.tsx          # Contact + form + map
│   │   ├── book/page.tsx             # Multi-step booking flow
│   │   ├── case-studies/page.tsx     # Case studies
│   │   ├── not-found.tsx             # 404 page
│   │   ├── sitemap.ts                # Auto-generated sitemap
│   │   └── robots.ts                 # Robots.txt
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Glassmorphism navbar with dropdowns
│   │   │   └── Footer.tsx            # Full enterprise footer
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Full-screen immersive hero
│   │   │   ├── StatsSection.tsx      # Authority metrics
│   │   │   ├── ServicesSection.tsx   # Services grid
│   │   │   ├── WhyChooseUs.tsx       # Differentiators
│   │   │   ├── TestimonialsSection.tsx # Carousel + review cards
│   │   │   ├── CoverageSection.tsx   # Service areas
│   │   │   └── ExtraSections.tsx     # Team, Process, FAQ, CTA
│   │   ├── animations/
│   │   │   └── index.tsx             # FadeIn, Stagger, FloatingElement, etc.
│   │   └── ui/
│   │       ├── StickyContact.tsx     # Floating call/book buttons
│   │       └── ExitIntentModal.tsx   # Exit-intent popup
│   ├── data/
│   │   └── index.ts                  # All content data (services, team, etc.)
│   └── lib/
│       └── utils.ts                  # Utilities + SITE_CONFIG
├── tailwind.config.ts                # Full design system
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

### Colors
| Token          | Value     | Usage                  |
|----------------|-----------|------------------------|
| Navy           | `#0A1628` | Primary dark, headers  |
| Electric Blue  | `#1d6ae5` | CTAs, accents          |
| Luxury Gold    | `#C9A84C` | Premium accents        |
| Warm White     | `#F8F7F4` | Backgrounds            |
| Slate Gray     | `#8892A4` | Body text              |

### Typography
- **Display**: Playfair Display (headings, hero text)
- **Body**: Inter (all body copy, UI elements)

### Key CSS Classes
```css
.btn-primary      /* Gold CTA button */
.btn-secondary    /* Ghost white button */
.btn-outline      /* Navy outline button */
.glass            /* Glassmorphism effect */
.glass-dark       /* Dark glassmorphism */
.gold-text        /* Gradient gold text */
.section-title    /* Responsive large heading */
.section-eyebrow  /* Small uppercase label */
.premium-card     /* Hover card with shadow */
.section-container /* Max-width centered wrapper */
```

---

## 🔧 Customization Guide

### Change Business Info
Edit `src/lib/utils.ts` — `SITE_CONFIG`:
```ts
export const SITE_CONFIG = {
  name: "Your Business Name",
  phone: "+1 (555) 000-0000",
  email: "hello@yourbusiness.com",
  address: "123 Main St, Your City",
  // ...
};
```

### Change Content & Services
Edit `src/data/index.ts` to update:
- Services, pricing, descriptions
- Team members, bios, certifications
- Testimonials, FAQs, blog posts
- Coverage areas, stats

### Change Colors
Edit `tailwind.config.ts` under `theme.extend.colors`.

### Add Real Images
Replace `images.unsplash.com` URLs in `src/data/index.ts` with your actual patient images.

### Connect a Real Backend
- **Contact form**: replace the `setTimeout` in `contact/page.tsx` with a fetch to your API
- **Booking**: integrate with Calendly, Acuity, or a custom API in `book/page.tsx`
- **Blog**: connect to Contentful, Sanity, or WordPress REST API

---

## 🌐 Deployment

### Vercel (Recommended — 1 click)
```bash
npm install -g vercel
vercel
```

### Manual Build
```bash
npm run build
npm start
```

### Environment Variables
Create `.env.local` for any API keys:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
RESEND_API_KEY=your_resend_key
```

---

## ✅ Pages Included

| Page             | Route                    | Status |
|------------------|--------------------------|--------|
| Home             | `/`                      | ✅ |
| About            | `/about`                 | ✅ |
| Services         | `/services`              | ✅ |
| Service Detail   | `/services/[slug]`       | ✅ |
| Team             | `/team`                  | ✅ |
| Testimonials     | `/testimonials`          | ✅ |
| Gallery          | `/gallery`               | ✅ |
| Blog             | `/blog`                  | ✅ |
| FAQ              | `/faq`                   | ✅ |
| Contact          | `/contact`               | ✅ |
| Book Appointment | `/book`                  | ✅ |
| Case Studies     | `/case-studies`          | ✅ |
| 404              | `/not-found`             | ✅ |
| Sitemap          | `/sitemap.xml`           | ✅ |
| Robots           | `/robots.txt`            | ✅ |

---

## 🔍 SEO Features
- Full metadata (title, description, keywords)
- Open Graph + Twitter Cards
- Local Business JSON-LD schema
- Canonical URLs
- Auto-generated sitemap.xml
- robots.txt
- Semantic HTML throughout

## ⚡ Performance Features
- Next.js 15 App Router (RSC)
- Static page generation where possible
- Optimized Google Fonts via `next/font`
- Image optimization via `next/image`
- Mobile-first responsive design

## 🏥 Adaptable For
Change the content in `src/data/index.ts` to adapt for:
- **Medical clinics** — replace dental services with medical
- **Physiotherapy** — update treatments and team specializations
- **Cleaning companies** — replace services grid completely
- **Home services / Roofing** — adapt service pages and CTAs
- **Real estate** — replace with property listings and agent profiles

---

Built with ❤️ by a premium digital agency.
# premiunsite
