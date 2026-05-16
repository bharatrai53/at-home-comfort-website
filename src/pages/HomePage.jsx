import { T, F, W } from "../tokens";
import { FAQ_DATA } from "../data";
import { buildLocalBusinessSchema } from "../seo/schema";
import { Reveal } from "../components/ui/Reveal";
import { GoldDivider } from "../components/ui/GoldDivider";
import { SectionLabel } from "../components/ui/SectionLabel";
import { ButtonLink, SecondaryAnchor } from "../components/ui/Buttons";
import { IconCard } from "../components/ui/IconCard";
import { PageSEO } from "../components/PageSEO";
import { CTABand } from "../components/CTABand";
import { MicroFAQBlock } from "../components/MicroFAQ";
import { ExploreMore } from "../components/ExploreMore";
import { Ico } from "../components/Icons";

export function HomePage() {
  const homeFaqs = [
    FAQ_DATA.fitCare[0],
    FAQ_DATA.fitCare[1],
    FAQ_DATA.safetyStaffing[0],
    FAQ_DATA.costPayment[0],
    FAQ_DATA.smallHome[0],
    FAQ_DATA.toursAdmissions[0],
  ];

  return (
    <>
      <PageSEO
        title="Assisted Living in Manteca, CA | At Home Comfort Assisted Living"
        description="A small, family-style assisted living home in Manteca, CA offering personalized senior care, daily support, meals, medication routines, and private tours."
        path="/"
        image="https://athomecomfortliving.com/outside.jpg"
        faqs={homeFaqs}
        crumbs={[{ name: "Home", path: "/" }]}
        extraSchema={[buildLocalBusinessSchema()]}
      />
      <div style={{ position: "relative", width: "100%", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: T.navy }}>
        <img src="/updatedrooms/IMG_9762.jpg" alt="Warm living room inside At Home Comfort Assisted Living in Manteca" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center bottom, rgba(26,39,68,0.4) 0%, rgba(26,39,68,0.8) 70%)" }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "120px 24px 60px", maxWidth: 760 }}>
          <Reveal>
            <p style={{ fontFamily: F.body, fontSize: 12, fontWeight: 600, color: T.gold, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 24 }}>
              At Home Comfort Assisted Living · Manteca, CA
            </p>
            <h1 style={{ fontFamily: F.display, fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 600, color: T.white, lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: 20 }}>
              Where Comfort Feels Like Home
            </h1>
            <p style={{ fontFamily: F.body, fontSize: "clamp(16px, 2vw, 19px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: 620, margin: "0 auto 40px" }}>
              A small residential care home offering personalized senior care, daily living support, medication routines, meals, and private tours for families throughout Manteca and surrounding communities.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <ButtonLink to="/schedule-a-tour/" style={{ background: T.gold, boxShadow: "0 4px 24px rgba(196,154,82,0.35)" }}>
                Schedule a Tour
              </ButtonLink>
              <SecondaryAnchor href="tel:9256058864" style={{ color: T.white, borderColor: "rgba(255,255,255,0.3)" }}>
                Call Us
              </SecondaryAnchor>
            </div>
          </Reveal>
        </div>
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 2, opacity: 0.4 }}>
          <div style={{ width: 1, height: 40, background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.5))", margin: "0 auto 8px" }} />
          <div style={{ fontFamily: F.body, fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</div>
        </div>
      </div>

      <div style={{ background: T.cream, padding: "100px 24px 0" }}>
        <div style={{ ...W, textAlign: "center" }}>
          <Reveal>
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 32 }}>
                <div style={{ flex: 1, height: 1, background: T.border }} />
                <div style={{ color: T.gold }}>{Ico.personalized}</div>
                <div style={{ flex: 1, height: 1, background: T.border }} />
              </div>
              <p style={{ fontFamily: F.display, fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 500, color: T.navy, lineHeight: 1.5, fontStyle: "italic" }}>
                "Senior care should never feel clinical or impersonal. It should feel like family. It should feel like home."
              </p>
              <p style={{ fontFamily: F.body, fontSize: 14, color: T.gold, fontWeight: 600, marginTop: 16, letterSpacing: "0.08em" }}>
                — Parminder, Founder
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div style={{ background: T.cream, padding: "80px 24px 100px" }}>
        <div style={{ ...W }}>
          <div style={{ display: "flex", gap: 60, flexWrap: "wrap", alignItems: "stretch" }}>
            <Reveal style={{ flex: "1 1 440px", minWidth: 280, display: "flex" }}>
              <div style={{ borderRadius: T.radiusLg, overflow: "hidden", boxShadow: "0 20px 60px rgba(26,39,68,0.12)", flex: 1, minHeight: 320 }}>
                <img src="/outside.jpg" alt="Exterior of At Home Comfort Assisted Living in Manteca, California" loading="lazy" style={{ width: "100%", height: "100%", display: "block", objectFit: "cover", objectPosition: "center center" }} />
              </div>
            </Reveal>
            <div style={{ flex: "1 1 420px", minWidth: 280 }}>
              <Reveal>
                <SectionLabel text="Why Families Choose Us" align="left" />
                <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px, 3.5vw, 38px)", fontWeight: 600, color: T.navy, lineHeight: 1.2, margin: "8px 0 16px" }}>
                  Personal Care,
                  <br />
                  Not Institutional Care
                </h2>
                <div style={{ width: 40, height: 2, background: T.gold, marginBottom: 28 }} />
                <p style={{ fontFamily: F.body, fontSize: 16, color: T.textBody, lineHeight: 1.8, marginBottom: 18 }}>
                  We intentionally keep our Manteca assisted living home small so residents are known by name, by routine, and by the little things that help each day feel comfortable. Families looking for a private assisted living home or small board and care setting often want less noise, more consistency, and a stronger sense of connection.
                </p>
                <p style={{ fontFamily: F.body, fontSize: 16, color: T.textBody, lineHeight: 1.8, marginBottom: 28 }}>
                  That is what we work to provide here: personalized senior care, daily living support, medication routines, home-style meals, and a calm environment for residents and families across Manteca, Stockton, Lathrop, Ripon, Tracy, and San Joaquin County.
                </p>
              </Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { icon: Ico.personalized, title: "Individualized Care", text: "Tailored to each resident's routines, preferences, and comfort." },
                  { icon: Ico.homelike, title: "Calm, Familiar Setting", text: "Quieter spaces, consistent faces, and a rhythm that feels like home." },
                  { icon: Ico.activities, title: "Families Stay Connected", text: "Open-door visiting and transparent communication from the first tour forward." },
                ].map((point, index) => (
                  <Reveal key={point.title} delay={index * 0.1}>
                    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: T.goldMuted, display: "flex", alignItems: "center", justifyContent: "center", color: T.gold, flexShrink: 0 }}>
                        {point.icon}
                      </div>
                      <div>
                        <div style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: T.navy, marginBottom: 2 }}>{point.title}</div>
                        <div style={{ fontFamily: F.body, fontSize: 13.5, color: T.textLight, lineHeight: 1.55 }}>{point.text}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", aspectRatio: "21/8", overflow: "hidden", position: "relative" }}>
        <img src="/updatedrooms/IMG_9749.jpg" alt="Comfortable shared living area inside the home" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", display: "block", filter: "contrast(1.06) saturate(1.15)" }} />
      </div>

      <div style={{ background: T.cream, padding: "100px 24px" }}>
        <div style={{ ...W, textAlign: "center" }}>
          <Reveal>
            <SectionLabel text="Daily Support" />
            <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, color: T.navy, lineHeight: 1.2, marginBottom: 12 }}>
              What Care Looks Like Here
            </h2>
            <GoldDivider />
            <p style={{ fontFamily: F.body, fontSize: 16, color: T.textLight, lineHeight: 1.7, maxWidth: 640, margin: "20px auto 48px" }}>
              From the first cup of coffee to the last goodnight, every part of the day is supported with warmth, patience, and attention, including daily living support, medication routines, meals, mobility help, and family communication.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 18, marginBottom: 48 }}>
            <IconCard icon={Ico.adl} label="ADL Support" delay={0} />
            <IconCard icon={Ico.meds} label="Medication Routines" delay={0.06} />
            <IconCard icon={Ico.meals} label="Home-Cooked Meals" delay={0.12} />
            <IconCard icon={Ico.mobility} label="Mobility Assistance" delay={0.18} />
            <IconCard icon={Ico.activities} label="Daily Activities" delay={0.24} />
            <IconCard icon={Ico.support24} label="24/7 Care Team" delay={0.3} />
          </div>
          <Reveal>
            <p style={{ fontFamily: F.display, fontSize: 20, fontWeight: 500, color: T.navy, fontStyle: "italic", maxWidth: 600, margin: "0 auto" }}>
              "We keep it small so we can keep it personal."
            </p>
          </Reveal>
        </div>
      </div>

      <div style={{ background: T.offWhite, padding: "100px 24px" }}>
        <div style={{ ...W }}>
          <Reveal>
            <SectionLabel text="Step Inside" />
            <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, color: T.navy, lineHeight: 1.2, textAlign: "center", marginBottom: 12 }}>
              See Where Your Loved One Will Live
            </h2>
            <GoldDivider />
            <p style={{ fontFamily: F.body, fontSize: 16, color: T.textLight, textAlign: "center", lineHeight: 1.7, maxWidth: 620, margin: "18px auto 0" }}>
              Private tours help families understand the space, meet our team, and picture what daily life can feel like in a small assisted living home in Manteca, CA.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gridTemplateRows: "repeat(3, 160px)", gap: 12, marginTop: 48 }}>
            <Reveal style={{ gridRow: "span 3", borderRadius: T.radiusLg, overflow: "hidden", height: "100%" }}>
              <img src="/updatedrooms/IMG_9689.jpg" alt="Private resident bedroom at At Home Comfort Assisted Living" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </Reveal>
            <Reveal delay={0.08} style={{ borderRadius: T.radiusLg, overflow: "hidden" }}>
              <img src="/updatedrooms/IMG_9759.jpg" alt="Shared common living area with natural light" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </Reveal>
            <Reveal delay={0.16} style={{ borderRadius: T.radiusLg, overflow: "hidden" }}>
              <img src="/updatedrooms/IMG_9771.jpg" alt="Bright private room with comfortable furnishings" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </Reveal>
            <Reveal delay={0.24} style={{ borderRadius: T.radiusLg, overflow: "hidden" }}>
              <img src="/updatedrooms/IMG_9766.jpg" alt="Clean private bathroom inside the home" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </Reveal>
          </div>
        </div>
      </div>

      <div style={{ background: T.navy, padding: "100px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -120, left: -120, width: 400, height: 400, borderRadius: "50%", background: "rgba(196,154,82,0.04)" }} />
        <div style={{ ...W, position: "relative", zIndex: 1 }}>
          <Reveal>
            <SectionLabel text="Getting Started" />
            <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, color: T.white, lineHeight: 1.2, textAlign: "center", marginBottom: 12 }}>
              Your Journey Starts with a Visit
            </h2>
            <div style={{ width: 48, height: 2, background: T.gold, borderRadius: 1, margin: "0 auto 48px" }} />
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 40, textAlign: "center" }}>
            {[
              { num: "01", title: "Schedule a Tour", text: "Call or fill out our form. Walk through the home, meet the team, and feel the environment firsthand." },
              { num: "02", title: "Meet & Assess Needs", text: "We sit down together and build a care plan around your loved one's routines, preferences, and needs." },
              { num: "03", title: "A Smooth Move-In", text: "We support the transition step by step with familiar items, consistent faces, and patience from day one." },
            ].map((step, index) => (
              <Reveal key={step.num} delay={index * 0.15}>
                <div>
                  <div style={{ fontFamily: F.display, fontSize: 48, fontWeight: 700, color: T.gold, opacity: 0.25, marginBottom: 8 }}>{step.num}</div>
                  <h3 style={{ fontFamily: F.display, fontSize: 21, fontWeight: 600, color: T.white, marginBottom: 10 }}>{step.title}</h3>
                  <p style={{ fontFamily: F.body, fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <ButtonLink to="/schedule-a-tour/" style={{ background: T.gold, boxShadow: "0 4px 24px rgba(196,154,82,0.3)" }}>
                Schedule a Tour
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>

      <div style={{ background: T.cream, padding: "100px 24px" }}>
        <div style={{ ...W }}>
          <div style={{ display: "flex", gap: 60, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: "1 1 420px", minWidth: 280 }}>
              <Reveal>
                <SectionLabel text="Peace of Mind" align="left" />
                <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px, 3.5vw, 38px)", fontWeight: 600, color: T.navy, lineHeight: 1.2, margin: "8px 0 16px" }}>
                  Your Family Is
                  <br />
                  in Good Hands
                </h2>
                <div style={{ width: 40, height: 2, background: T.gold, marginBottom: 28 }} />
                <p style={{ fontFamily: F.body, fontSize: 16, color: T.textBody, lineHeight: 1.8, marginBottom: 28 }}>
                  Choosing assisted living is not easy. We work to make that decision gentler by providing a steady, trustworthy environment where residents are safe, supported, and genuinely cared for every day.
                </p>
              </Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  { icon: Ico.safety, title: "24/7 On-Site Staff", text: "Round-the-clock support with clear emergency protocols." },
                  { icon: Ico.consistency, title: "Consistent Caregivers", text: "The same team each day, building familiarity and trust." },
                  { icon: Ico.personalized, title: "Transparent Communication", text: "Families stay informed and included throughout the care journey." },
                ].map((point, index) => (
                  <Reveal key={point.title} delay={index * 0.1}>
                    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: T.goldMuted, display: "flex", alignItems: "center", justifyContent: "center", color: T.gold, flexShrink: 0 }}>
                        {point.icon}
                      </div>
                      <div>
                        <div style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: T.navy, marginBottom: 2 }}>{point.title}</div>
                        <div style={{ fontFamily: F.body, fontSize: 13.5, color: T.textLight, lineHeight: 1.55 }}>{point.text}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={0.15} style={{ flex: "1 1 400px", minWidth: 280 }}>
              <div style={{ borderRadius: T.radiusLg, overflow: "hidden", boxShadow: "0 20px 60px rgba(26,39,68,0.12)" }}>
                <img src="/outside.jpg" alt="Front of the assisted living home in Manteca" loading="lazy" style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "4/5" }} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <MicroFAQBlock title="Questions Families Ask Most" faqs={homeFaqs} bg={T.offWhite} />
      <ExploreMore />
      <CTABand />
    </>
  );
}
