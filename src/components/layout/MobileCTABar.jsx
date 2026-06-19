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
      <a href="tel:9256056218" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 0", fontSize: 14, fontFamily: "inherit", fontWeight: 600, color: "#1A2744", border: "1.5px solid #C49A52", borderRadius: 12, textDecoration: "none", background: "transparent", boxSizing: "border-box" }}>
        Call Us
      </a>
      <a href="/schedule-a-tour/" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 0", fontSize: 14, fontFamily: "inherit", fontWeight: 600, color: "#FEFCF8", border: "none", borderRadius: 12, textDecoration: "none", background: "#1A2744", boxSizing: "border-box", boxShadow: "0 2px 8px rgba(26,39,68,0.15)" }}>
        Schedule a Tour
      </a>
    </div>
  );
}
