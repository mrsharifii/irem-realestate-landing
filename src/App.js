import React from "react";
import Best from "./components/best/Best";
import Featured from "./components/featured/Featured";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
