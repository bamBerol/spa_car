import React from "react";
import { Link, useParams } from "react-router-dom";
import Car from "../../components/Car";
import "../../styles/cars/CarPage.css";

const CarPage = () => {
  let { id } = useParams();

  return (
    <section className="carPage">
      <section className="carPageTitle">
        <h2>{id}</h2>
      </section>
      <section className="carPageText">
        <Car id={id} />
        <div className="back">
          <Link to="/cars">Powrót</Link>
        </div>
      </section>
    </section>
  );
};

export default CarPage;
