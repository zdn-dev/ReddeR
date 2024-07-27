import React, { useEffect, useState, useTransition } from "react";
import { Link, Outlet } from "react-router-dom";
import "../assets/style.css";
import { useTheme } from "../context/theme-context.jsx";
import { useTranslation } from "react-i18next";

const ProfileLayout = () => {
  const [activeLink, setActiveLink] = useState("/profile/settings");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const { t } = useTranslation();

  const {theme , toggleTheme} = useTheme();

  return (
    <>
      <div className="profile">
        <div className="container">
          <div className={`profile-inner ${theme}`}>
            <ul className="sidebar-ul">
              <li
                className={`side-list ${
                  activeLink == "/profile/settings" ? "active-link" : ""
                }`}
              >
                <Link
                  to={"settings"}
                  className="side-link"
                  onClick={() => handleLinkClick("/profile/settings")}
                >
                  {t("edit-profile")}
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </li>
              <li
                className={`side-list ${
                  activeLink == "/profile/news" ? "active-link" : ""
                }`}
              >
                <Link
                  to={"news"}
                  className="side-link"
                  onClick={() => handleLinkClick("/profile/news")}
                >
                  {t("news")}
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </li>
              <li
                className={`side-list ${
                  activeLink == "/profile/payment" ? "active-link" : ""
                }`}
              >
                <Link
                  to={"payment"}
                  className="side-link"
                  onClick={() => handleLinkClick("/profile/payment")}
                >
                  {t("payment")}
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </li>
              <li
                className={`side-list ${
                  activeLink == "/profile/language" ? "active-link" : ""
                }`}
              >
                <Link
                  to={"language"}
                  className="side-link"
                  onClick={() => handleLinkClick("/profile/language")}
                >
                  {t("lang")}
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </li>
              <li
                className={`side-list ${
                  activeLink == "/profile/theme" ? "active-link" : ""
                }`}
              >
                <Link
                  to={"theme"}
                  className="side-link"
                  onClick={() => handleLinkClick("/profile/theme")}
                >
                  {t("theme")}
                  <i className="bi bi-chevron-right"></i>
                </Link>
                <div className="sidebtns">
                  <i className="bi bi-brightness-high sun"></i>
                  <div className="checkbox-wrapper-6">
                    <input
                      className="tgl tgl-light"
                      id="cb1-6"
                      type="checkbox"
                      onChange={toggleTheme}
                      checked={theme === "dark"}
                    />
                    <label className="tgl-btn" htmlFor="cb1-6" />
                  </div>
                  <i className="bi bi-moon moon"></i>
                </div>
              </li>
              <li
                className={`side-list ${
                  activeLink == "/profile/checkmark" ? "active-link" : ""
                }`}
              >
                <Link
                  to={"checkmark"}
                  className="side-link"
                  onClick={() => handleLinkClick("/profile/checkmark")}
                >
                  {t("checkmark")}
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </li>
              <li
                className={`side-list ${
                  activeLink == "/profile/support" ? "active-link" : ""
                }`}
              >
                <Link
                  to={"support"}
                  className="side-link"
                  onClick={() => handleLinkClick("/profile/support")}
                >
                  {t("support")}
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </li>
              <li
                className={`side-list ${
                  activeLink == "/profile/contact" ? "active-link" : ""
                }`}
              >
                <Link
                  to={"contact"}
                  className="side-link"
                  onClick={() => handleLinkClick("/profile/contact")}
                >
                  {t("contact")}
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </li>
              <button className="logout-btn">{t("logout")}</button>
            </ul>
            <section className="outlet-profile">
              <Outlet />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileLayout;
