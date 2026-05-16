import { T, F } from "../../tokens";

export function SectionLabel({ text, align = "center" }) {
  return (
    <span
      style={{
        fontFamily: F.body,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: T.gold,
        display: "block",
        textAlign: align,
        marginBottom: 10,
      }}
    >
      {text}
    </span>
  );
}
