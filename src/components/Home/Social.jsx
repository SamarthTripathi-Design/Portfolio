import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Social = () => {
  return (
    <div className="home__social">
      <Link to="" className="home__social-icon">
        <InstagramIcon />
      </Link>
      <Link to="" className="home__social-icon">
        <GitHubIcon />
      </Link>
      <Link to="" className="home__social-icon"></Link>
    </div>
  );
};

export default Social;
