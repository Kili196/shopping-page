import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";

import Shoppage from "./routes/Shoppage";
import Initialpage from "./routes/Initialpage";
import useAddProduct from "../hooks/useAddProduct";
import useProducts from "../hooks/useProducts";

export default function App() {
  const [products, addProduct] = useAddProduct([]);

  const fetchedProducts = useProducts();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Initialpage addProduct={addProduct} />,
    },
    { path: "shop", element: <Shoppage /> },
  ]);
  return <RouterProvider router={routes}> </RouterProvider>;
}
