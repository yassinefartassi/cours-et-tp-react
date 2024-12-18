import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Acceuil</Link>
      <Link to="/about">Aprops</Link>
      <Link to="/contact">contact</Link>
      <Link to="/Profile/1">Profile</Link>
      <Link to="/Dashboard/stats">Dashboard - Stats</Link>
      <Link to="/Dashboard/settings">Dashboard - Settings</Link>
    </div>
  );
};

export default Navbar;
