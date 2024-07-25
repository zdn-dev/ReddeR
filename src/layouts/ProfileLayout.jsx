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
                  activeLink == "/profile/settings" ? 'active-link' : ""
                }`}
                onClick={() => handleLinkClick("/profile/settings")}
              >
                <Link to={"settings"} className="side-link">
                  Редактировать Профиль
                </Link>
              </li>
              <li
                className={`side-list ${
                  activeLink == "/profile/news" ? 'active-link' : ""
                }`}
                onClick={() => handleLinkClick("/profile/news")}
              >
                <Link to={"news"} className="side-link">
                  Новости
                </Link>
              </li>
              <li
                className={`side-list ${
                  activeLink == "/profile/payment" ? 'active-link' : ""
                }`}
                onClick={() => handleLinkClick("/profile/payment")}
              >
                <Link to={"payment"} className="side-link">
                  Оплата
                </Link>
              </li>
              <li
                className={`side-list ${
                  activeLink == "/profile/language" ? 'active-link' : ""
                }`}
                onClick={() => handleLinkClick("/profile/language")}
              >
                <Link to={"language"} className="side-link">
                  Язык
                </Link>
              </li>
              <li
                className={`side-list ${
                  activeLink == "/profile/theme" ? 'active-link' : ""
                }`}
                onClick={() => handleLinkClick("/profile/theme")}
              >
                <Link to={"theme"} className="side-link">
                  Тема
                </Link>
              </li>
              <li
                className={`side-list ${
                  activeLink == "/profile/checkmark" ? 'active-link' : ""
                }`}
                onClick={() => handleLinkClick("/profile/checkmark")}
              >
                <Link to={"checkmark"} className="side-link">
                  Как получить галочку?
                </Link>
              </li>
              <li
                className={`side-list ${
                  activeLink == "/profile/support" ? 'active-link' : ""
                }`}
                onClick={() => handleLinkClick("/profile/support")}
              >
                <Link to={"support"} className="side-link">
                  Написать Админу
                </Link>
              </li>
              <li
                className={`side-list ${
                  activeLink == "/profile/contact" ? 'active-link' : ""
                }`}
                onClick={() => handleLinkClick("/profile/contact")}
              >
                <Link to={"contact"} className="side-link">
                  Связаться с Redder
                </Link>
              </li>
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
