import { T } from "../../tokens";

export function GoldDivider({ width = 48 }) {
  return (
    <div
      style={{
        width,
        height: 2,
        background: T.gold,
        borderRadius: 1,
        margin: "0 auto",
      }}
    />
  );
}
