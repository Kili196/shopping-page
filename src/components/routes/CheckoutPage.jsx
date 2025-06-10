import Checkout from "../Checkout/Checkout";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";

export default function CheckoutPage({ cart, decreaseQuantity }) {
  return (
    <Layout>
      <Navbar />
      <Checkout cart={cart} decreaseQuantity={decreaseQuantity} />
    </Layout>
  );
}
