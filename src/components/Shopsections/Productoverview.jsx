import styles from "./sections.module.css";
import Productcard from "../Card/Productcard";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

export default function Productoverview({ headline, setCart }) {
  const fetchedProducts = useProducts();

  return (
    <>
      {" "}
      <div className={styles["productoverview"]}>
        <h1>{headline}</h1>
        <div className={styles["productoverview--products"]}>
          <Productcard setCart={setCart} product={fetchedProducts[0]} />
        </div>
      </div>
      <div className={styles["productoverview--view-more"]}>
        {" "}
        <Link to={"shop"}> View More </Link>{" "}
      </div>
    </>
  );
}
