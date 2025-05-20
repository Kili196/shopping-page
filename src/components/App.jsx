import Navbar from "./Navbar/Navbar";
import Layout from "./Layout/Layout";
import Herobackground from "./Herosection/Herobackground";
import Hero from "./Herosection/Hero";
import Productoverview from "./Shopsections/Productoverview";

function App() {
  return (
    <>
      <Herobackground>
        <Layout>
          <Navbar />
          <Hero />
        </Layout>
      </Herobackground>
      <Layout>
        <Productoverview />
      </Layout>
    </>
  );
}

export default App;
