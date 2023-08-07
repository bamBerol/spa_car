import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import CarsPage from "../Pages/CarsPage";
import ContactPage from "../Pages/ContactPage";
import ErrorPage from "../Pages/ErrorPage";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/cars" element={<CarsPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
};

export default Main;
