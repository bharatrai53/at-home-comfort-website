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
        display: "flex",
        gap: 10,
      }}
    >
      <div style={{ flex: 1, display: "flex" }}>
        <SecondaryAnchor href="tel:9256058864" style={{ flex: 1, justifyContent: "center", padding: "12px 8px", fontSize: 14 }}>
          Call Us
        </SecondaryAnchor>
      </div>
      <div style={{ flex: 1, display: "flex" }}>
        <ButtonLink to="/schedule-a-tour/" style={{ flex: 1, justifyContent: "center", padding: "12px 8px", fontSize: 14 }}>
          Schedule a Tour
        </ButtonLink>
      </div>
    </div>
  );
}
