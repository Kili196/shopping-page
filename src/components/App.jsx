import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";

import Shoppage from "./routes/Shoppage";
import Initialpage from "./routes/Initialpage";

import CheckoutPage from "./routes/CheckoutPage";
import { StateProvider } from "../context/StateProvider";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Initialpage />,
    },
    { path: "shop", element: <Shoppage /> },
    {
      path: "checkout",
      element: <CheckoutPage />,
    },
  ]);
  return (
    <StateProvider>
      <RouterProvider router={routes}> </RouterProvider>{" "}
    </StateProvider>
  );
}
