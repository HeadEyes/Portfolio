import React from 'react'
import "./Projects.css"
import { ProjectCard } from '../ProjectCard/ProjectCard'
import encriptador from "../../assets/Encriptador.jpg"
import ecomerce from "../../assets/e-comerce.jpg"

const projects = [
  {
    title:"Encriptador",
    image: encriptador,
    description: "Challenge parte del programa Oracle Next Education",
    link: "https://headeyes.github.io/Challenge-grupo5/"
  },
  {
    title:"E-comerce",
    image: ecomerce,
    description: "Ecomerce simpre realizado con react y react router dom",
    link: "https://e-comerce-green.vercel.app"
  }
]

export const Projects = () => {
  return (
    <section id='projects'>
      <div className='projects-container'>
        <h2 className='projects-container__title'>Mis proyectos</h2>
        <ul className='projects-list'>
          {
            projects.map((data, i) => (
              <ProjectCard key={i} data={data} i={i}/>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
