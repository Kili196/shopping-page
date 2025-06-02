import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";

import Shoppage from "./routes/Shoppage";
import Initialpage from "./routes/Initialpage";
import useSetCart from "../hooks/useSetCart";

import CheckoutPage from "./routes/CheckoutPage";

export default function App() {
  const [cartProducts, addToCart] = useSetCart();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Initialpage addToCart={addToCart} />,
    },
    { path: "shop", element: <Shoppage /> },
    { path: "checkout", element: <CheckoutPage cart={cartProducts} /> },
  ]);
  return <RouterProvider router={routes}> </RouterProvider>;
}
