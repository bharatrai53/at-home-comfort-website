import { useState } from "react";
import { T, F } from "../tokens";
import { Ico } from "../components/Icons";
import { Section } from "../components/ui/Section";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Reveal } from "../components/ui/Reveal";
import { PageSEO } from "../components/PageSEO";
import { PageHero } from "../components/PageHero";

export function ScheduleTourPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    relationship: "",
    message: "",
  });

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: T.radius,
    border: `1px solid ${T.border}`,
    fontFamily: F.body,
    fontSize: 15,
    color: T.navy,
    boxSizing: "border-box",
    background: T.cream,
  };

  const labelStyle = {
    fontFamily: F.body,
    fontSize: 12,
    fontWeight: 600,
    color: T.navy,
    display: "block",
    marginBottom: 6,
    letterSpacing: "0.05em",
  };

  const updateField = (key) => (event) => {
    setFields((current) => ({ ...current, [key]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ "form-name": "tour-request", ...fields }).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setError(true));
  };

  return (
    <>
      <PageSEO
        title="Schedule a Tour | Assisted Living in Manteca, CA"
        description="Contact At Home Comfort Assisted Living to schedule a private tour and discuss care options for your loved one in Manteca, CA."
        path="/schedule-a-tour/"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Schedule a Tour", path: "/schedule-a-tour/" },
        ]}
      />
      <PageHero title="Schedule a Tour" subtitle="See our home in person and discover if At Home Comfort is the right fit." />
      <Section bg={T.cream}>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 460px", minWidth: 280 }}>
            <Reveal>
              <div style={{ background: T.white, borderRadius: T.radiusLg, padding: "40px 36px", border: `1px solid ${T.border}`, boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: T.goldMuted, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: T.gold }}>
                      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 style={{ fontFamily: F.display, fontSize: 28, fontWeight: 600, color: T.navy, marginBottom: 10 }}>
                      Thank You
                    </h2>
                    <p style={{ fontFamily: F.body, fontSize: 16, color: T.textBody, lineHeight: 1.7 }}>
                      We have received your request and will reach out shortly to confirm a tour time.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontFamily: F.display, fontSize: 28, fontWeight: 600, color: T.navy, marginBottom: 8 }}>
                      Request a Tour
                    </h2>
                    <p style={{ fontFamily: F.body, fontSize: 14, color: T.textLight, marginBottom: 28, lineHeight: 1.6 }}>
                      Fill out the form below and we will reach out to confirm a time that works for you.
                    </p>
                    <form onSubmit={handleSubmit} name="tour-request" data-netlify="true" data-netlify-honeypot="bot-field">
                      <input type="hidden" name="form-name" value="tour-request" />
                      <input type="hidden" name="bot-field" />
                      <div style={{ marginBottom: 18 }}>
                        <label style={labelStyle} htmlFor="tour-name">Your Name</label>
                        <input id="tour-name" required type="text" name="name" value={fields.name} onChange={updateField("name")} style={inputStyle} />
                      </div>
                      <div style={{ marginBottom: 18 }}>
                        <label style={labelStyle} htmlFor="tour-email">Email Address</label>
                        <input id="tour-email" required type="email" name="email" value={fields.email} onChange={updateField("email")} style={inputStyle} />
                      </div>
                      <div style={{ marginBottom: 18 }}>
                        <label style={labelStyle} htmlFor="tour-phone">Phone Number</label>
                        <input id="tour-phone" required type="tel" name="phone" value={fields.phone} onChange={updateField("phone")} style={inputStyle} />
                      </div>
                      <div style={{ marginBottom: 18 }}>
                        <label style={labelStyle} htmlFor="tour-relationship">Relationship to Resident</label>
                        <input id="tour-relationship" type="text" name="relationship" value={fields.relationship} onChange={updateField("relationship")} style={inputStyle} />
                      </div>
                      <div style={{ marginBottom: 28 }}>
                        <label style={labelStyle} htmlFor="tour-message">Tell Us About Your Loved One</label>
                        <textarea id="tour-message" rows={4} name="message" value={fields.message} onChange={updateField("message")} style={{ ...inputStyle, resize: "vertical" }} />
                      </div>
                      {error ? <p style={{ fontFamily: F.body, fontSize: 14, color: "#c0392b", marginBottom: 16 }}>Something went wrong. Please try again or call us directly.</p> : null}
                      <button type="submit" style={{ width: "100%", textAlign: "center", background: T.gold, color: T.white, border: "none", borderRadius: T.radius, padding: "14px 32px", fontFamily: F.body, fontSize: 15, fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 20px rgba(196,154,82,0.25)" }}>
                        Submit Tour Request
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
          <div style={{ flex: "1 1 320px", minWidth: 260 }}>
            <Reveal delay={0.1}>
              <div style={{ marginBottom: 36 }}>
                <SectionLabel text="What to Expect" align="left" />
                <h2 style={{ fontFamily: F.display, fontSize: 24, fontWeight: 600, color: T.navy, margin: "8px 0 16px" }}>
                  Your Visit
                </h2>
                <div style={{ width: 32, height: 2, background: T.gold, marginBottom: 20 }} />
                <p style={{ fontFamily: F.body, fontSize: 15, color: T.textBody, lineHeight: 1.8, marginBottom: 16 }}>
                  During your private tour, you will walk through the home, meet our care team, and get a feel for the daily rhythm.
                </p>
                <p style={{ fontFamily: F.body, fontSize: 15, color: T.textBody, lineHeight: 1.8 }}>
                  There is no pressure. This is about finding the right fit for your family.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: Ico.phone, label: "925-605-6218", href: "tel:9256056218" },
                  { icon: Ico.mail, label: "admin@athomecomfortliving.com", href: "mailto:admin@athomecomfortliving.com" },
                  { icon: Ico.location, label: "Manteca, CA" },
                ].map((contact) => (
                  <div key={contact.label} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: T.goldMuted, display: "flex", alignItems: "center", justifyContent: "center", color: T.gold, flexShrink: 0 }}>
                      {contact.icon}
                    </div>
                    {contact.href ? (
                      <a href={contact.href} style={{ fontFamily: F.body, fontSize: 15, fontWeight: 500, color: T.navy, textDecoration: "none" }}>
                        {contact.label}
                      </a>
                    ) : (
                      <span style={{ fontFamily: F.body, fontSize: 15, fontWeight: 500, color: T.navy }}>
                        {contact.label}
                      </span>
                    )}
                  </div>
                ))}
                <p style={{ fontFamily: F.body, fontSize: 13, color: T.textLight, margin: "2px 0 0 52px", lineHeight: 1.5 }}>
                  Fax: (209) 647-2163
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
