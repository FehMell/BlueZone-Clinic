import React, { useState, useRef } from "react";
import { RiArrowDropUpFill, RiMenu3Line, RiCloseLine } from "react-icons/ri";


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

  const handleScrollClick = (sectionId, closeMenu = false) => {
    if (closeMenu) closeMobileMenu();
    
    const currentPath = window.location.pathname;

    if (currentPath === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      localStorage.setItem(`scrollTo${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`, "true");
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="flex items-center justify-between bg-white px-2 sm:px-4 lg:px-6 h-16 shadow-md relative" aria-label="Menu principal">
      
    
      <div className="px-2 sm:px-4 lg:px-32">
        <a href="/" onClick={closeMobileMenu} aria-label="Página inicial">
          <img
            src="https://bluezoneclinic.com.br/wp-content/uploads/2024/12/Bluezone-logo-2.svg"
            alt="Logo Bluezone"
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
          />
        </a>
      </div>

      
      <div className="hidden md:flex justify-end pr-4 lg:pr-20">
        <ul className="flex gap-4 lg:gap-8 text-black items-center text-sm lg:text-base">
          <li>
            <a href="/" className="hover:text-gray-800 cursor-pointer block py-2">
              Início
            </a>
          </li>
          <li>
            <a href="/sobre" className="hover:text-gray-800 cursor-pointer block py-2">
              Sobre
            </a>
          </li>

          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="hover:text-gray-800 cursor-pointer flex items-center justify-center py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-expanded={open}
              aria-haspopup="true"
              aria-label="Abrir menu de tratamentos"
            >
              Tratamentos
            </button>
            
            {open && (
              <ul 
                className="absolute top-full left-0 mt-1 text-black shadow-lg py-2 px-1 w-48 max-h-80 overflow-y-auto bg-white z-50 font-manrope text-xs"
                role="menu"
                aria-label="Submenu de tratamentos"
              >
                <li role="none">
                  <a 
                    href="/emagrecimento" 
                    className="block px-4 py-1 hover:text-white hover:bg-gray-800"
                    role="menuitem"
                  >
                    Emagrecimento Saudável
                  </a>
                </li>
                <li role="none">
                  <a 
                    href="/estetica" 
                    className="block px-4 py-1 hover:text-white hover:bg-gray-800"
                    role="menuitem"
                  >
                    Estética
                  </a>
                </li>
                <li role="none">
                  <a 
                    href="/hipertrofia" 
                    className="block px-4 py-1 hover:text-white hover:bg-gray-800"
                    role="menuitem"
                  >
                    Hipertrofia
                  </a>
                </li>
                <li role="none">
                  <a 
                    href="/menopausa" 
                    className="block px-4 py-1 hover:text-white hover:bg-gray-800"
                    role="menuitem"
                  >
                    Menopausa
                  </a>
                </li>
                <li role="none">
                  <a 
                    href="/reposicao-hormonal-masculina" 
                    className="block px-4 py-1 hover:text-white hover:bg-gray-800"
                    role="menuitem"
                  >
                    Reposição Hormonal Masculina
                  </a>
                </li>
                <li role="none">
                  <a 
                    href="/terapias-injetaveis" 
                    className="block px-4 py-1 hover:text-white hover:bg-gray-800"
                    role="menuitem"
                  >
                    Terapia Injetáveis
                  </a>
                </li>
                <li role="none">
                  <a 
                    href="/implantes-hormonais" 
                    className="block px-4 py-1 hover:text-white hover:bg-gray-800"
                    role="menuitem"
                  >
                    Implantes Hormonais
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => handleScrollClick("duvidas")}
              className="hover:text-gray-800 cursor-pointer py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-label="Ir para seção de dúvidas"
            >
              Dúvidas
            </button>
          </li>
        </ul>
      </div>

     
      <div className="md:hidden flex items-center">
        <button 
          onClick={toggleMobileMenu}
          className="text-2xl text-black focus:outline-none focus:ring-2 focus:ring-gray-500 p-2 rounded"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <RiCloseLine aria-hidden="true" /> : <RiMenu3Line aria-hidden="true" />}
        </button>
      </div>

      
      {mobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 md:hidden"
          role="dialog"
          aria-label="Menu mobile"
        >
          <ul className="flex flex-col py-4">
            <li className="border-b">
              <a 
                href="/" 
                onClick={closeMobileMenu}
                className="block px-6 py-3 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                aria-label="Página inicial"
              >
                Início
              </a>
            </li>
            <li className="border-b">
              <a 
                href="/sobre" 
                onClick={closeMobileMenu}
                className="block px-6 py-3 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                aria-label="Sobre nós"
              >
                Sobre
              </a>
            </li>
            
           
            <li className="border-b">
              <button 
                className="w-full px-6 py-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer focus:outline-none focus:bg-gray-100"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls="mobile-treatments-submenu"
                aria-label="Abrir menu de tratamentos"
              >
                <span>Tratamentos</span>
                <RiArrowDropUpFill 
                  className={`transform ${open ? 'rotate-180' : ''} transition-transform`} 
                  aria-hidden="true" 
                />
              </button>
              
              {open && (
                <ul 
                  id="mobile-treatments-submenu"
                  className="bg-gray-50"
                  role="menu"
                  aria-label="Submenu de tratamentos"
                >
                  <li role="none">
                    <a 
                      href="/emagrecimento" 
                      onClick={closeMobileMenu}
                      className="block pl-8 pr-4 py-2 hover:bg-gray-200 text-sm focus:bg-gray-200 focus:outline-none"
                      role="menuitem"
                    >
                      Emagrecimento Saudável
                    </a>
                  </li>
                  <li role="none">
                    <a 
                      href="/estetica" 
                      onClick={closeMobileMenu}
                      className="block pl-8 pr-4 py-2 hover:bg-gray-200 text-sm focus:bg-gray-200 focus:outline-none"
                      role="menuitem"
                    >
                      Estética
                    </a>
                  </li>
                  <li role="none">
                    <a 
                      href="/hipertrofia" 
                      onClick={closeMobileMenu}
                      className="block pl-8 pr-4 py-2 hover:bg-gray-200 text-sm focus:bg-gray-200 focus:outline-none"
                      role="menuitem"
                    >
                      Hipertrofia
                    </a>
                  </li>
                  <li role="none">
                    <a 
                      href="/menopausa" 
                      onClick={closeMobileMenu}
                      className="block pl-8 pr-4 py-2 hover:bg-gray-200 text-sm focus:bg-gray-200 focus:outline-none"
                      role="menuitem"
                    >
                      Menopausa
                    </a>
                  </li>
                  <li role="none">
                    <a 
                      href="/reposicao-hormonal-masculina" 
                      onClick={closeMobileMenu}
                      className="block pl-8 pr-4 py-2 hover:bg-gray-200 text-sm focus:bg-gray-200 focus:outline-none"
                      role="menuitem"
                    >
                      Reposição Hormonal Masculina
                    </a>
                  </li>
                  <li role="none">
                    <a 
                      href="/terapias-injetaveis" 
                      onClick={closeMobileMenu}
                      className="block pl-8 pr-4 py-2 hover:bg-gray-200 text-sm focus:bg-gray-200 focus:outline-none"
                      role="menuitem"
                    >
                      Terapia Injetáveis
                    </a>
                  </li>
                  <li role="none">
                    <a 
                      href="/implantes-hormonais" 
                      onClick={closeMobileMenu}
                      className="block pl-8 pr-4 py-2 hover:bg-gray-200 text-sm focus:bg-gray-200 focus:outline-none"
                      role="menuitem"
                    >
                      Implantes Hormonais
                    </a>
                  </li>
                </ul>
              )}
            </li>

           
            <li className="border-b">
              <button
                onClick={() => handleScrollClick("duvidas", true)}
                className="w-full text-left px-6 py-3 hover:bg-gray-100 cursor-pointer focus:outline-none focus:bg-gray-100"
                aria-label="Ir para seção de dúvidas"
              >
                Dúvidas
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Menu;