import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import bus from '../../../public/bus.svg'
import cont from '../../../public/container.svg'
import deliv from '../../../public/expres.svg'

const Navbar = () => {
  return (
    <>
      <section className="navbar">
        <div className="container-main">
          <div className="inner-nav">
            <ul className="li-wrapper">
              <li className="nav-list">
                <NavLink to={'/'} className="nav-link">
                  <i className="bi bi-search"></i>
                  Грузы
                </NavLink>
              </li>
              <li className="nav-list">
                <NavLink to={'/cars'} className="nav-link">
                  <img className="svg"  src={bus} alt={"bus"} width={30} height={24}/>
                  Машины</NavLink>
              </li>
              <li className="nav-list">
                <NavLink to={'/mygruzi'} className="nav-link">
                <img className="svg"  src={cont} alt={"bus"} width={23} height={24}/>
                Мои грузы</NavLink>
              </li>
              <li className="nav-list">
                <NavLink to={'/mycar'} className="nav-link">
                <img className="svg"  src={deliv} alt={"bus"} width={34} height={24} />
                Мои машины</NavLink>
              </li>
              <li className="nav-list">
                <NavLink to={'/profile'} className="nav-link">
                  <i className="bi bi-person-fill"></i>
                  Профиль
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
