// pages/Home.jsx
import React from "react";
import Menu from "../components/menu";
import Sobre from "../components/sobre";
import ServiceSection from "../components/serviceSection";
import Footer from "../components/footer";

function Home() {
  return (
    <div>
      <Menu />
      <Sobre />
      <ServiceSection />
      <Footer />
    </div>
  );
}

export default Home;
