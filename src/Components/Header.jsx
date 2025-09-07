import React from "react";
import { Link, NavLink } from "react-router-dom";
import imgUrl from "../Images/avatar-icon.png";

function Header() {
  const styles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <NavLink className="logo" to="/">
        #VANLIFE
      </NavLink>
      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? styles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? styles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? styles : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={imgUrl} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
