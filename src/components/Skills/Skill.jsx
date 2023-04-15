import React from "react";
import "./skill.css";
import Frontend from "./Frontend.jsx";

const Skill = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <p className="section__subtitle">My technical level</p>
      <div className="skills__container container grid">
        <Frontend />
      </div>
    </section>
  );
};

export default Skill;
