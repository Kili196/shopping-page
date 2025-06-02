import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";

import Shoppage from "./routes/Shoppage";
import Initialpage from "./routes/Initialpage";
import useSetCart from "../hooks/useSetCart";
import useProducts from "../hooks/useProducts";
import CheckoutPage from "./routes/CheckoutPage";

export default function App() {
  const [cartProducts, setCart] = useSetCart([]);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Initialpage setCart={setCart} />,
    },
    { path: "shop", element: <Shoppage /> },
    { path: "checkout", element: <CheckoutPage cart={cartProducts} /> },
  ]);
  return <RouterProvider router={routes}> </RouterProvider>;
}
