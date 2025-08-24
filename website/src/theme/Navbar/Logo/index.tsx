import React, { type ReactNode } from "react";
import EgaoMascot from "@site/src/components/EgaoMascot";
import Link from "@docusaurus/Link";
import { useThemeConfig } from "@docusaurus/theme-common";

export default function NavbarLogo(): ReactNode {
  const { navbar } = useThemeConfig();
  return (
    <>
      <Link to="/" className="navbar__brand">
        <div style={{ paddingRight: "8px" }}>
          <EgaoMascot />
        </div>
        <b className="navbar__title text--truncate">{navbar.title}</b>
      </Link>
    </>
  );
}
