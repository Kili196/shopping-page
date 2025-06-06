import Checkout from "../Checkout/Checkout";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";

export default function CheckoutPage({ cart }) {
  return (
    <Layout>
      <Navbar />
      <Checkout cart={cart} />
    </Layout>
  );
}
