import React from "react";
import { Link } from "react-router-dom";
import "../styles/CarsListPage.css";

const carBrands = ["Toyota", "Skoda", "Lexus"];

const CarsListPage = () => {
  const brandList = carBrands.map((brand) => {
    let brandClass = brand.toLocaleLowerCase() + " carBrand";
    return (
      <Link to={`/car/${brand.toLocaleLowerCase()}`} className={brandClass}>
        <div className="brandName">
          <h2>{brand}</h2>
        </div>
      </Link>
    );
  });
  return (
    <section className="cars">
      <div className="carsTitle">
        <h2>Samochody</h2>
      </div>
      <div className="carsWrapper">{brandList}</div>
    </section>
  );
};

export default CarsListPage;
