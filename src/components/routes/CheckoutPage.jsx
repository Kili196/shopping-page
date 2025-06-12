import Checkout from "../Checkout/Checkout";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";
import StateContext from "../../context/StateProvider";

export default function CheckoutPage() {
  return (
    <Layout>
      <Navbar />
      <Checkout />
    </Layout>
  );
}
