import styles from "./CheckoutProductCard.module.css";

export default function CheckoutProductCard({
  productImg,
  productTitle,
  productDesc,
  productQuantity,
  decreaseQuantity,
  product,
}) {
  return (
    <div className={styles["card--container"]}>
      <div className={styles["card--content"]}>
        <img src={productImg && productImg}></img>
        <div>
          <h1> {productTitle && productTitle}</h1>
          <label> {productDesc && productDesc} </label>
        </div>
      </div>
      <div className={styles["card--quantity"]}>
        {productQuantity && productQuantity}x
      </div>
      <button onClick={() => decreaseQuantity(product)}>
        {" "}
        DecreaseQuantity{" "}
      </button>
    </div>
  );
}
