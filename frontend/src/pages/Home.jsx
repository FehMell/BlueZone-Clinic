
import React from "react";
import Menu from "../components/menu";
import Sobre from "../components/sobre";
import ServiceSection from "../components/serviceSection";
import Footer from "../components/footer";
import Depoimentos from "../components/depoimentos";  
import Espaco from "../components/espaco";
import WhatsAppButton from "../components/whatsAppButton";

function Home() {
  return (
    <div>
      <Menu />
      <Sobre />
      <ServiceSection />
      <Depoimentos />

     
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full h-32"
        preserveAspectRatio="none"
      >
        <path
          fill="#F5F5F5"
          fillOpacity="1"
          d="M0,128L80,160C160,192,320,256,480,288C640,320,800,320,960,309.3C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <Espaco />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default Home;

