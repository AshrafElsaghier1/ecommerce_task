import Carousel from "react-bootstrap/Carousel";
import styles from "./banner.module.css";

import img__1 from "../../assets/imgs/banner-1.webp";
import img__2 from "../../assets/imgs/banner-2.webp";
import img__3 from "../../assets/imgs/banner.jpg";
const data = [
  {
    id: 1,
    imgUrl: img__1,
    title: "Contemporary Pendant Lighting",
    desc: `I love how these card pair with day-to-day project
    management, and how they feel in my hands`,
  },
  {
    id: 2,
    imgUrl: img__2,
    title: "Minimal Rotating Disc Wall Clock",
    desc: `When I keep all of my to-do’s on my screen, 
    they can be easy to ignore. Using Analog feel really refreshing`,
  },
  {
    id: 3,
    imgUrl: img__3,
    title: "Bamboo Zigzag Pattern Basket",
    desc: `I love having a to-do list that I can see all of the time. And being able to store all of my cards under the divider.`,
  },
];

const Banner = () => {
  return (
    <Carousel className={styles.carousel} fade>
      {data.map(({ id, title, desc, imgUrl }) => {
        return (
          <Carousel.Item key={id}>
            <img
              className={`${styles.img} d-block w-100`}
              src={imgUrl}
              alt={`slide_${id}`}
            />
            <Carousel.Caption
              className={`${styles.content} flex-center flex-column position-absolulte`}
            >
              <h2 className=" fs-4 mb-4 "> {title} </h2>
              <p className={`${styles.text} fs-6`}> {desc} </p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Banner;
