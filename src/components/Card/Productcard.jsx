import styles from "./Card.module.css";
import ShopButton from "../Buttons/ShopButton";
import AddCardButton from "../Buttons/AddCardButton";

export default function Productcard({ setCart, product }) {
  console.log(product);

  return (
    <>
      <div className={styles["card"]}>
        <div className={styles["card--container"]}>
          <img src={product && product.image} className={styles} />
          <div className={styles[""]}>
            <section className={styles["card--headlines"]}>
              <h3> {product && product.title}</h3>
              <h4> {product && product.price}€</h4>
              <p>{product && product.description}</p>
            </section>
          </div>
        </div>
        <AddCardButton onClick={setCart} product={product} />
      </div>
    </>
  );
}
