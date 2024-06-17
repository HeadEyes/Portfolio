import React from 'react'
import "./Skills.css"
import { motion } from 'framer-motion'

export const Skills = () => {

    const skill = [
        {
            name: "CSS",
            image: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
        },
        {
            name: "Html",
            image: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png"
        },
        {
            name: "React JS",
            image: "https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png"
        },
        {
            name: "Javascript",
            image: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png"
        },
        {
            name: "Node JS",
            image: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png"
        },
        {
            name: "SQL",
            image: "https://cdn1.iconfinder.com/data/icons/hawcons/32/700048-icon-89-document-file-sql-512.png"
        }
    ]

    return (
        <motion.section id='skills'
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5}}
        >
            <div className='skills-container'>
                <h2 className='skills-container__title'>Algunas de las tecnologias que uso</h2>
                <ul className='skills-list'>
                    {
                        skill.map((skill) => (
                            <li className='skills-list__item'>
                                <img src={skill.image} alt="" />
                                <h3>{skill.name}</h3>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </motion.section>
    )
}
