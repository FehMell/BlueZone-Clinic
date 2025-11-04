import Thiago from "../images/thiago 2.jpg";
import Logo from "../images/logobluezonee.webp";
import { MdLocationOn } from "react-icons/md";

function Inicio() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white min-h-screen lg:min-h-auto">
      
      <div className="bg-white flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[500px] mx-auto lg:ml-34 mt-4 lg:mt-2 relative overflow-hidden order-2 lg:order-1">
       
        <div className="absolute top-0 left-[-50%] w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 rotate-[8deg] animate-shimmer"></div>

        <img 
          src={Logo}
          alt="Logo Bluezone" 
          className="w-12 sm:w-14 lg:w-16 pb-3 sm:pb-4 lg:pb-6"
        />

        
        <h1 className="text-center pb-2 font-marcellus text-base sm:text-lg lg:text-xl font-semibold text-black">
          NUTROLOGIA NO JARDIM PAULISTA
        </h1>

        <h2 className="text-center font-marcellus text-xl sm:text-2xl lg:text-[38px] font-bold text-[#463D34] leading-tight">
          Saúde, Bem-Estar e
        </h2>

        <h3 className="text-center pb-3 sm:pb-4 font-marcellus text-xl sm:text-2xl lg:text-[38px] font-bold text-[#463D34] leading-tight bg-transparent">
          Qualidade de vida!
        </h3>

        <p className="text-center pb-3 sm:pb-4 lg:pb-2 font-manrope text-gray-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed">
          Acompanhamento individualizado com Médico Especializado em <span className="font-semibold">Nutrologia Esportiva</span>, referência em emagrecimento saudável, reposição hormonal, hipertrofia muscular e alta performance.
        </p>

        <p className="text-center pb-6 sm:pb-8 lg:pb-10 font-manrope text-gray-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed">
          Idealizador do Programa <span className="font-semibold">Blue Health+ de Emagrecimento</span>, um método amplamente consolidado desde sua criação. Com resultados expressivos e consistentes, tornou-se um grande sucesso e passou a ser referência entre diferentes grupos.
        </p>
        
        <div className="border-2 border-[#D3AF37] px-1 py-1 hover:scale-110 transform transition-transform duration-300 mb-4">
          <a href="https://wa.me/5511945197405?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20oferecidos%20pela%20Blue%20Zone." target="_blank">
            <button className="font-marcellus bg-[#D3AF37] text-white px-4 sm:px-6 lg:px-7 font-semibold py-2 hover:bg-[#B38A4B] text-xs sm:text-sm lg:text-base">
              Agendar Consulta
            </button>
          </a>
        </div>
        
        <p className="text-center py-2 font-manrope text-gray-500 text-xs flex items-center justify-center gap-2">
          <MdLocationOn size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5"/>Jardim Paulista - Atendimento em São Paulo
        </p>

      
        <style jsx>{`
          @keyframes shimmer {
            0% { left: -50%; opacity: 0; }
            50% { left: 35%; opacity: 0.6; }
            100% { left: 125%; opacity: 0; }
          }
          .animate-shimmer {
            animation: shimmer 3s infinite;
          }
        `}</style>
      </div>
      
      <div className="hidden lg:block overflow-hidden order-1 lg:order-2 h-64 lg:h-auto">
        <img 
          src={Thiago} 
          alt="Dr. Thiago" 
          className="w-full h-full object-cover object-center lg:object-left"
        />
      </div>
    </div>
  );
}

export default Inicio;
