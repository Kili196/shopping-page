import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Initialpage from "./components/routes/Initialpage";

const routes = createBrowserRouter([{ path: "/", element: <Initialpage /> }]);

createRoot(document.getElementById("root")).render(
  /** Nav bar --> Left Logo middle side links right side shopping card
   * Hero Section --> HEro section with a cathc headline
   * Product View Section --> products with a carousel --> with view more button
   * Footer
   *
   */

  <StrictMode>
    <RouterProvider router={routes}> </RouterProvider>
  </StrictMode>
);
