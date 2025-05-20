import Navbar from "./Navbar/Navbar";
import Layout from "./Layout/Layout";
import Herobackground from "./Herosection/Herobackground";
import Hero from "./Herosection/Hero";

function App() {
  return (
    <>
      <Herobackground>
        <Layout>
          <Navbar />
          <Hero />
        </Layout>
      </Herobackground>
    </>
  );
}

export default App;
