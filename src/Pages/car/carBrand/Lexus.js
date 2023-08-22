import React from "react";
import "../../../styles/cars/brand/Lexus.css";

const Lexus = ({ brand }) => {
  let brandClass = brand + "Brand";
  return (
    <div className={brandClass}> Tu będzie lista samochdów marki {brand}</div>
  );
};

export default Lexus;
