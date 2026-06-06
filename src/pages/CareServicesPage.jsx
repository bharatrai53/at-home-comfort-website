import { T, F } from "../tokens";
import { FAQ_DATA } from "../data";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { IconCard } from "../components/ui/IconCard";
import { ImgPlaceholder } from "../components/ui/ImgPlaceholder";
import { PageSEO } from "../components/PageSEO";
import { PageHero } from "../components/PageHero";
import { CTABand } from "../components/CTABand";
import { MicroFAQBlock } from "../components/MicroFAQ";
import { Ico } from "../components/Icons";
import { Reveal } from "../components/ui/Reveal";

export function CareServicesPage() {
  const careFaqs = [
    FAQ_DATA.fitCare[2],
    FAQ_DATA.fitCare[3],
    FAQ_DATA.fitCare[4],
    FAQ_DATA.safetyStaffing[0],
    FAQ_DATA.dailyLife[0],
    FAQ_DATA.dailyLife[2],
  ];

  return (
    <>
      <PageSEO
        title="Care & Services | Assisted Living Support in Manteca, CA"
        description="Personalized assisted living services in Manteca, including daily living support, meals, safety supervision, medication routines, mobility help, and family communication."
        path="/care-and-services/"
        image="https://athomecomfortliving.com/updatedrooms/IMG_9760.jpg"
        faqs={careFaqs}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Care & Services", path: "/care-and-services/" },
        ]}
      />
      <PageHero title="Care & Services" subtitle="Personalized daily support in a calm, homelike setting." image="/updatedrooms/IMG_9760.jpg" alt="Comfortable assisted living interior in Manteca" />
      <Section bg={T.offWhite}>
        <SectionHeader
          label="What We Provide"
          title="Assisted Living Services Tailored to Each Resident"
          subtitle="We provide help with daily activities, medication routines, meals, safety supervision, mobility help, and family communication in a residential setting designed for comfort and dignity."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 18 }}>
          <IconCard icon={Ico.adl} label="ADL Support" delay={0} />
          <IconCard icon={Ico.meds} label="Medication Support" delay={0.06} />
          <IconCard icon={Ico.meals} label="Nutritious Meals" delay={0.12} />
          <IconCard icon={Ico.mobility} label="Mobility Assistance" delay={0.18} />
          <IconCard icon={Ico.activities} label="Activities & Engagement" delay={0.24} />
          <IconCard icon={Ico.support24} label="24/7 On-Site Staff" delay={0.3} />
        </div>
      </Section>
      <Section bg={T.cream}>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ flex: "1 1 440px", minWidth: 280 }}>
            <SectionHeader
              label="Our Approach"
              title="How We Personalize Care"
              align="left"
              subtitle="We keep our community small so we can learn each resident's routines, preferences, strengths, and comfort needs. Care is built around consistency, familiarity, and respectful support, then reviewed as needs change."
            />
            <p style={{ fontFamily: "var(--font-body, 'Outfit', sans-serif)", fontSize: 15, color: T.textBody, lineHeight: 1.8 }}>
              Families often come to us looking for assisted living in Manteca, a small residential care home, or a more personal alternative to a larger facility. Our role is to help daily life feel manageable and dignified, from morning routines and meals to medication support and evening wind-down.
            </p>
          </div>
          <Reveal delay={0.15} style={{ flex: "1 1 380px", minWidth: 280 }}>
            <ImgPlaceholder src="/updatedrooms/IMG_9743.jpg" alt="Resident room prepared for personalized senior care" aspect="4/3" />
          </Reveal>
        </div>
      </Section>
      <Section bg={T.offWhite}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontFamily: F.display, fontSize: "clamp(26px, 3vw, 34px)", fontWeight: 600, color: T.navy, lineHeight: 1.25, marginBottom: 8 }}>
              Assisted Living Services at Our Manteca Home
            </h2>
            <div style={{ width: 40, height: 2, background: T.gold, marginBottom: 36 }} />
          </Reveal>

          {[
            {
              title: "Daily Living Support (ADL Assistance)",
              body: "Activities of daily living — bathing, dressing, grooming, toileting, and personal hygiene — are the building blocks of a comfortable day. For many residents, needing help with these tasks is the primary reason their family begins exploring assisted living. Our caregivers provide that help with patience and consistency, respecting each person's pace and preference. Support is delivered discreetly and with dignity, so residents feel cared for rather than managed.",
            },
            {
              title: "Medication Routines",
              body: "Consistent medication routines matter for health and safety. Our team supports residents with their prescribed medication schedules using a structured daily process. We track timing, monitor adherence, and communicate with families and healthcare providers as needed. Families often tell us that knowing medications are handled reliably is one of the biggest sources of peace of mind after a loved one moves in.",
            },
            {
              title: "Home-Cooked Nutritious Meals",
              body: "Meals at our home are prepared fresh and served in a home-style setting rather than a cafeteria. We prioritize warm, balanced, and familiar food that supports both physical health and emotional comfort. Dietary preferences, restrictions, and cultural considerations can be accommodated. Shared mealtimes also create a natural rhythm to the day and a sense of community among residents.",
            },
            {
              title: "Mobility Assistance and Fall Prevention",
              body: "Safe movement throughout the home — getting in and out of bed, walking to meals, navigating the bathroom — is something many seniors need help with. Our team provides hands-on mobility assistance and monitors the home environment for fall risks. We balance supporting safe movement with encouraging as much independence as each resident can safely maintain.",
            },
            {
              title: "Activities, Engagement, and Daily Routine",
              body: "Meaningful daily activity is part of what makes life feel worthwhile. We provide structured routines that include light activities, social time, rest, and engagement suited to each resident's interests and energy levels. Whether that means a morning walk in the garden, a quiet activity indoors, or simply conversation with a familiar caregiver, we work to make each day feel purposeful and not just managed.",
            },
            {
              title: "24/7 On-Site Care Staff",
              body: "Our care team is present around the clock. Residents are never alone when they need help — whether that is during the night, early in the morning, or in an unexpected moment. Round-the-clock staffing also allows us to monitor health changes promptly and communicate with families before small concerns become larger ones. For families, knowing someone is always there is one of the most reassuring aspects of residential care.",
            },
          ].map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div style={{ marginBottom: 32, paddingBottom: 32, borderBottom: i < 5 ? `1px solid ${T.border}` : "none" }}>
                <h3 style={{ fontFamily: F.display, fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 600, color: T.navy, marginBottom: 10 }}>
                  {service.title}
                </h3>
                <p style={{ fontFamily: F.body, fontSize: 15, color: T.textBody, lineHeight: 1.85, margin: 0 }}>
                  {service.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <MicroFAQBlock title="Care & Services Questions" faqs={careFaqs} bg={T.cream} />
      <CTABand />
    </>
  );
}
