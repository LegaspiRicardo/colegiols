import React from 'react';
import Container from './Container';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-20 bg-linear-to-br from-blue-50 to-indigo-100">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center py-16">
          {/* Texto */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Colegio
              <span className="text-blue-600 block">Luis Silva</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Más de 25 años formando estudiantes con excelencia académica y valores humanos. 
              Educación integral para primaria y secundaria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#contacto" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Matrículas Abiertas
              </a>
              <a 
                href="#niveles" 
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
              >
                Conoce Nuestros Niveles
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-2 transform md:rotate-2">
              <div className="bg-gray-200 rounded-xl h-64 md:h-80 w-full flex items-center justify-center">
                <span className="text-gray-500">Imagen del Colegio</span>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 hidden md:block"></div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-blue-400 rounded-full opacity-20 hidden md:block"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;