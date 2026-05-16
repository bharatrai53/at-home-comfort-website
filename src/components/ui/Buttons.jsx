import { Link } from "react-router-dom";
import { T, F } from "../../tokens";

export function ButtonBase({ children, style = {}, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: T.radius,
        padding: "14px 32px",
        fontFamily: F.body,
        fontSize: 15,
        fontWeight: 600,
        transition: "all 0.3s ease",
        textDecoration: "none",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

export function ButtonLink({ children, to, style = {} }) {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <ButtonBase
        style={{
          background: T.navy,
          color: T.white,
          boxShadow: "0 2px 8px rgba(26,39,68,0.15)",
          ...style,
        }}
      >
        {children}
      </ButtonBase>
    </Link>
  );
}

export function SecondaryLink({ children, to, style = {} }) {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <ButtonBase
        style={{
          background: "transparent",
          color: T.navy,
          border: `1.5px solid ${T.gold}`,
          ...style,
        }}
      >
        {children}
      </ButtonBase>
    </Link>
  );
}

export function ButtonAnchor({ children, href, style = {} }) {
  return (
    <a href={href} style={{ textDecoration: "none" }}>
      <ButtonBase
        style={{
          background: T.navy,
          color: T.white,
          boxShadow: "0 2px 8px rgba(26,39,68,0.15)",
          ...style,
        }}
      >
        {children}
      </ButtonBase>
    </a>
  );
}

export function SecondaryAnchor({ children, href, style = {} }) {
  return (
    <a href={href} style={{ textDecoration: "none" }}>
      <ButtonBase
        style={{
          background: "transparent",
          color: T.navy,
          border: `1.5px solid ${T.gold}`,
          ...style,
        }}
      >
        {children}
      </ButtonBase>
    </a>
  );
}
