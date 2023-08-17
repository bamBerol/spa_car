import React from "react";

const Toyota = (props) => {
  let brandClass = props.brand + "Brand";
  return <div className={brandClass}>{props.brand} komponent</div>;
};

export default Toyota;
