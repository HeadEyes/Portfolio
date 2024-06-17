import React, { useState } from 'react'
import "./SideBar.css"
import { animate, motion } from 'framer-motion'
import { ToogleBtn } from './ToogleBtn/ToogleBtn'


export const SideBar = () => {

    const [open, setOpen] = useState(false)

    const variants = {
        open: {
            clipPath: "circle(1200px at 40px 40px)",
            transition: {
                type: "spring",
                stiffness: 20,
            },
        },
        closed: {
            clipPath: "circle(50px at 0 0)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    };

    return (
        <motion.div className='sidebar' animate={open ? "open" : "closed"}>
            <motion.ul className='nav-container__mobile'
                variants={variants}
            >
                <li className='sidebar-item'>
                    <a className='sidebar-item__link' href="#home">Inicio</a>
                </li>
                <li className='sidebar-item'>
                    <a className='sidebar-item__link' href="#about">Sobre mi</a>
                </li>
                <li className='sidebar-item'>
                    <a className='sidebar-item__link' href="#skills">Habilidades</a>
                </li>
                <li className='sidebar-item'>
                    <a className='sidebar-item__link' href="#projects">Proyectos</a>
                </li>
                <li className='sidebar-item'>
                    <a className='sidebar-item__link' href="#contact">Contacto</a>
                </li>
            </motion.ul>
            <ToogleBtn setOpen={setOpen} />

        </motion.div>
    )
}
