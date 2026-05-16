import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { T, F } from "../../tokens";
import { siteLinks } from "../../data";
import { ButtonLink, SecondaryAnchor } from "../ui/Buttons";
import { Ico } from "../Icons";

function NavLogo({ scrolled }) {
  return (
    <Link
      to="/"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        textDecoration: "none",
      }}
    >
      <img
        src="/rmvbckgrnd.png"
        alt="At Home Comfort Assisted Living logo"
        style={{
          height: scrolled ? 80 : 100,
          width: "auto",
          display: "block",
          transition: "height 0.4s ease",
        }}
      />
      <div style={{ lineHeight: 1.2 }}>
        <div
          style={{
            fontFamily: F.display,
            fontSize: scrolled ? 22 : 26,
            fontWeight: 700,
            color: scrolled ? T.navy : T.white,
            transition: "all 0.4s ease",
          }}
        >
          At Home Comfort
        </div>
        <div
          style={{
            fontFamily: F.body,
            fontSize: 11,
            fontWeight: 600,
            color: T.gold,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Assisted Living
        </div>
        <div
          style={{
            fontFamily: F.body,
            fontSize: 9.5,
            fontWeight: 500,
            color: scrolled ? T.textLight : "rgba(255,255,255,0.55)",
            letterSpacing: "0.04em",
            marginTop: 2,
            transition: "color 0.4s ease",
          }}
        >
          Facility License #392701886
        </div>
      </div>
    </Link>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const desktopNavStyle = ({ isActive }) => ({
    background: "none",
    border: "none",
    padding: "8px 14px",
    cursor: "pointer",
    fontFamily: F.body,
    fontWeight: isActive ? 600 : 400,
    color: scrolled
      ? isActive
        ? T.navy
        : T.textBody
      : isActive
        ? "rgba(255,255,255,1)"
        : "rgba(255,255,255,0.7)",
    borderBottom: isActive ? `2px solid ${T.gold}` : "2px solid transparent",
    transition: "all 0.25s",
    fontSize: 15,
    textDecoration: "none",
  });

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(251,246,235,0.96)" : "rgba(26,39,68,0.65)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? `1px solid ${T.border}`
            : "1px solid rgba(255,255,255,0.08)",
          transition: "all 0.4s ease",
          padding: scrolled ? "4px 0" : "16px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <NavLogo scrolled={scrolled} />
          <div style={{ display: "flex", alignItems: "center", gap: 2 }} className="desk-nav">
            {siteLinks.slice(0, 6).map((item) => (
              <NavLink key={item.path} to={item.path} style={desktopNavStyle}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <ButtonLink
              to="/schedule-a-tour/"
              style={{ padding: "10px 22px", fontSize: 13, display: "var(--desk-show, flex)" }}
            >
              Schedule a Tour
            </ButtonLink>
            <button
              className="mob-toggle"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
                color: scrolled ? T.navy : T.white,
              }}
            >
              {mobileOpen ? Ico.close : Ico.menu}
            </button>
          </div>
        </div>
      </nav>
      {mobileOpen ? (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: T.offWhite,
            paddingTop: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          {siteLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                background: isActive ? T.goldMuted : "transparent",
                border: "none",
                borderRadius: T.radius,
                padding: "14px 24px",
                width: "85%",
                fontFamily: F.body,
                fontSize: 16,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? T.navy : T.textBody,
                textAlign: "center",
                textDecoration: "none",
              })}
            >
              {item.label}
            </NavLink>
          ))}
          <div style={{ display: "flex", gap: 10, marginTop: 16, width: "85%" }}>
            <ButtonLink to="/schedule-a-tour/" style={{ flex: 1, textAlign: "center" }}>
              Schedule a Tour
            </ButtonLink>
            <SecondaryAnchor href="tel:9256058864" style={{ flex: 1, textAlign: "center" }}>
              Call Us
            </SecondaryAnchor>
          </div>
        </div>
      ) : null}
    </>
  );
}
