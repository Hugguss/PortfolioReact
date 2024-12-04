import '../css/style.css';

export default function AboutMe() {
  return (
    <section id="about">
      <article className="about-text">
        <h1>Sobre MI</h1>
        <h2>Estudiante ASIX</h2>
        <p>Soy Hugo, un amante de la informática con un título en Sistemas Microinformáticos y Redes, y ahora esforzandome con el grado superior en Administración de Sistemas Informáticos y Redes. 
            Durante mi tiempo en la formacion profesional, he hecho varios proyectos web que muestran mi desarrollo como diseñador de fontend. <br/><br/>
            Intento siempre fijarme en los detalles y me esfuerzo por hacer un buen trabajo, lo que ha sido clave para mi desarrollo profesional. 
            Si quieres conocer algunos de mis proyectos, échale un vistazo a mi portafolio.</p>
      </article>
      <article className="about-model">
        <img src="img/sm.jpg" alt="model" />
      </article>
    </section>
  )
};
