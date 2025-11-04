import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 sm:py-10 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] opacity-90"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D3AF37] to-transparent opacity-30"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-center items-start md:items-start gap-8 sm:gap-12 md:gap-20">
          
         
          <div className="text-center md:text-left w-full md:w-auto">
            <h3 className="text-lg md:text-xl font-semibold font-marcellus pb-3 sm:pb-4 text-[#D3AF37]">Onde estamos:</h3>
            <p className="text-white mt-2 font-manrope text-xs sm:text-sm">Alameda Campinas, 728 – CJ 1201 – </p>
            <p className="font-manrope text-xs sm:text-sm">Jardim Paulista, São Paulo – SP.</p>
            
            <h3 className="text-lg md:text-xl font-marcellus py-3 sm:py-4 text-[#D3AF37] font-semibold">Horário de Funcionamento:</h3>
            <p className="font-manrope text-xs sm:text-sm">Segunda à Sexta: 08h00 às 18h00.</p>
            <p className="font-manrope text-xs sm:text-sm">Sábado: 09h00 às 13h00.</p>
          </div>

         
          <div className="text-center md:text-left w-full md:w-auto">
            <h3 className="text-lg md:text-xl font-marcellus text-[#D3AF37] pb-2 font-semibold">Contato:</h3>
            
         
            <a href="https://wa.me/5511945197405?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20oferecidos%20pela%20Blue%20Zone." target="_blank" className="block mb-3">
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm hover:text-[#D3AF37] transition-colors duration-300">
                <div className="bg-[#D3AF37] rounded-full p-2 flex items-center justify-center">
                  <FaWhatsapp className="text-white" size={16} />
                </div>
                (11) 94519-7405
              </div>
            </a>
            
          
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm mb-6">
              <div className="bg-[#D3AF37] rounded-full p-2 flex items-center justify-center">
                <MdOutlineMail className="text-white" size={16} />
              </div>
              <span className="break-all">contato@bluezoneclinic.com.br</span>
            </div>

            <h3 className="text-lg md:text-xl font-marcellus py-3 sm:py-4 text-[#D3AF37] font-semibold">Redes Sociais:</h3>
            
          
            <a href="https://www.instagram.com/thiagogarciadr/" target="_blank" className="block mb-3"> 
              <div className="flex items-center justify-center md:justify-start gap-2 hover:text-[#D3AF37] transition-colors duration-300 text-xs sm:text-sm">
                <div className="bg-[#D3AF37] rounded-full p-2 flex items-center justify-center">
                  <FaInstagram className="text-white" size={16} /> 
                </div>
                @thiagogarciadr
              </div>
            </a>
            
            
            <a href="https://www.instagram.com/bluezonesp/" target="_blank" className="block"> 
              <div className="flex items-center justify-center md:justify-start gap-2 hover:text-[#D3AF37] transition-colors duration-300 text-xs sm:text-sm">
                <div className="bg-[#D3AF37] rounded-full p-2 flex items-center justify-center">
                  <FaInstagram className="text-white" size={16} /> 
                </div>
                @bluezonesp  
              </div>  
            </a>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 sm:mt-10 pt-4 sm:pt-6 text-center text-gray-500 text-sm">
          <div className="flex justify-center items-center mb-3 sm:mb-4">
            <img src="https://bluezoneclinic.com.br/wp-content/uploads/2024/05/logobluezone.webp" alt="Logo Blue Zone" className="h-10 sm:h-12 lg:h-14" />
          </div>
          <div className="space-y-1 sm:space-y-2 px-4">
            <p className="text-white font-manrope text-xs sm:text-sm">Blue Zone Clinic LTDA | CNPJ 41.519.438/0001-68 | Registro: 998489</p>
            <p className="text-white font-manrope text-xs sm:text-sm">Diretor Técnico-Médico: Dr. Thiago Garcia | CRM-SP 217222</p>
            <p className="text-white font-manrope text-xs sm:text-sm">Desenvolvido por @feh_mell</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;