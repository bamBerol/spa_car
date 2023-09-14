import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/contact/ContactItem.css";

const ContactItem = (props) => {
  let { name, text } = props.contact;

  let classNameNew = name.split(" ");

  if (classNameNew.length > 1) {
    classNameNew = classNameNew.slice(0, 1);
  }

  let nameClass = classNameNew.join("").toLowerCase();

  if (nameClass === "telefon") {
    nameClass = nameClass.replace("telefon", "phone");
  } else if (nameClass === "adres") {
    nameClass = nameClass.replace("adres", "address");
  } else if (nameClass === "e-mail") {
    nameClass = nameClass.replace("e-mail", "eMail");
  }

  let iconClass = nameClass + "Icon";
  let textClass = nameClass + "Text";

  return (
    <div className={nameClass}>
      <div className={iconClass}>
        {nameClass === "address" ? (
          <FontAwesomeIcon icon={faLocationDot} size="2xl" />
        ) : nameClass === "phone" ? (
          <FontAwesomeIcon icon={faPhone} size="2xl" />
        ) : nameClass === "eMail" ? (
          <FontAwesomeIcon icon={faEnvelopeOpen} size="2xl" />
        ) : null}
      </div>
      <div className={textClass}>
        {nameClass === "address" ? (
          <>
            <h3>{name}</h3>
            <a href="https://goo.gl/maps/hNpd98t2Tn8JZCZw9">{text}</a>
          </>
        ) : nameClass === "phone" ? (
          <>
            <h3>{name}</h3>
            <a href="tel:+48608266289">{text}</a>
          </>
        ) : nameClass === "eMail" ? (
          <>
            <h3>{name}</h3>
            <a href="mailto:vivkitranscar@wp.pl">{text}</a>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ContactItem;
