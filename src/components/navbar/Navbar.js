import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import FaBars from "react-icons/lib/fa/bars";
import NavbarLinks from "./NavbarLinks";
import SVG from "../tools/images/SVG";

const Navbar = props => {
  console.log("nav", props);
  const renderNavbarLinks = (link, key) => {
    return <NavbarLinks link={link} key={key} />;
  };
  const navLinks = props.navbarLinks.map(renderNavbarLinks);
  let navMenuOpen = props.menuOpen ? "Nav-menu-open" : "";
  return (
    <header className="flex">
      <div className="Nav-container flex-1 flex-space-between flex">
        <div className="Nav-image-holder flex flex-center-vertical">
          <Link to="/">
            <SVG path={props.aqquuaHead} className="image" fill="white" />
          </Link>
        </div>

        <nav className="Nav-menu-spread">{navLinks}</nav>
        <div
          className="flex flex-center-vertical Nav-burger"
          onClick={props.toggleMenu}
        >
          <FaBars size={30} color="white" />
        </div>
      </div>
      <nav
        className={`Nav-menu flex ${navMenuOpen}`}
        onClick={props.toggleMenu}
      >
        {navLinks}
      </nav>
    </header>
  );
};
export default Navbar;
