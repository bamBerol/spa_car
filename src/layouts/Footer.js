import React from "react";
import "../styles/footer/Footer.css";
const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <div className="footer">
      <div className="footerBody">
        <p>&copy; devTro {year} All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
