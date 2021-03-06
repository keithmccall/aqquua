import React from "react";
import { HashLink } from "react-router-hash-link";
import NavbarLinks from "./NavbarLinks";
import menu from "../../assets/images/svgs/menu.svg";
import { withRouter } from "react-router-dom";
import SVGC from "../tools/images/SVG";

const Navbar = props => {
  const renderNavbarLinks = (link, key) => {
    return (
      <NavbarLinks
        link={link}
        key={key}
        closeMenu={props.closeMenu}
        routing={props.history}
      />
    );
  };
  const navLinks = props.navbarLinks.map(renderNavbarLinks);
  let isLaunched = props.menuOpen ? "Nav-open" : "Nav-closed";
  let linkLocation =
    props.location.pathname.split("/")[1] === "products"
      ? "/#products"
      : props.location.pathname.split("/")[1] === "university-research"
        ? "/#RD"
        : "/#home";
  return (
    <header>
      <div className="Navbar-container">
        <HashLink
          to={linkLocation}
          className="Nav-logo"
          onClick={props.closeMenu}
        >
          <div className="Eat-fish-flip-container">
            <div className="Eat-fish-flipper">
              <div className="Eat-fish-front">
                <SVGC
                  path={props.aqquuaLogo}
                  className="image Eat-fish-tag-icon"
                  fill="#85dbd7"
                />
              </div>
              <div className="Eat-fish-back">
                <SVGC
                  path={props.backButton}
                  className="image Eat-fish-tag-icon"
                  fill="#85dbd7"
                />
              </div>
            </div>
          </div>
        </HashLink>
        <a onClick={props.toggleMenu} className={`Nav-burger ${isLaunched}`}>
          <SVGC path={menu} fill="white" className="image" />
        </a>
        <div className={`Nav-menu ${isLaunched}`} onClick={props.closeMenu} />
        <nav className={`${isLaunched}`} onClick={props.closeMenu}>
          {navLinks}
        </nav>
      </div>
    </header>
  );
};
export default withRouter(Navbar);
