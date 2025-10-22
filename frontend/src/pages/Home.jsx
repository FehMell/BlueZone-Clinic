
import React from "react";
import Menu from "../components/menu";
import Sobre from "../components/sobre";
import ServiceSection from "../components/serviceSection";
import Footer from "../components/footer";
import Depoimentos from "../components/depoimentos";  

function Home() {
  return (
    <div>
      <Menu />
      <Sobre />
      <ServiceSection />
      <Depoimentos />
      <Footer />
      

    </div>
  );
}

export default Home;
