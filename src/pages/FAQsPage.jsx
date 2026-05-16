import { useState } from "react";
import { T, F } from "../tokens";
import { FAQ_DATA } from "../data";
import { Section } from "../components/ui/Section";
import { ButtonLink, SecondaryAnchor } from "../components/ui/Buttons";
import { Reveal } from "../components/ui/Reveal";
import { PageSEO } from "../components/PageSEO";
import { PageHero } from "../components/PageHero";
import { CTABand } from "../components/CTABand";
import { ExploreMore } from "../components/ExploreMore";
import { FAQHubItem } from "../components/FAQHubItem";

export function FAQsPage() {
  const categories = [
    { key: "fitCare", label: "Fit & Care", faqs: FAQ_DATA.fitCare },
    { key: "safetyStaffing", label: "Safety & Staffing", faqs: FAQ_DATA.safetyStaffing },
    { key: "dailyLife", label: "Daily Life", faqs: FAQ_DATA.dailyLife },
    { key: "costPayment", label: "Cost & Payment", faqs: FAQ_DATA.costPayment },
    { key: "toursAdmissions", label: "Tours & Admissions", faqs: FAQ_DATA.toursAdmissions },
    { key: "smallHome", label: "Small-Home Living", faqs: FAQ_DATA.smallHome },
  ];
  const [activeTab, setActiveTab] = useState("fitCare");
  const currentCategory = categories.find((category) => category.key === activeTab);
  const allFaqs = categories.flatMap((category) => category.faqs);

  return (
    <>
      <PageSEO
        title="Assisted Living FAQs | At Home Comfort Assisted Living"
        description="Answers to common family questions about assisted living, safety, staffing, cost, admissions, daily life, and small-home senior care in Manteca."
        path="/faqs/"
        faqs={allFaqs}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "FAQs", path: "/faqs/" },
        ]}
      />
      <PageHero title="Frequently Asked Questions" subtitle="Clear answers to the questions families ask most about assisted living." />
      <Section bg={T.offWhite}>
        <div className="faq-tabs">
          {categories.map((category) => {
            const active = activeTab === category.key;
            return (
              <button
                key={category.key}
                onClick={() => setActiveTab(category.key)}
                style={{
                  width: "100%",
                  background: active ? T.navy : T.cream,
                  color: active ? T.white : T.textBody,
                  border: `1.5px solid ${active ? T.navy : T.border}`,
                  borderRadius: 100,
                  padding: "10px 16px",
                  fontFamily: F.body,
                  fontSize: 13,
                  fontWeight: active ? 600 : 400,
                  cursor: "pointer",
                }}
              >
                {category.label}
              </button>
            );
          })}
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontFamily: F.display, fontSize: 26, fontWeight: 600, color: T.navy, marginBottom: 8 }}>
              {currentCategory.label}
            </h2>
            <div style={{ width: 32, height: 2, background: T.gold, borderRadius: 1, marginBottom: 28 }} />
          </Reveal>
          {currentCategory.faqs.map((faq) => (
            <FAQHubItem key={`${currentCategory.key}-${faq.q}`} q={faq.q} a={faq.a} />
          ))}
          <div style={{ marginTop: 40, padding: "24px 28px", background: T.cream, borderRadius: T.radiusLg, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <p style={{ fontFamily: F.display, fontSize: 17, fontWeight: 600, color: T.navy, margin: "0 0 4px" }}>
                Still have questions?
              </p>
              <p style={{ fontFamily: F.body, fontSize: 14, color: T.textLight, margin: 0 }}>
                We are happy to talk through anything before you visit.
              </p>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <ButtonLink to="/schedule-a-tour/">Schedule a Tour</ButtonLink>
              <SecondaryAnchor href="tel:9256058864">Call Us</SecondaryAnchor>
            </div>
          </div>
        </div>
      </Section>
      <ExploreMore />
      <CTABand />
    </>
  );
}
