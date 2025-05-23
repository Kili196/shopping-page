import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export default function AddCardButton() {
  return (
    <Link to={"shop"} className={styles["addcard--link"]}>
      <button className={styles["addcard--button"]}> Add to cart</button>{" "}
    </Link>
  );
}
