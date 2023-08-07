import React from "react";
import "../styles/CarsPage.css";

const carBrands = ["Toyota", "Skoda", "Lexus"];

const CarsPage = () => {
  const brandList = carBrands.map((brand) => {
    let brandClass = brand.toLocaleLowerCase() + " carBrand";
    return (
      <div className={brandClass}>
        <h3>{brand}</h3>
      </div>
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

export default CarsPage;
