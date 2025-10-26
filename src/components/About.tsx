import React from 'react';
import Container from './Container';

const About: React.FC = () => {
 {/* const features = [
    {
      icon: "🎓",
      title: "Excelencia Académica",
      description: "Programas educativos de calidad avalados por el Ministerio de Educación"
    },
    {
      icon: "❤️",
      title: "Formación en Valores",
      description: "Desarrollamos principios éticos y morales en nuestros estudiantes"
    },
    {
      icon: "⚽",
      title: "Actividades Extracurriculares",
      description: "Deportes, arte y cultura para formación integral"
    },
    {
      icon: "👨‍🏫",
      title: "Docentes Calificados",
      description: "Personal docente con amplia experiencia y vocación"
    }
  ];
*/}
  return (
    <section id="nosotros" className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una institución educativa comprometida con la formación 
            integral de niños y jóvenes, combinando excelencia académica con valores humanos.
          </p>
        </div>

                  {/* Imagen 

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>*/}

        <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Estudiantes</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Docentes</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">2</div>
              <div className="text-blue-100">Niveles Educativos</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;