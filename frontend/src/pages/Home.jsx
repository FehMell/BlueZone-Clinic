
import React from "react";
import Menu from "../components/menu";
import Sobre from "../components/sobre";
import ServiceSection from "../components/serviceSection";
import Footer from "../components/footer";
import Depoimentos from "../components/depoimentos";  
import Espaco from "../components/espaco";
import WhatsAppButton from "../components/whatsappButton";
import Inicio from "../components/inicio";

function Home() {
  return (
    <div>
      
      
      <Inicio />
      <Sobre />
      <ServiceSection />
      <Depoimentos />
      <Espaco />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default Home;

