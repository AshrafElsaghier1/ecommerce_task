import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./social.module.css";
const Social = () => {
  return (
    <>
      <NavLink className={`nav-link p-0 fs-6   ${styles.navlink}`} to="/">
        <i className="fa-brands fa-facebook-f"></i>
      </NavLink>
      <NavLink className={`nav-link p-0 fs-6 ${styles.navlink}`} to="/">
        <i className="fa-brands fa-twitter"></i>
      </NavLink>
      <NavLink className={`nav-link fs-6 p-0  ${styles.navlink}`} to="/">
        <i className="fa-brands fa-instagram"></i>
      </NavLink>
    </>
  );
};

export default Social;
