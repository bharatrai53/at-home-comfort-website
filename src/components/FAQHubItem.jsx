import { T, F } from "../tokens";

export function FAQHubItem({ q, a }) {
  return (
    <details style={{ borderBottom: `1px solid ${T.border}`, padding: "18px 0" }}>
      <summary style={{ cursor: "pointer", fontFamily: F.display, fontSize: 18, fontWeight: 600, color: T.navy }}>{q}</summary>
      <p style={{ fontFamily: F.body, fontSize: 15, color: T.textBody, lineHeight: 1.75, paddingTop: 12, margin: 0 }}>{a}</p>
    </details>
  );
}
