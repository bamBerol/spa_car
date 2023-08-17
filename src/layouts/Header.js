import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/header/Header.css";

const navList = [
  { name: "Home", path: "/", exact: true },
  { name: "Samochody", path: "/cars" },
  { name: "Kontakt", path: "/contact" },
];

class Header extends React.Component {
  state = {
    menuIsOpen: false,
  };

  handleOpen = () => {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen,
    });
  };

  navigationList = navList.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));

  render() {
    return (
      <div className="navBar">
        <div className="logoDiv">
          <NavLink to="/" exact className="logo">
            <h1>Viki Transcar</h1>
          </NavLink>
          <div className="btn" onClick={this.handleOpen}>
            <FontAwesomeIcon icon={faBars} size="xl" />
          </div>
        </div>
        <div className={this.state.menuIsOpen ? "navDiv open" : "navDiv"}>
          <nav>
            <ul className="navList">{this.navigationList}</ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
