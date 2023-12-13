import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/products");
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleClick}>Click to go to Products</button>
    </>
  );
};

export default Home;
