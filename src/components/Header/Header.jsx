import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="dark-mode header">
        <div className="container"> 
          <div className="header-inner">
            <div className="site-logo">
              <img
                className="logo-img"
                src={"../../../public/redder-fire-logo.png"}
                alt={"logo"}
              />
              <h3 className="logo-title">ReddeR</h3>
            </div>
            <div className="tools">
              <a className="dark-mode" href="tel:+998999999999">
              <i className="bi bi-telephone-fill tel-icon icon"></i>
              <span className="nomer">+998 99 999 99 99</span></a>
              <i className="bi bi-globe language icon"></i>
              <NavLink to={'/notification'} className='dark-mode'>
              <i className="bi bi-bell icon"></i></NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
