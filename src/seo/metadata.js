import { SITE_URL, SITE_NAME } from "./site";

export function pageMetadata({ title, description, seoDescription, path, image = `${SITE_URL}/optimized/social-home.jpg` }) {
  description = seoDescription || description;
  const url = new URL(path, SITE_URL).toString();
  return {
    title, description, robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }, alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", siteName: SITE_NAME, locale: "en_US", images: [{ url: image, ...(image === `${SITE_URL}/optimized/social-home.jpg` ? { width: 1200, height: 630 } : {}), alt: "At Home Comfort Assisted Living in Manteca, California" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
