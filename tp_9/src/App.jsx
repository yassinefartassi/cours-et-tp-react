import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Acceuil from "./components/Acceuil";
import Apropos from "./components/Apropos";
import Profil from "./components/Profil";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/about" element={<Apropos />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="profil/email:email" element={<Profil />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
