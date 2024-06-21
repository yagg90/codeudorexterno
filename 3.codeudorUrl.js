function getParameterByName(name) {
  const url = window.location.href;
  const nameRegex = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${nameRegex}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
const PKCodeudor = getParameterByName('PKCodeudor');
console.log(PKCodeudor);
const APIurl = `https://check2.zuarriendo.com/ApiWebR/APIRadicacionNG/ObtenerDatosCodeudor?PKCodeudor=${PKCodeudor}`;

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};
// Declarar aquí para que sea accesible en todo el bloque de código
let codigoCodeudor;
let primerNombre;
let segundoNombre;
let primerApellido;
let segundoApellido;
let tipoDocumento;
let numeroDocumento;
let celularCod;
let emailCodeudor;
let ocupacion
let nit
let valorTipoCodOcupacion

fetch(APIurl, {
  method: 'GET',
  headers: headers
})
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // Aquí irán los pasos 2 y 3
    tipoDeCodeudor = data.TipoPersonaCodeudor;
    ocupacion = data.OcupacionCodeudor;
    primerNombre = data.PrimerNombreCodeudor;
    segundoNombre = data.SegundoNombreCodeudor;
    primerApellido = data.PrimerApellidoCodeudor;
    segundoApellido = data.SegundoApellidoCodeudor;
    tipoDocumento = data.TipoDocumentoCodeudor;
    numeroDocumento = data.NumeroDocumentoCodeudor;
    celularCod = data.CelularCodeudor;
    codigoCodeudor = data.CodigoOTP;
    razonSocial = data.RazonSocialCodeudor;
    emailCodeudor = data.EmailCodeudor;
    nit = data.NumeroDocumentoCodeudor;


    valorTipoCodOcupacion = `${tipoDeCodeudor}_${ocupacion}`;
    console.log(codigoCodeudor)
    console.log(valorTipoCodOcupacion)
    console.log(primerNombre)


    mostrarModal(valorTipoCodOcupacion);
  })
  .catch(error => console.error(error));

function mostrarModal(valorConcatenado) {
  let imagen;
  switch (valorConcatenado) {
    case 'C_NA':
      imagen = 'img/juridico.jpeg';
      ocultarCamposNombresApellidos(); // Ocultar nombres y apellidos
      // cargarDocumentosjuridico();
      break;
    case 'P_EMP':
      imagen = 'img/empleado.jpeg';
      mostrarCamposNombresApellidos(); // Mostrar nombres y apellidos
      // cargarDocumentosEmpleado();

      break;
    case 'P_IND':
      imagen = 'img/independiente.jpeg';
      mostrarCamposNombresApellidos(); // Mostrar nombres y apellidos
      // cargarDocumentosIdependiente();

      break;

    default:
      imagen = 'img/rentista_capital.jpeg';
      mostrarCamposNombresApellidos(); // Mostrar nombres y apellidos
    // cargarDocumentosRentistacapital();
  }

  const modal = document.getElementById('miModal');
  const modalImg = document.getElementById('modalImg');
  const modalBtn = document.getElementById('btnEmpezar');

  modalImg.src = imagen;
  modalBtn.onclick = function () {
    console.log('Botón de empezar clickeado');
    // Cerrar el modal
    modal.style.display = "none";
    // Mostrar el modal del código de verificación
    document.getElementById('codigoModal').style.display = "block"
  };

  modal.style.display = "block"; // Mostrar el modal
}


document.getElementById('closeModal').onclick = function () {
  document.getElementById('miModal').style.display = "none";
}
document.getElementById('closeCodigoModal').onclick = function () {
  document.getElementById('codigoModal').style.display = "none";
}

document.getElementById('verificarCodigoBtn').onclick = function () {
  const codigoIngresado = document.getElementById('codigoVerifCode').value;
  console.log(codigoCodeudor)
  if (codigoIngresado === codigoCodeudor) {

    document.getElementById('codigoModal').style.display = "none";
    // Mostrar el formulario
    document.getElementById('personalDataForm').style.display = "block";
  } else {
    alert('Código de verificación incorrecto');
  }
}


