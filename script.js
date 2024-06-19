const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const progressActiveEl = document.querySelector(".progress-step-active");
const progressBarMobileTitle = document.getElementById(
  'progressBarMobileTitle'
)

const selectCityFirstModal = document.getElementById('ciudadModalFormulario')

let formStepsNum = 0;
progressBarMobileTitle.children[0].textContent = progressActiveEl.dataset.title

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");

  // console.log(formStepsNum);
  // console.log(formSteps);
}


function updateProgressBar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
  progressBarMobileTitle.children[0].textContent = progressActive[progressActive.length - 1].dataset.title
}



// Función para abrir una ventana modal por su ID
function abrirModal(idModal) {
  var modal = document.getElementById(idModal);
  modal.style.display = "block";
}
// Función para abrir una ventana de aprobado

document.addEventListener("DOMContentLoaded", function () {
  //modal de aprobacion o rechazo 
  var siguienteapro = document.getElementById("btnEmpezar");
  var btncarga = document.getElementById("btn-aprobado");

  // Evento para abrir la ventana modal del formulario al hacer clic en el botón "Empezar Ahora"
  siguienteapro.addEventListener("click", function () {
    // Abrir la ventana modal del formulario
   // document.getElementById("modalaprobado").style.display = "block";
  });

  // Evento para cerrar la ventana modal del formulario al hacer clic en el botón "Enviar"
 // btncarga.addEventListener("click", function (event) {
    //event.preventDefault(); // Evitar el comportamiento predeterminado del botón (en este caso, el envío del formulario)

    // Cerrar la ventana modal del formulario
    //document.getElementById("modalFormulario").style.display = "none";

  //});

  // Obtener elementos necesarios
  var modal = document.getElementById("modaldeacuerdos");
  var abrirModal = document.getElementById("abrirModalDeAcuerdos");
  var cerrarModal = document.querySelector("#modaldeacuerdos .cerrar");
  var botonAceptar = document.getElementById("botonAceptar");

  // Función para abrir el modal
  abrirModal.onclick = function () {
    modal.style.display = "block";
  }

  // Función para cerrar el modal
  cerrarModal.onclick = function () {
    modal.style.display = "none";
  }

  // Función para cerrar el modal al hacer clic en el botón Aceptar
  botonAceptar.onclick = function () {
    modal.style.display = "none";
  }

  // Cierra el modal cuando se hace clic fuera de él
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

});
document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencia a los botones
  var btnEmpezar = document.getElementById("btnEmpezar");
  var btnEnviar = document.getElementById("btnEnviar");

  // Evento para abrir la ventana modal del formulario al hacer clic en el botón "Empezar Ahora"
  btnEmpezar.addEventListener("click", function () {
    // Cerrar la ventana modal de inicio
    //document.getElementById("modalInicio").style.display = "none";
    // Abrir la ventana modal del formulario
  //  document.getElementById("modalFormulario").style.display = "block";
  });

  // Obtener elementos necesarios
  var modal = document.getElementById("modaldeacuerdos");
  var abrirModal = document.getElementById("abrirModalDeAcuerdos");
  var cerrarModal = document.querySelector("#modaldeacuerdos .cerrar");
  var botonAceptar = document.getElementById("botonAceptar");

  // Función para abrir el modal
  abrirModal.onclick = function () {
    modal.style.display = "block";
  }

  // Función para cerrar el modal
  cerrarModal.onclick = function () {
    modal.style.display = "none";
  }

  // Función para cerrar el modal al hacer clic en el botón Aceptar
  botonAceptar.onclick = function () {
    modal.style.display = "none";
  }

  // Cierra el modal cuando se hace clic fuera de él
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

});

// Obtener los modales y botones necesarios
var modal = document.getElementById("myModal");
var confirmBtn = document.getElementById("confirmModalBtn");
var otpModal = document.getElementById("otpModal");
// var closeBtns = document.querySelectorAll(".close");

// Función para mostrar el modal del OTP
////otpModal.style.display = "block";
//}

// Cuando se haga clic en el botón de confirmar, cerrar el primer modal
//confirmBtn.onclick = function () {
  //modal.style.display = "none";
  // Mostrar el modal del OTP después de que el primero se haya cerrado
 // setTimeout(showOTPMOdal, 300); // Ajusta este tiempo según necesites
//}

// Cuando se haga clic fuera del modal, cerrarlo
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == otpModal) {
    otpModal.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencia al formulario y a la ventana modal
  const formulario = document.getElementById('miFormulario');
  const modal = document.getElementById('miModal');
  const spanCerrar = document.querySelector('.close');
  const datoNombre = document.getElementById('datoNombre');

});

// Obtener el modal de confirmación y el botón de confirmar
var modal = document.getElementById("myModal");
var confirmBtn = document.getElementById("confirmModalBtn");

// Obtener el modal del OTP
var otpModal = document.getElementById("otpModal");

// Cuando se haga clic en el botón de confirmar, mostrar el modal del OTP
//confirmBtn.onclick = function () {
 // modal.style.display = "none";
 // otpModal.style.display = "block";
//}


// Cuando se haga clic fuera del modal de OTP, cerrarlo
window.onclick = function (event) {
  if (event.target == otpModal) {
    otpModal.style.display = "none";
  }
}
