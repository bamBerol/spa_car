import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import CarsListPage from "../Pages/CarsListPage";
import CarPage from "../Pages/CarPage";
import ContactPage from "../Pages/ContactPage";
import ErrorPage from "../Pages/ErrorPage";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/cars" element={<CarsListPage />}></Route>
        <Route path="/car/:id" element={<CarPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
};

export default Main;
