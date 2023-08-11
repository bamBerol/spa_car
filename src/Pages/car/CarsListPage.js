import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cars/CarsListPage.css";

const carBrands = ["Toyota", "Skoda", "Lexus", "Minivan", "Van"];

const CarsListPage = () => {
  const brandList = carBrands.map((brand) => {
    let brandName = brand.toLowerCase();
    let brandClass = brandName + " carBrand";

    return (
      <Link key={brandName} to={`/car/${brandName}`} className={brandClass}>
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
      <section className="carsText">
        <h3>W naszej ofercie posiadamy następujące samochody:</h3>
      </section>
      <section className="carsWrapper">{brandList}</section>
    </section>
  );
};

export default CarsListPage;
