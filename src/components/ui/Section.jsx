import { T } from "../../tokens";

export function Section({ children, bg = T.offWhite, style = {} }) {
  return (
    <section style={{ background: bg, padding: "80px 24px", ...style }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>{children}</div>
    </section>
  );
}
