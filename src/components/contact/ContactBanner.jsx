import styles from "./contact.module.css";
import img__banner from "../../assets/imgs/banner-2.webp";
const ContactBanner = () => {
  return (
    <div className={`${styles.headerContainer} position-relative`}>
      <img
        src={img__banner}
        alt="banner"
        className={`${styles.img} d-block w-100`}
      />
      <h1 className={` ${styles.header} position-absolute fs-1`}>Contact Us</h1>
    </div>
  );
};

export default ContactBanner;
