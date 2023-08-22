import React from "react";

const Toyota = ({ brand }) => {
  let brandClass = brand + "Brand";
  return (
    <div className={brandClass}>Tu będzie lista samochdów marki {brand}</div>
  );
};

export default Toyota;
