import { useEffect } from "react";
import { Container, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  setAddItemToCart,
  setDecreaseItemQYT,
  setIncreaseItemQYT,
} from "../../features/cart-slice/cartSlice";
import { getProduct } from "../../features/products/productsSlice";
import { Loading, ImgCard, Social } from "../index";
import styles from "./productDetails.module.css";

const ProductDetails = () => {
  const { id: idx } = useParams();
  const dispatch = useDispatch();
  const { isLoading, isError, product } = useSelector(
    (state) => state.products
  );

  const { cartItems } = useSelector((state) => state.cartState);
  let cartQuantity = cartItems
    .filter((cartItem) => {
      return cartItem.id === +idx;
    })
    .map((item) => item.cartQuantity);
  useEffect(() => {
    dispatch(getProduct(idx));
  }, [idx, dispatch]);

  const { title, desc, price, discount, id } = product;

  return (
    <>
      <section className={`py-4 ${styles.section} `}>
        <Container>
          {isLoading ? (
            <Loading />
          ) : isError ? (
            <h2 className="alert alert-danger"> E R R O R .... </h2>
          ) : (
            <div className={`${styles.productDetails}  row`}>
              <div
                className={`col-md-6  col-sm-6  col-12   ${styles.productInfo}`}
              >
                <div className={`${styles.innerTop}`}>
                  <h2 className={`fs-5 fw-semibold `}> {title} </h2>
                  <div className={styles.prices}>
                    <span className={` ${discount ? styles.discount : ""} `}>
                      ${price}
                    </span>
                    <span className={styles.price}>
                      {discount ? `$${discount}` : ""}
                    </span>
                  </div>
                </div>
                <div className={` mt-4 `}>
                  <p className={`${styles.text}`}> {desc} </p>
                </div>
                <div className={`${styles.innerbottom} mt-4 `}>
                  <div
                    className={`${styles.controlContainer} d-flex justify-content-between py-2 px-2 align-items-center`}
                  >
                    <p className={`fs-6 mb-0 fw-semibold `}>Quantity</p>
                    <div className={styles.controls}>
                      <button
                        className="border-0 btn fs-6 py-0"
                        onClick={() => dispatch(setDecreaseItemQYT({ id }))}
                      >
                        <i className="fa-solid fa-caret-left"></i>
                      </button>
                      <span className="fs-6">
                        {cartQuantity.length ? cartQuantity : 0}
                      </span>
                      <button
                        className="border-0 btn fs-6 py-0"
                        onClick={() => dispatch(setIncreaseItemQYT({ id }))}
                      >
                        <i className="fa-solid fa-caret-right"></i>
                      </button>
                    </div>
                  </div>
                  <button
                    className={`${styles.submit} w-100   btn   py-2 text-white d-block`}
                    onClick={() => dispatch(setAddItemToCart(product))}
                  >
                    Add To Cart
                  </button>
                  <Nav className="my-3 d-flex align-items-center ">
                    <button
                      className={`${styles.heart} btn btn-sm text-secondary   py-0`}
                    >
                      <i className="fa fa-heart"></i>
                    </button>
                    <div className={`d-flex align-items-center gap-3  `}>
                      <Social />
                    </div>
                  </Nav>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 ">
                <div className={styles.imgContainer}>
                  <ImgCard data={product} showCategoryTitle={true} />
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
