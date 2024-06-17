import React from 'react'
import "./ProjectCard.css"
import { motion } from 'framer-motion'

const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0 },
  }

export const ProjectCard = ({data, i}) => {
    
    return (
        <motion.li className='project__item'
        variants={variants} initial="hidden" custom={i} whileInView="visible"
        >
            <a className='project-item__link' href={data.link} target="_blank" >
                <img className='project-item__img' src={data.image} alt="project-image" />
                <div className='project-item__info'>
                    <h3 className='project-item__title'>{data.title}</h3>
                    <p className='project-item__desc'>{data.description}</p>
                </div>
            </a>
        </motion.li>
    )
}
