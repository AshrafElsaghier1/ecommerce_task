import React from "react";

import styles from "./cart.module.css";

const CartCount = ({ cartToggleHandler, quantity }) => {
  return (
    <div
      className={`${styles.cartCount} py-3 d-flex align-items-center justify-content-between mb-4 px-2 mx-2`}
    >
      <h2 className={`${styles.heading} fs-6 mb-0 fw-semibold text-light`}>
        <span className="text-warning"> ({quantity})</span> Items In Your Cart
      </h2>
      <button
        className={`${styles.close} btn btn-sm  text-light fw-semibold fs-6 border-0`}
        type="button"
        onClick={cartToggleHandler}
      >
        close
      </button>
    </div>
  );
};

export default CartCount;
