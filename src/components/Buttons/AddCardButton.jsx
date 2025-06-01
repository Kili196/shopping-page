import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export default function AddCardButton({ onClick, product }) {
  return (
    <Link className={styles["addcard--link"]}>
      <button
        className={styles["addcard--button"]}
        onClick={() => onClick("a")}
      >
        Add to cart
      </button>
    </Link>
  );
}
