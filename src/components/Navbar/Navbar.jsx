import { Link } from "react-router";
import styles from "./Navbar.module.css";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Navbar() {
  return (
    <nav>
      <label className={styles["nav--logo"]}> LOGO </label>
      <ul className={styles["nav--links"]}>
        <li className={styles["nav--link"]}>
          <Link to={"/"}> Home </Link>
        </li>
        <li className={styles["nav--link"]}>
          <Link to={"/about"}> About </Link>
        </li>
        <li className={styles["nav--link"]}>
          <Link to={"/shop"}> Products </Link>
        </li>
        <Link to={"/cart"} className={styles["nav--link"]}>
          <MdOutlineShoppingCart size={30} color="#222222" />
        </Link>
      </ul>
    </nav>
  );
}
