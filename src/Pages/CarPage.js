import React from "react";
import { Link } from "react-router-dom";

const CarPage = () => {
  return (
    <>
      <div>Strona danego samochodu:</div>
      <Link to="/cars">Powrót do zakładki Samochody</Link>
    </>
  );
};

export default CarPage;
