import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Destination from "./components/Destination";
import About from "./components/About";
import Contact from "./components/Contact";

import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <seccion id="home">
          <Home />
        </seccion>

        <section id="features">
          <Features />
        </section>

        <section id="destination">
          <Destination />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
