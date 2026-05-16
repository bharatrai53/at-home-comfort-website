import { T } from "../../tokens";

export function ImgPlaceholder({ src, alt, aspect = "4/3", radius = T.radiusLg, style = {} }) {
  return (
    <div
      style={{
        aspectRatio: aspect,
        borderRadius: radius,
        overflow: "hidden",
        background: T.creamDark,
        position: "relative",
        ...style,
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}
