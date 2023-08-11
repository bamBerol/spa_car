import React from "react";
import Lexus from "../Pages/car/carBrand/Lexus";
import Skoda from "../Pages/car/carBrand/Skoda";
import Toyota from "../Pages/car/carBrand/Toyota";
import Minivan from "../Pages/car/carBrand/Minivan";
import Van from "../Pages/car/carBrand/Van";
import ErrorPage from "../Pages/error/ErrorPage";

const Car = (props) => {
  switch (props.id) {
    case "lexus":
      return <Lexus brand={props.id} />;
    case "skoda":
      return <Skoda brand={props.id} />;
    case "toyota":
      return <Toyota brand={props.id} />;
    case "minivan":
      return <Minivan brand={props.id} />;
    case "van":
      return <Van brand={props.id} />;
    default:
      return <ErrorPage />;
  }
};

export default Car;
