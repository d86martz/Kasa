import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav className="Header-NavBar">
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/about">A Propos</NavLink>
    </nav>
  );
};
export default HeaderNav;
