import { useState } from 'react';
import {Link} from 'react-router-dom';

import '../css/style.css';

export default function Information() {
  const [isGridChanged, setIsGridChanged] = useState(false);

  const handleGridChange = () => {
    setIsGridChanged(!isGridChanged); 
  };

  return (
    <section
      id="Information"
      // Cambiar clase según el estado de la variable si es true or false para asignar una nueva clase
      className={`info1 ${isGridChanged ? 'grid-changed' : ''}`} 
    >
      <article className="grid_2">
        <h2>Informacion Personal</h2>
      </article>
      <article className="grid_3">
        <dl>
          <dt>Nombre</dt>
          <dd>Hugo</dd>
          <dt>Apellidos</dt>
          <dd>Fernandez Fernandez</dd>
          <dt>Edad</dt>
          <dd>21 Años</dd>
          <dt>Nacionalidad</dt>
          <dd>Española</dd>
        </dl>
      </article>
      {/*Llama a la funcion para cambiar el grid */}
      <article className="grid_4" onClick={handleGridChange}>
        <div>
          <img src="img/perf_img.png" alt="" />
          <h1>Bienvenido a mi portfolio</h1>
          <span>pulsa para ver mi información</span>
        </div>
      </article>
      <article className="grid_5">
      <Link to="/news" className="animacion">
          <abbr title="CLICK ME">Newsletter</abbr>
      </Link>
      </article>
    </section>
  );
}
