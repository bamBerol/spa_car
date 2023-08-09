import React from "react";
import { Link, useParams } from "react-router-dom";
import Car from "../components/Car";

const CarPage = () => {
  let { id } = useParams();

  return (
    <>
      <div>Strona danego samochodu:</div>
      <Car id={id} />
      <Link to="/cars">Powrót do zakładki Samochody</Link>
    </>
  );
};

export default CarPage;
