# At Home Comfort Assisted Living — Website

A warm, personalized website for At Home Comfort Assisted Living in Manteca, CA. Built with Next.js + React.

## Features

- **AEO-Optimized** — Answer Engine Optimization with structured FAQ data, micro-FAQ blocks on key pages, and FAQPage JSON-LD schema
- **SEO Routing** — Statically generated Next.js App Router URLs for core pages and local landing pages
- **Local SEO Pages** — Dedicated landing pages for Manteca keywords and nearby-city searches
- **Narrative Homepage** — Editorial scroll design that tells a story as visitors scroll
- **Responsive** — Mobile-first with sticky CTA bar and glass-effect navigation
- **Warm Gold Glow** — Subtle ambient radial gradients for an embracing, premium feel

## Tech Stack

- **React 19** — Component-based UI
- **Next.js App Router** — File-based routes, server-rendered metadata, and static export
- **Inline styles** — Design tokens for consistent theming (easy to migrate to CSS modules or Tailwind later)

Requires Node.js 20.9 or later.

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (available at localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── app/             # Next.js layouts, routes, metadata, and 404 page
│   └── [slug]/      # Local landing pages generated at build time
├── views/           # Existing page content components
├── components/      # Shared UI and interactive client components
├── seo/             # Metadata and JSON-LD helpers
└── styles/          # Global responsive styles
```

## Design System

| Token        | Value                  | Usage                          |
|-------------|------------------------|--------------------------------|
| Navy        | `#1A2744`              | Headers, nav, trust anchors    |
| Gold        | `#C49A52`              | Accents, icons, highlights     |
| Cream       | `#FAF6EF`              | Primary background             |
| Off-White   | `#FDFBF8`              | Alternate sections             |
| Body Text   | `#4A4A4A`              | Paragraph text                 |

**Fonts:** Cormorant Garamond (display) + Outfit (body)

## AEO Strategy

The site embeds 24 curated FAQ answers across 6 categories with:
- Direct answer-first format (what AI engines extract)
- Micro-FAQ accordion blocks on Home, Care & Services, Admissions, and Virtual Tour pages
- FAQPage JSON-LD describing the visible questions and answers; Google retired FAQ rich results in May 2026
- Natural-language questions matching how families search via AI assistants

## Deployment

Build and deploy to any static hosting:

```bash
npm run build
# Upload `out/` folder to Netlify, Vercel, Cloudflare Pages, etc.
```

The build creates `out/`; Netlify is configured to publish it. Tour requests use Netlify Forms, with detection markup in `public/tour-form.html`. Form delivery requires Netlify Forms to be enabled on the deployed site. Local preview serves static files and does not deliver requests. Other hosts require a form backend.

## SEO Validation Checklist

Use this checklist before or after deployment:

```bash
npm install
npm run build
```

- Verify local routes load:
  - `/`
  - `/about/`
  - `/care-and-services/`
  - `/virtual-tour/`
  - `/admissions/`
  - `/faqs/`
  - `/schedule-a-tour/`
  - `/assisted-living-manteca-ca/`
  - `/residential-care-home-manteca-ca/`
  - `/board-and-care-manteca-ca/`
  - `/senior-care-home-stockton-ca/`
  - `/senior-care-home-lathrop-ca/`
  - `/senior-care-home-ripon-ca/`
  - `/senior-care-home-tracy-ca/`
- Verify sitemap loads at `/sitemap.xml`
- Verify robots loads at `/robots.txt`
- Check page-by-page metadata:
  - unique `title`
  - unique meta description
  - canonical URL
  - Open Graph and Twitter tags
- Test JSON-LD with Google Rich Results Test
- Confirm the homepage includes LocalBusiness schema
- Confirm FAQPage schema appears anywhere FAQ sections render
- Confirm BreadcrumbList schema appears on routed pages
- Submit `https://athomecomfortliving.com/sitemap.xml` in Google Search Console

## License

Private — At Home Comfort Assisted Living

## Next.js SEO maintenance

Read [the full SEO assessment](docs/SEO-ASSESSMENT.md). Core metadata lives in `src/seo/site.js`, and local pages in `src/data/localPages.js`. Next.js generates sitemap and robots files from those routes. Omit sitemap modification dates until actual content revision dates are maintained.

`npm run dev` and `npm run build` automatically generate responsive WebP assets using Sharp. `SiteImage` includes intrinsic dimensions, responsive sources, and lazy loading; above-the-fold heroes load eagerly. These build-time assets work with static hosting without an image server.

After changes, run `npm run build` followed by `npm run seo:check` to validate the exported site. Native FAQ accordions and category anchor links work without JavaScript. Reveal animations keep server-rendered text visible.
