import React from "react";
import "../../../styles/cars/brand/Lexus.css";

const Lexus = (props) => {
  let brandClass = props.brand + "Brand";
  return <div className={brandClass}>{props.brand} komponent</div>;
};

export default Lexus;
