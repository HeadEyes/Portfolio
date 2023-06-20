import React from 'react'
import '../styles/Project.css'
import Encriptador from '../assets/Projects/Encriptador.jpg'


const Project = () => {
    return (
        <div name='project' className='project-container'>

            <h1 className='project-title'>Proyectos</h1>

            <div className='project-item'>
                <img className='project-img' src={Encriptador} alt="" />
                <div className='project-info'>
                    <h2 className='info-title'>Encriptador</h2>
                    <p className='info-description'>
                        Primer desafio del programa ONE, debe convertir las vocales en una cadena de texto de la siguiente forma:<br /><br />
                        a = ai
                        e = enter
                        i = imes
                        o = ober
                        u = ufat

                    </p>
                    <a className='info-link' href="https://github.com/HeadEyes/Challenge-grupo5">Repositorio</a>
                </div>
            </div>
        </div>
    )
}

export default Project