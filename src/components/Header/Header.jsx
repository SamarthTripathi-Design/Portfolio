import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";

const Header = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Samarth
        </Link>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav_item">
              <Link to="/" className="nav__link active-link">
                <div className="nav__icon">
                  <HomeOutlinedIcon />
                </div>
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link to="/qualifications" className="nav__link">
                <div className="nav__icon">
                  <PersonOutlinedIcon />
                </div>
                Qualifications
              </Link>
            </li>
            <li className="nav_item">
              <Link to="skills" className="nav__link">
                <div className="nav__icon">
                  <DescriptionOutlinedIcon />
                </div>
                Skills
              </Link>
            </li>
            <li className="nav_item">
              <Link to="contact" className="nav__link">
                <div className="nav__icon">
                  <MailOutlineOutlinedIcon />
                </div>
                Contact
                <div className="nav__icon"></div>
              </Link>
            </li>
          </ul>
          <div
            className="nav__close"
            onClick={() => {
              showMenu(!toggle);
            }}
          >
            <CloseOutlinedIcon />
          </div>
        </div>
        <div
          className="nav__toggle"
          onClick={() => {
            showMenu(!toggle);
          }}
        >
          <MenuOutlinedIcon />
        </div>
      </nav>
    </header>
  );
};

export default Header;
