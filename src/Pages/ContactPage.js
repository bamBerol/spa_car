import React from "react";
import "../styles/Contact.css";
import ContactItem from "../components/ContactItem";

const contact = [
  { name: "Telefon kontaktowy", text: "608 266 289" },
  { name: "E-mail", text: "vikitranscar@wp.pl" },
  { name: "Adres", text: "ul.Poetów 10c/52, 03-147 Warszawa" },
];

const ContactPage = () => {
  const items = contact.map((item) => <ContactItem contact={item} />);

  return (
    <section className="contact">
      <div className="contactTitle">
        <h2>Skontaktuj się z nami!</h2>
      </div>
      <div className="contactWrapper">{items}</div>
    </section>
  );
};

export default ContactPage;
