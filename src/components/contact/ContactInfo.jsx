import React from "react";
import { NavLink } from "react-bootstrap";
import styles from "./contact.module.css";

const ContactInfo = ({ data }) => {
  const { link, title, address, icon, toLink } = data;
  return (
    <div className={`col ${styles.innerContainer} mb-3 `}>
      <div className={` ${styles.innerContent} `}>
        <p className="flex-center">{icon}</p>
        <h2>{title}</h2>

        {link ? (
          <NavLink href={`${toLink}`}> {link} </NavLink>
        ) : (
          <address className="mb-0">{address} </address>
        )}
      </div>
    </div>
  );
};
export default ContactInfo;
