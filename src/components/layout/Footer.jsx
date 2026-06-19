import { Link } from "react-router-dom";
import { T, F } from "../../tokens";
import { siteLinks } from "../../data";

const localGuideLinks = [
  { label: "Assisted Living in Manteca, CA", path: "/assisted-living-manteca-ca/" },
  { label: "Residential Care Home in Manteca, CA", path: "/residential-care-home-manteca-ca/" },
  { label: "Board & Care Home in Manteca, CA", path: "/board-and-care-manteca-ca/" },
];

export function Footer() {
  return (
    <footer style={{ background: T.navy, padding: "56px 24px 28px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 48, flexWrap: "wrap", marginBottom: 40 }}>
          <div style={{ flex: "1 1 260px", minWidth: 200 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <img
                src="/rmvbckgrnd.png"
                alt="At Home Comfort Assisted Living logo"
                style={{ height: 44, width: "auto", display: "block" }}
              />
              <div>
                <div style={{ fontFamily: F.display, fontSize: 15, fontWeight: 700, color: T.white }}>
                  At Home Comfort
                </div>
                <div
                  style={{
                    fontFamily: F.body,
                    fontSize: 8,
                    fontWeight: 600,
                    color: T.gold,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Assisted Living
                </div>
              </div>
            </div>
            <p style={{ fontFamily: F.body, fontSize: 11, color: T.gold, fontWeight: 500, letterSpacing: "0.06em", marginBottom: 10 }}>
              Facility License #392701886
            </p>
            <p style={{ fontFamily: F.body, fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 260 }}>
              Small, family-style assisted living in Manteca, CA with personalized senior care, daily support, meals, medication routines, and private tours.
            </p>
            <p style={{ fontFamily: F.body, fontSize: 11, color: "rgba(255,255,255,0.28)", lineHeight: 1.7, maxWidth: 260, marginTop: 8 }}>
              Serving families in Manteca, Stockton, Lathrop, Ripon, Tracy, Lodi, Modesto, and San Joaquin County.
            </p>
          </div>
          <div style={{ flex: "1 1 160px", minWidth: 120 }}>
            <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 700, color: T.gold, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>
              Pages
            </div>
            {siteLinks.slice(0, 4).map((item) => (
              <div key={item.path} style={{ marginBottom: 8 }}>
                <Link
                  to={item.path}
                  style={{ fontFamily: F.body, fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
          <div style={{ flex: "1 1 160px", minWidth: 120 }}>
            <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 700, color: T.gold, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>
              Support
            </div>
            {siteLinks.slice(4).map((item) => (
              <div key={item.path} style={{ marginBottom: 8 }}>
                <Link
                  to={item.path}
                  style={{ fontFamily: F.body, fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
          <div style={{ flex: "1 1 180px", minWidth: 140 }}>
            <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 700, color: T.gold, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>
              Local Guides
            </div>
            {localGuideLinks.map((item) => (
              <div key={item.path} style={{ marginBottom: 8 }}>
                <Link
                  to={item.path}
                  style={{ fontFamily: F.body, fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", lineHeight: 1.5, display: "block" }}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
          <div style={{ flex: "1 1 220px", minWidth: 180 }}>
            <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 700, color: T.gold, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>
              Contact
            </div>
            <div style={{ fontFamily: F.body, fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.9 }}>
              <a href="tel:9256056218" style={{ color: "inherit", textDecoration: "none" }}>
                (925) 605-6218
              </a>
              <br />
              <a href="mailto:admin@athomecomfortliving.com" style={{ color: "inherit", textDecoration: "none" }}>
                admin@athomecomfortliving.com
              </a>
              <br />
              Manteca, CA
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <p style={{ fontFamily: F.body, fontSize: 12, color: "rgba(255,255,255,0.25)", margin: 0 }}>
            &copy; 2026 At Home Comfort Assisted Living. All rights reserved.
          </p>
          <p style={{ fontFamily: F.body, fontSize: 11, color: "rgba(255,255,255,0.2)", margin: 0 }}>
            Licensed Assisted Living · Manteca, CA · San Joaquin County
          </p>
        </div>
      </div>
    </footer>
  );
}
