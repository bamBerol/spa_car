import React from "react";
import { Link, useParams } from "react-router-dom";
import Car from "../../components/Car";
import "../../styles/cars/CarPage.css";

const CarPage = () => {
  let { id } = useParams();

  let idNew = id.split("");
  let capitalLetter = idNew[0].toUpperCase();
  idNew = idNew.slice(1);
  idNew = [capitalLetter, ...idNew];
  idNew = idNew.join("");

  return (
    <section className="carPage">
      <section className="carPageTitle">
        <h2>{idNew}</h2>
      </section>
      <section className="carPageText">
        <h3>W naszej ofercie posiadamy następujące pojazdy:</h3>
        <div className="brandPart">
          <Car id={id} />
        </div>
        <div className="back">
          <Link to="/cars">Powrót</Link>
        </div>
      </section>
    </section>
  );
};

export default CarPage;
