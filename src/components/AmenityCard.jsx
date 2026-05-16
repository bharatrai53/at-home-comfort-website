import { useState } from "react";
import { T, F } from "../tokens";
import { AMENITY_PHOTOS } from "../data";
import { Reveal } from "./ui/Reveal";

export function AmenityCard({ label, delay, onClick }) {
  const [hovered, setHovered] = useState(false);
  const photos = AMENITY_PHOTOS[label] || [];

  return (
    <Reveal delay={delay}>
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: T.radius,
          overflow: "hidden",
          cursor: "pointer",
          border: `1px solid ${hovered ? T.gold : T.border}`,
          boxShadow: hovered
            ? "0 8px 28px rgba(196,154,82,0.15)"
            : "0 1px 4px rgba(0,0,0,0.04)",
          transition: "all 0.3s ease",
          transform: hovered ? "translateY(-3px)" : "none",
          background: T.white,
          width: "100%",
          padding: 0,
          textAlign: "left",
        }}
      >
        <div style={{ height: 110, overflow: "hidden", position: "relative", background: T.creamDark }}>
          <img
            src={photos[0]}
            alt={`${label} at At Home Comfort Assisted Living`}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.4s ease",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          {photos.length > 1 ? (
            <div
              style={{
                position: "absolute",
                bottom: 8,
                right: 8,
                background: "rgba(26,39,68,0.65)",
                backdropFilter: "blur(4px)",
                borderRadius: 20,
                padding: "2px 9px",
                fontFamily: F.body,
                fontSize: 11,
                color: T.white,
                fontWeight: 500,
              }}
            >
              {photos.length} photos
            </div>
          ) : null}
        </div>
        <div style={{ padding: "13px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: T.gold, flexShrink: 0 }} />
            <span style={{ fontFamily: F.body, fontSize: 13.5, fontWeight: 500, color: T.navy }}>{label}</span>
          </div>
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke={T.gold} strokeWidth="2" style={{ opacity: hovered ? 1 : 0.4, transition: "opacity 0.3s", flexShrink: 0 }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>
    </Reveal>
  );
}
