import React from "react";
import Navbar from "../components/navbar.jsx";
import Hero from "../components/hero.jsx";
import AboutUs from "./aboutus.jsx";
import Feature from "./feature.jsx";
import Footer from "../components/footer.jsx";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Homepage;
