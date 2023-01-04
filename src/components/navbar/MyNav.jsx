import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setCartOpen } from "../../features";
import { setGetTotals } from "../../features/cart-slice/cartSlice";
import Cart from "../cart/Cart";
import styles from "./navbar.module.css";
import logo from "../../assets/imgs/logo.png";
const MyNav = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { cartItems, cartTotalQYT } = useSelector((state) => state.cartState);
  useEffect(() => {
    dispatch(setGetTotals());
  }, [dispatch, cartItems]);

  const cartToggleHandler = () => {
    dispatch(setCartOpen());
  };

  return (
    <Navbar
      sticky="top"
      key="md"
      expand="md"
      className={` ${styles.navbar} ${active ? styles.active : ""}  `}
    >
      <Container>
        <NavLink to="/">
          <img src={logo} alt="logo" width="120" draggable="false" />
        </NavLink>
        <Navbar.Toggle
          className={`${styles.menubar} border-0 p-0`}
          onClick={handleShow}
        />
        <Navbar.Offcanvas placement="end" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              <NavLink to="/">
                <img src={logo} alt="logo" width="120" draggable="false" />
              </NavLink>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <NavLink
                className={`nav-link flex-center fs-6  ${styles.navlink}`}
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className={`nav-link flex-center fs-6 ${styles.navlink}`}
                to="/contact"
              >
                Contact us
              </NavLink>
            </Nav>
            <Nav>
              <Nav.Item
                className={`nav-link ${styles.navlink} ${styles.cart} position-relative `}
              >
                <button
                  className="btn border-0 p-0 text-dark"
                  style={{ color: "#191e32" }}
                  onClick={cartToggleHandler}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="position-absolute rounded">
                    {cartTotalQYT}
                  </span>
                </button>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Cart />
      </Container>
    </Navbar>
  );
};

export default MyNav;
