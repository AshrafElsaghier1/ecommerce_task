import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./notfound.css";

const NotFound = (props) => {
  const navigator = useNavigate();
  useEffect(() => {
    props.toggleNav(false);
  }, [props]);

  return (
    <section className="error-section py-5  ">
      <Container>
        <h1 className="fw-semibold">404 Error Page Not Found </h1>

        <section className="error-container">
          <span className="four">
            <span className="screen-reader-text">4</span>
          </span>
          <span className="zero">
            <span className="screen-reader-text">0</span>
          </span>
          <span className="four">
            <span className="screen-reader-text">4</span>
          </span>
        </section>
        <div className="link-container">
          <button
            className="more-link btn   mb-4"
            onClick={() => navigator("/")}
          >
            Back To Home
          </button>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
