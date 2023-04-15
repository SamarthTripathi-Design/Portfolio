import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import NightlightIcon from "@mui/icons-material/Nightlight";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Header = () => {
  const [toggle, showMenu] = useState(false);
  const [theme, setTheme] = useState(getStorageTheme());
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

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
              <Link to="/skills" className="nav__link">
                <div className="nav__icon">
                  <DescriptionOutlinedIcon />
                </div>
                Skills
              </Link>
            </li>
            <li className="nav_item">
              <Link to="/contact" className="nav__link">
                <div className="nav__icon">
                  <MailOutlineOutlinedIcon />
                </div>
                Contact
              </Link>
            </li>
            <li className="nav_item">
              <div className="nav__link">
                <div className="darkmode__icon" onClick={toggleTheme}>
                  {theme === "light-theme" ? (
                    <WbSunnyRoundedIcon />
                  ) : (
                    <NightlightIcon color="#ffffff" />
                  )}
                </div>
              </div>
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
