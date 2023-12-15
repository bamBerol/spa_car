import React from "react";
import "../../../styles/cars/brand/Van.css";

const Van = ({ brand }) => {
  let brandClass = brand + "Brand";
  return (
    <div className={brandClass}>
      <div data-aos="fade-left" className="brandSubtitle">
        <h3>
          W naszej ofercie posiadamy busy do 3,5t, 10 i 12-paletowe busy,
          chłodnie do 3,5t.
        </h3>
      </div>
      <div data-aos="fade-right" className="cardItemRenault">
        <div className="imgCardVanRenault">
          <img src="" alt="" />
        </div>
        <div className="textCard">
          <h3>Renault Master</h3>
          <p>Aby poznać cenę skontaktuj się z nami.</p>
        </div>
      </div>
      <div data-aos="fade-right" className="cardItemOpel">
        <div className="imgCardVanOpel">
          <img src="" alt="" />
        </div>
        <div className="textCard">
          <h3>Opel Movano</h3>
          <p>Aby poznać cenę skontaktuj się z nami.</p>
        </div>
      </div>
    </div>
  );
};

export default Van;
