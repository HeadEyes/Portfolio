import React from 'react'
import '../styles/Presentacion.css'
import Photo from '../assets/Yo.jpg'
import cv from '../assets/Joshua_Parada_CV.pdf'
import { AiOutlineDownload } from "react-icons/ai";

const Presentacion = () => {

    return (

        <div id="about" className='presentation-container'>

            <div className='about-container'>
                <div className='about-info'>
                    <h1 className='greet'>Un poco sobre mí</h1>
                    <p className='about'>
                        Me llamo <b>Joshua Parada</b> y soy un desarrollador Front End, tengo conocimientos en desarrollo de software, bases de datos, gestion de proyectos y metodologias agiles.
                        <br /><br />
                        Actualmente mi objetivo es encontrar un trabajo en el que poder consolidar mis habilidades y crecer profesionalmente.
                    </p>
                    <a href={cv} download="CV-JoshuaParada" className='cv-button'>Descargar CV < AiOutlineDownload className='button-icon' /></a>
                </div>

                <div className='img-container'>
                    <img src={Photo} alt="Yo" className='img' />
                </div>
            </div>

        </div>
    )
}

export default Presentacion