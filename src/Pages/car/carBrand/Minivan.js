import React from "react";

const Minivan = (props) => {
  let brandClass = props.brand + "Brand";
  return <div className={brandClass}>{props.brand} komponent</div>;
};

export default Minivan;
