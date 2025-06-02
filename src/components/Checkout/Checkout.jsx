import styles from "./Checkout.module.css";

export default function Checkout() {
  return (
    <>
      <div className={styles["checkout--container"]}>
        <div className={styles[""]}>
          <h1> Checkout</h1>
          <table> dsj</table>
        </div>
        <div>
          <div className={styles["checkout--seperator"]}> </div>
          <div className={styles["checkout--price-section"]}>
            <h2> Total </h2>
            <label> 100€</label>
          </div>
        </div>
      </div>
    </>
  );
}
