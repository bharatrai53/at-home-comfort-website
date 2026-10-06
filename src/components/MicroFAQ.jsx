import Link from "next/link";
import { T, F } from "../tokens";
import { FAQHubItem } from "./FAQHubItem";
import { Section } from "./ui/Section";
import { SectionLabel } from "./ui/SectionLabel";
import { GoldDivider } from "./ui/GoldDivider";
import { Reveal } from "./ui/Reveal";

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
            <FAQHubItem key={faq.q} q={faq.q} a={faq.a} />
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
            <Link href="/faqs/" style={{ color: T.gold, fontWeight: 600 }}>
              FAQ page
            </Link>{" "}
            or schedule a tour.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
