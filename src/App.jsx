import { useState, useEffect, useRef } from "react";

const T = {
  navy: "#1A2744", navyLight: "#2A3A5C", gold: "#C49A52", goldLight: "#D4AF6E",
  goldMuted: "rgba(196,154,82,0.12)", goldAccent: "rgba(196,154,82,0.25)",
  cream: "#FAF6EF", creamDark: "#F2EDE4", white: "#FFFFFF", offWhite: "#FDFBF8",
  textBody: "#4A4A4A", textLight: "#7A7A7A", border: "#E8E2D8", radius: 12, radiusLg: 18,
};
const F = { display: "'Cormorant Garamond', Georgia, serif", body: "'Outfit', 'Helvetica Neue', sans-serif" };

// Global nav helper — set by App, used by any component
let _nav = () => {};
function goTo(page) { _nav(page); }

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.unobserve(el); } }, { threshold });
    obs.observe(el); return () => obs.disconnect();
  }, []); return [ref, vis];
}
function Reveal({ children, delay = 0, style: s = {} }) {
  const [ref, vis] = useReveal();
  return <div ref={ref} style={{ opacity: vis?1:0, transform: vis?"translateY(0)":"translateY(24px)", transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`, ...s }}>{children}</div>;
}
function GoldDivider({ width = 48 }) { return <div style={{ width, height: 2, background: T.gold, borderRadius: 1, margin: "0 auto" }} />; }
function SectionLabel({ text, align = "center" }) { return <span style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: T.gold, display: "block", textAlign: align, marginBottom: 10 }}>{text}</span>; }
function SectionHeader({ label, title, subtitle, align = "center" }) {
  return <Reveal><div style={{ textAlign: align, marginBottom: 52, maxWidth: align==="center"?600:"none", margin: align==="center"?"0 auto 52px":"0 0 52px" }}>
    {label && <SectionLabel text={label} align={align} />}
    <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, color: T.navy, lineHeight: 1.2, margin: "0 0 14px" }}>{title}</h2>
    <GoldDivider />
    {subtitle && <p style={{ fontFamily: F.body, fontSize: 16, color: T.textLight, lineHeight: 1.7, marginTop: 18 }}>{subtitle}</p>}
  </div></Reveal>;
}
function BtnPrimary({ children, style: s = {}, onClick }) {
  const [h, setH] = useState(false);
  return <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{ background: h?T.navyLight:T.navy, color: T.white, border: "none", borderRadius: T.radius, padding: "14px 32px", fontFamily: F.body, fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "all 0.3s ease", boxShadow: h?"0 8px 24px rgba(26,39,68,0.25)":"0 2px 8px rgba(26,39,68,0.15)", ...s }}>{children}</button>;
}
function BtnSecondary({ children, style: s = {}, onClick }) {
  const [h, setH] = useState(false);
  return <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{ background: h?T.goldMuted:"transparent", color: T.navy, border: `1.5px solid ${T.gold}`, borderRadius: T.radius, padding: "13px 28px", fontFamily: F.body, fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "all 0.3s ease", ...s }}>{children}</button>;
}
function ImgPlaceholder({ src, alt = "", aspect = "4/3", radius = T.radiusLg, style: s = {} }) {
  return <div style={{ aspectRatio: aspect, borderRadius: radius, overflow: "hidden", background: T.creamDark, position: "relative", ...s }}>
    {src ? <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> :
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke={T.border} strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z" /></svg>
    </div>}
  </div>;
}
function IconCard({ icon, label, delay = 0 }) {
  const [h, setH] = useState(false);
  return <Reveal delay={delay} style={{ height: "100%" }}><div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{ background: T.white, borderRadius: T.radiusLg, padding: "32px 20px", textAlign: "center", border: `1px solid ${h?T.gold:T.border}`, boxShadow: h?"0 8px 28px rgba(196,154,82,0.1)":"0 1px 4px rgba(0,0,0,0.03)", transition: "all 0.35s ease", cursor: "default", transform: h?"translateY(-3px)":"none", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
    <div style={{ width: 56, height: 56, borderRadius: 16, background: T.goldMuted, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: T.gold, flexShrink: 0 }}>{icon}</div>
    <span style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: T.navy }}>{label}</span>
  </div></Reveal>;
}
function PageHero({ title, subtitle, image }) {
  return <div style={{ position: "relative", width: "100%", minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: T.navy }}>
    {image && <><img src={image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} /><div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(26,39,68,0.5) 0%, rgba(26,39,68,0.75) 100%)" }} /></>}
    {!image && <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyLight} 100%)` }} />}
    <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "100px 24px 60px", maxWidth: 640 }}>
      <Reveal><GoldDivider width={36} /><h1 style={{ fontFamily: F.display, fontSize: "clamp(32px, 5vw, 50px)", fontWeight: 600, color: T.white, lineHeight: 1.15, margin: "20px 0 14px" }}>{title}</h1>
      {subtitle && <p style={{ fontFamily: F.body, fontSize: 17, color: "rgba(255,255,255,0.75)", lineHeight: 1.65, maxWidth: 480, margin: "0 auto" }}>{subtitle}</p>}</Reveal>
    </div>
  </div>;
}
function CTABand() {
  return <section style={{ background: T.navy, padding: "72px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(196,154,82,0.06)" }} />
    <Reveal><GoldDivider width={36} />
      <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 600, color: T.white, margin: "20px 0 14px", lineHeight: 1.2 }}>Schedule a Tour Today</h2>
      <p style={{ fontFamily: F.body, fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: 420, margin: "0 auto 32px" }}>The best way to know if At Home Comfort is the right fit is to visit in person.</p>
      <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
        <BtnPrimary style={{ background: T.gold, boxShadow: "0 4px 20px rgba(196,154,82,0.3)" }} onClick={()=>goTo("Schedule a Tour")}>Schedule a Tour</BtnPrimary>
        <BtnSecondary style={{ color: T.white, borderColor: "rgba(255,255,255,0.3)" }}>Call Now</BtnSecondary>
      </div>
    </Reveal>
  </section>;
}
function Section({ children, bg = T.offWhite, style: s = {} }) {
  return <section style={{ background: bg, padding: "80px 24px", ...s }}><div style={{ maxWidth: 1080, margin: "0 auto" }}>{children}</div></section>;
}

