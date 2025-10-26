import React from 'react';

const Levels: React.FC = () => {
  const levels = [
    {
      title: "Educación Primaria",
      description: "De 1ro a 6to grado. Formación básica integral con enfoque en valores y desarrollo de habilidades fundamentales.",
      features: [
        "Atención personalizada",
        "Programa de lectura comprensiva",
        "Educación física y artística",
        "Talleres de valores",
        "Inglés básico"
      ],
      image: "📚",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Educación Secundaria",
      description: "De 1ro a 5to año. Formación científica-humanista con preparación para la educación superior y vida productiva.",
      features: [
        "Preparación pre-universitaria",
        "Laboratorios de ciencias",
        "Tecnología e informática",
        "Orientación vocacional",
        "Inglés intensivo"
      ],
      image: "🔬",
      color: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <section id="niveles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Niveles Educativos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una educación continua y progresiva desde los primeros años 
            hasta la preparación para la universidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {levels.map((level, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className={`bg-gradient-to-r ${level.color} p-8 text-white`}>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{level.image}</div>
                  <h3 className="text-2xl md:text-3xl font-bold">{level.title}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 mb-6 text-lg">{level.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Más Información
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              ¿Necesitas más información?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Contáctanos para conocer sobre nuestros procesos de admisión, horarios y costos.
            </p>
            <a 
              href="#contacto" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Solicitar Información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Levels;