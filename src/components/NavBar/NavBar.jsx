import React from 'react'
import "./NavBar.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SideBar } from '../SideBar/SideBar';

export const NavBar = () => {
    return (
        <header className='header'>

            <SideBar/>

            <ul className='nav-container'>
                <li className='nav-item'>
                    <a className='nav-item__link' href="#home">Inicio</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-item__link' href="#about">Sobre mi</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-item__link' href="#skills">Habilidades</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-item__link' href="#projects">Proyectos</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-item__link' href="#contact">Contacto</a>
                </li>
            </ul>

            <div className='social'>
                <a href='https://github.com/HeadEyes' target="_blank" className='social-icon'>
                    <GitHubIcon />
                </a>
                <a href='https://www.linkedin.com/in/joshua-parada-073a96258/' target="_blank" className='social-icon'>
                    <LinkedInIcon />
                </a>
            </div>
        </header>
    )
}
