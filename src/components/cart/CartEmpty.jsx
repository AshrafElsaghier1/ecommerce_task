import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCartClose } from "../../features";
import styles from "./cart.module.css";
import empty_cart_image from "../../assets/imgs/empty.png";
const CartEmpty = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const cartToggleHandler = () => {
    dispatch(setCartClose());

    navigator("/");
  };
  return (
    <>
      <img
        src={empty_cart_image}
        alt="empty-cart"
        className={`${styles.cartEmpty} d-block my-5 mx-auto`}
        draggable={false}
      />
      <div className="text-center mt-5">
        <Button
          type="button"
          className={`btn mx-auto   border-0 px-3  ${styles.customButton}`}
          onClick={cartToggleHandler}
        >
          <i className={`fa-solid fa-arrow-left-long me-2 `}></i> Back To Store
        </Button>
      </div>
    </>
  );
};

export default CartEmpty;
