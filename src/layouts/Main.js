import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/home/HomePage";
import CarsListPage from "../Pages/car/CarsListPage";
import CarPage from "../Pages/car/CarPage";
import ContactPage from "../Pages/contact/ContactPage";
import ErrorPage from "../Pages/error/ErrorPage";

const Main = ({ scrollToTop }) => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route
          path="/cars"
          element={<CarsListPage scrollToTop={scrollToTop} />}></Route>
        <Route path="/car/:id" element={<CarPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
};

export default Main;
