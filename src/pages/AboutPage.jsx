import { T, F } from "../tokens";
import { Reveal } from "../components/ui/Reveal";
import { GoldDivider } from "../components/ui/GoldDivider";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Section } from "../components/ui/Section";
import { PageSEO } from "../components/PageSEO";
import { CTABand } from "../components/CTABand";
import { ExploreMore } from "../components/ExploreMore";

export function AboutPage() {
  return (
    <>
      <PageSEO
        title="About At Home Comfort Assisted Living | Manteca, CA"
        description="Learn the family story behind At Home Comfort Assisted Living, a small senior care home in Manteca built around dignity, warmth, and personalized care."
        path="/about/"
        image="https://athomecomfortliving.com/IMG_1960.JPEG"
        crumbs={[{ name: "Home", path: "/" }, { name: "About", path: "/about/" }]}
      />
      <div style={{ position: "relative", width: "100%", minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: `linear-gradient(to bottom, #3D2010 0%, #8B5220 35%, ${T.gold} 65%, #F0DFB8 85%, ${T.offWhite} 100%)` }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 65% 35%, rgba(255,215,100,0.3) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "100px 24px 60px", maxWidth: 640 }}>
          <Reveal>
            <GoldDivider width={36} />
            <h1 style={{ fontFamily: F.display, fontSize: "clamp(32px, 5vw, 50px)", fontWeight: 600, color: T.white, lineHeight: 1.15, margin: "20px 0 14px", textShadow: "0 2px 20px rgba(0,0,0,0.25)" }}>
              Our Story
            </h1>
            <p style={{ fontFamily: F.body, fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.65, maxWidth: 480, margin: "0 auto", textShadow: "0 1px 8px rgba(0,0,0,0.15)" }}>
              A home built on love, inspired by family.
            </p>
          </Reveal>
        </div>
      </div>
      <Section bg={T.offWhite}>
        <Reveal style={{ textAlign: "center", marginBottom: 40 }}>
          <SectionLabel text="From Our Founder" />
          <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 600, color: T.navy, lineHeight: 1.2, margin: "10px 0 10px" }}>
            A Home Inspired by Kishan
          </h2>
          <GoldDivider width={36} />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="founder-layout" style={{ display: "flex", gap: 40, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: F.body, fontSize: 16, color: T.textBody, lineHeight: 1.85, marginBottom: 16 }}>
                At Home Comfort Assisted Living was founded with a deeply personal purpose. Parminder created this home in Manteca after seeing firsthand how much dignity, comfort, and calm matter in later life.
              </p>
              <p style={{ fontFamily: F.body, fontSize: 16, color: T.textBody, lineHeight: 1.85 }}>
                Her beloved grandmother, Kishan, moved to the United States at the age of 100 and lived a long, beautiful life until she passed at 112. Caring for her was not just a responsibility. It was a gift and a lesson in how elders deserve to be treated.
              </p>
            </div>
            <div className="founder-image" style={{ width: "28%", flexShrink: 0 }}>
              <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 12px 40px rgba(26,39,68,0.18)", border: `2px solid ${T.navy}` }}>
                <img src="/IMG_1960.JPEG" alt="Parminder with her grandmother Kishan, the inspiration behind At Home Comfort Assisted Living" loading="lazy" style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "4/5" }} />
              </div>
              <p style={{ fontFamily: F.display, fontSize: 13, color: T.textLight, fontStyle: "italic", textAlign: "center", marginTop: 10 }}>
                Parminder with her grandmother, Kishan
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: F.body, fontSize: 16, color: T.textBody, lineHeight: 1.85, marginBottom: 16 }}>
                Seeing how she was cared for at home shaped a simple belief: senior care should never feel rushed, cold, or impersonal. It should feel like family. It should feel like home.
              </p>
              <p style={{ fontFamily: F.body, fontSize: 16, color: T.textBody, lineHeight: 1.85, marginBottom: 20 }}>
                Today, that belief guides every part of the home, from personalized daily support to warm meals, respectful routines, and family communication built on trust.
              </p>
              <p style={{ fontFamily: F.display, fontSize: 18, fontWeight: 600, color: T.navy, lineHeight: 1.5 }}>
                This is more than a care home. This is home.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>
      <Section bg={T.cream}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <p style={{ fontFamily: F.display, fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 500, color: T.navy, lineHeight: 1.65, fontStyle: "italic", margin: "0 0 24px" }}>
              "That belief is the foundation of At Home Comfort Assisted Living. I intentionally keep our community small so each resident receives genuine attention, meaningful relationships, and the same compassion I witnessed in my own family."
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <div style={{ width: 24, height: 1, background: T.gold }} />
              <span style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: T.gold }}>
                Parminder, Founder
              </span>
              <div style={{ width: 24, height: 1, background: T.gold }} />
            </div>
          </Reveal>
        </div>
      </Section>
      <ExploreMore />
      <CTABand />
    </>
  );
}
