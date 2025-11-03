import React from "react";
import Sobre from "../components/sobre";
import ServiceSection from "../components/serviceSection";
import Depoimentos from "../components/depoimentos";
import Espaco from "../components/espaco";
import WhatsAppButton from "../components/whatsappButton";
import Inicio from "../components/inicio";
import Agendar from "../components/agendar";

function Home() {
  return (
    <div>
      <Inicio />
      <Sobre />
      <ServiceSection />
      <Depoimentos />
      <Espaco />
      <Agendar />
      <WhatsAppButton />
    </div>
  );
}

export default Home;
