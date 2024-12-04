import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import '../css/style.css';

export default function Contact() {
  // Función para obtener datos iniciales desde localStorage
  const getInitialState = (key = '') => localStorage.getItem(key);

  // Estados inicializados con datos persistidos en localStorage
  const [campo1, setCampo1] = useState(() => getInitialState('campo1'));
  const [campo2, setCampo2] = useState(() => getInitialState('campo2'));
  const [campo3, setCampo3] = useState(() => getInitialState('campo3'));
  const [campo4, setCampo4] = useState(() => getInitialState('campo4'));

  // UseEfect para sincronizar el localStorage cuando cambien los valores
  useEffect(() => {
    localStorage.setItem('campo1', campo1);
    localStorage.setItem('campo2', campo2);
    localStorage.setItem('campo3', campo3);
    localStorage.setItem('campo4', campo4);
  }, [campo1, campo2, campo3, campo4]);

  // Función de enviar con validaciones
  const enviar = () => {
    const words = campo1.split(' ');

    if (!campo1 || !campo2 || !campo3 || !campo4) {
      Swal.fire('', 'Por favor, complete todos los campos antes de enviar', 'error');
    //comprueba que contenga 3 palabras, separadas por espacios y que la primera letra de cada paalabra este en Mayusculas
    } else if (words.length !== 3 || !words.every( (word) =>word[0] === word[0].toUpperCase() &&word.slice(1) === word.slice(1).toLowerCase())) {
      Swal.fire('', 'Por favor, ingrese su nombre y dos apellidos en el campo 1, cada palabra comenzando con mayúscula', 'error');
    //comprueba que contenga @
    } else if (!campo2.includes('@')) {
      Swal.fire('', 'El formato del Email no es correcto, verifícalo', 'error');
    //comprueba que contenga 9 numeros 
    } else if (campo3.length !== 9 || isNaN(campo3)) {
      Swal.fire('', 'El formato del número no es correcto, verifícalo', 'error');
    } else {
      Swal.fire({
        title: '¿Quieres enviar el mensaje?',
        showDenyButton: true,
        confirmButtonText: 'ENVIAR',
        denyButtonText: 'CANCELAR',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('', 'Mensaje enviado correctamente', 'success');
          setCampo1('');
          setCampo2('');
          setCampo3('');
          setCampo4('');
          localStorage.removeItem('campo1');
          localStorage.removeItem('campo2');
          localStorage.removeItem('campo3');
          localStorage.removeItem('campo4');
        }
      });
    }
  };

  // Función de eliminar los datos
  const eliminar = () => {
    Swal.fire({
      title: '¿Quieres eliminar los datos?',
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'SI',
      denyButtonText: 'NO',
    }).then((result) => {
      if (result.isConfirmed) {
        setCampo1('');
        setCampo2('');
        setCampo3('');
        setCampo4('');
        localStorage.removeItem('campo1');
        localStorage.removeItem('campo2');
        localStorage.removeItem('campo3');
        localStorage.removeItem('campo4');
        Swal.fire('Datos eliminados', '', 'success');
      }
    });
  };

  return (
    <section id="contact">
      <section className="top-card">
        <article className="card1">
          <div>
            <i className="bi bi-circle-fill" style={{ color: '#ed1c6f', fontSize: '9px' }}></i>
            <i className="bi bi-circle-fill" style={{ color: '#e8e925', fontSize: '9px' }}></i>
            <i className="bi bi-circle-fill" style={{ color: '#73c34f', fontSize: '9px' }}></i>
          </div>
          <span>Tus datos no seran borrados si actualizas la pagina</span>
          <span className="bi bi-three-dots"></span>
        </article>
        <article className="card2">
          <div className="card2_1">
            <p>Contacta conmigo</p>
            <h3><i className="bi bi-telephone"></i> +34 621 89 79 32</h3>
            <h3><i className="bi bi-envelope"></i> hff00@iesemilidarder.com</h3>
          </div>
          <div className="card2_2">
            <input type="text" id="campo1" placeholder="NOMBRE" value={campo1} onChange={(e) => setCampo1(e.target.value)} />
            <input type="email" id="campo2" placeholder="MAIL" value={campo2} onChange={(e) => setCampo2(e.target.value)} />
            <input type="tel" id="campo3" placeholder="TELEFONO" value={campo3} onChange={(e) => setCampo3(e.target.value)} />
            <input type="text" id="campo4" placeholder="MENSAJE" required minLength="1" maxLength="100" size="100" value={campo4} onChange={(e) => setCampo4(e.target.value)} />
            <article>
              <span id="verificar" className="bi bi-check" onClick={enviar} alt="enviar"></span>
              <span className="bi bi-x" onClick={eliminar}></span>
            </article>
          </div>
        </article>
      </section>
    </section>
  );
};

