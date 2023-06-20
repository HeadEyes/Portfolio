import React from 'react'
import '../styles/Presentacion.css'
import Photo from '../assets/Yo.jpg'
import { AiOutlineDownload } from "react-icons/ai";

const Presentacion = () => {

    function HandleDownload(downloadLinks) {
        downloadLinks = document.querySelectorAll("[data-download]");
        downloadLinks.forEach(button =>{
            const id = button.dataset.download;
            const image = document.getElementById(id);

        })
    }

    return (

        <div id="about" className='presentation-container'>

            <div className='about-container'>
                <div className='about-info'>
                    <h1 className='greet'>Conóceme</h1>
                    <p className='about'>
                        Me llamo <b>Joshua Parada</b>, soy un desarrollador Front-end apasionado por el desarrollo de software y los desafios que este me presenta. <br /> <br />
                        Actualmente estoy en busca de una oportunidad laboral en la que poder hacer uso del conocimiento que he adquirido y asi poder seguir
                        creciendo profesionalmente
                    </p>
                    <a href={""} download="" className='cv-button'>Descargar CV < AiOutlineDownload className='button-icon' /></a>
                </div>

                <div className='img-container'>
                    <img src={Photo} alt="Yo" className='img' />
                </div>
            </div>

        </div>
    )
}

export default Presentacion