const Ico = {
  support24: <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  personalized: <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>,
  homelike: <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>,
  adl: <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>,
  meds: <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>,
  meals: <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37"/></svg>,
  mobility: <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>,
  activities: <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/></svg>,
  safety: <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/></svg>,
  consistency: <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/></svg>,
  chevDown: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>,
  phone: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>,
  mail: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>,
  location: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>,
  menu: <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/></svg>,
  close: <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>,
};

// AEO: Micro-FAQ Components
function MicroFAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return <div style={{ borderBottom: `1px solid ${T.border}`, padding: "16px 0" }}>
    <button onClick={()=>setOpen(!open)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>
      <span style={{ fontFamily: F.body, fontSize: 15, fontWeight: 600, color: T.navy, paddingRight: 16 }}>{q}</span>
      <span style={{ color: T.gold, flexShrink: 0, transform: open?"rotate(180deg)":"none", transition: "transform 0.3s" }}>{Ico.chevDown}</span>
    </button>
    <div style={{ maxHeight: open?300:0, overflow: "hidden", transition: "max-height 0.4s ease", opacity: open?1:0 }}>
      <p style={{ fontFamily: F.body, fontSize: 14, color: T.textBody, lineHeight: 1.75, paddingTop: 10, margin: 0 }}>{a}</p>
    </div>
  </div>;
}
function MicroFAQBlock({ title, faqs, bg = T.cream }) {
  return <Section bg={bg}><div style={{ maxWidth: 720, margin: "0 auto" }}>
    <Reveal><SectionLabel text="Common Questions" /><h3 style={{ fontFamily: F.display, fontSize: 28, fontWeight: 600, color: T.navy, textAlign: "center", marginBottom: 8 }}>{title}</h3><GoldDivider /></Reveal>
    <div style={{ marginTop: 32 }}>{faqs.map((f, i) => <MicroFAQItem key={i} q={f.q} a={f.a} />)}</div>
    <Reveal><p style={{ fontFamily: F.body, fontSize: 14, color: T.textLight, textAlign: "center", marginTop: 24 }}>Have more questions? Visit our <span style={{ color: T.gold, fontWeight: 600 }}>FAQ page</span> or schedule a tour.</p></Reveal>
  </div></Section>;
}

// AEO: FAQ Data Bank (curated 24)
const FAQ_DATA = {
  fitCare: [
    { q: "What is assisted living?", a: "Assisted living provides help with daily activities like bathing, dressing, meals, and medication routines in a supportive residential setting. It\u2019s designed for people who don\u2019t need full-time medical care but benefit from daily assistance and supervision." },
    { q: "How do I know if assisted living is the right fit for my loved one?", a: "Assisted living is often a good fit when someone needs regular help with daily routines, medication reminders, meals, or mobility \u2014 but still wants a homelike environment and as much independence as possible. A tour and care-needs conversation can help confirm fit." },
    { q: "What types of care do you provide?", a: "We provide personalized support with daily living routines, meals, safety, and comfort. Care is tailored to each resident\u2019s needs and preferences so the environment feels stable and familiar." },
    { q: "Do you provide medication management?", a: "We support medication routines as appropriate and permitted, using consistent processes to help residents stay on track. During a tour, we\u2019ll explain exactly how medications are handled in our home." },
    { q: "What\u2019s the difference between assisted living and a nursing home?", a: "Assisted living focuses on help with daily activities in a residential, homelike setting. Nursing homes generally provide more intensive medical care and skilled nursing services." },
  ],
  safetyStaffing: [
    { q: "Is staff available 24/7?", a: "Yes, support is available around the clock so residents are not alone when they need help. We\u2019ll explain staffing and supervision routines during your tour." },
    { q: "How do you handle emergencies?", a: "We follow clear emergency protocols and communicate with families promptly. We\u2019ll review emergency readiness and procedures during admissions." },
    { q: "What safety measures are in place?", a: "Safety is supported through attentive supervision and a home environment designed for comfort and stability. During your tour, we\u2019ll point out safety-focused features in the home." },
    { q: "How do you communicate with families?", a: "Family peace of mind matters. We provide clear, respectful communication so families feel informed and supported." },
  ],
  dailyLife: [
    { q: "What does a typical day look like?", a: "Days follow a steady rhythm \u2014 meals, personal care routines, meaningful activities, and time to rest. We aim for a calm structure that feels familiar and supportive." },
    { q: "What are meals like?", a: "Meals are designed to be warm, balanced, and comforting \u2014 more like home than an institution. We can discuss dietary preferences and accommodations during your tour." },
    { q: "Can residents keep their routines and preferences?", a: "Yes. We believe dignity and independence matter, so we aim to support routines that help residents feel comfortable and at home." },
    { q: "Are visitors allowed?", a: "Yes \u2014 family connection is important. We\u2019ll share visiting guidance during your tour so expectations are clear." },
  ],
  costPayment: [
    { q: "How much does assisted living cost?", a: "Cost varies based on care needs, room setup, and the level of support required. The best way to get accurate pricing is to schedule a tour and review care needs together." },
    { q: "What does pricing typically include?", a: "Pricing often includes housing, meals, and support with daily routines, with adjustments based on care needs. We\u2019ll explain what\u2019s included and what may be add-on during a tour." },
    { q: "Does Medicare pay for assisted living?", a: "Medicare typically does not cover room and board for assisted living. Some families use long-term care insurance, personal funds, or other resources depending on eligibility and situation." },
  ],
  toursAdmissions: [
    { q: "How do we schedule a tour?", a: "You can schedule a tour through our form or by calling. We\u2019ll find a time that works and answer questions along the way." },
    { q: "What happens during the admissions process?", a: "Admissions is designed to be simple: tour the home, discuss care needs, and then plan move-in if it\u2019s a fit. We\u2019ll help make the transition smooth." },
    { q: "How quickly can someone move in?", a: "Timing depends on availability and care-needs alignment. We\u2019ll discuss timelines during your tour and do our best to support families quickly when needed." },
    { q: "What should we bring for move-in?", a: "Comfort items like familiar clothing, toiletries, and personal touches help a space feel like home. We\u2019ll provide a checklist once move-in is planned." },
  ],
  smallHome: [
    { q: "What is small-home assisted living?", a: "Small-home assisted living is a smaller, home-like setting designed to feel personal and calm. Families often choose it for consistency, familiarity, and more individualized attention." },
    { q: "How is a small home different from a large facility?", a: "Small homes typically have fewer residents, which can mean quieter spaces, more consistent caregivers, and routines that feel more personal." },
    { q: "Why do families choose At Home Comfort?", a: "Many families value a warm home environment, personalized routines, and attentive support. Our goal is to help residents feel safe, respected, and genuinely cared for." },
    { q: "Will my loved one lose independence in assisted living?", a: "Assisted living is designed to support independence where possible. We provide help where needed, while respecting privacy, preferences, and routines." },
  ],
};

