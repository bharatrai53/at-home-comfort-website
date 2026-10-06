import { assistedLivingAreas } from "../data/localPages";
import { SITE_URL, SITE_NAME } from "./site";

export const serviceAreas = assistedLivingAreas.map(({ label }) => label);

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}

export function buildFaqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    image: `${SITE_URL}/outside.jpg`,
    logo: `${SITE_URL}/rmvbckgrnd.png`,
    url: `${SITE_URL}/`,
    telephone: "+1-925-605-6218",
    faxNumber: "+1-209-647-2163",
    email: "admin@athomecomfortliving.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manteca",
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: serviceAreas,
    description:
      "Small personalized assisted living home in Manteca, CA providing warm, family-style senior care.",
    identifier: "Facility License #392701886",
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org", "@type": "WebSite",
    "@id": `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: SITE_NAME,
    alternateName: "At Home Comfort", inLanguage: "en-US",
    publisher: { "@id": `${SITE_URL}/#business` },
  };
}
