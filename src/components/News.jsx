import "../css/news.css"
import React from 'react';
import {Link} from 'react-router-dom';
//Pagina para cargar el newssletter
export default function News () {
    return (
      <body className="news-container">
        <header>
          <Link to="/">
            <a href="https://portafoliobyhugo.netlify.app/">
              <img src="img/portfolio.png" alt=""></img>
            </a>
          </Link>
          <h1>¡Novedades!</h1>
        </header>
        <main>
          <img src="img/img_news/s2.png" alt="" className="img1"></img>
          <h4>
            ¡Te emocionará descubrir los últimos proyectos que he creado! 
            Desde proyectos web innovadores hasta soluciones técnicas, cada uno refleja mi pasión por la creatividad. ¡Echa un vistazo y déjame saber qué opinas!
          </h4>
          <hr></hr>
          <h1>Proyectos</h1>
          <article className="project_1">
            <img src="img/img_news/p1.png" alt=""></img>
            <div>
              <p>Un proyecto en el cual me base en una playlist de spotify.
                Se emplean elementos tales como hover para practicar con ellos.
              </p>
              <button> 
                <a href="https://spotifyrankinglist.netlify.app">VIEW</a>
              </button>
            </div>
          </article>
          <article className="project_2">
            <div>
              <p>Proyecto en el cual utilizé tecnicas de posicionamiento para practicar con ellas.
                Por otro lado tambien trabajé cono modificar la forma de un div
              </p>
              <button> 
                <a href="https://hobitt.netlify.app">VIEW</a>
              </button>
            </div>
            <img src="img/img_news/p2.png" alt=""></img>
          </article>
          <article className="project_3">
            <img src="img/img_news/p3.png" alt=""></img>
            <div>
              <p>En este trabajo recree una tabla de puntuación de la liga.
                Empleé elemntos de una tabla y utilizé etiqeutas de css como nth-child
              </p>
              
              <button> 
                <a href="https://tablalaliga.netlify.app">VIEW</a>
              </button>
            </div>
          </article>
        </main>
        <footer>
          <section className="social_media">
            <a href="https://www.instagram.com" className="bi bi-instagram" target="_blank" rel="noopener noreferrer"> </a>
            <a href="https://www.facebook.com" className="bi bi-facebook"  target="_blank" rel="noopener noreferrer"> </a>
            <a href="https://www.linkedin.com" className="bi bi-linkedin" target="_blank" rel="noopener noreferrer" > </a>
            <a href="https://www.github.com" className="bi bi-github" target="_blank" rel="noopener noreferrer"> </a>
            <a href="https://www.twitter.com" className="bi bi-twitter-x" target="_blank" rel="noopener noreferrer"> </a>
            <a href="https://www.youtube.com" className="bi bi-youtube" target="_blank" rel="noopener noreferrer"> </a>
          </section>
          <section className="text">
            <span>Cancelar Suscripción</span> 
            <span> Web</span>
            <span>Politica de Privacidad</span>
          </section>
          <section>
            <Link to="/">
                <img src="img/portfolio.png" alt="" ></img>
            </Link>
          </section>
        </footer>
      </body>
    )
}