import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { T, F } from "../../tokens";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { MobileCTABar } from "./MobileCTABar";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

export function SiteLayout({ children }) {
  return (
    <div style={{ fontFamily: F.body, background: T.cream, minHeight: "100vh", position: "relative" }}>
      <ScrollToTop />
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,154,82,0.045) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "20%", left: "-10%", width: "60vw", height: "60vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,154,82,0.035) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80vw", height: "80vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,154,82,0.025) 0%, transparent 60%)" }} />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <MobileCTABar />
      </div>
    </div>
  );
}
