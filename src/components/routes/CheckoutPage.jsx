import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";

export default function CheckoutPage({ cart }) {
  console.log(cart);
  return (
    <Layout>
      <Navbar />
    </Layout>
  );
}
