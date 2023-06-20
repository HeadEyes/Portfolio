import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { AiOutlineClose, AiOutlineMore } from "react-icons/ai";
import '../styles/NavBar.css'

const NavBar = (props) => {

  const [open, setOpen] = useState(false);

  return (
    <div className='navbar' >
      {/* Desktop Nav */}
      <nav className='nav-container' >
        <ul className='nav-ul'>
          <li className='nav-li'><Link className='link-item' to='about' smooth={true} duration={500} >Sobre mi</Link></li>
          <li className='nav-li'><Link className='link-item' to='skills' smooth={true} duration={500} >Habilidades</Link></li>
          <li className='nav-li'><Link className='link-item' to='project' smooth={true} duration={500} >Proyectos</Link></li>
          <li className='nav-li'><Link className='link-item' to='contact' smooth={true} duration={500} >Contacto</Link></li>
        </ul>
      </nav>

    

      {/* Mobile Nav */}

      <nav className='mobile-nav-container'>
        <ul onClick={()=>setOpen(!open)} className='mobile-ul'>
          <li className="mobile-nav"> { open ? <AiOutlineClose/>:<AiOutlineMore/> }</li>
          {open && <NavItem/>}
        </ul>
      </nav>

    </div>
  )

  function NavItem(){
    return(
      <>
      <li className='mobile-item' ><Link className='link-item' to='about' smooth={true} duration={500} >Sobre mi</Link></li>
      <li className='mobile-item' ><Link className='link-item' to='skills' smooth={true} duration={500} >Habilidades</Link></li>
      <li className='mobile-item' ><Link className='link-item' to="project" smooth={true} duration={500} >Proyectos</Link></li>
      <li className='mobile-item' ><Link className='link-item' to="contact" smooth={true} duration={500} >Contacto</Link></li>
      </>
    )

  }
}

export default NavBar;