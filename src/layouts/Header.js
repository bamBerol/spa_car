import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header/Header.css";

const navList = [
  { name: "Home", path: "/", exact: true },
  { name: "Samochody", path: "/cars" },
  { name: "Kontakt", path: "/contact" },
];

const Header = () => {
  const navigationList = navList.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <>
      <div className="logoDiv">
        <NavLink to="/" exact className="logo">
          <h1>Viki Transcar</h1>
        </NavLink>
      </div>
      <div className="navDiv">
        <nav>
          <ul className="navList">{navigationList}</ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
