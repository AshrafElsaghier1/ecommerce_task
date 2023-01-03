import { useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

import "./form.css";
import logo from "../../assets/imgs/logo.png";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    password: "",
    isError: true,
  });

  const changeHandler = (e) => {
    let validRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (e.target.value.length > 0) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
      setErrorMessage({
        ...errorMessage,
        [e.target.name]: "",
        isError: false,
      });
    } else {
      setErrorMessage({
        ...errorMessage,
        [e.target.name]: "Input field is required",
        isError: true,
      });
    }

    if (e.target.name === "email") {
      if (!e.target.value.match(validRegex)) {
        setErrorMessage({
          ...errorMessage,
          isError: true,
          email: "Please Enter a valid email",
        });
      }
    }

    if (e.target.name === "password") {
      if (e.target.value.length < 7) {
        setErrorMessage({
          ...errorMessage,
          isError: true,

          password: "password must be at least 7 characters",
        });
      }
    }

    if (e.target.name === "name") {
      if (e.target.value.length && !e.target.value.match(/^[a-zA-Z\s]*$/g)) {
        setErrorMessage({
          ...errorMessage,
          name: "Please Enter a valid name",
          isError: true,
        });
      }
      if (e.target.value.length < 3) {
        setErrorMessage({
          ...errorMessage,
          name: "Name is too short",
          isError: true,
        });
      }
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      errorMessage?.name?.length > 0 ||
      errorMessage?.password?.length > 0 ||
      errorMessage?.email?.length > 0 ||
      formData?.name?.length === 0 ||
      formData?.password?.length === 0 ||
      formData?.email?.length === 0
    ) {
      toast.error("Invalid Form please fill your inputs");
    } else {
      toast.success("Valid Form ");
    }
  };
  return (
    <section className="form-section">
      <Container>
        <Form
          className="form-inner"
          noValidate
          onSubmit={submitHandler}
          onChange={changeHandler}
        >
          <div className="logo-container">
            <img
              src={logo}
              alt="logo"
              draggable="false"
              className="logo-img d-block mx-auto mb-4"
            />
          </div>
          <div className="form-groups-container">
            <Form.Group className=" form-group mb-3">
              <Form.Control
                className="input"
                type="text"
                placeholder="Enter Your Name"
                name="name"
              />
              <Form.Text className="error-msg text-danger">
                {errorMessage.name}
              </Form.Text>
            </Form.Group>
            <Form.Group className=" form-group mb-3">
              <Form.Control
                className="input"
                type="email"
                name="email"
                placeholder="Enter Your Email "
                autoComplete="false"
              />
              <Form.Text className="error-msg text-danger">
                {errorMessage.email}
              </Form.Text>
            </Form.Group>
            <Form.Group className=" form-group mb-3">
              <Form.Control
                className="input"
                type="password"
                autoComplete="false"
                placeholder="Enter Your Password"
                name="password"
              />
              <Form.Text className="error-msg text-danger">
                {errorMessage.password}
              </Form.Text>
            </Form.Group>

            <Form.Group className="submit-btn-container">
              <button className="submit-btn" type="submit">
                Contact Us
              </button>
            </Form.Group>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default MyForm;
