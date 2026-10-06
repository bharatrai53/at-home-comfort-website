import { SITE_URL, SITE_NAME } from "./site";

export function pageMetadata({ title, description, seoDescription, path, image = "https://athomecomfortliving.com/outside.jpg" }) {
  description = seoDescription || description;
  const url = new URL(path, SITE_URL).toString();
  return {
    title, description, robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }, alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", siteName: SITE_NAME, locale: "en_US", images: [{ url: image, alt: "At Home Comfort Assisted Living in Manteca, California" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