// Navigation
function Navigation({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = ["Home", "About", "Care & Services", "Virtual Tour", "Admissions", "FAQs"];
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 30); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  return <>
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: scrolled?"rgba(253,251,248,0.95)":"rgba(26,39,68,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderBottom: scrolled?`1px solid ${T.border}`:"1px solid rgba(255,255,255,0.08)", transition: "all 0.4s ease", padding: scrolled?"4px 0":"16px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }} onClick={()=>setActive("Home")}>
          <img src="/rmvbckgrnd.png" alt="" style={{ height: scrolled ? 44 : 52, width: "auto", display: "block", transition: "height 0.4s ease" }} />
          <div style={{ lineHeight: 1.15 }}>
            <div style={{ fontFamily: F.display, fontSize: 17, fontWeight: 700, color: scrolled ? T.navy : T.white, transition: "color 0.4s ease" }}>At Home Comfort</div>
            <div style={{ fontFamily: F.body, fontSize: 9, fontWeight: 600, color: T.gold, letterSpacing: "0.2em", textTransform: "uppercase" }}>Assisted Living</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }} className="desk-nav">
          {navItems.map(item => <button key={item} onClick={()=>setActive(item)} style={{ background: "none", border: "none", padding: "8px 14px", cursor: "pointer", fontFamily: F.body, fontSize: 13.5, fontWeight: active===item?600:400, color: scrolled?(active===item?T.navy:T.textBody):(active===item?"rgba(255,255,255,1)":"rgba(255,255,255,0.7)"), borderBottom: active===item?`2px solid ${T.gold}`:"2px solid transparent", transition: "all 0.25s" }}>{item}</button>)}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <BtnPrimary style={{ padding: "10px 22px", fontSize: 13, display: "var(--desk-show, flex)" }} onClick={()=>goTo("Schedule a Tour")}>Schedule a Tour</BtnPrimary>
          <button className="mob-toggle" onClick={()=>setMobileOpen(!mobileOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, color: scrolled?T.navy:T.white }}>{mobileOpen?Ico.close:Ico.menu}</button>
        </div>
      </div>
    </nav>
    {mobileOpen && <div style={{ position: "fixed", inset: 0, zIndex: 999, background: T.offWhite, paddingTop: 80, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      {navItems.map(item => <button key={item} onClick={()=>{setActive(item);setMobileOpen(false);}} style={{ background: active===item?T.goldMuted:"transparent", border: "none", borderRadius: T.radius, padding: "14px 24px", width: "85%", cursor: "pointer", fontFamily: F.body, fontSize: 16, fontWeight: active===item?600:400, color: active===item?T.navy:T.textBody, textAlign: "center" }}>{item}</button>)}
      <div style={{ display: "flex", gap: 10, marginTop: 16, width: "85%" }}><BtnPrimary style={{ flex: 1, textAlign: "center" }} onClick={()=>goTo("Schedule a Tour")}>Schedule a Tour</BtnPrimary><BtnSecondary style={{ flex: 1, textAlign: "center" }}>Call Now</BtnSecondary></div>
    </div>}
  </>;
}

// PAGE: HOME
function HomePage() {
  const homeFAQs = [FAQ_DATA.fitCare[0], FAQ_DATA.fitCare[1], FAQ_DATA.safetyStaffing[0], FAQ_DATA.costPayment[0], FAQ_DATA.smallHome[0], FAQ_DATA.toursAdmissions[0]];
  const W = { maxWidth: 1080, margin: "0 auto", padding: "0 24px" };
  return <>
    {/* ─── HERO: Cinematic, centered, emotional ─── */}
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: T.navy }}>
      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80" alt="Assisted living home in Manteca" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center bottom, rgba(26,39,68,0.4) 0%, rgba(26,39,68,0.8) 70%)" }} />
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "120px 24px 60px", maxWidth: 680 }}>
        <Reveal>
          <p style={{ fontFamily: F.body, fontSize: 12, fontWeight: 600, color: T.gold, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 24 }}>At Home Comfort Assisted Living · Manteca, CA</p>
          <h1 style={{ fontFamily: F.display, fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 600, color: T.white, lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: 20 }}>Where Comfort Feels Like Home</h1>
          <p style={{ fontFamily: F.body, fontSize: "clamp(16px, 2vw, 19px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: 500, margin: "0 auto 40px" }}>A small, personalized assisted living home where your loved one is known by name — and cared for like family.</p>
        </Reveal>
        <Reveal delay={0.15}><div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <BtnPrimary style={{ background: T.gold, boxShadow: "0 4px 24px rgba(196,154,82,0.35)" }} onClick={()=>goTo("Schedule a Tour")}>Schedule a Tour</BtnPrimary>
          <BtnSecondary style={{ color: T.white, borderColor: "rgba(255,255,255,0.3)" }}>Call Now</BtnSecondary>
        </div></Reveal>
      </div>
      {/* Scroll hint */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 2, opacity: 0.4 }}>
        <div style={{ width: 1, height: 40, background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.5))", margin: "0 auto 8px" }} />
        <div style={{ fontFamily: F.body, fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</div>
      </div>
    </div>

    {/* ─── CHAPTER 1: The Promise (bridge from hero) ─── */}
    <div style={{ background: T.cream, padding: "100px 24px 0" }}>
      <div style={{ ...W, textAlign: "center" }}>
        <Reveal>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 32 }}>
              <div style={{ flex: 1, height: 1, background: T.border }} /><div style={{ color: T.gold }}>{Ico.personalized}</div><div style={{ flex: 1, height: 1, background: T.border }} />
            </div>
            <p style={{ fontFamily: F.display, fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 500, color: T.navy, lineHeight: 1.5, fontStyle: "italic" }}>
              "Senior care should never feel clinical or impersonal. It should feel like family. It should feel like home."
            </p>
            <p style={{ fontFamily: F.body, fontSize: 14, color: T.gold, fontWeight: 600, marginTop: 16, letterSpacing: "0.08em" }}>— Parminder, Founder</p>
          </div>
        </Reveal>
      </div>
    </div>

    {/* ─── CHAPTER 2: What Makes Us Different ─── */}
    <div style={{ background: T.cream, padding: "80px 24px 100px" }}>
      <div style={{ ...W }}>
        <div style={{ display: "flex", gap: 60, flexWrap: "wrap", alignItems: "center" }}>
          <Reveal style={{ flex: "1 1 440px", minWidth: 280 }}>
            <ImgPlaceholder src="https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&q=80" alt="Warm home interior" aspect="5/4" />
          </Reveal>
          <div style={{ flex: "1 1 420px", minWidth: 280 }}>
            <Reveal>
              <SectionLabel text="Why Families Choose Us" align="left" />
              <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px, 3.5vw, 38px)", fontWeight: 600, color: T.navy, lineHeight: 1.2, margin: "8px 0 16px" }}>Personal Care,<br/>Not Institutional Care</h2>
              <div style={{ width: 40, height: 2, background: T.gold, marginBottom: 28 }} />
              <p style={{ fontFamily: F.body, fontSize: 16, color: T.textBody, lineHeight: 1.8, marginBottom: 32 }}>
                We intentionally keep our community small. That means your loved one isn't a room number — they're known by name, by preference, by the way they like their morning coffee. Every care plan is built around the person, not the other way around.
              </p>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {icon:Ico.personalized,title:"Individualized Care",text:"Tailored to each resident's routines, preferences, and comfort."},
                {icon:Ico.homelike,title:"Calm, Familiar Setting",text:"Quieter spaces, consistent faces, and a rhythm that feels like home."},
                {icon:Ico.activities,title:"Families Stay Connected",text:"Open-door visiting and transparent communication — always."},
              ].map((p,i)=>
                <Reveal key={i} delay={i*0.1}><div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: T.goldMuted, display: "flex", alignItems: "center", justifyContent: "center", color: T.gold, flexShrink: 0 }}>{p.icon}</div>
                  <div><div style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: T.navy, marginBottom: 2 }}>{p.title}</div><div style={{ fontFamily: F.body, fontSize: 13.5, color: T.textLight, lineHeight: 1.55 }}>{p.text}</div></div>
                </div></Reveal>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ─── Full-width photo band ─── */}
    <div style={{ width: "100%", height: "clamp(200px, 30vw, 380px)", overflow: "hidden", position: "relative" }}>
      <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80" alt="Warm living space" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(250,246,239,0.4) 0%, transparent 30%, transparent 70%, rgba(250,246,239,0.4) 100%)" }} />
    </div>

    {/* ─── CHAPTER 3: How We Care (services woven into narrative) ─── */}
    <div style={{ background: T.cream, padding: "100px 24px" }}>
      <div style={{ ...W, textAlign: "center" }}>
        <Reveal>
          <SectionLabel text="Daily Support" />
          <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, color: T.navy, lineHeight: 1.2, marginBottom: 12 }}>What Care Looks Like Here</h2>
          <GoldDivider />
          <p style={{ fontFamily: F.body, fontSize: 16, color: T.textLight, lineHeight: 1.7, maxWidth: 520, margin: "20px auto 48px" }}>
            From the first cup of coffee to the last goodnight, every part of the day is supported with warmth, patience, and attention.
          </p>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 18, marginBottom: 48 }}>
          <IconCard icon={Ico.adl} label="ADL Support" delay={0} /><IconCard icon={Ico.meds} label="Medication Support" delay={0.06} /><IconCard icon={Ico.meals} label="Home-Cooked Meals" delay={0.12} /><IconCard icon={Ico.mobility} label="Mobility Assistance" delay={0.18} /><IconCard icon={Ico.activities} label="Daily Activities" delay={0.24} /><IconCard icon={Ico.support24} label="24/7 Care Team" delay={0.3} />
        </div>
        <Reveal>
          <p style={{ fontFamily: F.display, fontSize: 20, fontWeight: 500, color: T.navy, fontStyle: "italic", maxWidth: 480, margin: "0 auto" }}>
            "We keep it small so we can keep it personal."
          </p>
        </Reveal>
      </div>
    </div>

    {/* ─── CHAPTER 4: A Glimpse Inside ─── */}
    <div style={{ background: T.offWhite, padding: "100px 24px" }}>
      <div style={{ ...W }}>
        <Reveal>
          <SectionLabel text="Step Inside" />
          <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, color: T.navy, lineHeight: 1.2, textAlign: "center", marginBottom: 12 }}>See Where Your Loved One Will Live</h2>
          <GoldDivider />
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12, marginTop: 48 }}>
          {[
            {src:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",span:"span 4",r:"3/2"},
            {src:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",span:"span 2",r:"3/2"},
            {src:"https://images.unsplash.com/photo-1600573472556-e636c2acda9e?w=600&q=80",span:"span 2",r:"1/1"},
            {src:"https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80",span:"span 4",r:"2/1"},
          ].map((img,i)=>
            <Reveal key={i} delay={i*0.08} style={{ gridColumn: img.span }}><ImgPlaceholder src={img.src} aspect={img.r} /></Reveal>
          )}
        </div>
      </div>
    </div>

    {/* ─── CHAPTER 5: The Journey (How It Works — narrative) ─── */}
    <div style={{ background: T.navy, padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -120, left: -120, width: 400, height: 400, borderRadius: "50%", background: "rgba(196,154,82,0.04)" }} />
      <div style={{ ...W, position: "relative", zIndex: 1 }}>
        <Reveal>
          <SectionLabel text="Getting Started" />
          <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, color: T.white, lineHeight: 1.2, textAlign: "center", marginBottom: 12 }}>Your Journey Starts with a Visit</h2>
          <div style={{ width: 48, height: 2, background: T.gold, borderRadius: 1, margin: "0 auto 48px" }} />
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 40, textAlign: "center" }}>
          {[
            {num:"01",title:"Schedule a Tour",text:"Call or fill out our form. Walk through the home, meet the team, and feel the environment firsthand."},
            {num:"02",title:"Meet & Assess Needs",text:"We sit down together and build a care plan around your loved one's routines, preferences, and needs."},
            {num:"03",title:"A Smooth Move-In",text:"We support the transition step by step — familiar items, consistent faces, and patience from day one."},
          ].map((s,i)=>
            <Reveal key={i} delay={i*0.15}><div>
              <div style={{ fontFamily: F.display, fontSize: 48, fontWeight: 700, color: T.gold, opacity: 0.25, marginBottom: 8 }}>{s.num}</div>
              <h3 style={{ fontFamily: F.display, fontSize: 21, fontWeight: 600, color: T.white, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontFamily: F.body, fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{s.text}</p>
            </div></Reveal>
          )}
        </div>
        <Reveal delay={0.3}><div style={{ textAlign: "center", marginTop: 48 }}>
          <BtnPrimary style={{ background: T.gold, boxShadow: "0 4px 24px rgba(196,154,82,0.3)" }} onClick={()=>goTo("Schedule a Tour")}>Schedule a Tour</BtnPrimary>
        </div></Reveal>
      </div>
    </div>

    {/* ─── CHAPTER 6: Peace of Mind ─── */}
    <div style={{ background: T.cream, padding: "100px 24px" }}>
      <div style={{ ...W }}>
        <div style={{ display: "flex", gap: 60, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ flex: "1 1 420px", minWidth: 280 }}>
            <Reveal>
              <SectionLabel text="Peace of Mind" align="left" />
              <h2 style={{ fontFamily: F.display, fontSize: "clamp(28px, 3.5vw, 38px)", fontWeight: 600, color: T.navy, lineHeight: 1.2, margin: "8px 0 16px" }}>Your Family Is<br/>in Good Hands</h2>
              <div style={{ width: 40, height: 2, background: T.gold, marginBottom: 28 }} />
              <p style={{ fontFamily: F.body, fontSize: 16, color: T.textBody, lineHeight: 1.8, marginBottom: 28 }}>
                The decision to move a loved one into assisted living isn't easy. We understand. That's why everything here is built around one thing: giving families confidence that their loved one is safe, supported, and genuinely cared for — every single day.
              </p>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                {icon:Ico.safety,title:"24/7 On-Site Staff",text:"Round-the-clock support with clear emergency protocols."},
                {icon:Ico.consistency,title:"Consistent Caregivers",text:"The same team, every day. They know your loved one by name."},
                {icon:Ico.personalized,title:"Transparent Communication",text:"You'll always know how things are going. That's a promise."},
              ].map((p,i)=>
                <Reveal key={i} delay={i*0.1}><div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: T.goldMuted, display: "flex", alignItems: "center", justifyContent: "center", color: T.gold, flexShrink: 0 }}>{p.icon}</div>
                  <div><div style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: T.navy, marginBottom: 2 }}>{p.title}</div><div style={{ fontFamily: F.body, fontSize: 13.5, color: T.textLight, lineHeight: 1.55 }}>{p.text}</div></div>
                </div></Reveal>
              )}
            </div>
          </div>
          <Reveal delay={0.15} style={{ flex: "1 1 400px", minWidth: 280 }}>
            <ImgPlaceholder src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80" alt="Peaceful home" aspect="4/5" />
          </Reveal>
        </div>
      </div>
    </div>

    {/* ─── Micro-FAQ ─── */}
    <MicroFAQBlock title="Questions Families Ask Most" faqs={homeFAQs} bg={T.offWhite} />
    <CTABand />
  </>;
}

