import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import bus from '../../../public/bus.svg'
import cont from '../../../public/container.svg'
import deliv from '../../../public/expres.svg'
import { useTheme } from "../../context/theme-context";
import { useTranslation } from "react-i18next";

const Navbar = () => {

  const {theme} = useTheme();

  const { t } = useTranslation();

  return (
    <>
      <section className={`navbar`}>
        <div className="container-main">
          <div className="inner-nav">
            <ul className="li-wrapper">
              <li className="nav-list">
                <NavLink to={'/'} className="nav-link">
                  <i className="bi bi-search"></i>
                  <h6>{t("cargo")}</h6>
                </NavLink>
              </li>
              <li className="nav-list">
                <NavLink to={'/cars'} className="nav-link">
                <i class="bi bi-truck-front-fill"></i>
                  <h6>{t("cars")}</h6> </NavLink>
              </li>
              <li className="nav-list">
                <NavLink to={'/mygruzi'} className="nav-link">
                <i class="bi bi-basket"></i>
                <h6>{t("myCargo")}</h6> </NavLink>
              </li>
              <li className="nav-list">
                <NavLink to={'/mycar'} className="nav-link">
                <i class="bi bi-truck"></i>
                <h6>{t("myCar")}</h6> </NavLink>
              </li>
              <li className="nav-list">
                <NavLink to={'/profile'} className="nav-link">
                  <i className="bi bi-person-fill"></i>
                  <h6>{t("profile")}</h6>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
