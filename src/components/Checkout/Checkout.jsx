import CheckoutProductCard from "../Card/CheckoutProductCard";
import styles from "./Checkout.module.css";
import { useEffect } from "react";

export default function Checkout({ cart }) {
  if (cart) {
    cart.forEach((value, key) => {
      console.log("Product ID:", key, "Value:", value);
    });
  } else {
    console.log("Cart is undefined");
  }
  return (
    <>
      <div className={styles["checkout--container"]}>
        <section className={styles[""]}>
          <h1> Checkout</h1>
          {cart &&
            Array.from(cart.values()).map((product) => (
              <CheckoutProductCard
                productTitle={product.title}
                productImg={product.img}
                productDesc={product.description}
                productQuantity={product.quantity}
              />
            ))}
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
