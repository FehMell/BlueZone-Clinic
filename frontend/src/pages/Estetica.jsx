import Local from "../images/localblue.png";
import Logo from "../images/logobluezonee.webp";
import Thiago from "../images/thiago3.webp";
import Footer from "../components/footer";
import Desfoque from "../images/desfoque.png";

function Estetica() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[1.65fr_1fr] bg-white">
        
     
        <div 
          className="relative flex flex-col justify-center items-center p-6 lg:p-10 w-full mx-auto mt-4 lg:mt-0 order-2 lg:order-1 overflow-hidden"
        >
         
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${Desfoque})` }}
          ></div>

        
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10"></div>

        
          <div className="relative z-20 flex flex-col items-center text-center max-w-[700px] overflow-hidden">
            
          
            <div className="absolute inset-0 z-30 pointer-events-none animate-[reflexo_6s_linear_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

            <style>
              {`
                @keyframes reflexo {
                  0% {
                    transform: translateX(-100%);
                    opacity: 0.1;
                  }
                  50% {
                    transform: translateX(0%);
                    opacity: 0.5;
                  }
                  100% {
                    transform: translateX(100%);
                    opacity: 0.1;
                  }
                }
              `}
            </style>

            <img 
              src={Logo}
              alt="Logo Bluezone" 
              className="w-14 lg:w-16 pb-4 lg:pb-6"
            />
            
            <h1 className="font-marcellus text-2xl lg:text-[38px] font-bold text-[#463D34] leading-tight">
              Realce a sua Beleza 
            </h1>
            <h1 className="pb-4 font-marcellus text-2xl lg:text-[38px] font-bold text-[#463D34] leading-tight">
              Natural
            </h1>
            <h2 className="uppercase pb-2 font-marcellus text-base lg:text-xl font-semibold text-[#D3AF37]">
              Com procedimentos personalizados que combinam harmonia, rejuvenescimento, firmeza e confiança, ajudamos você a recuperar sua autoestima.
            </h2>
            <p className="pb-4 lg:pb-2 font-manrope text-gray-700 text-sm lg:text-[15px] leading-relaxed">
              A Blue Zone Clinic é o seu espaço de estética avançada!
              Aqui você encontra os protocolos mais eficazes em estética, voltados para Harmonização Corporal e Facial. Utilizamos técnicas exclusivas e aperfeiçoadas, combinando o que há de mais recente em tratamentos com expertise especializada para garantir resultados efetivos, duradouros e naturais.
            </p>
            <p className="pb-8 lg:pb-10 font-manrope text-gray-700 text-sm lg:text-[15px] leading-relaxed">
              Nosso compromisso é garantir que você se sinta mais confiante e satisfeito com sua aparência. Contamos com uma equipe de profissionais qualificados, dedicada a oferecer um cuidado integral que une tratamentos para hipertrofia e emagrecimento com procedimentos estéticos avançados. Nosso objetivo é proporcionar um atendimento completo que harmonize saúde e estética, elevando sua autoestima!
            </p>
            
            <div className="border-2 border-[#D3AF37] px-1 py-1 hover:scale-110 transform transition-transform duration-300 mb-4">
              <a 
                href="https://wa.me/5511945197405?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20oferecidos%20pela%20Blue%20Zone." 
                target="_blank"
              >
                <button className="font-marcellus bg-[#D3AF37] text-white px-6 lg:px-7 font-semibold py-2 lg:py-2 hover:bg-[#B38A4B] text-sm lg:text-base">
                  Agendar Consulta
                </button>
              </a>
            </div>
          </div>
        </div>

      
        <div className="relative order-1 lg:order-2 h-96 lg:h-auto">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${Local})` }}
          >
            <img 
              src={Thiago} 
              alt="Dr. Thiago" 
              className="
                absolute bottom-0 right-1/2 translate-x-1/2 w-4/6 lg:w-[48%] max-w-full object-contain
                transition-transform duration-1000 ease-in-out
                hover:-translate-y-1
              "
            />
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Estetica;
