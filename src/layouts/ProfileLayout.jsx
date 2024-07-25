import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../assets/style.css";

const ProfileLayout = () => {
  const [activeLink, setActiveLink] = useState("/profile/settings");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className="profile">
        <div className="container">
          <div className="profile-inner">
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
                  Редактировать Профиль
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
                  Новости
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
                  Оплата
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
                  Язык
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
                  Тема
                  <i className="bi bi-chevron-right"></i>
                </Link>
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
                  Как получить галочку?
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
                  Написать Админу
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
                  Связаться с Redder
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </li>
              <button className="logout-btn">Выйти</button>
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
