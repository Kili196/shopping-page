import Navbar from "../Navbar/Navbar";
import Hero from "../Herosection/Hero";
import Herobackground from "../Herosection/Herobackground";
import Layout from "../Layout/Layout";
import Productoverview from "../Shopsections/Productoverview";

export default function Initialpage({ addToCart }) {
  return (
    <>
      <Herobackground>
        <Layout>
          <Navbar />
          <Hero />
        </Layout>
      </Herobackground>
      <Layout>
        <Productoverview
          headline={"Our newest products.."}
          addToCart={addToCart}
        />
      </Layout>
    </>
  );
}
