import styles from "./sections.module.css";
import Productcard from "../Card/Productcard";
import { Link } from "react-router-dom";

export default function Productoverview({ headline, addProduct }) {
  return (
    <>
      {" "}
      <div className={styles["productoverview"]}>
        <h1>{headline}</h1>
        <div className={styles["productoverview--products"]}>
          <Productcard addProduct={addProduct} />
          <Productcard addProduct={addProduct} />
          <Productcard addProduct={addProduct} />
          <Productcard addProduct={addProduct} />
          <Productcard addProduct={addProduct} />
          <Productcard addProduct={addProduct} />
        </div>
      </div>
      <div className={styles["productoverview--view-more"]}>
        {" "}
        <Link to={"shop"}> View More </Link>{" "}
      </div>
    </>
  );
}
