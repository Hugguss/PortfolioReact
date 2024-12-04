import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './css/style.css'; // Estilos generales

// Componentes
import Home from './components/Home.jsx';
import AboutMe from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Languages from './components/Languages.jsx';
import Contact from './components/Contact.jsx';
import Redes from './components/Redes.jsx';
import Header from './components/Header.jsx';
import News from './components/News.jsx';


export default function App() {
  useEffect(() => {
    // Cambia el título del documento
    document.title = 'Portafolio';

    // Cambia el tit dinámicamente
    const icon = document.querySelector("link[rel='icon']");
    if (icon) icon.href = 'img/ico.png';}, []);


  return (
    <Router>
      <Header />
      <PageTransition>
        <RoutesComponent />
      </PageTransition>      
    </Router>
  );
}
//Funcion para almacenar las rutas 
function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/languages" element={<Languages />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/redes" element={<Redes />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
}
// Función para crear transicion entre paginas

function PageTransition({ children }) {
  const location = useLocation();
  const [currentKey, setCurrentKey] = useState(location.key);

  useEffect(() => {
    setCurrentKey(location.key);
  }, [location.key]);

  return (
    <div className="page-transition" key={currentKey}>
      {children}
    </div>
  );
}
