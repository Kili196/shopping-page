import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";

import Shoppage from "./routes/Shoppage";
import Initialpage from "./routes/Initialpage";
import { useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Initialpage products={products} setProducts={setProducts} />,
    },
    { path: "shop", element: <Shoppage /> },
  ]);
  return <RouterProvider router={routes}> </RouterProvider>;
}