// PAGE: ABOUT
function AboutPage() {
  return <>
    <div style={{ position: "relative", width: "100%", minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: `linear-gradient(to bottom, #3D2010 0%, #8B5220 35%, ${T.gold} 65%, #F0DFB8 85%, ${T.offWhite} 100%)` }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 65% 35%, rgba(255,215,100,0.3) 0%, transparent 60%)" }} />
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "100px 24px 60px", maxWidth: 640 }}>
        <Reveal><GoldDivider width={36} /><h1 style={{ fontFamily: F.display, fontSize: "clamp(32px, 5vw, 50px)", fontWeight: 600, color: T.white, lineHeight: 1.15, margin: "20px 0 14px", textShadow: "0 2px 20px rgba(0,0,0,0.25)" }}>Our Story</h1>
        <p style={{ fontFamily: F.body, fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.65, maxWidth: 480, margin: "0 auto", textShadow: "0 1px 8px rgba(0,0,0,0.15)" }}>A home built on love, inspired by family.</p></Reveal>
      </div>
    </div>
    <Section bg={T.offWhite}><div style={{ display: "flex", gap: 56, flexWrap: "wrap", alignItems: "center" }}>
      <div style={{ flex: "1 1 460px", minWidth: 280 }}>
        <Reveal><SectionLabel text="From Our Founder" align="left" /><h2 style={{ fontFamily: F.display, fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 600, color: T.navy, lineHeight: 1.2, margin: "10px 0 8px" }}>A Home Inspired by Kishan</h2><GoldDivider width={36} /></Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontFamily: F.body, fontSize: 16, color: T.textBody, lineHeight: 1.85, marginTop: 22, marginBottom: 16 }}>Home Comfort Assisted Living was founded with a deeply personal purpose. My name is Parminder, and the heart behind this home is my beloved grandmother, Kishan. She moved to the United States at the age of 100 and lived a long, beautiful life until she passed at 112.</p>
          <p style={{ fontFamily: F.body, fontSize: 16, color: T.textBody, lineHeight: 1.85, marginBottom: 16 }}>Caring for her wasn't just a responsibility — it was a gift. Kishan taught me that every elder deserves to feel loved, respected, and surrounded by warmth every single day.</p>
          <p style={{ fontFamily: F.body, fontSize: 16, color: T.textBody, lineHeight: 1.85 }}>Seeing how she was cared for at home shaped my belief that senior care should never feel clinical or impersonal. It should feel like family. It should feel like home.</p>
        </Reveal>
      </div>
      <Reveal delay={0.15} style={{ flex: "1 1 380px", minWidth: 280 }}>
        <div style={{ position: "relative", borderRadius: T.radiusLg, overflow: "hidden", boxShadow: "0 20px 60px rgba(26,39,68,0.15)", border: `3px solid ${T.goldAccent}` }}>
          <img src="/IMG_1960.JPEG" alt="Parminder with her grandmother Kishan" style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "4/5" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(0deg, rgba(26,39,68,0.85) 0%, transparent 100%)", padding: "32px 20px 18px" }}>
            <p style={{ fontFamily: F.display, fontSize: 15, color: T.white, fontStyle: "italic", margin: 0, textAlign: "center" }}>Parminder with her grandmother, Kishan</p>
          </div>
        </div>
      </Reveal>
    </div></Section>
    <Section bg={T.cream}><div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}><Reveal>
      <GoldDivider width={36} />
      <p style={{ fontFamily: F.display, fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 500, color: T.navy, lineHeight: 1.65, fontStyle: "italic", margin: "24px 0 20px" }}>"That belief is the foundation of Home Comfort Assisted Living. I intentionally keep our community small so each resident receives genuine attention, meaningful relationships, and the same compassion I witnessed in my own family."</p>
      <p style={{ fontFamily: F.body, fontSize: 16, color: T.textBody, lineHeight: 1.8, marginBottom: 12 }}>Here, independence is honored, dignity is protected, and every day is filled with comfort, familiarity, and joy.</p>
      <p style={{ fontFamily: F.display, fontSize: 22, fontWeight: 600, color: T.navy, marginTop: 28, marginBottom: 4 }}>This is more than a care home — this is home.</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 16 }}><div style={{ width: 24, height: 1, background: T.gold }} /><span style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: T.gold }}>Parminder, Founder</span><div style={{ width: 24, height: 1, background: T.gold }} /></div>
    </Reveal></div></Section>
    <CTABand />
  </>;
}

