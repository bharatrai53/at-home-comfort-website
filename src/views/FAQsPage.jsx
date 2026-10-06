import { T, F } from "../tokens";
import { FAQ_DATA } from "../data";
import { Section } from "../components/ui/Section";
import { ButtonLink, SecondaryAnchor } from "../components/ui/Buttons";
import { PageSEO } from "../components/PageSEO";
import { PageHero } from "../components/PageHero";
import { CTABand } from "../components/CTABand";
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
          {categories.map((category) => (
            <a key={category.key} href={`#${category.key}`} style={{ background: T.cream, color: T.navy, border: `1px solid ${T.border}`, borderRadius: 100, padding: "10px 16px", fontFamily: F.body, fontSize: 13, textDecoration: "none", textAlign: "center" }}>{category.label}</a>
          ))}
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {categories.map((category) => (
            <section key={category.key} id={category.key} style={{ scrollMarginTop: 150, marginBottom: 36 }} aria-labelledby={`${category.key}-heading`}>
              <h2 id={`${category.key}-heading`} style={{ fontFamily: F.display, fontSize: 26, fontWeight: 600, color: T.navy, marginBottom: 8 }}>{category.label}</h2>
              {category.faqs.map((faq) => <FAQHubItem key={faq.q} q={faq.q} a={faq.a} />)}
            </section>
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
              <SecondaryAnchor href="tel:9256056218">Call Us</SecondaryAnchor>
            </div>
          </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}
