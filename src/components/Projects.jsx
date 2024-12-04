import React from 'react';
import '../css/style.css';
//Carga la pagina de proyectos
//rel="noopener noreferrer" amplia la seguridad a la hora de utilizar target_blank, hace que la pagina de la cual proviene el link no pueda ser seguida
export default function Projects() {
 return (
  <section id="Proyectos" className="proyectos">
    <h2>Proyectos</h2>
    <section>
      <article>
        <a href="https://mis-react-notes.netlify.app/" target="_blank" rel="noopener noreferrer">
          <h1>Notes</h1>
        </a>
        <div className="proj_marvel">
          <b>Hecho para trabajar el grid y sus funciones, ademas de utilizar diseño responsivo para adaptarlo a pantallas mas pequeñas</b>
        </div>
      </article>
      <article>
        <a href="https://mypokemonokedex.netlify.app/">
          <h1>Pokedex</h1>
        </a>
        <div className="proj_pokes">
          <b>Proyecto para trabajar con la implementacion de datos de una api en html, tambien se trabaja con flitros de javascript</b>
        </div>
      </article>
      <article>
        <a href="https://y-ves.netlify.app/" target="_blank" rel="noopener noreferrer">
          <h1>Y-ves Rocher</h1>
        </a>
        <div className="proj_yves">
          <b>Trabajo creado para trabajar funciones como diseño responsivo y hacer que se asemeje a una pagina web </b>
        </div>
      </article>
    </section>
  </section>
 )
};
