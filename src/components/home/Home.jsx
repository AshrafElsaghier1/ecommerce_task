import React, { useEffect } from "react";
import { Products, Banner } from "../";

const Home = (props) => {
  useEffect(() => {
    props.toggleNav(true);
  }, [props]);
  return (
    <main>
      <Banner />
      <Products />
    </main>
  );
};

export default Home;