// PAGE: CARE & SERVICES
function CareServicesPage() {
  const careFAQs = [FAQ_DATA.fitCare[2], FAQ_DATA.fitCare[3], FAQ_DATA.fitCare[4], FAQ_DATA.safetyStaffing[0], FAQ_DATA.dailyLife[0], FAQ_DATA.dailyLife[2]];
  return <>
    <PageHero title="Care & Services" subtitle="Personalized daily support in a calm, homelike setting." image="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=80" />
    <Section bg={T.offWhite}><SectionHeader label="What We Provide" title="Assisted Living Services Tailored to Each Resident" subtitle="We provide help with daily activities, medication routines, meals, and safety — all in a residential setting designed for comfort and dignity." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 18 }}>
        <IconCard icon={Ico.adl} label="ADL Support" delay={0} /><IconCard icon={Ico.meds} label="Medication Management" delay={0.06} /><IconCard icon={Ico.meals} label="Nutritious Meals" delay={0.12} /><IconCard icon={Ico.mobility} label="Mobility Assistance" delay={0.18} /><IconCard icon={Ico.activities} label="Activities & Engagement" delay={0.24} /><IconCard icon={Ico.support24} label="24/7 On-Site Staff" delay={0.3} />
      </div>
    </Section>
    <Section bg={T.cream}><div style={{ display: "flex", gap: 56, flexWrap: "wrap", alignItems: "center" }}>
      <div style={{ flex: "1 1 440px", minWidth: 280 }}><SectionHeader label="Our Approach" title="How We Personalize Care" align="left" subtitle="We keep our community small so we can learn each resident's routines, preferences, and comfort needs. Care is built around consistency, familiarity, and respectful support — reviewed and updated regularly." /></div>
      <Reveal delay={0.15} style={{ flex: "1 1 380px", minWidth: 280 }}><ImgPlaceholder src="https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&q=80" alt="Personalized care" aspect="4/3" /></Reveal>
    </div></Section>
    <MicroFAQBlock title="Care & Services Questions" faqs={careFAQs} bg={T.offWhite} />
    <CTABand />
  </>;
}

