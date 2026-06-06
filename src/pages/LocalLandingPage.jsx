import { Link } from "react-router-dom";
import { T, F } from "../tokens";
import { localPageConfigs, cityHubs } from "../data/localPages";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { SectionLabel } from "../components/ui/SectionLabel";
import { ButtonLink, SecondaryLink } from "../components/ui/Buttons";
import { Reveal } from "../components/ui/Reveal";
import { PageSEO } from "../components/PageSEO";
import { PageHero } from "../components/PageHero";
import { CTABand } from "../components/CTABand";
import { MicroFAQBlock } from "../components/MicroFAQ";

function LocalLandingPage({ config }) {
  return (
    <>
      <PageSEO
        title={config.title}
        description={config.description}
        path={config.path}
        image="https://athomecomfortliving.com/outside.jpg"
        faqs={config.faqs}
        crumbs={[
          { name: "Home", path: "/" },
          { name: config.h1, path: config.path },
        ]}
      />
      <PageHero title={config.h1} subtitle={config.description} image="/outside.jpg" alt="Exterior of At Home Comfort Assisted Living in Manteca" />
      <Section bg={T.offWhite}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <Reveal>
            <SectionLabel text="Local Senior Care" align="left" />
            <p style={{ fontFamily: F.body, fontSize: 17, color: T.textBody, lineHeight: 1.85, marginBottom: 24 }}>
              {config.intro}
            </p>
          </Reveal>
          {config.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 30)} delay={index * 0.03}>
              {index === 0 && (
                <h2 style={{ fontFamily: F.display, fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 600, color: T.navy, lineHeight: 1.3, margin: "8px 0 12px" }}>
                  Why Families Choose a Small Residential Care Home
                </h2>
              )}
              {index === 2 && (
                <h2 style={{ fontFamily: F.display, fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 600, color: T.navy, lineHeight: 1.3, margin: "28px 0 12px" }}>
                  Personalized Daily Living Support
                </h2>
              )}
              {index === 4 && (
                <h2 style={{ fontFamily: F.display, fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 600, color: T.navy, lineHeight: 1.3, margin: "28px 0 12px" }}>
                  A Calm and Welcoming Environment
                </h2>
              )}
              {index === 6 && (
                <h2 style={{ fontFamily: F.display, fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 600, color: T.navy, lineHeight: 1.3, margin: "28px 0 12px" }}>
                  Schedule a Private Tour
                </h2>
              )}
              <p style={{ fontFamily: F.body, fontSize: 16, color: T.textBody, lineHeight: 1.9, marginBottom: 22 }}>
                {paragraph}
              </p>
            </Reveal>
          ))}
          <Reveal>
            <div style={{ marginTop: 18, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <ButtonLink to="/schedule-a-tour/" style={{ background: T.gold, boxShadow: "0 4px 20px rgba(196,154,82,0.3)" }}>
                Schedule a Tour
              </ButtonLink>
              <SecondaryLink to="/care-and-services/">
                View Care & Services
              </SecondaryLink>
            </div>
          </Reveal>
        </div>
      </Section>
      <Section bg={T.cream}>
        <SectionHeader
          label="Helpful Resources"
          title="Explore More About the Home"
          subtitle="Families comparing options often find these pages helpful while deciding on care, location, and fit."
        />
        <div className="helpful-links-grid">
          {[
            { label: "Care & Services", path: "/care-and-services/" },
            { label: "Virtual Tour", path: "/virtual-tour/" },
            { label: "Admissions", path: "/admissions/" },
            { label: "FAQs", path: "/faqs/" },
            { label: "Schedule a Tour", path: "/schedule-a-tour/" },
          ].map((link) => (
            <Link key={link.path} to={link.path} style={{ display: "block", background: T.white, border: `1px solid ${T.border}`, borderRadius: T.radiusLg, padding: "18px 20px", textDecoration: "none", color: T.navy, fontFamily: F.body, fontWeight: 600, textAlign: "center" }}>
              {link.label}
            </Link>
          ))}
        </div>
      </Section>
      <MicroFAQBlock title={config.faqTitle} faqs={config.faqs} bg={T.offWhite} />
      <Section bg={T.cream}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontFamily: F.body, fontSize: 13, fontWeight: 600, color: T.gold, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>
            Also Serving Families Near
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {cityHubs
              .filter((hub) => hub.path !== config.path)
              .map((hub) => (
                <Link
                  key={hub.path}
                  to={hub.path}
                  style={{
                    fontFamily: F.body,
                    fontSize: 13.5,
                    fontWeight: 500,
                    color: T.navy,
                    background: T.white,
                    border: `1px solid ${T.border}`,
                    borderRadius: 999,
                    padding: "6px 16px",
                    textDecoration: "none",
                  }}
                >
                  {hub.label}
                </Link>
              ))}
          </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}

export const localLandingRoutes = localPageConfigs.map((config) => ({
  path: config.path,
  element: <LocalLandingPage config={config} />,
}));
