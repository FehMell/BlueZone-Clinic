
import React from "react";
import Menu from "../components/menu";
import Sobre from "../components/sobre";
import ServiceSection from "../components/serviceSection";
import Footer from "../components/footer";
import Depoimentos from "../components/depoimentos";  
import Espaco from "../components/espaco";
import WhatsAppButton from "../components/whatsappButton";
import Inicio from "../components/inicio";
import Agendar from "../components/agendar"
import PerguntasFrequentes from "../components/PerguntasFrequentes";

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
      
      {/* Divisor 1: Logo BlueZone - Sobreposto */}
      <div className="absolute top-[100vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="flex items-center gap-8">
          <div className="w-32 sm:w-40 lg:w-48 xl:w-56 h-[3px] bg-gradient-to-r from-transparent to-[#D3AF37]"></div>
          <img 
            src="./src/images/logobluezonee.webp" 
            alt="Blue Zone Logo" 
            className="h-20 sm:h-24 lg:h-28 xl:h-32 opacity-90"
          />
          <div className="w-32 sm:w-40 lg:w-48 xl:w-56 h-[3px] bg-gradient-to-l from-transparent to-[#D3AF37]"></div>
        </div>
      </div>

      {/* Divisor 2: Linha dourada com pontos - Sobreposto */}
      <div className="absolute top-[200vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="flex items-center gap-3  px-6 py-3 rounded-full shadow-md">
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#D3AF37]"></div>
          <div className="w-2 h-2 rounded-full bg-[#D3AF37]"></div>
          <div className="w-2 h-2 rounded-full bg-[#D3AF37]/60"></div>
          <div className="w-2 h-2 rounded-full bg-[#D3AF37]/30"></div>
          <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#D3AF37]"></div>
        </div>
      </div>


      <WhatsAppButton />
    </div>
  );
}

export default Home;

