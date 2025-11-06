import React from "react";
import Sobre from "../components/sobre";
import ServiceSection from "../components/serviceSection";
import Depoimentos from "../components/depoimentos";
import Espaco from "../components/espaco";
import WhatsAppButton from "../components/whatsappButton";
import Inicio from "../components/inicio";
import Agendar from "../components/agendar";
import PerguntasFrequentes from "../components/PerguntasFrequentes";
import LogoBlueZone from "../images/logobluezonee.webp"

function Home() {
  return (
    <div className="relative">
      <Inicio />

      <Sobre />

      <ServiceSection />

      <Depoimentos />
      <Espaco />
      <Agendar />
      <PerguntasFrequentes />

      <div className="absolute top-[100vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="flex items-center gap-8">
          <div className="w-32 sm:w-40 lg:w-48 xl:w-56 h-[3px] bg-gradient-to-r from-transparent to-[#D3AF37]"></div>
          <img
            src={LogoBlueZone}
            alt="Blue Zone Logo"
            className="h-20 sm:h-24 lg:h-28 xl:h-32 opacity-90"
          />
          <div className="w-32 sm:w-40 lg:w-48 xl:w-56 h-[3px] bg-gradient-to-l from-transparent to-[#D3AF37]"></div>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  );
}

export default Home;
