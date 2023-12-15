import React from "react";
import "../../../styles/cars/brand/Toyota.css";

const Toyota = ({ brand }) => {
  let brandClass = brand + "Brand";
  return (
    <div className={brandClass}>
      <div data-aos="fade-left" className="brandSubtitle">
        <h3>W naszej ofercie posiadamy następujące pojazdy:</h3>
      </div>
      <div data-aos="fade-right" className="cardItemAuris">
        <div className="imgCardAuris">
          <img src="" alt="" />
        </div>
        <div className="textCard">
          <h3>Auris</h3>
          <p>Aby poznać cenę skontaktuj się z nami.</p>
        </div>
      </div>
      <div data-aos="fade-right" className="cardItemCorolla">
        <div className="imgCardCorolla">
          <img src="" alt="" />
        </div>
        <div className="textCard">
          <h3>Corolla</h3>
          <p>Aby poznać cenę skontaktuj się z nami.</p>
        </div>
      </div>
      <div data-aos="fade-right" className="cardItemCamry">
        <div className="imgCardCamry">
          <img src="" alt="" />
        </div>
        <div className="textCard">
          <h3>Camry</h3>
          <p>Aby poznać cenę skontaktuj się z nami.</p>
        </div>
      </div>
    </div>
  );
};

export default Toyota;
