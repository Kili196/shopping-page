import styles from "./sections.module.css";
import Productcard from "../Card/Productcard";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

export default function Productoverview({ headline, setCart }) {
  const fetchedProducts = useProducts();

  console.log(fetchedProducts);

  return (
    <>
      {" "}
      <div className={styles["productoverview"]}>
        <h1>{headline}</h1>
        <div className={styles["productoverview--products"]}>
          {fetchedProducts.map((product) => {
            return (
              <Productcard
                setCart={setCart}
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
