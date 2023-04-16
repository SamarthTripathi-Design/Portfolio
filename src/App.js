import React, { Suspense } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";

const LazySkill = React.lazy(() => import("./components/Skills/Skill.jsx"));
const LazyQualification = React.lazy(() =>
  import("./components/Qualification/Qualification.jsx")
);
const LazyContact = React.lazy(() =>
  import("./components/Contact/contact.jsx")
);

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<p>"Loading..."</p>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/qualifications" element={<LazyQualification />} />
          <Route exact path="/skills" element={<LazySkill />} />
          <Route exact path="/contact" element={<LazyContact />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
