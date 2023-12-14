import React from "react";
import { Form, json, redirect } from "react-router-dom";

const NewProduct = () => {
  return (
    <Form method="post">
      <div>
        <input placeholder="Enter Product name" name="name" title="name" />
      </div>
      <button type="submit">Add</button>
    </Form>
  );
};

export async function action({ request }) {
  try {
    const formData = await request.formData();
    const enteredName = formData.get("name");
    const response = await fetch(
      "https://react-router-44e02-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: Math.random() * 1000, name: enteredName }),
      }
    );
    if (!response.ok) {
      return json(
        { message: "Error in saving request" },
        {
          status: 500,
        }
      );
    }
    const data = await response.json();
    console.log(data);
    return redirect("/products");
  } catch (err) {
    console.log(err);
    return json(
      { message: "Error in saving request" },
      {
        status: 500,
      }
    );
  }
}

export default NewProduct;
