import React from "react";
import { useNavigate } from "react-router-dom";

const Acceuill = () => {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about");
  };
  return (
    <div>
      <p>Page d'acceill</p>
      <button onClick={goToAbout}>A propos</button>
    </div>
  );
};

export default Acceuill;
