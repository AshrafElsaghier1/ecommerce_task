import React from "react";
import { Container } from "react-bootstrap";
import ContactBanner from "./ContactBanner";
import ContactInfo from "./ContactInfo";
import MyForm from "./Form";

const contactInfo = [
  {
    icon: <i className="fa-solid fa-map-location-dot"></i>,
    title: "Our Address",
    address: " Egypt Tahrir Square 234 ",
  },
  {
    icon: <i className="fa-solid fa-phone-flip"></i>,
    title: "Call Us ",
    link: "123-456-7890",
    toLink: "tel:123-456-7890",
  },
  {
    icon: <i className="fa-solid fa-envelope"></i>,
    title: "Email Us ",
    toLink: "mailto:wStore@gmail.com",
    link: "savoy@gmail.com",
  },
];

const Contact = () => {
  return (
    <>
      <ContactBanner />
      <section className="py-5" style={{ background: "#E7DCC6" }}>
        <Container>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 mb-5 ">
            {contactInfo.map((contact, index) => (
              <ContactInfo data={contact} key={index} />
            ))}
          </div>
          <MyForm />
        </Container>
      </section>
    </>
  );
};

export default Contact;
