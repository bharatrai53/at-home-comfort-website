import { useState } from "react";
import { Link } from "react-router-dom";
import { T, F } from "../tokens";
import { Ico } from "./Icons";
import { Section } from "./ui/Section";
import { SectionLabel } from "./ui/SectionLabel";
import { GoldDivider } from "./ui/GoldDivider";
import { Reveal } from "./ui/Reveal";

function MicroFAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: `1px solid ${T.border}`, padding: "16px 0" }}>
      <button
        onClick={() => setOpen((value) => !value)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: F.body,
            fontSize: 15,
            fontWeight: 600,
            color: T.navy,
            paddingRight: 16,
          }}
        >
          {q}
        </span>
        <span
          style={{
            color: T.gold,
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.3s",
          }}
        >
          {Ico.chevDown}
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 320 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s ease",
          opacity: open ? 1 : 0,
        }}
      >
        <p
          style={{
            fontFamily: F.body,
            fontSize: 14,
            color: T.textBody,
            lineHeight: 1.75,
            paddingTop: 10,
            margin: 0,
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export function MicroFAQBlock({ title, faqs, bg = T.cream }) {
  return (
    <Section bg={bg}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <Reveal>
          <SectionLabel text="Common Questions" />
          <h2
            style={{
              fontFamily: F.display,
              fontSize: 28,
              fontWeight: 600,
              color: T.navy,
              textAlign: "center",
              marginBottom: 8,
            }}
          >
            {title}
          </h2>
          <GoldDivider />
        </Reveal>
        <div style={{ marginTop: 32 }}>
          {faqs.map((faq) => (
            <MicroFAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
        <Reveal>
          <p
            style={{
              fontFamily: F.body,
              fontSize: 14,
              color: T.textLight,
              textAlign: "center",
              marginTop: 24,
            }}
          >
            Have more questions? Visit our{" "}
            <Link to="/faqs/" style={{ color: T.gold, fontWeight: 600 }}>
              FAQ page
            </Link>{" "}
            or schedule a tour.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
