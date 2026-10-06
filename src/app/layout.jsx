import SEO from "../components/SEO";
import { buildWebsiteSchema, buildLocalBusinessSchema } from "../seo/schema";
import "../styles/global.css";
import { SiteLayout } from "../components/layout/SiteLayout";

export const metadata = {
  metadataBase: new URL("https://athomecomfortliving.com"),
  icons: { icon: "/rmvbckgrnd.png", apple: "/rmvbckgrnd.png" },
  manifest: "/manifest.json",
};
export const viewport = { themeColor: "#C49A52" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body><SEO pathname="/" jsonLd={[buildWebsiteSchema(), buildLocalBusinessSchema()]} /><SiteLayout>{children}</SiteLayout></body>
    </html>
  );
}
