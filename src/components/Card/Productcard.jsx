import productImage from "../../assets/placeholder.png";
import styles from "./Card.module.css";
import ShopButton from "../Buttons/ShopButton";
import AddCardButton from "../Buttons/AddCardButton";

export default function Productcard({ setCart }) {
  return (
    <>
      <div className={styles["card"]}>
        <img src={productImage} className={styles} />
        <div className={styles["card--container"]}>
          <section className={styles["card--headlines"]}>
            <h3> Macbook Pro Apple</h3>
            <h4> 100€</h4>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at
              rem non.
            </p>
          </section>
        </div>
        <AddCardButton onClick={setCart} />
      </div>
    </>
  );
}
