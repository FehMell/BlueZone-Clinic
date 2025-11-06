import React, { useState, useRef, useEffect } from "react";
import { RiArrowDropUpFill, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Menu() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll automático caso o usuário venha de outra página
  useEffect(() => {
    const scrollToTratamentos = localStorage.getItem("scrollToTratamentos");
    const scrollToDuvidas = localStorage.getItem("scrollToDuvidas");

    if (scrollToTratamentos) {
      const section = document.getElementById("tratamentos");
      if (section) section.scrollIntoView({ behavior: "smooth" });
      localStorage.removeItem("scrollToTratamentos");
    }

    if (scrollToDuvidas) {
      const section = document.getElementById("duvidas");
      if (section) section.scrollIntoView({ behavior: "smooth" });
      localStorage.removeItem("scrollToDuvidas");
    }
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
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

    const section = document.getElementById(sectionId);

    if (section) {
      // Se a seção existe na página atual, faz scroll
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // Se não existe, navega para a Home e faz scroll depois
      localStorage.setItem(
        `scrollTo${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`,
        "true"
      );

      if (location.pathname !== "/") {
        navigate("/"); // vai para Home
      } else {
        // caso já esteja na Home mas a seção ainda não exista
        setTimeout(() => {
          const sec = document.getElementById(sectionId);
          if (sec) sec.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  return (
    <nav
      className="flex items-center justify-between bg-white px-2 sm:px-4 lg:px-6 h-16 shadow-md relative"
      aria-label="Menu principal"
    >
      {/* Logo */}
      <div className="px-2 sm:px-4 lg:px-32">
        <Link to="/" onClick={closeMobileMenu} aria-label="Página inicial">
          <img
            src="https://bluezoneclinic.com.br/wp-content/uploads/2024/12/Bluezone-logo-2.svg"
            alt="Logo Bluezone"
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
          />
        </Link>
      </div>

      {/* Menu desktop */}
      <div className="hidden md:flex justify-end pr-4 lg:pr-20">
        <ul className="flex gap-4 lg:gap-8 text-black items-center text-sm lg:text-base">
          <li>
            <Link to="/" className="hover:text-gray-800 block py-2">
              Início
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="hover:text-gray-800 block py-2">
              Sobre
            </Link>
          </li>

          {/* Dropdown Tratamentos */}
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => handleScrollClick("tratamentos")}
              className="hover:text-gray-800 flex items-center justify-center py-2 focus:outline-none"
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
                  <Link
                    to="/emagrecimento"
                    className="block px-4 py-1 hover:text-white hover:bg-gray-800"
                    role="menuitem"
                  >
                    Emagrecimento Saudável
                  </Link>
                </li>
                <li role="none">
                  <Link
                    to="/estetica"
                    className="block px-4 py-1 hover:text-white hover:bg-gray-800"
                    role="menuitem"
                  >
                    Estética
                  </Link>
                </li>
                <li role="none">
                  <Link
                    to="/hipertrofia"
                    className="block px-4 py-1 hover:text-white hover:bg-gray-800"
                    role="menuitem"
                  >
                    Hipertrofia
                  </Link>
                </li>
                <li role="none">
                  <Link
                    to="/menopausa"
                    className="block px-4 py-1 hover:text-white hover:bg-gray-800"
                    role="menuitem"
                  >
                    Menopausa
                  </Link>
                </li>
                <li role="none">
                  <Link
                    to="/reposicao-hormonal-masculina"
                    className="block px-4 py-1 hover:text-white hover:bg-gray-800"
                    role="menuitem"
                  >
                    Reposição Hormonal Masculina
                  </Link>
                </li>
                <li role="none">
                  <Link
                    to="/terapias-injetaveis"
                    className="block px-4 py-1 hover:text-white hover:bg-gray-800"
                    role="menuitem"
                  >
                    Terapias Injetáveis
                  </Link>
                </li>
                <li role="none">
                  <Link
                    to="/implantes-hormonais"
                    className="block px-4 py-1 hover:text-white hover:bg-gray-800"
                    role="menuitem"
                  >
                    Implantes Hormonais
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Dúvidas scroll */}
          <li>
            <button
              onClick={() => handleScrollClick("duvidas")}
              className="hover:text-gray-800 py-2 focus:outline-none"
              aria-label="Ir para seção de dúvidas"
            >
              Dúvidas
            </button>
          </li>
        </ul>
      </div>

      {/* Menu mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-2xl text-black focus:outline-none p-2 rounded"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? (
            <RiCloseLine aria-hidden="true" />
          ) : (
            <RiMenu3Line aria-hidden="true" />
          )}
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
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="block px-6 py-3 hover:bg-gray-100"
              >
                Início
              </Link>
            </li>
            <li className="border-b">
              <Link
                to="/sobre"
                onClick={closeMobileMenu}
                className="block px-6 py-3 hover:bg-gray-100"
              >
                Sobre
              </Link>
            </li>

            {/* Dropdown mobile */}
            <li className="border-b">
              <button
                className="w-full px-6 py-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls="mobile-treatments-submenu"
              >
                <span>Tratamentos</span>
                <RiArrowDropUpFill
                  className={`transform ${open ? "rotate-180" : ""} transition-transform`}
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
                    <Link
                      to="/emagrecimento"
                      onClick={closeMobileMenu}
                      className="block pl-8 pr-4 py-2 hover:bg-gray-200 text-sm"
                    >
                      Emagrecimento Saudável
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      to="/estetica"
                      onClick={closeMobileMenu}
                      className="block pl-8 pr-4 py-2 hover:bg-gray-200 text-sm"
                    >
                      Estética
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      to="/hipertrofia"
                      onClick={closeMobileMenu}
                      className="block pl-8 pr-4 py-2 hover:bg-gray-200 text-sm"
                    >
                      Hipertrofia
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      to="/menopausa"
                      onClick={closeMobileMenu}
                      className="block pl-8 pr-4 py-2 hover:bg-gray-200 text-sm"
                    >
                      Menopausa
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      to="/reposicao-hormonal-masculina"
                      onClick={closeMobileMenu}
                      className="block pl-8 pr-4 py-2 hover:bg-gray-200 text-sm"
                    >
                      Reposição Hormonal Masculina
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      to="/terapias-injetaveis"
                      onClick={closeMobileMenu}
                      className="block pl-8 pr-4 py-2 hover:bg-gray-200 text-sm"
                    >
                      Terapias Injetáveis
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      to="/implantes-hormonais"
                      onClick={closeMobileMenu}
                      className="block pl-8 pr-4 py-2 hover:bg-gray-200 text-sm"
                    >
                      Implantes Hormonais
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Dúvidas mobile */}
            <li className="border-b">
              <button
                onClick={() => handleScrollClick("duvidas", true)}
                className="w-full text-left px-6 py-3 hover:bg-gray-100 cursor-pointer"
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
