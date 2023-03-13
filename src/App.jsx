import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <section>
        <Welcome />
      </section>

      <section>
        <Nav />
      </section>

      <section>
        <Hero />
      </section>

      <section>
        <About />
      </section>

      {/* <section>
        <Team />
      </section>

      <section>
        <Testimonials />
      </section>

      <section>
        <Contact />
      </section>

      <section>
        <Footer />
      </section> */}
    </div>
  );
}

export default App;
