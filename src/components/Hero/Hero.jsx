import React from 'react'
import "./Hero.css"
import { TypeAnimation } from 'react-type-animation';



export const Hero = () => {
    return (
        <section className='hero' id='home'>
            <div className='hero-container'>
                <h1 className='hero-container__title'>
                    <TypeAnimation sequence={["Joshua Parada",1000]} speed={50} repeat={0} cursor={false}/>
                </h1>
                <p className='hero-container__text'>
                    Front End developer
                </p>
                <span className='hero-container__button'>
                    <a target='_blank' href="https://drive.google.com/file/d/1cCgAkleHnv0dXMg-DUK9zrrJLJStR5LE/view">Descargar CV</a>
                </span>
            </div>
        </section>
    )
}
