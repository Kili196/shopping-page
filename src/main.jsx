import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

import "./index.css";

createRoot(document.getElementById("root")).render(
  /** Nav bar --> Left Logo middle side links right side shopping card
   * Hero Section --> HEro section with a cathc headline
   * Product View Section --> products with a carousel --> with view more button
   * Footer
   *
   */

  <StrictMode>
    <App />
  </StrictMode>
);
