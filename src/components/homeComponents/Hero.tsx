import React from 'react';
import Container from '../Container';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../types/animation';

const Hero: React.FC = () => {
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 2,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="inicio" className="pt-20 bg-linear-to-br from-blue-50 to-indigo-100">
      <Container>
        <motion.div 
          className="grid md:grid-cols-2 gap-8 items-center py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Texto */}
          <motion.div className="space-y-6 text-center md:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
              variants={fadeInUp}
            >
              Colegio
              <span className="text-blue-600 block">Luis Silva A.C.</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
              variants={fadeInUp}
            >
              Más de 136 años formando estudiantes con excelencia académica y valores humanos. 
              <br />
              Educación para preescolar, primaria y secundaria.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={fadeInUp}
            >
              <a 
                href="#contacto" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Inscripciones Abiertas
              </a>
              <a 
                href="#niveles" 
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
              >
                Conoce Nuestros Niveles
              </a>
            </motion.div>
          </motion.div>

          {/* Imagen */}
          <motion.div 
            className="relative" 
            variants={imageVariants}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-2 transform md:rotate-2">
              <div className="bg-gray-200 rounded-xl h-64 md:h-80 w-full flex items-center justify-center overflow-hidden">
                <img src="/images/diademuertossmall.jpg" alt="" className='rounded-xl w-full h-full object-cover'/>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 hidden md:block"></div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-blue-400 rounded-full opacity-20 hidden md:block"></div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;