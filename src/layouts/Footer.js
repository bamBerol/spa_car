import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <div>
      <p>&copy; devTro {year} All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
