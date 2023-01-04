import React from "react";
import { Card } from "react-bootstrap";
import styles from "./imgCard.module.css";
const ImgCard = ({ data, showCategoryTitle }) => {
  const { category, imgSrc, title, setSrc, price, discount } = data;
  let titleBg =
    category === "BEST SELLER"
      ? styles.bestBg
      : category === "Low Stock"
      ? styles.finalBg
      : category === "New Arrival"
      ? styles.newBg
      : category === "Anlog"
      ? styles.anlogBg
      : styles.defaultBg;

  return (
    <div className={`${styles.imgContainer} position-relative`}>
      <Card.Img
        variant="top"
        src={imgSrc}
        alt={title}
        className={`${styles.productImg} ${styles.mainImg} position-absolute`}
      />
      <Card.Img
        variant="top"
        src={setSrc}
        alt={title}
        className={`${styles.productImg} ${styles.secImg} `}
      />
      {showCategoryTitle ? (
        <Card.Title
          className={`${styles.categoryTitle} text-black py-1 px-2  ${titleBg} `}
        >
          {category}
        </Card.Title>
      ) : (
        <Card.Title className={` bg-dark   ${styles.price}  `}>
          ${discount ? discount : price}
        </Card.Title>
      )}
    </div>
  );
};

export default ImgCard;
