import React from "react";
import octavia from "../../../images/cars/brand/skoda/octavia.jpg";
import superb from "../../../images/cars/skoda.jpg";
import superbLK from "../../../images/cars/brand/skoda/superbLK.jpg";
import "../../../styles/cars/brand/Skoda.css";

const Skoda = ({ brand }) => {
  let brandClass = brand + "Brand";
  return (
    <div className={brandClass}>
      <div data-aos="fade-left" className="brandSubtitle">
        <h3>W naszej ofercie posiadamy następujące pojazdy:</h3>
      </div>
      <div data-aos="fade-right" className="cardItemOctavia">
        <div className="imgCardOctavia">
          <img src={octavia} alt="Skoda Octavia" />
        </div>
        <div className="textCard">
          <h3>Octavia</h3>
          <p>Aby poznać cenę skontaktuj się z nami.</p>
        </div>
      </div>
      <div data-aos="fade-right" className="cardItemSuperb">
        <div className="imgCardSuperb">
          <img src={superb} alt="Skoda Superb" />
        </div>
        <div className="textCard">
          <h3>Superb</h3>
          <p>Aby poznać cenę skontaktuj się z nami.</p>
        </div>
      </div>
      <div data-aos="fade-right" className="cardItemSuperbLK">
        <div className="imgCardSuperbLK">
          <img src={superbLK} alt="Skoda Superb Laurin&Klement" />
        </div>
        <div className="textCard">
          <h3>Superb Laurin & Klement</h3>
          <p>Aby poznać cenę skontaktuj się z nami.</p>
        </div>
      </div>
    </div>
  );
};

export default Skoda;
