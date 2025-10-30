import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // Prevenir scroll del body cuando el menú está abierto
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  // Función para cerrar menú y restaurar scroll
  const handleLinkClick = () => {
    closeMobileMenu();
    document.body.style.overflow = 'unset';
  };

  return (
    <header className="bg-white text-center shadow-lg fixed w-full top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo y Nombre de la escuela - Siempre visible */}
          <div className="flex items-center space-x-3">
            <Link to="/" onClick={handleLinkClick}>
              <div className="w-10 h-10  rounded-full flex items-center justify-center">
                <img src="/images/logotipotransparente.png" alt="" />
              </div>
            </Link>
            <div className="hidden sm:block"> {/* Visible en móviles grandes y desktop */}
              <Link to="/" onClick={handleLinkClick}>
                <h1 className="text-lg font-bold text-gray-800">
                  Colegio Luis Silva
                </h1>
                <p className="text-xs text-gray-600">
                  Formando líderes del mañana
                </p>
              </Link>
            </div>
          </div>

          {/* Nombre corto para móviles pequeños - Solo el nombre sin eslogan */}
          <div className="sm:hidden">
            <Link to="/" onClick={handleLinkClick}>
              <h1 className="text-lg font-bold text-gray-800 ">
                Colegio Luis Silva
              </h1>
              <p className="text-xs text-gray-600">
                Formando líderes del mañana
              </p>
            </Link>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
            >
              Inicio
            </Link>
            <Link
              to="/nosotros"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
            >
              Nosotros
            </Link>
            <Link
              to="/niveles"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
            >
              Niveles
            </Link>
            <Link
              to="/galeria"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
            >
              Galería
            </Link>
            <Link
              to="/eventos"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
            >
              Eventos
            </Link>
            <Link
              to="/contacto"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
            >
              Contacto
            </Link>

            {/* Botón Facebook en desktop */}
            <a
              href="https://www.facebook.com/colegioluissilvaoficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 text-sm ml-4"
            >
              <span>Facebook</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </nav>

          {/* Botón Menú Móvil */}
          <button
            className="md:hidden text-gray-700 z-60 bg-blue-600 p-2 rounded-lg"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú Móvil - Despliega de derecha a izquierda */}
        <div className={`
          md:hidden fixed top-0 right-0 w-4/5 h-screen bg-blue-800 transform transition-transform duration-300 ease-in-out z-40
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          {/* Header del menú móvil */}
          <div className="p-4 border-b border-blue-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10  rounded-full flex items-center justify-center">
                <img src="/images/logotipols.jpg" alt="" className="rounded-full" />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg">Colegio Luis Silva</h2>
                <p className="text-blue-200 text-xs">Formando líderes del mañana</p>
              </div>
            </div>
          </div>

          {/* Navegación del menú móvil */}
          <div className="pb-4 h-full overflow-y-auto">
            <nav className="flex flex-col space-y-1 p-4">
              <Link
                to="/"
                className="text-white bg-blue-900/50 hover:bg-blue-600 font-medium text-lg py-4 px-4 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                <div className="flex ">
                  <img src="/icons/casa.png" alt="" className="w-6 h-6 ml-4 mt-1 " />
                  <p className="w-7/12 ">Inicio</p>
                </div>
              </Link>
              <Link
                to="/nosotros"
                className="text-white bg-blue-900/50 hover:bg-blue-600 font-medium text-lg py-4 px-4 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                <div className="flex ">
                  <img src="/icons/nosotros.png" alt="" className="w-6 h-6 ml-4 mt-1 " />
                  <p className="w-7/12 ml-4 ">Nosotros</p>
                </div>
              </Link>
              <Link
                to="/niveles"
                className="text-white bg-blue-900/50 hover:bg-blue-600 font-medium text-lg py-4 px-4 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                <div className="flex ">
                  <img src="/icons/oferta.png" alt="" className="w-6 h-6 ml-4 mt-1 " />
                  <p className="w-7/12 ml-12">Oferta academica</p>
                </div>
              </Link>
              <Link
                to="/galeria"
                className="text-white bg-blue-900/50 hover:bg-blue-600 font-medium text-lg py-4 px-4 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                <div className="flex ">
                  <img src="/icons/galeria.png" alt="" className="w-6 h-6 ml-4 mt-1 " />
                  <p className="w-7/12 ml-1">Galería</p>
                </div>
              </Link>
              <Link
                to="/eventos"
                className="text-white bg-blue-900/50 hover:bg-blue-600 font-medium text-lg py-4 px-4 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                <div className="flex ">
                  <img src="/icons/calendario.png" alt="" className="w-6 h-6 ml-4 mt-1 " />
                  <p className="w-7/12 ml-2">Eventos</p>
                </div>
              </Link>
              <Link
                to="/contacto"
                className="text-white bg-blue-900/50 hover:bg-blue-600 font-medium text-lg py-4 px-4 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                <div className="flex ">
                  <img src="/icons/telefono.png" alt="" className="w-6 h-6 ml-4 mt-1 " />
                  <p className="w-7/12 ml-4">Contacto</p>
                </div>
              </Link>




              {/* Botón Facebook en móvil */}
              <a
                href="https://www.facebook.com/colegioluissilvaoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-4 py-3 rounded-lg text-center font-bold text-lg mt-4 hover:bg-gray-100 transition-colors"
                onClick={handleLinkClick}
              >
                Síguenos en Facebook
              </a>
            </nav>
          </div>
        </div>

        {/* Overlay para cerrar menú */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={toggleMobileMenu}
          />
        )}
      </Container>
    </header>
  );
};

export default Header;