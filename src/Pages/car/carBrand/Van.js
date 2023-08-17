import React from "react";

const Van = (props) => {
  let brandClass = props.brand + "Brand";
  return <div className={brandClass}>{props.brand} komponent</div>;
};

export default Van;
