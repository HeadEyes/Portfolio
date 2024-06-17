import React from 'react'
import "./About.css"
import wave from "../../assets/wave.png"
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <section id='about'>
      <div className='about-container'>

        <motion.div className='about-container__info'
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className='about-container__title'>Acerca de mi</h2>
          <p className='about-container__text'>
            Titulado de Ingenieria en informatica en Duoc UC,
            donde adquiri una solida base en multiples lenguajes de programacion,
            tecnologias y metodologia agile.
            <br /><br />
            Apasionado por el aprendizaje, dedicandome continuamente a expandir mis conocimientos y habilidades en busca de la excelencia.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
