import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Acceuil</Link>
      <Link to="/about">A propos</Link>
      <Link to="/profil">profil</Link>
      <Link to="/contact">contact</Link>
    </div>
  );
};

export default Navbar;
