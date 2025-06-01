import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";

import Shoppage from "./routes/Shoppage";
import Initialpage from "./routes/Initialpage";
import useSetCart from "../hooks/useSetCart";
import useProducts from "../hooks/useProducts";

export default function App() {
  const [cartProducts, setCart] = useSetCart([]);

  const fetchedProducts = useProducts();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Initialpage setCart={setCart} />,
    },
    { path: "shop", element: <Shoppage /> },
  ]);
  return <RouterProvider router={routes}> </RouterProvider>;
}
