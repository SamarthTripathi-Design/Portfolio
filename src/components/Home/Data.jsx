import React from "react";
import { Link } from "react-router-dom";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Samarth Tripathi</h1>
      <h3 className="home__subtitle">React Developer</h3>
      <p className="home__description">
        I'm a Web application developer with around 3 years of experience
        working with react in E-commerce and media domain
      </p>
      <Link to="contact" className="button button--flex">
        Say Hello &nbsp;
        <SendRoundedIcon />
      </Link>
    </div>
  );
};

export default Data;
