import { useState } from "react";
import { T, F } from "../tokens";
import { FAQ_DATA, AMENITY_PHOTOS } from "../data";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { SectionLabel } from "../components/ui/SectionLabel";
import { GoldDivider } from "../components/ui/GoldDivider";
import { Reveal } from "../components/ui/Reveal";
import { PageSEO } from "../components/PageSEO";
import { PageHero } from "../components/PageHero";
import { CTABand } from "../components/CTABand";
import { MicroFAQBlock } from "../components/MicroFAQ";
import { ExploreMore } from "../components/ExploreMore";
import { PhotoModal } from "../components/PhotoModal";
import { AmenityCard } from "../components/AmenityCard";

export function VirtualTourPage() {
  const [modal, setModal] = useState(null);
  const tourFaqs = [FAQ_DATA.dailyLife[3], FAQ_DATA.dailyLife[2], FAQ_DATA.smallHome[1]];

  return (
    <>
      <PageSEO
        title="Virtual Tour | See Our Assisted Living Home in Manteca, CA"
        description="Explore At Home Comfort Assisted Living through our virtual tour and photos of private rooms, living spaces, kitchen, bathrooms, and outdoor areas."
        path="/virtual-tour/"
        image="https://athomecomfortliving.com/updatedrooms/IMG_9753.jpg"
        faqs={tourFaqs}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Virtual Tour", path: "/virtual-tour/" },
        ]}
      />
      <PageHero title="Virtual Tour" subtitle="Explore our warm, welcoming assisted living home." image="/updatedrooms/IMG_9753.jpg" alt="Private bedroom at At Home Comfort Assisted Living" />
      {modal ? <PhotoModal title={modal} photos={AMENITY_PHOTOS[modal]} onClose={() => setModal(null)} /> : null}
      <Section bg={T.offWhite}>
        <Reveal>
          <SectionLabel text="Interactive Tour" />
          <h2 style={{ fontFamily: F.display, fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 600, color: T.navy, textAlign: "center", marginBottom: 8 }}>
            Walk Through Our Home
          </h2>
          <GoldDivider />
          <p style={{ fontFamily: F.body, fontSize: 16, color: T.textLight, textAlign: "center", marginTop: 16, marginBottom: 32, lineHeight: 1.7 }}>
            Use the 360° viewer below to explore private rooms, shared spaces, and the calm atmosphere families experience when they visit in person.
          </p>
        </Reveal>
        <Reveal>
          <div style={{ borderRadius: T.radiusLg, overflow: "hidden", boxShadow: "0 8px 40px rgba(26,39,68,0.12)", border: `1px solid ${T.border}` }}>
            <iframe src="https://my.matterport.com/show/?m=jSdaLLLCrBT" width="100%" height="600" allowFullScreen allow="xr-spatial-tracking" style={{ display: "block", border: "none" }} title="At Home Comfort Virtual Tour" />
          </div>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <a href="https://my.matterport.com/show/?m=jSdaLLLCrBT" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: T.navy, color: T.white, fontFamily: F.body, fontSize: 15, fontWeight: 600, padding: "13px 28px", borderRadius: T.radius, textDecoration: "none", boxShadow: "0 2px 8px rgba(26,39,68,0.15)" }}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open Full Tour in New Tab
            </a>
          </div>
        </Reveal>
      </Section>
      <Section bg={T.cream}>
        <SectionHeader label="Amenities" title="What Makes Our Home Feel Like Home" />
        <p style={{ fontFamily: F.body, fontSize: 14, color: T.textLight, textAlign: "center", marginTop: -32, marginBottom: 40 }}>
          Select any space to see more photos
        </p>
        <div className="amenity-grid">
          {Object.keys(AMENITY_PHOTOS).map((label, index) => (
            <AmenityCard key={label} label={label} delay={index * 0.06} onClick={() => setModal(label)} />
          ))}
        </div>
      </Section>
      <MicroFAQBlock title="About Our Home" faqs={tourFaqs} bg={T.offWhite} />
      <ExploreMore />
      <CTABand />
    </>
  );
}
