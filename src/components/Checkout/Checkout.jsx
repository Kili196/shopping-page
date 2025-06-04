import CheckoutProductCard from "../Card/CheckoutProductCard";
import styles from "./Checkout.module.css";

export default function Checkout() {
  return (
    <>
      <div className={styles["checkout--container"]}>
        <section className={styles[""]}>
          <h1> Checkout</h1>
          <CheckoutProductCard />
        </section>
        <div>
          <div className={styles["checkout--seperator"]}> </div>
          <section className={styles["checkout--price-section"]}>
            <h2> Total </h2>
            <h2> 100€</h2>
          </section>
        </div>
      </div>
    </>
  );
}
