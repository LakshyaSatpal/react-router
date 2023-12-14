import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import ProductsPage from "./pages/Products";
import RootLayout from "./Root";
import ProductInfoPage from "./pages/ProductInfo";
import TodosPage from "./pages/Todos";

import { todosLoader } from "./pages/Todos";
import NewProductPage from "./pages/NewProduct";
import { action as newProductAction } from "./pages/NewProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      {
        path: "/todos",
        element: <TodosPage />,
        loader: todosLoader,
        errorElement: <ErrorPage />,
      },
      { path: "/products/:id", element: <ProductInfoPage /> },
      { path: "/new", element: <NewProductPage />, action: newProductAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
