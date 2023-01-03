import React from "react";
import styles from "./cartItem.module.css";
import { ImgCard } from "../";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQYT,
  setIncreaseItemQYT,
  setRemoveItemFromCart,
} from "../../features/cart-slice/cartSlice";
const CartItem = ({ items }) => {
  const { price, title, cartQuantity, discount, id } = items;
  const dispatch = useDispatch();
  return (
    <div
      className={`${styles.cartItem} d-flex text-light mb-4 justify-content-between p-2`}
    >
      <div className={` d-flex gap-3`}>
        <div className={styles.imgContainer}>
          <ImgCard data={items} showCategoryTitle={false} />
        </div>
        <div className="d-flex flex-column justify-content-between">
          <h5 className={`fs-6 `}> {title} </h5>

          <div>
            <button
              className="border-0 btn fs-5 py-0  text-light"
              onClick={() => dispatch(setDecreaseItemQYT({ id }))}
            >
              <i className="fa-solid fa-caret-left"></i>
            </button>
            <span className="fs-5 text-warning"> {cartQuantity} </span>
            <button
              className="border-0 btn fs-5 py-0 text-light"
              onClick={() => dispatch(setIncreaseItemQYT({ id }))}
            >
              <i className="fa-solid fa-caret-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between ">
        <button
          onClick={() => dispatch(setRemoveItemFromCart({ title, id }))}
          className={`text-dark fw-semibold btn btn-sm  align-self-end bg-light  border-0 ${styles.times}`}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h5 className={`fs-6 mb-0 ${styles.itemPrice} `}>
          ${((discount ? discount : price) * cartQuantity).toFixed(2)}
        </h5>
      </div>
    </div>
  );
};

export default CartItem;
