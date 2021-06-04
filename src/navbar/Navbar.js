import React from "react";
import CoolButton from "../coolbutton/CoolButton";
import "bulma/css/bulma.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width="112"
          height="28"
        />
        <a className="navbar-item" href="https://bulma.io/">
          Home
        </a>
      </div>

      <div className="buttons_container">
        <CoolButton className="buttons_login" isPrimary>
          Login
        </CoolButton>
        <CoolButton isInfo>Signup</CoolButton>
      </div>
    </nav>
  );
}

export default Navbar;
