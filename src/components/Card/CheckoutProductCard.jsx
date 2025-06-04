import styles from "./CheckoutProductCard.module.css";

export default function CheckoutProductCard() {
  return (
    <div className={styles["card--container"]}>
      <div className={styles["card--content"]}>
        <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"></img>
        <div>
          <h1> Mens Casual Premium Slim Fit T-Shirts</h1>
          <label>
            {" "}
            Slim-fitting style, contrast raglan long sleeve, three-button henley
            placket, light weight & soft fabric for breathable and comfortable
            wearing. And Solid stitched shirts with round neck made for
            durability and a great fit for casual fashion wear and diehard
            baseball fans. The Henley style round neckline includes a
            three-button placket.{" "}
          </label>
        </div>
      </div>
      <div className={styles["card--quantity"]}>2x</div>
    </div>
  );
}
