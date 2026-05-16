import { useEffect, useState } from "react";
import { T, F } from "../tokens";

export function PhotoModal({ title, photos, onClose }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowRight") {
        setIndex((value) => (value + 1) % photos.length);
      }
      if (event.key === "ArrowLeft") {
        setIndex((value) => (value - 1 + photos.length) % photos.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, photos.length]);

  const ArrowButton = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous photo" : "Next photo"}
      style={{
        position: "absolute",
        [direction]: 14,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        background: "rgba(26,39,68,0.65)",
        border: "1px solid rgba(255,255,255,0.18)",
        backdropFilter: "blur(6px)",
        borderRadius: "50%",
        width: 42,
        height: 42,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: T.white,
      }}
    >
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
      </svg>
    </button>
  );

  return (
    <div
      onClick={onClose}
      className="photo-modal-pad"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(10,16,30,0.9)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div onClick={(event) => event.stopPropagation()} style={{ width: "100%", maxWidth: 880, animation: "scaleIn 0.25s ease" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 14, padding: "0 2px" }}>
          <div>
            <span style={{ fontFamily: F.body, fontSize: 10, fontWeight: 600, color: T.gold, letterSpacing: "0.22em", textTransform: "uppercase" }}>
              At Home Comfort
            </span>
            <h2 className="photo-modal-title" style={{ fontFamily: F.display, fontWeight: 600, color: T.white, margin: "4px 0 0", lineHeight: 1 }}>
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close photo gallery"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: T.white,
              width: 36,
              height: 36,
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div style={{ position: "relative", borderRadius: T.radiusLg, overflow: "hidden", background: "rgba(0,0,0,0.4)", lineHeight: 0 }}>
          <img
            key={index}
            src={photos[index]}
            alt={`${title} at At Home Comfort Assisted Living`}
            className="photo-modal-img"
            style={{ width: "100%", objectFit: "contain", display: "block", animation: "imgFade 0.3s ease" }}
          />
          {photos.length > 1 ? (
            <>
              <ArrowButton direction="left" onClick={() => setIndex((value) => (value - 1 + photos.length) % photos.length)} />
              <ArrowButton direction="right" onClick={() => setIndex((value) => (value + 1) % photos.length)} />
            </>
          ) : null}
        </div>
        {photos.length > 1 ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 16 }}>
            {photos.map((photo, dotIndex) => (
              <button
                key={photo}
                onClick={() => setIndex(dotIndex)}
                aria-label={`View photo ${dotIndex + 1}`}
                style={{
                  width: dotIndex === index ? 22 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  background: dotIndex === index ? T.gold : "rgba(255,255,255,0.28)",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
