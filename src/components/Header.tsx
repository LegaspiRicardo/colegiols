import React, { useState } from "react";
import Container from "./Container";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="/">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">LS</span>
              </div>
            </a>
            <div>
              <a href="/">
                <h1 className="text-lg font-bold text-gray-800">
                  Colegio Luis Silva
                </h1>
                <p className="text-xs text-gray-600">
                  Formando líderes del mañana
                </p>
              </a>
            </div>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#inicio"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
            >
              Nosotros
            </a>
            <a
              href="#niveles"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
            >
              Niveles
            </a>
            <a
              href="#galeria"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
            >
              Galería
            </a>
            <a
              href="#contacto"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
            >
              Contacto
            </a>
          </nav>

          {/* Botón Facebook */}
          <div className="hidden md:block">
            <a
              href="https://www.facebook.com/colegioluissilvaoficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 text-sm"
            >
              <span>Facebook</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menú Móvil */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a
                href="#inicio"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Inicio
              </a>
              <a
                href="#nosotros"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Nosotros
              </a>
              <a
                href="#niveles"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Niveles
              </a>
              <a
                href="#galeria"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Galería
              </a>
              <a
                href="#contacto"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Contacto
              </a>
              <a
                href="https://www.facebook.com/colegioluissilvaoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
              >
                Facebook
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
