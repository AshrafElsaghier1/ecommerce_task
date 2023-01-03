import styles from "./cart.module.css";
import { CartCount, CartItem, CartEmpty } from "./";
import { setCartClose } from "../../features";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import {
  setGetTotals,
  setRemoveAllItems,
} from "../../features/cart-slice/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartState, cartItems, cartTotalAmount, cartTotalQYT } = useSelector(
    (state) => state.cartState
  );

  useEffect(() => {
    dispatch(setGetTotals());
  }, [dispatch, cartItems]);

  const cartToggleHandler = () => {
    dispatch(setCartClose());
  };

  const addedCartItems = cartItems.map((cartItem) => (
    <CartItem key={cartItem.id} items={cartItem} />
  ));

  return (
    <div
      className={`${styles.cartOverlay} position-fixed  ${
        cartState ? styles.showCart : styles.hideCart
      } `}
    >
      <div className={`${styles.cart} position-absolute w-100 px-3 py-0 `}>
        <CartCount
          cartToggleHandler={cartToggleHandler}
          quantity={cartTotalQYT}
        />

        {cartItems.length ? (
          <div className="d-flex flex-column ">
            <div className={styles.cartItemsContainer}> {addedCartItems} </div>

            <>
              <Button
                variant="danger"
                className="fw-semibold btn mx-auto w-50 spacing"
                onClick={() => dispatch(setRemoveAllItems())}
              >
                CLEAR ALL
              </Button>
            </>
            <div className="  text-white d-flex justify-content-between align-items-center  p-2 my-4  ">
              <h2 className={`fs-6 mb-0 ${styles.subtotal} `}> Subtotal </h2>
              <h2 className={`fs-6 mb-0 text-warning ${styles.subtotal} `}>
                ${cartTotalAmount.toFixed(2)}
              </h2>
            </div>
          </div>
        ) : (
          <CartEmpty />
        )}
      </div>

      <div onClick={cartToggleHandler} className={styles.closeHandler}></div>
    </div>
  );
};

export default Cart;
