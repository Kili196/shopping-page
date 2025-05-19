import { Link } from "react-router";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav>
      <label className={styles["nav--logo"]}> LOGO </label>
      <ul className={styles["nav--links"]}>
        <li className={styles["nav--link"]}>
          <a> Home </a>
        </li>
        <li className={styles["nav--link"]}>
          <a> About </a>
        </li>
        <li className={styles["nav--link"]}>
          <a> Products </a>
        </li>
      </ul>
    </nav>
  );
}
