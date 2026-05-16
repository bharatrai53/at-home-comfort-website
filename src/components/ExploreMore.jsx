import { Link } from "react-router-dom";
import { T, F } from "../tokens";
import { helpfulLinks } from "../data";
import { Section } from "./ui/Section";
import { SectionLabel } from "./ui/SectionLabel";
import { GoldDivider } from "./ui/GoldDivider";
import { Reveal } from "./ui/Reveal";

export function ExploreMore() {
  return (
    <Section bg={T.cream} style={{ paddingTop: 56, paddingBottom: 64 }}>
      <Reveal>
        <SectionLabel text="Helpful Pages" />
        <h2
          style={{
            fontFamily: F.display,
            fontSize: "clamp(24px, 3vw, 32px)",
            color: T.navy,
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Explore More
        </h2>
        <GoldDivider />
      </Reveal>
      <div className="helpful-links-grid" style={{ marginTop: 32 }}>
        {helpfulLinks.map((link, index) => (
          <Reveal key={link.path} delay={index * 0.04}>
            <Link
              to={link.path}
              style={{
                display: "block",
                background: T.white,
                border: `1px solid ${T.border}`,
                borderRadius: T.radiusLg,
                padding: "18px 20px",
                textDecoration: "none",
                color: T.navy,
                fontFamily: F.body,
                fontWeight: 600,
                textAlign: "center",
                boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
              }}
            >
              {link.label}
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
