import { useContext } from "react";
import CheckoutProductCard from "../Card/CheckoutProductCard";
import styles from "./Checkout.module.css";
import StateContext from "../../context/StateProvider";

export default function Checkout() {
  const { cartProducts, decreaseQuantity } = useContext(StateContext);
  function calculateTotalPrice() {
    let totalPrice = 0;

    Array.from(cartProducts.values()).forEach(
      (element) => (totalPrice += element.price * element.quantity)
    );

    return totalPrice.toFixed(2);
  }

  return (
    <>
      <div className={styles["checkout--container"]}>
        <section className={styles["checkout--overview"]}>
          <h1> Checkout</h1>
          <section className={styles["checkout-card--container"]}>
            {cartProducts.length === 0 ? (
              <p> No products in cart yet!</p>
            ) : (
              cartProducts.map((product) => (
                <CheckoutProductCard
                  productTitle={product.title}
                  productImg={product.img}
                  productDesc={product.description}
                  productQuantity={product.quantity}
                  key={product.id}
                  decreaseQuantity={decreaseQuantity}
                  product={product}
                />
              ))
            )}
          </section>
        </section>
        <div>
          <div className={styles["checkout--seperator"]}> </div>
          <section className={styles["checkout--price-section"]}>
            <h2> Total </h2>
            <h2> {calculateTotalPrice()}€</h2>
          </section>
        </div>
      </div>
    </>
  );
}
