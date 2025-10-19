import React from "react";
import { RiArrowDropUpFill } from "react-icons/ri";

function Menu() {
  return (
    <div className="flex items-center justify-between bg-white px-6 h-16">
        <div className="px-32">
      <img
        src="https://bluezoneclinic.com.br/wp-content/uploads/2024/12/Bluezone-logo-2.svg"
        alt="Logo Bluezone"
        className="w-24 h-24"
      />
      </div>

      <div className="justify-end pr-20">
         <ul className="flex gap-8 text-black">
          <li className="hover:text-gray-800 cursor-pointer">Início</li>
          <li className="hover:text-gray-800 cursor-pointer">Sobre</li>
          <li className="hover:text-gray-800 cursor-pointer">Beleza e Bem-Estar</li>

        
          <li className="relative group cursor-pointer hover:text-gray-700 flex items-center">
            Tratamentos <RiArrowDropUpFill className="transform group-hover:rotate-180 transition-transform duration-300 h-6 w-6" />
            <ul className="hidden absolute top-full left-0  text-black shadow-lg py-2 px-4 group-hover:block w-64">
              <li className="px-4 py-1 hover:text-white hover:bg-gray-800">Emagrecimento Saudável</li>
              <li className="px-4 py-1 hover:text-white hover:bg-gray-800">Estética</li>
              <li className="px-4 py-1 hover:text-white hover:bg-gray-800">Hipertrofia</li>
              <li className="px-4 py-1 hover:text-white hover:bg-gray-800">Menopausa</li>
              <li className="px-4 py-1 hover:text-white hover:bg-gray-800">Reposição Hormonal Masculina</li>
              <li className="px-4 py-1 hover:text-white hover:bg-gray-800">Terapia Injetáveis</li>
              <li className="px-4 py-1 hover:text-white hover:bg-gray-800">Implantes Hormonais</li>
            </ul>
          </li>

          <li className="hover:text-gray-800 cursor-pointer">Contato</li>
        </ul>
      </div>


    </div>
  );
}
export default Menu;