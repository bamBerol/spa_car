import React from "react";

const Van = ({ brand }) => {
  let brandClass = brand + "Brand";
  return <div className={brandClass}>Tu będzie lista samochdów {brand}</div>;
};

export default Van;
