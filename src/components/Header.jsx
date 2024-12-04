import { useState, useRef } from 'react';
import {Link, useLocation  } from 'react-router-dom';

export default function Header() {
  //Establecer la ruta remarcada en la barra de navegación
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const headerRef = useRef(null); 

  const location = useLocation(); 
  const isActive = (path) => location.pathname === path;

  return (
    <header ref={headerRef} className="page-header">
    <section className="secheader1">
      <Link to="/"><img src="img/portfolio.png" alt="Portfolio" /></Link>
    </section>
    <span className="desplegable" onClick={toggleMenu}>
      <i className="bi bi-list"></i>
    </span>
    {/*Si la location de la pagina es la que se indica, se les aplica la clase de active-link*/}
    <article className={`secheader2 ${isOpen ? 'active' : ''}`}>
      <span className={` ${isActive('/') ? 'active-link' : ''}`}> <Link to="/">Home</Link></span>
      <span className={` ${isActive('/about') ? 'active-link' : ''}`}> <Link to="/about">Sobre Mi</Link></span>
      <span className={` ${isActive('/projects') ? 'active-link' : ''}`}> <Link to="/projects">Proyectos</Link></span>
      <span className={` ${isActive('/languages') ? 'active-link' : ''}`}> <Link to="/languages">Lenguajes</Link></span>
      <span className={` ${isActive('/contact') ? 'active-link' : ''}`}> <Link to="/contact">Contacto</Link></span>
      <span className={` ${isActive('/redes') ? 'active-link' : ''}`}> <Link to="/redes">Redes</Link></span>
    </article>
  </header>
  );
}
