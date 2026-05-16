import { useState } from "react";
import { T, F } from "../../tokens";
import { Reveal } from "./Reveal";

export function IconCard({ icon, label, delay = 0 }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={delay} style={{ height: "100%" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: T.white,
          borderRadius: T.radiusLg,
          padding: "32px 20px",
          textAlign: "center",
          border: `1px solid ${hovered ? T.gold : T.border}`,
          boxShadow: hovered
            ? "0 8px 28px rgba(196,154,82,0.1)"
            : "0 1px 4px rgba(0,0,0,0.03)",
          transition: "all 0.35s ease",
          transform: hovered ? "translateY(-3px)" : "none",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            background: T.goldMuted,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
            color: T.gold,
          }}
        >
          {icon}
        </div>
        <span style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: T.navy }}>
          {label}
        </span>
      </div>
    </Reveal>
  );
}
