import React from 'react';
import Container from '../Container';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, fadeInScale } from '../../types/animation';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <Container>
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
            variants={fadeInUp}
          >
            Sobre Nosotros
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-justify"
            variants={fadeInUp}
          >
            Somos una institución educativa comprometida con la formación 
            integral de niños y jóvenes, combinando excelencia académica con valores humanos.
          </motion.p>
        </motion.div>

        <motion.div 
          className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInScale}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "130+", text: "Años de Experiencia" },
              { number: "500+", text: "Estudiantes" },
              { number: "30+", text: "Docentes" },
              { number: "3", text: "Niveles Educativos" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;