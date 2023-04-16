import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Samarth</h1>
        <ul className="footer__list">
          <li>
            <Link to="qualifications" className="footer__link">
              Qualifications
            </Link>
          </li>
          <li>
            <Link to="skills" className="footer__link">
              Skills
            </Link>
          </li>
          <li>
            <Link to="contact" className="footer__link">
              Contact
            </Link>
          </li>
        </ul>

        <div className="footer__social">
          <Link to="" className="footer__social-link">
            <InstagramIcon />
          </Link>
          <Link to="" className="footer__social-link">
            <TwitterIcon />
          </Link>
          <Link to="" className="footer__social-link">
            <FacebookIcon />
          </Link>
        </div>
        <span className="footer__copy">
          &#169; newcoder. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
