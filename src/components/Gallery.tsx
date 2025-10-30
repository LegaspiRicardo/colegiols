import React from 'react';

const Gallery: React.FC = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Actividades Deportivas",
      placeholder: "🏆",
      img: "/images/dinamica.jpg"
    },
    {
      id: 2,
      title: "Honores a la bandera",
      placeholder: "🎭",
      img: "/images/escoltas.jpg"
    },
    {
      id: 3,
      title: "Aniversario 137",
      placeholder: "🏫",
      img: "/images/instalaciones.jpg"
    },
    {
      id: 4,
      title: "Visitas culturales",
      placeholder: "👨‍🏫",
      img: "/images/visitaacuariomichin.jpg"
    },
    {
      id: 5,
      title: "Visitas culturales",
      placeholder: "🔬",
      img: "/images/visitamuseo.jpg"
    },
    {
      id: 6,
      title: "Graduación generación 2021-2024",
      placeholder: "🌳",
      img: "/images/graduados.jpg"
    },

  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Galería
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce más sobre la vida estudiantil y las instalaciones de nuestro colegio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Solo imagen */}
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Overlay con título */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.facebook.com/colegioluissilvaoficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
          >
            <span>Ver más en Facebook</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;