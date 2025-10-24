import React, { useState, useRef } from "react";
import { RiArrowDropUpFill } from "react-icons/ri";
import { Link } from "react-scroll";

function Menu() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200); 
  };

  const toggleDropdown = (e) => {
    e.stopPropagation(); // evita conflito com Link
    setOpen(!open);
  };

  return (
    <div className="flex items-center justify-between bg-white px-6 h-16 shadow-md relative">
      
      {/* Logo */}
      <div className="px-32">
        <a href="/">
          <img
            src="https://bluezoneclinic.com.br/wp-content/uploads/2024/12/Bluezone-logo-2.svg"
            alt="Logo Bluezone"
            className="w-24 h-24"
          />
        </a>
      </div>

      {/* Menu */}
      <div className="flex justify-end pr-20">
        <ul className="flex gap-8 text-black items-center">
          <a href="/"><li className="hover:text-gray-800 cursor-pointer">Início</li></a>

          <Link 
            to="sobre"       
            smooth={true}   
            duration={500}   
            offset={-50}     
            className="cursor-pointer"
          >
            <li className="hover:text-gray-800 cursor-pointer">Sobre</li>
          </Link>

          {/* Tratamentos com dropdown */}
          <li
            className="relative flex items-center cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          > 
            {/* Texto clicável - scroll */}
            <Link 
              to="tratamentos"       
              smooth={true}   
              duration={500}   
              offset={-50}     
              className="hover:text-gray-700 flex items-center"
            >
              Tratamentos
            </Link>

            {/* Seta - abre/fecha dropdown */}
            <RiArrowDropUpFill
              className={`h-6 w-6 transform transition-transform duration-300 ml-1 ${
                open ? "rotate-180" : ""
              }`}
              onClick={toggleDropdown}
            />

            {/* Dropdown */}
            {open && (
              <ul className="absolute top-full left-0 mt-1 text-black shadow-lg py-2 px-1 w-48 max-h-80 overflow-y-auto bg-white z-50 font-manrope text-xs">
                <li className="px-4 py-1 hover:text-white hover:bg-gray-800">Emagrecimento Saudável</li>
                <li className="px-4 py-1 hover:text-white hover:bg-gray-800">Estética</li>
                <li className="px-4 py-1 hover:text-white hover:bg-gray-800">Hipertrofia</li>
                <li className="px-4 py-1 hover:text-white hover:bg-gray-800">Menopausa</li>
                <li className="px-4 py-1 hover:text-white hover:bg-gray-800">Reposição Hormonal Masculina</li>
                <li className="px-4 py-1 hover:text-white hover:bg-gray-800">Terapia Injetáveis</li>
                <li className="px-4 py-1 hover:text-white hover:bg-gray-800">Implantes Hormonais</li>
              </ul>
            )}
          </li>

          <li className="hover:text-gray-800 cursor-pointer">Contato</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
