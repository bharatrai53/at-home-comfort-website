# At Home Comfort Assisted Living — Website

A warm, personalized website for At Home Comfort Assisted Living in Manteca, CA. Built with React + Vite.

## Features

- **AEO-Optimized** — Answer Engine Optimization with structured FAQ data, micro-FAQ blocks on key pages, and FAQPage JSON-LD schema
- **7 Pages** — Home, About, Care & Services, Virtual Tour, Admissions, FAQs, Schedule a Tour
- **Narrative Homepage** — Editorial scroll design that tells a story as visitors scroll
- **Responsive** — Mobile-first with sticky CTA bar and glass-effect navigation
- **Warm Gold Glow** — Subtle ambient radial gradients for an embracing, premium feel

## Tech Stack

- **React 18** — Component-based UI
- **Vite** — Fast dev server and build tool
- **Inline styles** — Design tokens for consistent theming (easy to migrate to CSS modules or Tailwind later)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (opens at localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── App.jsx          # Main application (all pages + components)
├── main.jsx         # React entry point
└── styles/
    └── global.css   # Reset + responsive rules
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
- FAQPage JSON-LD structured data for search engine parsing
- Natural-language questions matching how families search via AI assistants

## Deployment

Build and deploy to any static hosting:

```bash
npm run build
# Upload `dist/` folder to Netlify, Vercel, Cloudflare Pages, etc.
```

## License

Private — At Home Comfort Assisted Living
