import styles from "./CheckoutProductCard.module.css";

export default function CheckoutProductCard({
  productImg,
  productTitle,
  productDesc,
  productQuantity,
}) {
  return (
    <div className={styles["card--container"]}>
      <div className={styles["card--content"]}>
        <img src={productImg}></img>
        <div>
          <h1> {productTitle}</h1>
          <label> {productDesc} </label>
        </div>
      </div>
      <div className={styles["card--quantity"]}>{productQuantity}x</div>
    </div>
  );
}
