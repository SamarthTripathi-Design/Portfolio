import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Skill from "./components/Skills/Skill.jsx";
import Qualification from "./components/Qualification/Qualification.jsx";
import Contact from "./components/Contact/contact.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/qualifications" element={<Qualification />} />
        <Route exact path="/skills" element={<Skill />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
