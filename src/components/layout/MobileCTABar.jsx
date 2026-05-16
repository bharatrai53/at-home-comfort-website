import { T } from "../../tokens";
import { ButtonLink, SecondaryAnchor } from "../ui/Buttons";

export function MobileCTABar() {
  return (
    <div
      className="mob-cta"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        background: "rgba(249,243,228,0.97)",
        backdropFilter: "blur(12px)",
        borderTop: `1px solid ${T.border}`,
        padding: "10px 16px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10,
      }}
    >
      <SecondaryAnchor href="tel:9256058864" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 8px", fontSize: 14, width: "100%", boxSizing: "border-box" }}>
        Call Us
      </SecondaryAnchor>
      <ButtonLink to="/schedule-a-tour/" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 8px", fontSize: 14, width: "100%", boxSizing: "border-box" }}>
        Schedule a Tour
      </ButtonLink>
    </div>
  );
}
