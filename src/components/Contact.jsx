import React from 'react'
import '../styles/Contact.css'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div name="contact" className='contact'>

      <h1 className='contact-title'>Contacto</h1>

      <div className='contact-container'>

        <form method='POST' action="" className='form-container'>
          <input className='form-name' type="text" placeholder='Name' name='name' />
          <input className='form-email' type="email" placeholder='Email' name='email' />
          <textarea className='form-message' rows="10" name="message" placeholder='Message'></textarea>
          <button className='form-button' >Enviame un e-mail</button>
          <p className='form-text'> O escribeme a  p.aguilera.joshua@gmail.com</p>
        </form>

        <div className='contact-list'>
          <a className='contact-item' href="https://github.com/HeadEyes"><AiFillGithub /></a>
          <a className='contact-item' href="https://www.linkedin.com/in/joshua-parada-073a96258/"><AiFillLinkedin /></a>
        </div>
      </div>


    </div>
  )
}

export default Contact