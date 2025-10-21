import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 relative overflow-hidden">
      {/* Gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] opacity-90"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D3AF37] to-transparent opacity-30"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-start md:items-start gap-20">
          
          {/* Bloco Onde Estamos + Horário */}
          <div>
            <h3 className="text-xl font-bold font-marcellus pb-4 text-[#D3AF37]">Onde estamos:</h3>
            <p className="text-white mt-2 font-manrope text-xs">Alameda Campinas, 728 – CJ 1201 – </p>
            <p className="font-manrope text-xs">Jardim Paulista, São Paulo – SP.</p>
            
            <h3 className="text-xl font-marcellus py-4 text-[#D3AF37]">Horário de Funcionamento:</h3>
            <p className="font-manrope text-xs">Segunda à Sexta: 08h00 às 20h00.</p>
            <p className="font-manrope text-xs">Sábado: 09h00 às 17h00.</p>
          </div>

          {/* Bloco Contato + Redes Sociais */}
          <div>
            <h3 className="font-semibold pb-1 text-xl font-marcellus text-[#D3AF37]">Contato:</h3>
            <ul>
              <li><a href="/" className="text-white hover:text-white transition text-xs">(11) 94519-7405</a></li>
              <li><a href="/servicos" className="text-white hover:text-white transition text-xs">contato@bluezoneclinic.com.br</a></li>
            </ul>

            <h3 className="font-marcellus py-1 text-xl text-[#D3AF37]">Redes Sociais:</h3>
            <ul className="font-manrope text-xs">
              <li className="pb-2">@thiagogarciadr</li>
              <li className="pb-2">@bluezonesp</li>
              <li>@drthiagogarcia</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
          <div className="flex justify-center items-center">
            <img src="https://bluezoneclinic.com.br/wp-content/uploads/2024/05/logobluezone.webp" alt="" className="h-14" />
          </div>
          <p className="text-white font-manrope text-xs pb-2">Blue Zone Clinic LTDA | CNPJ 41.519.438/0001-68 | Registro: 998489</p>
          <p className="text-white font-manrope text-xs pb-2">Diretor Técnico-Médico: Dr. Thiago Garcia | CRM-SP 217222</p>
          <p className="text-white font-manrope text-xs">Desenvolvido por @fehmell</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;