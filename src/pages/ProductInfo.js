import React from "react";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Info Page</h1>
      <p>{params.id}</p>
    </>
  );
};

export default ProductInfo;
