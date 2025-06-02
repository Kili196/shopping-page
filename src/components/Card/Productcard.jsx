import styles from "./Card.module.css";
import AddCardButton from "../Buttons/AddCardButton";

export default function Productcard({ addToCart, product }) {
  return (
    <div className={styles["card"]}>
      <div className={styles["card--container"]}>
        <img
          src={product?.image}
          alt={product?.title}
          className={styles["card--image"]}
        />

        <section className={styles["card--headlines"]}>
          <h3>{product?.title}</h3>
          <h4>{product?.price}€</h4>
          <p>{product?.description}</p>
        </section>
      </div>

      <AddCardButton onClick={addToCart} product={product} />
    </div>
  );
}
