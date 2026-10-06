import images from "../data/images.json";

// Build-time optimization keeps responsive images compatible with static export.
export function SiteImage({ src, alt, sizes = "(max-width: 768px) 100vw, 600px", loading = "lazy", ...props }) {
  const image = images[src];
  const variants = image?.variants || [];
  return (
    <img {...props} style={{ height: "auto", ...props.style }} src={variants.at(-1)?.src || src} alt={alt}
      width={props.width || image?.width} height={props.height || image?.height}
      srcSet={variants.length ? variants.map(v => `${v.src} ${v.width}w`).join(", ") : undefined}
      sizes={variants.length ? sizes : undefined} loading={loading} decoding="async" />
  );
}
