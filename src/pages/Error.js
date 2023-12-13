import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <>
      <h1>Error Page</h1>
      <p>{error.data ? error.data : "Something went wrong"}</p>
    </>
  );
};

export default ErrorPage;
