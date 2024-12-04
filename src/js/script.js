import Swal from 'sweetalert2';
// Header Sticky Function
export function handleHeaderScroll() {
    const header = document.querySelector(".page-header");
    const sticky = "is-sticky";
    
    window.addEventListener("scroll", () => {
      var currentScroll = window.scrollY;
      if (currentScroll > 0) {
        header.classList.add(sticky);
      } else {
        header.classList.remove(sticky);
      }
    });
  }
  
  // Validación de Formulario
  export function handleFormSubmit(event, setFields) {
    event.preventDefault();
  
    const words = document.getElementById('campo1').value.split(' ');
    const campo1 = document.getElementById('campo1').value;
    const campo2 = document.getElementById('campo2').value;
    const campo3 = document.getElementById('campo3').value;
    const campo4 = document.getElementById('campo4').value;
  
    if (campo1 === '' || campo2 === '' || campo3 === '' || campo4 === '') {
      Swal.fire('', 'Por favor, complete todos los campos antes de enviar', 'error', '');
    } else if (words.length !== 3 || !words.every(word => word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase())) {
      Swal.fire('', 'Por favor, ingrese su nombre y dos apellidos en el campo 1, cada palabra comenzando con mayúscula', 'error', '');
    } else if (!campo2.includes('@')) {
      Swal.fire('', 'El formato del Email no es correcto, verifícalo', 'error', '');
    } else if (campo3.length !== 9 || isNaN(campo3)) {
      Swal.fire('', 'El formato del número no es correcto, verifícalo', 'error', '');
    } else {
      Swal.fire({
        title: '¿Quieres enviar el mensaje?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'ENVIAR',
        denyButtonText: `CANCELAR`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('', '', 'success', '');
          setFields({campo1: '', campo2: '', campo3: '', campo4: ''});
        }
      });
    }
  }
  
  // Cancelar y limpiar el formulario
  export function handleCancel(setFields) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true,
    });
  
    swalWithBootstrapButtons.fire({
      title: '¿Quieres eliminar los datos?',
      icon: 'warning',
      showDenyButton: true,
      showCancelButton: false,
      showConfirmButton: false,
      confirmButtonText: 'SI',
      denyButtonText: `NO`,
    }).then((result) => {
      if (result.isConfirmed) {
        setFields({campo1: '', campo2: '', campo3: '', campo4: ''});
        swalWithBootstrapButtons.fire('Datos eliminados', '', 'success');
      }
    });
  }
  