import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "../styles/header/Header.css";

const navList = [
  { name: "Strona główna", path: "/", exact: true },
  { name: "Samochody", path: "/cars" },
  { name: "Kontakt", path: "/contact" },
];

const Header = ({ scrollToTop }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleClick = () => {
    scrollToTop();
    setMenuIsOpen(false);
  };

  const navigationList = navList.map(({ name, path }) => {
    return (
      <li key={name}>
        <NavLink to={path} onClick={handleClick}>
          {name}
        </NavLink>
      </li>
    );
  });

  return (
    <div className="navBar">
      <div className="logoDiv">
        <NavLink to="/" onClick={scrollToTop} className="logo">
          <h1 className="titleLogo">Viki Transcar</h1>
        </NavLink>
        <div className="btn" onClick={handleOpen}>
          {menuIsOpen ? (
            <FontAwesomeIcon icon={faXmark} size="xl" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="xl" />
          )}
        </div>
      </div>
      <div className={menuIsOpen ? "navDiv open" : "navDiv"}>
        <nav>
          <ul className="navList">{navigationList}</ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
