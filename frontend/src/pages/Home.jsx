// pages/Home.jsx
import React from "react";
import Menu from "../components/menu";
import Sobre from "../components/sobre";
import ServiceSection from "../components/serviceSection";

function Home() {
  return (
    <div>
      <Menu />
      <Sobre />
      <ServiceSection />
    </div>
  );
}

export default Home;
