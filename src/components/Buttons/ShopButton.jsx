import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export default function ShopButton() {
  return (
    <Link to={"products"}>
      <button className={styles["shopnow--button"]}> Shop Now! </button>{" "}
    </Link>
  );
}
