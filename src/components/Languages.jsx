import '../css/style.css'; 
import { useState, useEffect } from 'react';
import { getLenguajes } from '../js/fetch.jsx';
import { nanoid } from 'nanoid';

export default function Languages () {
//asignacion de variables
  const [lenguaje, setLenguajes] = useState([]);
  const [loading, setLoading] = useState(false);
//creamos un id unico para cada objeto
  useEffect(() => {
    getLenguajes((items) => {
          const lenguajeswithId = items.map((item) => ({
              ...item,
              id: nanoid(),
          }));
          setLenguajes(lenguajeswithId);
      }, setLoading);
  }, []);

  if (loading) {
      return <p>Cargando los lenguajes...</p>;
  }
  return (
    <section id="Lenguajes" className="lenguajes">
      <p>LENGUAJES DESARROLLO WEB</p>
      <article id="hrs">
        <hr className="hr_2"></hr>
      </article>
      <section className="container" >
        {/*Carga los onjetos del json, además de implementar la nanoid generada anteriormente */}
      {lenguaje.map((lenguaje) => (
        <article key={lenguaje.id} id={lenguaje.style}><img src={"img/" + lenguaje.img} alt={lenguaje.id} /></article>
      ))}
      </section>

    </section>
  )
};
