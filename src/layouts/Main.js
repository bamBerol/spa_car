import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import OfferPage from "../Pages/OfferPage";
import ContactPage from "../Pages/ContactPage";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/offer" element={<OfferPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </>
  );
};

export default Main;