// PAGE: VIRTUAL TOUR
function VirtualTourPage() {
  const tourFAQs = [FAQ_DATA.dailyLife[3], FAQ_DATA.dailyLife[2], FAQ_DATA.smallHome[1]];
  return <>
    <PageHero title="Virtual Tour" subtitle="Explore our warm, welcoming assisted living home." image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" />
    <Section bg={T.offWhite}><SectionHeader label="Our Home" title="A Place Designed for Comfort" subtitle="Private rooms, sunlit common areas, a welcoming kitchen, and peaceful outdoor spaces — all in a smaller, calmer setting." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 14 }}>
        {[{src:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",span:"span 3"},{src:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",span:"span 3"},{src:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",span:"span 2"},{src:"https://images.unsplash.com/photo-1600573472556-e636c2acda9e?w=600&q=80",span:"span 2"},{src:"https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80",span:"span 2"},{src:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",span:"span 4"},{src:"https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&q=80",span:"span 2"}].map((img,i)=>
          <Reveal key={i} delay={i*0.06} style={{ gridColumn: img.span }}><ImgPlaceholder src={img.src} aspect="3/2" /></Reveal>
        )}
      </div>
    </Section>
    <Section bg={T.cream}><SectionHeader label="Amenities" title="What Makes Our Home Feel Like Home" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
        {["Private Rooms","En-Suite Bathrooms","Sunlit Common Areas","Outdoor Garden Space","Home-Style Kitchen","Activity Room"].map((a,i)=>
          <Reveal key={i} delay={i*0.06}><div style={{ background: T.white, borderRadius: T.radius, padding: "20px 24px", border: `1px solid ${T.border}`, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: T.gold, flexShrink: 0 }} /><span style={{ fontFamily: F.body, fontSize: 14, fontWeight: 500, color: T.navy }}>{a}</span>
          </div></Reveal>
        )}
      </div>
    </Section>
    <MicroFAQBlock title="About Our Home" faqs={tourFAQs} bg={T.offWhite} />
    <CTABand />
  </>;
}

// PAGE: ADMISSIONS
function AdmissionsPage() {
  const admFAQs = [FAQ_DATA.toursAdmissions[0], FAQ_DATA.toursAdmissions[1], FAQ_DATA.toursAdmissions[2], FAQ_DATA.toursAdmissions[3], FAQ_DATA.costPayment[0], FAQ_DATA.costPayment[2]];
  return <>
    <PageHero title="Admissions" subtitle="A simple, supported process from first call to move-in day." />
    <Section bg={T.offWhite}><SectionHeader label="The Process" title="How to Get Started with Assisted Living" subtitle="Admissions is designed to be simple: tour the home, discuss care needs, and plan move-in if it's a fit." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32, textAlign: "center" }}>
        {[{num:"01",title:"Schedule a Tour",text:"Call or fill out our form to arrange a personal visit. We'll answer questions along the way."},{num:"02",title:"Meet & Assess Needs",text:"Our care team creates a tailored plan based on your loved one's routines, preferences, and support needs."},{num:"03",title:"Move-In Plan",text:"We coordinate a comfortable, supported transition. Comfort items and personal touches help make it home."}].map((s,i)=>
          <Reveal key={i} delay={i*0.12}><div style={{ background: T.white, borderRadius: T.radiusLg, padding: 36, border: `1px solid ${T.border}` }}>
            <div style={{ fontFamily: F.display, fontSize: 44, fontWeight: 700, color: T.gold, opacity: 0.3, marginBottom: 8 }}>{s.num}</div>
            <h3 style={{ fontFamily: F.display, fontSize: 20, fontWeight: 600, color: T.navy, marginBottom: 8 }}>{s.title}</h3>
            <p style={{ fontFamily: F.body, fontSize: 14, color: T.textLight, lineHeight: 1.6, margin: 0 }}>{s.text}</p>
          </div></Reveal>
        )}
      </div>
    </Section>
    <MicroFAQBlock title="Admissions & Cost Questions" faqs={admFAQs} bg={T.cream} />
    <CTABand />
  </>;
}