// Función para ocultar campos de nombres y apellidos del primer paso del formulario
function ocultarCamposNombresApellidos() {

  document.getElementById('nit').value = nit;
  document.getElementById('razonsocial').value = razonSocial;
  document.getElementById('emailCodJuridico').value = emailCodeudor;
  document.getElementById('container-representantelegal').style.display = 'block';
  document.getElementById('container-datosEmpresa').style.display = 'block';
  document.getElementById('container-nit').style.display = 'block';
  document.getElementById('container-validacionRepLegal').style.display = 'block';
  document.getElementById('container-validacionRepLegalDos').style.display = 'block';

  document.getElementById('container-nombre').style.display = 'none';
  document.getElementById('container-segnombre').style.display = 'none';
  document.getElementById('container-apellido').style.display = 'none';
  document.getElementById('container-segapellido').style.display = 'none';
  document.getElementById('container-tipodocumento').style.display = 'none';
  document.getElementById('container-numdocumento').style.display = 'none';
  document.getElementById('container-sexo').style.display = 'none';
  document.getElementById('container-correo').style.display = 'none';
  document.getElementById('container-celular').style.display = 'none';
  document.getElementById('container-ocupacion').style.display = 'none';
  document.getElementById('container-validacion').style.display = 'none';
  document.getElementById('container-validacionDos').style.display = 'none';

}

// Función para mostrar campos de nombres y apellidos del primer paso del formulario
function mostrarCamposNombresApellidos() {
  document.getElementById('primerNombreCod').value = primerNombre;
  document.getElementById('segundoNombreCod').value = segundoNombre;
  document.getElementById('primerApellidoCod').value = primerApellido;
  document.getElementById('segundoApellidoCod').value = segundoApellido;
  document.getElementById('numDocumentoCod').value = numeroDocumento;
  document.getElementById('celularCod').value = celularCod;
  document.getElementById('emailCod').value = emailCodeudor;
  document.getElementById('documentoCod').value = tipoDocumento;
  document.getElementById('ocupacionCod').value = ocupacion;

  document.getElementById('container-DatospersonaNat').style.display = 'block';
  document.getElementById('container-validacion').style.display = 'block';
  document.getElementById('container-validacionDos').style.display = 'block';
  document.getElementById('container-sexo').style.display = 'block';
  document.getElementById('container-correo').style.display = 'block';
  document.getElementById('container-celular').style.display = 'block';
  document.getElementById('container-ocupacion').style.display = 'block';

  document.getElementById('container-nit').style.display = 'none';
  document.getElementById('container-validacionRepLegal').style.display = 'none';
  document.getElementById('container-validacionRepLegalDos').style.display = 'none';
  document.getElementById('container-datosEmpresa').style.display = 'none';
  document.getElementById('container-representantelegal').style.display = 'none';
  document.getElementById('titlejuridico').style.display = 'none';
  document.getElementById('datosempresa').style.display = 'none';
  document.getElementById('container-correoEmpresa').style.display = 'none';
}

// Función para mostrar campos de nombres y apellidos del primer paso del formulario
function cargarDocumentosIdependiente() {
  document.getElementById('container-documentoident').style.display = 'block';
  document.getElementById('container-declrenta').style.display = 'block';
  document.getElementById('container-extractosbanca').style.display = 'block';

  document.getElementById('container-certlaboral').style.display = 'none';
  document.getElementById('container-certinmueble').style.display = 'none';
  document.getElementById('container-camaracomercio').style.display = 'none';
  document.getElementById('container-estafinancieros').style.display = 'none';
  document.getElementById('container-cedureprelegal').style.display = 'none';
  document.getElementById('container-certinmueble').style.display = 'none';
}

function cargarDocumentosEmpleado() {
  document.getElementById('container-documentoident').style.display = 'block';
  document.getElementById('container-extractosbanca').style.display = 'block';
  document.getElementById('container-certlaboral').style.display = 'block';

  document.getElementById('container-declrenta').style.display = 'none';
  document.getElementById('container-certinmueble').style.display = 'none';
  document.getElementById('container-camaracomercio').style.display = 'none';
  document.getElementById('container-estafinancieros').style.display = 'none';
  document.getElementById('container-cedureprelegal').style.display = 'none';
}

function cargarDocumentosRentistacapital() {
  document.getElementById('container-documentoident').style.display = 'block';
  document.getElementById('container-declrenta').style.display = 'block';
  document.getElementById('container-extractosbanca').style.display = 'block';
  document.getElementById('container-certinmueble').style.display = 'block';

  document.getElementById('container-certlaboral').style.display = 'none';
  document.getElementById('container-cedureprelegal').style.display = 'none';
  document.getElementById('container-estafinancieros').style.display = 'none';
  document.getElementById('container-camaracomercio').style.display = 'none';
}

function cargarDocumentosjuridico() {
  document.getElementById('container-camaracomercio').style.display = 'block';
  document.getElementById('container-estafinancieros').style.display = 'block';
  document.getElementById('container-declrenta').style.display = 'block';
  document.getElementById('container-extractosbanca').style.display = 'block';

  document.getElementById('container-documentoident').style.display = 'none';
  document.getElementById('container-certlaboral').style.display = 'none';
  document.getElementById('container-cedureprelegal').style.display = 'none';
}

if (tipoDocumento === 13) {
  tipoDocumento.value = 'cedula';
}


