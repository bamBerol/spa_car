import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "../styles/App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">{<Header />}</header>
        <main className="main">{<Main />}</main>
        <footer className="footer">{<Footer />}</footer>
      </div>
    </Router>
  );
}

export default App;
