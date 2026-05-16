import { T, F } from "../tokens";
import { Reveal } from "./ui/Reveal";
import { GoldDivider } from "./ui/GoldDivider";
import { ButtonLink, SecondaryAnchor } from "./ui/Buttons";

export function CTABand() {
  return (
    <section
      style={{
        background: T.navy,
        padding: "72px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(196,154,82,0.06)",
        }}
      />
      <Reveal>
        <GoldDivider width={36} />
        <h2
          style={{
            fontFamily: F.display,
            fontSize: "clamp(28px, 4vw, 38px)",
            fontWeight: 600,
            color: T.white,
            margin: "20px 0 14px",
            lineHeight: 1.2,
          }}
        >
          Schedule a Tour Today
        </h2>
        <p
          style={{
            fontFamily: F.body,
            fontSize: 16,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 460,
            margin: "0 auto 32px",
          }}
        >
          The best way to know if At Home Comfort is the right fit is to visit in
          person and talk through your loved one's care needs.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <ButtonLink
            to="/schedule-a-tour/"
            style={{ background: T.gold, boxShadow: "0 4px 20px rgba(196,154,82,0.3)" }}
          >
            Schedule a Tour
          </ButtonLink>
          <SecondaryAnchor
            href="tel:9256058864"
            style={{ color: T.white, borderColor: "rgba(255,255,255,0.3)" }}
          >
            Call Us
          </SecondaryAnchor>
        </div>
      </Reveal>
    </section>
  );
}
