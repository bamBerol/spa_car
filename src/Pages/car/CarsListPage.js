import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../styles/cars/CarsListPage.css";

const carBrands = ["Toyota", "Skoda", "Lexus", "Van"];

const CarsListPage = ({ scrollToTop }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const brandList = carBrands.map((brand) => {
    let brandName = brand.toLowerCase();
    let brandClass = brandName + " carBrand";

    return (
      <Link
        key={brandName}
        to={`/car/${brandName}`}
        onClick={scrollToTop}
        data-aos="fade-right"
        className={brandClass}>
        <div className="brandName">
          <h2>{brand}</h2>
        </div>
      </Link>
    );
  });

  return (
    <section className="cars">
      <section className="carsTitle">
        <h2>Samochody</h2>
      </section>
      <section data-aos="fade-down" className="carsText">
        <h3>W naszej ofercie posiadamy następujące samochody:</h3>
      </section>
      <section className="carsWrapper">{brandList}</section>
    </section>
  );
};

export default CarsListPage;
