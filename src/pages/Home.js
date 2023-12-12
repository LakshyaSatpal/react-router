import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/products">Link to products page</Link>
    </>
  );
};

export default Home;
