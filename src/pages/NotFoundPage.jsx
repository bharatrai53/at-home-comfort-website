import { Link } from "react-router-dom";
import { T, F } from "../tokens";
import { PageSEO } from "../components/PageSEO";
import { Section } from "../components/ui/Section";
import { GoldDivider } from "../components/ui/GoldDivider";

export function NotFoundPage() {
  return (
    <>
      <PageSEO
        title="Page Not Found | At Home Comfort Assisted Living"
        description="The page you're looking for doesn't exist. Return to the At Home Comfort Assisted Living homepage."
        path="/404"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Not Found", path: "/404" },
        ]}
      />
      <Section
        bg={T.offWhite}
        style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div style={{ textAlign: "center", maxWidth: 520, margin: "0 auto", padding: "60px 0" }}>
          <GoldDivider width={32} />
          <p style={{ fontFamily: F.body, fontSize: 12, fontWeight: 700, color: T.gold, letterSpacing: "0.22em", textTransform: "uppercase", margin: "20px 0 12px" }}>
            404 — Not Found
          </p>
          <h1 style={{ fontFamily: F.display, fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 600, color: T.navy, lineHeight: 1.2, marginBottom: 20 }}>
            Page Not Found
          </h1>
          <p style={{ fontFamily: F.body, fontSize: 16, color: T.textBody, lineHeight: 1.85, marginBottom: 36 }}>
            The page you're looking for doesn't exist or may have moved.
          </p>
          <Link
            to="/"
            style={{
              display: "inline-block",
              padding: "13px 32px",
              background: T.navy,
              color: T.white,
              fontFamily: F.body,
              fontWeight: 600,
              fontSize: 15,
              borderRadius: T.radius,
              textDecoration: "none",
            }}
          >
            Back to Homepage
          </Link>
        </div>
      </Section>
    </>
  );
}
