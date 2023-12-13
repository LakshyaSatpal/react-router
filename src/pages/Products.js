import React from "react";
import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
  { id: "p1", name: "Product 1" },
  { id: "p2", name: "Product 2" },
  { id: "p3", name: "Product 3" },
];

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      {DUMMY_PRODUCTS.map((prod) => (
        <li key={prod.id}>
          <Link to={`/products/${prod.id}`}>{prod.name}</Link>
        </li>
      ))}
    </>
  );
};

export default Products;
