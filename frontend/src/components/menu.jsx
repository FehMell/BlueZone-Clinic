import React, { useState, useRef } from "react";
import { RiArrowDropUpFill, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Menu() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200); 
  };

  const toggleDropdown = (e) => {
    e.stopPropagation(); 
    setOpen(!open);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-between bg-white px-2 sm:px-4 lg:px-6 h-16 shadow-md relative">
      
     
      <div className="px-2 sm:px-4 lg:px-32">
        <a href="/" onClick={closeMobileMenu}>
          <img
            src="https://bluezoneclinic.com.br/wp-content/uploads/2024/12/Bluezone-logo-2.svg"
            alt="Logo Bluezone"
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
          />
        </a>
      </div>

     
      <div className="hidden md:flex justify-end pr-4 lg:pr-20">
        <ul className="flex gap-4 lg:gap-8 text-black items-center text-sm lg:text-base">
          <a href="/"><li className="hover:text-gray-800 cursor-pointer">Início</li></a>
          <a href="/sobre"><li className="hover:text-gray-800 cursor-pointer">Sobre</li></a>
         
          <li
            className="relative cursor-pointer flex items-center justify-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>Tratamentos</span>
            
            {open && (
              <ul className="absolute top-full left-0 mt-1 text-black shadow-lg py-2 px-1 w-48 max-h-80 overflow-y-auto bg-white z-50 font-manrope text-xs">
                <a href="/emagrecimento"><li className="px-4 py-1 hover:text-white hover:bg-gray-800">Emagrecimento Saudável</li></a>
                <a href="/estetica"><li className="px-4 py-1 hover:text-white hover:bg-gray-800">Estética</li></a>
                <a href="/hipertrofia"><li className="px-4 py-1 hover:text-white hover:bg-gray-800">Hipertrofia</li></a>
                <a href="/menopausa"><li className="px-4 py-1 hover:text-white hover:bg-gray-800">Menopausa</li></a>
                <a href="/reposicao-hormonal-masculina"><li className="px-4 py-1 hover:text-white hover:bg-gray-800">Reposição Hormonal Masculina</li></a>
                <a href="/terapias-injetaveis"><li className="px-4 py-1 hover:text-white hover:bg-gray-800">Terapia Injetáveis</li></a>
                <a href="/implantes-hormonais"><li className="px-4 py-1 hover:text-white hover:bg-gray-800">Implantes Hormonais</li></a>
              </ul>
            )}
          </li>
        </ul>
      </div>

     
      <div className="md:hidden flex items-center">
        <button 
          onClick={toggleMobileMenu}
          className="text-2xl text-black focus:outline-none"
        >
          {mobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

  
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 md:hidden">
          <ul className="flex flex-col py-4">
            <a href="/" onClick={closeMobileMenu}>
              <li className="px-6 py-3 hover:bg-gray-100 border-b">Início</li>
            </a>
            <a href="/sobre" onClick={closeMobileMenu}>
              <li className="px-6 py-3 hover:bg-gray-100 border-b">Sobre</li>
            </a>
            
          
            <li className="border-b">
              <div 
                className="px-6 py-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <span>Tratamentos</span>
                <RiArrowDropUpFill className={`transform ${open ? 'rotate-180' : ''} transition-transform`} />
              </div>
              
              {open && (
                <ul className="bg-gray-50 pl-6">
                  <a href="/emagrecimento" onClick={closeMobileMenu}>
                    <li className="px-4 py-2 hover:bg-gray-200 border-b text-sm">Emagrecimento Saudável</li>
                  </a>
                  <a href="/estetica" onClick={closeMobileMenu}>
                    <li className="px-4 py-2 hover:bg-gray-200 border-b text-sm">Estética</li>
                  </a>
                  <a href="/hipertrofia" onClick={closeMobileMenu}>
                    <li className="px-4 py-2 hover:bg-gray-200 border-b text-sm">Hipertrofia</li>
                  </a>
                  <a href="/menopausa" onClick={closeMobileMenu}>
                    <li className="px-4 py-2 hover:bg-gray-200 border-b text-sm">Menopausa</li>
                  </a>
                  <a href="/reposicao-hormonal-masculina" onClick={closeMobileMenu}>
                    <li className="px-4 py-2 hover:bg-gray-200 border-b text-sm">Reposição Hormonal Masculina</li>
                  </a>
                  <a href="/terapias-injetaveis" onClick={closeMobileMenu}>
                    <li className="px-4 py-2 hover:bg-gray-200 border-b text-sm">Terapia Injetáveis</li>
                  </a>
                  <a href="/implantes-hormonais" onClick={closeMobileMenu}>
                    <li className="px-4 py-2 hover:bg-gray-200 border-b text-sm">Implantes Hormonais</li>
                  </a>
                </ul>
              )}
            </li>

   
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menu;