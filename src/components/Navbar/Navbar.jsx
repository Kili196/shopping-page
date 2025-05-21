import { Link } from "react-router";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav>
      <label className={styles["nav--logo"]}> LOGO </label>
      <ul className={styles["nav--links"]}>
        <li className={styles["nav--link"]}>
          <Link to={"/"}> Home </Link>
        </li>
        <li className={styles["nav--link"]}>
          <Link to={"about"}> About </Link>
        </li>
        <li className={styles["nav--link"]}>
          <Link to={"products"}> Products </Link>
        </li>
      </ul>
    </nav>
  );
}
