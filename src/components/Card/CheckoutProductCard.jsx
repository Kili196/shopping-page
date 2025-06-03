import styles from "./CheckoutProductCard.module.css";

export default function CheckoutProductCard() {
  return (
    <div className={styles["card--container"]}>
      <div className={styles["card--content"]}>
        <img></img>
        <h1> Test</h1>
        <label>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisidolorem consloreme
          laborum amet, aliquam quod vitae nulla!{" "}
        </label>
      </div>
      <div className={styles["card--quantity"]}>2x</div>
    </div>
  );
}
