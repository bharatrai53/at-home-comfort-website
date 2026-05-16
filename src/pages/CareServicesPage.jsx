import { T } from "../tokens";
import { FAQ_DATA } from "../data";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { IconCard } from "../components/ui/IconCard";
import { ImgPlaceholder } from "../components/ui/ImgPlaceholder";
import { PageSEO } from "../components/PageSEO";
import { PageHero } from "../components/PageHero";
import { CTABand } from "../components/CTABand";
import { MicroFAQBlock } from "../components/MicroFAQ";
import { ExploreMore } from "../components/ExploreMore";
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
      <MicroFAQBlock title="Care & Services Questions" faqs={careFaqs} bg={T.offWhite} />
      <ExploreMore />
      <CTABand />
    </>
  );
}
