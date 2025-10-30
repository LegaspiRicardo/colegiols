import React from 'react';
import Container from '../Container';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../types/animation';

const Levels: React.FC = () => {
  const levels = [
    {
      title: "Preescolar",
      description: "Formación inicial con enfoque en desarrollo integral, estimulación temprana y aprendizaje a través del juego.",
      features: [
        "Estimulación temprana",
        "Desarrollo socioemocional",
        "Iniciación a la lectoescritura",
        "Actividades lúdicas y creativas",
        "Ambiente seguro y afectivo"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Educación Primaria",
      description: "Formación básica integral que desarrolla habilidades fundamentales con enfoque constructivista y valores.",
      features: [
        "Atención personalizada",
        "Programa de lectura comprensiva",
        "Educación física y artística",
        "Formación en valores",
        "Inglés desde temprana edad"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Educación Secundaria",
      description: "Formación científica-humanista con preparación para la educación superior y desarrollo de competencias profesionales.",
      features: [
        "Preparación pre-universitaria",
        "Laboratorios de ciencias y tecnología",
        "Orientación vocacional",
        "Programa de inglés intensivo",
        "Desarrollo de competencias digitales"
      ],
      color: "from-blue-500 to-indigo-600"
    }
  ];

  const services = [
    {
      icon: "⏰",
      title: "Horario Extendido",
      description: "Servicio hasta las 19:00 hrs "
    },
    {
      icon: "🍽️",
      title: "Comedor Escolar",
      description: "Alimentación balanceada y supervisada por especialistas"
    },
    {
      icon: "📝",
      title: "Club de Tareas",
      description: "Acompañamiento especializado en deberes escolares"
    },
    {
      icon: "🎨",
      title: "Talleres Vespertinos",
      description: "Actividades extracurriculares deportivas, artísticas y culturales"
    }
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="niveles" className="py-16 bg-gray-50">
      <Container>
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
            variants={fadeInUp}
          >
            Niveles Educativos
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto text-justify"
            variants={fadeInUp}
          >
            Colegio mixto con <span className="font-semibold text-blue-600">enfoque constructivista y perfil ecléctico</span>, 
            adaptándonos a los cambios de la sociedad para brindar una educación de vanguardia.
          </motion.p>
        </motion.div>

        {/* Niveles Educativos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {levels.map((level, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`bg-linear-to-r ${level.color} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <h3 className="text-xl md:text-2xl font-bold">{level.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed text-justify">{level.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gray-50 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                  Conocer más
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Servicios Adicionales */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-center mb-8">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-3"
              variants={fadeInUp}
            >
              Servicios Complementarios
            </motion.h3>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto text-justify"
              variants={fadeInUp}
            >
              Ofrecemos además servicios para apoyar el desarrollo académico y personal de nuestros estudiantes
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="text-center p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Metodología y Tradición */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="bg-linear-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-4">Tradición y Vanguardia</h3>
            <p className="mb-4 leading-relaxed text-justify">
              Con <span className="font-bold">136 años de labor ininterrumpida</span>, hemos formado generaciones 
              de profesionales exitosos, manteniendo nuestra esencia mientras evolucionamos con los tiempos.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para formar parte de nuestra institución?
            </h3>
            <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto text-justify">
              Únete a las generaciones que han encontrado en nuestro colegio la base para su éxito profesional y personal.
            </p>
            <a 
              href="#contacto" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Solicitar Información
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Levels;