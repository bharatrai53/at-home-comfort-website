import { T, F } from "../tokens";
import { FAQ_DATA } from "../data";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";
import { PageSEO } from "../components/PageSEO";
import { PageHero } from "../components/PageHero";
import { CTABand } from "../components/CTABand";
import { MicroFAQBlock } from "../components/MicroFAQ";

export function AdmissionsPage() {
  const admissionsFaqs = [
    FAQ_DATA.toursAdmissions[0],
    FAQ_DATA.toursAdmissions[1],
    FAQ_DATA.toursAdmissions[2],
    FAQ_DATA.toursAdmissions[3],
    FAQ_DATA.costPayment[0],
    FAQ_DATA.costPayment[2],
  ];

  return (
    <>
      <PageSEO
        title="Admissions & Tours | At Home Comfort Assisted Living Manteca"
        description="Schedule a private tour, discuss care needs, and learn about admissions at At Home Comfort Assisted Living in Manteca, CA."
        path="/admissions/"
        faqs={admissionsFaqs}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Admissions", path: "/admissions/" },
        ]}
      />
      <PageHero title="Admissions" subtitle="A simple, supported process from first call to move-in day." />
      <Section bg={T.offWhite}>
        <SectionHeader
          label="The Process"
          title="How to Get Started with Assisted Living"
          subtitle="Admissions is designed to be simple: tour the home, discuss care needs, review fit, and plan move-in if it feels right for your family."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32, textAlign: "center" }}>
          {[
            { num: "01", title: "Schedule a Tour", text: "Call or fill out our form to arrange a personal visit. We answer questions before, during, and after your tour." },
            { num: "02", title: "Meet & Assess Needs", text: "Our care team creates a tailored plan based on your loved one's routines, preferences, and support needs." },
            { num: "03", title: "Move-In Plan", text: "We coordinate a comfortable transition so the home feels familiar and supportive from day one." },
          ].map((step, index) => (
            <Reveal key={step.num} delay={index * 0.12}>
              <div style={{ background: T.white, borderRadius: T.radiusLg, padding: 36, border: `1px solid ${T.border}` }}>
                <div style={{ fontFamily: F.display, fontSize: 44, fontWeight: 700, color: T.gold, opacity: 0.3, marginBottom: 8 }}>{step.num}</div>
                <h3 style={{ fontFamily: F.display, fontSize: 20, fontWeight: 600, color: T.navy, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontFamily: F.body, fontSize: 14, color: T.textLight, lineHeight: 1.6, margin: 0 }}>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <MicroFAQBlock title="Admissions & Cost Questions" faqs={admissionsFaqs} bg={T.cream} />
      <CTABand />
    </>
  );
}
