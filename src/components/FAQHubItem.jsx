import { useState } from "react";
import { T, F } from "../tokens";
import { Ico } from "./Icons";

export function FAQHubItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: `1px solid ${T.border}`, padding: "18px 0" }}>
      <button
        onClick={() => setOpen((value) => !value)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          textAlign: "left",
        }}
      >
        <span style={{ fontFamily: F.display, fontSize: 18, fontWeight: 600, color: T.navy, paddingRight: 16 }}>
          {q}
        </span>
        <span style={{ color: T.gold, flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>
          {Ico.chevDown}
        </span>
      </button>
      <div style={{ maxHeight: open ? 320 : 0, overflow: "hidden", transition: "max-height 0.4s ease", opacity: open ? 1 : 0 }}>
        <p style={{ fontFamily: F.body, fontSize: 15, color: T.textBody, lineHeight: 1.75, paddingTop: 12, margin: 0 }}>
          {a}
        </p>
      </div>
    </div>
  );
}
