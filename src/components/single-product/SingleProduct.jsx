import styles from "./singleProduct.module.css";
import Card from "react-bootstrap/Card";
import { NavLink, useNavigate } from "react-router-dom";

import ImgCard from "../../utils/image-card/ImgCard";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setAddItemToCart } from "../../features";

const SingleProduct = ({ data }) => {
  const { discount, price, title, id } = data;
  const dispatch = useDispatch();

  const addItemToCart = (cartItem) => {
    dispatch(setAddItemToCart(cartItem));
  };
  const navigator = useNavigate();

  const submitHandler = (cartItem, id) => {
    navigator(`/productdetail/${id}`);
    // addItemToCart(cartItem);
  };

  return (
    <div className="mb-3">
      <Card
        className={`p-0  mx-auto  position-relative border-0 ${styles.product}`}
      >
        <NavLink to={`/productdetail/${id}`}>
          <ImgCard data={data} showCategoryTitle={true} />
        </NavLink>
        <Card.Body>
          <h2
            className={`${styles.productLink} fw-semibold text-black fs-6  d-block mb-2`}
          >
            {title}
          </h2>

          <div className={styles.cardFooter}>
            <div className={styles.prices}>
              <span className={styles.price}>
                {discount ? `$${discount}` : ""}
              </span>
              <span
                className={`${styles.price} me-1 ${
                  discount.length ? styles.discount : ""
                } `}
              >
                ${price}
              </span>
            </div>

            <button
              onClick={() => submitHandler(data, id)}
              className={`${styles.productLink} ${styles.seemoreBtn} text-black p-1  border-0 mb-2 bg-white`}
            >
              Show More
            </button>
            <Button
              className="d-block ms-auto btn-sm"
              variant="dark"
              onClick={() => addItemToCart(data)}
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
