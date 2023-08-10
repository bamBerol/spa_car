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
      <div className="contactWrapper">
        <div className="contactWrapperItems">{items}</div>
        <div className="contactWrapperMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304.7177290027841!2d20.947705380090202!3d52.33882947596993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ec834c91e2073%3A0x38cf1d6a316ef46a!2sPoet%C3%B3w%2010C%2C%2003-147%20Warszawa!5e0!3m2!1spl!2spl!4v1691675603040!5m2!1spl!2spl"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
