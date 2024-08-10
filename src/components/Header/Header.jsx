import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/redder-fire-logo.png";
import { useTheme } from "../../context/theme-context";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "ru", lang: "Russian" },
  { code: "uz", lang: "Uzbek" },
];

const Header = () => {
  const { theme } = useTheme();

  const { i18n } = useTranslation();

  const chengeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={`header`}>
        <div className="container">
          <div className="header-inner">
            <div className="site-logo">
              <img className="logo-img" src={Logo} alt={"logo"} />
              <h3 className="logo-title">ReddeR</h3>
            </div>
            <div className="tools">
              <a className="dark-mode" href="tel:+998999999999">
                <i className="bi bi-telephone-fill tel-icon icon"></i>
                <span className="nomer">+998 99 999 99 99</span>
              </a>

              <i
                className="bi bi-globe language icon"
                onClick={handleToggle}
              ></i>
              {isOpen ? <div className="lang-selector">
      {languages.map((lng) => {
        return (
          <button
            className={
              lng.code === i18n.language ? "selected lang-btn" : "lang-btn"
            }
            key={lng.code}
            onClick={() => chengeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div> : ""}

              <NavLink to={"/notification"}>
                <i className="bi bi-bell icon"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
