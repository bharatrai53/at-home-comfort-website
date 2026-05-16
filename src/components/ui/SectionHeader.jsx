import { T, F } from "../../tokens";
import { Reveal } from "./Reveal";
import { GoldDivider } from "./GoldDivider";
import { SectionLabel } from "./SectionLabel";

export function SectionHeader({ label, title, subtitle, align = "center" }) {
  return (
    <Reveal>
      <div
        style={{
          textAlign: align,
          marginBottom: 52,
          maxWidth: align === "center" ? 680 : "none",
          margin: align === "center" ? "0 auto 52px" : "0 0 52px",
        }}
      >
        {label ? <SectionLabel text={label} align={align} /> : null}
        <h2
          style={{
            fontFamily: F.display,
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 600,
            color: T.navy,
            lineHeight: 1.2,
            margin: "0 0 14px",
          }}
        >
          {title}
        </h2>
        <GoldDivider />
        {subtitle ? (
          <p
            style={{
              fontFamily: F.body,
              fontSize: 16,
              color: T.textLight,
              lineHeight: 1.7,
              marginTop: 18,
            }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
