import React from "react";
import "../../../styles/cars/brand/Lexus.css";

const Lexus = ({ brand }) => {
  let brandClass = brand + "Brand";
  return (
    <div className={brandClass}>
      <div className="brandSubtitle">
        <h3>W naszej ofercie posiadamy następujące pojazdy:</h3>
      </div>
      <div className="cardItemLexus">
        <div className="imgCardLexus">
          <img src="" alt="" />
        </div>
        <div className="textCard">
          <h3>Lexus ES300h</h3>
          <p>Aby poznać cenę skontaktuj się z nami.</p>
        </div>
      </div>
    </div>
  );
};

export default Lexus;
