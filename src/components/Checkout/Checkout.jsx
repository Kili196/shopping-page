import CheckoutProductCard from "../Card/CheckoutProductCard";
import styles from "./Checkout.module.css";

export default function Checkout({ cart }) {
  function calculateTotalPrice() {
    let totalPrice = 0;

    Array.from(cart.values()).forEach(
      (element) => (totalPrice += element.price * element.quantity)
    );

    return totalPrice;
  }

  const cartedProducts = Array.from(cart.values());

  return (
    <>
      <div className={styles["checkout--container"]}>
        <section className={styles[""]}>
          <h1> Checkout</h1>
          {cartedProducts.length === 0 ? (
            <p> No products in cart yet!</p>
          ) : (
            cartedProducts.map((product) => (
              <CheckoutProductCard
                productTitle={product.title}
                productImg={product.img}
                productDesc={product.description}
                productQuantity={product.quantity}
                key={product.id}
              />
            ))
          )}
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
