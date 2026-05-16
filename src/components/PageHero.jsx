import { T, F } from "../tokens";
import { Reveal } from "./ui/Reveal";
import { GoldDivider } from "./ui/GoldDivider";

export function PageHero({ title, subtitle, image, alt }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: 380,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: T.navy,
      }}
    >
      {image ? (
        <>
          <img
            src={image}
            alt={alt}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.35,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(26,39,68,0.5) 0%, rgba(26,39,68,0.75) 100%)",
            }}
          />
        </>
      ) : (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, ${T.navy} 0%, ${T.navyLight} 100%)`,
          }}
        />
      )}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "100px 24px 60px",
          maxWidth: 760,
        }}
      >
        <Reveal>
          <GoldDivider width={36} />
          <h1
            style={{
              fontFamily: F.display,
              fontSize: "clamp(32px, 5vw, 50px)",
              fontWeight: 600,
              color: T.white,
              lineHeight: 1.15,
              margin: "20px 0 14px",
            }}
          >
            {title}
          </h1>
          {subtitle ? (
            <p
              style={{
                fontFamily: F.body,
                fontSize: 17,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.65,
                maxWidth: 560,
                margin: "0 auto",
              }}
            >
              {subtitle}
            </p>
          ) : null}
        </Reveal>
      </div>
    </div>
  );
}
