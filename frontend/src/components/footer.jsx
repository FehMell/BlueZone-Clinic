import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] opacity-90"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D3AF37] to-transparent opacity-30"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-start md:items-start gap-20">
          
          
          <div>
            <h3 className="text-xl font-semibold font-marcellus pb-4 text-[#D3AF37]">Onde estamos:</h3>
            <p className="text-white mt-2 font-manrope text-xs">Alameda Campinas, 728 – CJ 1201 – </p>
            <p className="font-manrope text-xs">Jardim Paulista, São Paulo – SP.</p>
            
            <h3 className="text-xl font-marcellus py-4 text-[#D3AF37] font-semibold">Horário de Funcionamento:</h3>
            <p className="font-manrope text-xs">Segunda à Sexta: 08h00 às 18h00.</p>
            <p className="font-manrope text-xs">Sábado: 09h00 às 13h00.</p>
          </div>

          
          <div>
            <h3 className="text-xl font-marcellus text-[#D3AF37] pb-2 font-semibold">Contato:</h3>
            <ul>
               <a href="https://wa.me/5511945197405?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20oferecidos%20pela%20Blue%20Zone." target="_blank">
              <li className="pb-2 flex items-center gap-2 text-xs">
                
                <div className="bg-[#D3AF37] rounded-full p-2 flex items-center justify-center">
                  <FaWhatsapp className="text-white" size={16} />
                </div>
                (11) 94519-7405
              </li>
              </a>
              <li className="pb-2 flex items-center gap-2 text-xs">
                <div className="bg-[#D3AF37] rounded-full p-2 flex items-center justify-center">
                  <MdOutlineMail className="text-white" size={16} />
                </div>
                contato@bluezoneclinic.com.br
              </li>
            </ul>

            <h3 className="text-xl font-marcellus py-2 text-[#D3AF37] font-semibold">Redes Sociais:</h3>
            <ul className="font-manrope text-xs">
             <a href="https://www.instagram.com/thiagogarciadr/" target="_blank"> <li className="pb-2 flex items-center gap-2">
                <div className="bg-[#D3AF37] rounded-full p-2 flex items-center justify-center">
                  <FaInstagram className="text-white" size={16} /> 
                </div>
                @thiagogarciadr
              </li>
              </a>
              
            <a href="https://www.instagram.com/bluezonesp/" target="_blank"> <li className="pb-2 flex items-center gap-2">
                 <div className="bg-[#D3AF37] rounded-full p-2 flex items-center justify-center">
                  <FaInstagram className="text-white" size={16} /> 
                </div>
                @bluezonesp  
              </li>  
             </a>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
          <div className="flex justify-center items-center">
            <img src="https://bluezoneclinic.com.br/wp-content/uploads/2024/05/logobluezone.webp" alt="Logo Blue Zone" className="h-14" />
          </div>
          <p className="text-white font-manrope text-xs pb-2">Blue Zone Clinic LTDA | CNPJ 41.519.438/0001-68 | Registro: 998489</p>
          <p className="text-white font-manrope text-xs pb-2">Diretor Técnico-Médico: Dr. Thiago Garcia | CRM-SP 217222</p>
          <p className="text-white font-manrope text-xs">Desenvolvido por @feh_mell</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
