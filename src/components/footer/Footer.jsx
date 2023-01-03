import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Social } from "../";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className="py-3  " style={{ background: "#191E32" }}>
      <Container>
        <Navbar className={` ${styles.navbar}  `}>
          <Nav className="justify-content-start flex-grow-1 ">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${styles.active}  nav-link  fs-6 fw-bold `
                  : ` nav-link  fs-6 fw-bold  ${styles.navlink}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${styles.active} ${styles.navlink} nav-link  fs-6 fw-bold `
                  : ` nav-link  fs-6 fw-bold  ${styles.navlink}`
              }
              to="/asd"
            >
              Error page
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? ` ${styles.active}  nav-link  fs-6 fw-bold `
                  : ` nav-link  fs-6 fw-bold  ${styles.navlink}`
              }
              to="/contact"
            >
              Contact us
            </NavLink>
          </Nav>
          <Nav className="justify-content-end flex-grow-1 gap-4">
            <Social />
          </Nav>
        </Navbar>
        <p className=" text-light text-center mb-0 fs-6">
          All Copy Rights Are Reserved To ITI
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
