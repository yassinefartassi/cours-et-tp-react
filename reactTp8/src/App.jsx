import React from "react";
import CoursFetchAxios from "./components/CoursFetchAxios";
import PostCours from "./components/PostCours";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Acceuill from "./Pages/Acceuill";
import Apropos from "./Pages/Apropos";
import Contact from "./Pages/Contact";
import Profile from "./Profile";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Settings from "./Pages/Dashboard/Settings";
import State from "./Pages/Dashboard/State";
import NotFound from "./NotFound";
import Storage from "./components/Storage";
import SimpleForm from "./components/SimpleForm";
import ComplexForm from "./components/ComplexForm";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Acceuill />} />
          <Route path="/about" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Profile/:id" element={<Profile />} />
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="stats" element={<State />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <div>
        <Storage />
        <SimpleForm />
        {/* <ComplexForm /> */}
      </div>
    </>
  );
};

export default App;
