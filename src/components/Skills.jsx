import React from 'react'
import '../styles/Skills.css'
import Css from '../assets/Skills/css.png'
import Git from '../assets/Skills/github.png'
import Html from '../assets/Skills/html.png'
import Js from '../assets/Skills/javascript.png'
import Node from '../assets/Skills/node.png'
import ReactImg from '../assets/Skills/react.png'

const Skills = () => {
    return (
        <div id='skills' className='skill-container'>


            <h1 className='skill-title'>Habilidades</h1>


            <div className='skill-grid'>
                <div className='skill-item'>
                    <img className='skill-img' src={Css} alt="" />
                    <h3 className='skill-name'>Css</h3>
                </div>
                <div className='skill-item'>
                    <img className='skill-img' src={Html} alt="" />
                    <h3 className='skill-name'>HTML</h3>
                </div>
                <div className='skill-item'>
                    <img className='skill-img' src={Js} alt="" />
                    <h3 className='skill-name'>Javascript</h3>
                </div>
                <div className='skill-item'>
                    <img className='skill-img' src={ReactImg} alt="" />
                    <h3 className='skill-name'>React</h3>
                </div>
                <div className='skill-item'>
                    <img className='skill-img' src={Node} alt="" />
                    <h3 className='skill-name'>NodeJs</h3>
                </div>
                <div className='skill-item'>
                    <img className='skill-img' src={Git} alt="" />
                    <h3 className='skill-name'>Git</h3>
                </div>
            </div>
        </div>
    )
}

export default Skills