// PAGE: FAQs HUB
function FAQHubItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return <div style={{ borderBottom: `1px solid ${T.border}`, padding: "18px 0" }}>
    <button onClick={()=>setOpen(!open)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>
      <span style={{ fontFamily: F.display, fontSize: 18, fontWeight: 600, color: T.navy, paddingRight: 16 }}>{q}</span>
      <span style={{ color: T.gold, flexShrink: 0, transform: open?"rotate(180deg)":"none", transition: "transform 0.3s" }}>{Ico.chevDown}</span>
    </button>
    <div style={{ maxHeight: open?300:0, overflow: "hidden", transition: "max-height 0.4s ease", opacity: open?1:0 }}>
      <p style={{ fontFamily: F.body, fontSize: 15, color: T.textBody, lineHeight: 1.75, paddingTop: 12, margin: 0 }}>{a}</p>
    </div>
  </div>;
}
function FAQCategory({ title, faqs }) {
  return <div style={{ marginBottom: 56 }}><Reveal><h3 style={{ fontFamily: F.display, fontSize: 24, fontWeight: 600, color: T.navy, marginBottom: 6 }}>{title}</h3><div style={{ width: 32, height: 2, background: T.gold, borderRadius: 1, marginBottom: 20 }} /></Reveal>{faqs.map((f,i)=><FAQHubItem key={i} q={f.q} a={f.a} />)}</div>;
}
function FAQsPage() {
  return <>
    <PageHero title="Frequently Asked Questions" subtitle="Clear answers to the questions families ask most about assisted living." />
    <Section bg={T.offWhite}><div style={{ maxWidth: 760, margin: "0 auto" }}>
      <FAQCategory title="Fit & Care" faqs={FAQ_DATA.fitCare} />
      <FAQCategory title="Safety & Staffing" faqs={FAQ_DATA.safetyStaffing} />
      <FAQCategory title="Daily Life" faqs={FAQ_DATA.dailyLife} />
      <FAQCategory title="Cost & Payment" faqs={FAQ_DATA.costPayment} />
      <FAQCategory title="Tours & Admissions" faqs={FAQ_DATA.toursAdmissions} />
      <FAQCategory title="Small-Home Assisted Living" faqs={FAQ_DATA.smallHome} />
    </div></Section>
    <CTABand />
  </>;
}

// Footer
function Footer({ setActive }) {
  return <footer style={{ background: T.navy, padding: "56px 24px 28px" }}><div style={{ maxWidth: 1080, margin: "0 auto" }}>
    <div style={{ display: "flex", gap: 48, flexWrap: "wrap", marginBottom: 40 }}>
      <div style={{ flex: "1 1 260px", minWidth: 200 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: T.navyLight, display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div><div style={{ fontFamily: F.display, fontSize: 15, fontWeight: 700, color: T.white }}>At Home Comfort</div><div style={{ fontFamily: F.body, fontSize: 8, fontWeight: 600, color: T.gold, letterSpacing: "0.2em", textTransform: "uppercase" }}>Assisted Living</div></div>
        </div>
        <p style={{ fontFamily: F.body, fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 240 }}>Intimate assisted living in Manteca where every resident is known, valued, and genuinely cared for.</p>
      </div>
      <div style={{ flex: "1 1 120px", minWidth: 100 }}>
        <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 700, color: T.gold, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Pages</div>
        {["Home","About","Care & Services","Virtual Tour"].map(item=><div key={item} onClick={()=>setActive(item)} style={{ fontFamily: F.body, fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 8, cursor: "pointer", transition: "color 0.25s" }} onMouseEnter={e=>e.target.style.color="rgba(255,255,255,0.9)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.55)"}>{item}</div>)}
      </div>
      <div style={{ flex: "1 1 120px", minWidth: 100 }}>
        <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 700, color: T.gold, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Support</div>
        {["Admissions","FAQs","Schedule a Tour"].map(item=><div key={item} onClick={()=>setActive(item)} style={{ fontFamily: F.body, fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 8, cursor: "pointer", transition: "color 0.25s" }} onMouseEnter={e=>e.target.style.color="rgba(255,255,255,0.9)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.55)"}>{item}</div>)}
      </div>
      <div style={{ flex: "1 1 180px", minWidth: 160 }}>
        <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 700, color: T.gold, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Contact</div>
        <div style={{ fontFamily: F.body, fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.9 }}>(209) 555-0178<br/>hello@athomecomfort.com<br/>Manteca, CA</div>
      </div>
    </div>
    <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20, textAlign: "center" }}><p style={{ fontFamily: F.body, fontSize: 12, color: "rgba(255,255,255,0.25)" }}>&copy; 2026 At Home Comfort Assisted Living. All rights reserved.</p></div>
  </div></footer>;
}

function MobileCTABar() {
  return <div className="mob-cta" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 900, background: "rgba(253,251,248,0.97)", backdropFilter: "blur(12px)", borderTop: `1px solid ${T.border}`, padding: "10px 16px", display: "flex", gap: 10 }}>
    <BtnSecondary style={{ flex: 1, textAlign: "center", padding: "12px 8px", fontSize: 14 }}>Call Now</BtnSecondary>
    <BtnPrimary style={{ flex: 1, textAlign: "center", padding: "12px 8px", fontSize: 14 }} onClick={()=>goTo("Schedule a Tour")}>Schedule a Tour</BtnPrimary>
  </div>;
}

