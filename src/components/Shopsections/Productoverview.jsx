import styles from "./sections.module.css";
import Productcard from "../Card/Productcard";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { useContext } from "react";
import StateContext from "../../context/StateProvider";

export default function Productoverview({ headline }) {
  const fetchedProducts = useProducts();

  const { addToCart } = useContext(StateContext);

  return (
    <>
      {" "}
      <div className={styles["productoverview"]}>
        <h1>{headline}</h1>
        <div className={styles["productoverview--products"]}>
          {fetchedProducts.map((product) => {
            return (
              <Productcard
                addToCart={addToCart}
                product={product}
                key={product.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
