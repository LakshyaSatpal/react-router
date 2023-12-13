import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import ProductsPage from "./pages/Products";
import RootLayout from "./Root";
import ProductInfoPage from "./pages/ProductInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:id", element: <ProductInfoPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
