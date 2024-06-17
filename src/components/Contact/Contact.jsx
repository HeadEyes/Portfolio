import React, { useRef, useState } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Contact = () => {

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_anntn3u",
        "template_bcsiact",
        formRef.current,
        "czEdNE_XhOZJ7ODtP"
      )
      .then(
        (result) => {

        },
        (error) => {
          alert(error)
        }
      );
  };

  return (
    <footer id='contact'>
      <div className='contact-container'>
        <form className='contact-form' ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Nombre" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea placeholder="Mensaje" name="message" />
          <button>Enviar</button>
        </form>

        <div className='contact-data'>
          <a href='https://github.com/HeadEyes' target="_blank" className='social-icon'>
            <GitHubIcon />
          </a>
          <a href='https://www.linkedin.com/in/joshua-parada-073a96258/' target="_blank" className='social-icon'>
            <LinkedInIcon />
          </a>
          <span>
            <EmailIcon/>
            <p>p.aguilera.joshua@gmail.com</p>
          </span>
        </div>
      </div>

    </footer>
  )
}
