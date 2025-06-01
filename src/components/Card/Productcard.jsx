import styles from "./Card.module.css";
import ShopButton from "../Buttons/ShopButton";
import AddCardButton from "../Buttons/AddCardButton";

export default function Productcard({ setCart, product }) {
  console.log(product);

  return (
    <>
      <div className={styles["card"]}>
        <img src={product && product.image} className={styles} />
        <div className={styles["card--container"]}>
          <section className={styles["card--headlines"]}>
            <h3> {product && product.title}</h3>
            <h4> {product && product.price}€</h4>
            <p>{product && product.description}</p>
          </section>
        </div>
        <AddCardButton onClick={setCart} />
      </div>
    </>
  );
}