// PAGE: SCHEDULE A TOUR
function ScheduleTourPage() {
  const [submitted, setSubmitted] = useState(false);
  const inputStyle = { width: "100%", padding: "14px 18px", borderRadius: T.radius, border: `1px solid ${T.border}`, fontFamily: F.body, fontSize: 15, color: T.navy, outline: "none", boxSizing: "border-box", background: T.cream, transition: "border 0.25s" };
  const labelStyle = { fontFamily: F.body, fontSize: 12, fontWeight: 600, color: T.navy, display: "block", marginBottom: 6, letterSpacing: "0.05em" };
  return <>
    <PageHero title="Schedule a Tour" subtitle="See our home in person and discover if At Home Comfort is the right fit." />
    <Section bg={T.cream}>
      <div style={{ display: "flex", gap: 56, flexWrap: "wrap", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 460px", minWidth: 280 }}>
          <Reveal>
            <div style={{ background: T.white, borderRadius: T.radiusLg, padding: "40px 36px", border: `1px solid ${T.border}`, boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
              {!submitted ? <>
                <h3 style={{ fontFamily: F.display, fontSize: 28, fontWeight: 600, color: T.navy, marginBottom: 8 }}>Request a Tour</h3>
                <p style={{ fontFamily: F.body, fontSize: 14, color: T.textLight, marginBottom: 28, lineHeight: 1.6 }}>Fill out the form below and we'll reach out to confirm a time that works for you.</p>
                {["Your Name", "Email Address", "Phone Number"].map((label, i) => (
                  <div key={i} style={{ marginBottom: 18 }}>
                    <label style={labelStyle}>{label}</label>
                    <input type="text" placeholder={label} style={inputStyle}
                      onFocus={e => e.target.style.borderColor = T.gold}
                      onBlur={e => e.target.style.borderColor = T.border} />
                  </div>
                ))}
                <div style={{ marginBottom: 18 }}>
                  <label style={labelStyle}>Relationship to Resident</label>
                  <input type="text" placeholder="e.g. Son, Daughter, Spouse" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = T.gold}
                    onBlur={e => e.target.style.borderColor = T.border} />
                </div>
                <div style={{ marginBottom: 28 }}>
                  <label style={labelStyle}>Tell Us About Your Loved One</label>
                  <textarea rows={4} placeholder="Any details about care needs, preferences, or questions you have..." style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={e => e.target.style.borderColor = T.gold}
                    onBlur={e => e.target.style.borderColor = T.border} />
                </div>
                <BtnPrimary onClick={()=>setSubmitted(true)} style={{ width: "100%", textAlign: "center", background: T.gold, boxShadow: "0 4px 20px rgba(196,154,82,0.25)" }}>Submit Tour Request</BtnPrimary>
              </> : <>
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: T.goldMuted, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: T.gold }}>
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <h3 style={{ fontFamily: F.display, fontSize: 28, fontWeight: 600, color: T.navy, marginBottom: 10 }}>Thank You</h3>
                  <p style={{ fontFamily: F.body, fontSize: 16, color: T.textBody, lineHeight: 1.7 }}>We've received your request and will reach out shortly to confirm a tour time. We look forward to meeting you.</p>
                </div>
              </>}
            </div>
          </Reveal>
        </div>
        <div style={{ flex: "1 1 320px", minWidth: 260 }}>
          <Reveal delay={0.1}>
            <div style={{ marginBottom: 36 }}>
              <SectionLabel text="What to Expect" align="left" />
              <h3 style={{ fontFamily: F.display, fontSize: 24, fontWeight: 600, color: T.navy, margin: "8px 0 16px" }}>Your Visit</h3>
              <div style={{ width: 32, height: 2, background: T.gold, marginBottom: 20 }} />
              <p style={{ fontFamily: F.body, fontSize: 15, color: T.textBody, lineHeight: 1.8, marginBottom: 16 }}>
                During your tour, you'll walk through the home, meet our care team, and get a feel for the daily rhythm. Bring any questions — and a medication list if you have one handy.
              </p>
              <p style={{ fontFamily: F.body, fontSize: 15, color: T.textBody, lineHeight: 1.8 }}>
                There's no pressure. This is about finding the right fit for your family.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {icon: Ico.phone, label: "(209) 555-0178"},
                {icon: Ico.mail, label: "hello@athomecomfort.com"},
                {icon: Ico.location, label: "Manteca, CA"},
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: T.goldMuted, display: "flex", alignItems: "center", justifyContent: "center", color: T.gold, flexShrink: 0 }}>{c.icon}</div>
                  <span style={{ fontFamily: F.body, fontSize: 15, fontWeight: 500, color: T.navy }}>{c.label}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32, background: T.creamDark, borderRadius: T.radiusLg, aspectRatio: "16/10", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${T.border}` }}>
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke={T.border} strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/></svg>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  </>;
}

// AEO: FAQPage JSON-LD Structured Data
function FAQSchema() {
  const allFAQs = [...FAQ_DATA.fitCare, ...FAQ_DATA.safetyStaffing, ...FAQ_DATA.dailyLife, ...FAQ_DATA.costPayment, ...FAQ_DATA.toursAdmissions, ...FAQ_DATA.smallHome];
  const schema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":allFAQs.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// APP ROOT
export default function App() {
  const [active, setActive] = useState("Home");
  _nav = setActive; // Wire global nav helper
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [active]);
  const pages = {"Home":<HomePage />,"About":<AboutPage />,"Care & Services":<CareServicesPage />,"Virtual Tour":<VirtualTourPage />,"Admissions":<AdmissionsPage />,"FAQs":<FAQsPage />,"Schedule a Tour":<ScheduleTourPage />};
  return <div style={{ fontFamily: F.body, background: T.cream, minHeight: "100vh", position: "relative" }}>
    <FAQSchema />
    {/* Warm gold ambient glow — subtle radial gradients */}
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
      <div style={{ position: "absolute", top: "10%", right: "-5%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,154,82,0.045) 0%, transparent 70%)" }} />
      <div style={{ position: "absolute", bottom: "20%", left: "-10%", width: "60vw", height: "60vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,154,82,0.035) 0%, transparent 65%)" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80vw", height: "80vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,154,82,0.025) 0%, transparent 60%)" }} />
    </div>
    <div style={{ position: "relative", zIndex: 1 }}>
      <Navigation active={active} setActive={setActive} />
      <main>{pages[active]}</main>
      <Footer setActive={setActive} />
      <MobileCTABar />
    </div>
  </div>;
}
