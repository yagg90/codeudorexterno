function getParameterByName(name) {
  const url = window.location.href;
  const nameRegex = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${nameRegex}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

document.addEventListener("DOMContentLoaded", function () {
  // URL de la API para enviar datos
  const postUrl = 'https://check2.zuarriendo.com/ApiWebR/APIRadicacionNG/GuardarDatosCodeudor'; // Reemplaza con tu URL real
  const Codigocodeudor = getParameterByName('PKCodeudor');
  console.log(Codigocodeudor)
  // const url = `http://pruebas.centraldearrendamientos.com/WebR17_JTDesarrollo.NetEnvironment/APIRadicacionNG/ObtenerDatosCodeudor?PKCodeudor=${PKCodeudor}`;
  // Enviar datos mediante POST al hacer clic en el botón "Confirmar"


  document.getElementById('verificationModalContinueBtn').addEventListener('click', function () {
    document.getElementById('validacionModal').style.display = 'none';
    document.getElementById('myModal').style.display = 'flex';

    const modalCargaEl = document.querySelector('#myModal')
    const modalContentEl = modalCargaEl.querySelector('.modal-content')

    modalContentEl.innerHTML = `
        <h2>Estamos enviando tus datos</h2>

        <div class="modal-content__spinner-container">
            <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
            y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
            <path fill="#0A4989"
                d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50"
                to="360 50 50" repeatCount="indefinite" />
            </path>
            </svg>
        </div>
        `


    // Obtener el valor del nombre del cliente
    //codeudor juridico 
    const primerNomRepLegal = document.getElementById('primerNombreCodReplegal').value;
    const segundoNomRepLegal = document.getElementById('segundoNombreCodRepLegal').value;
    const primerApellidoRepLegal = document.getElementById('primerApellidoCodRepLegal').value;
    const segundonApellidoRepLegal = document.getElementById('segundoApellidoCodRepLegal').value;
    const cedulaRepLegal = document.getElementById('numDocumentoCodRepLegal').value;
    const correoRepLegal = document.getElementById('emailCodJuridico').value;
    const tipoDocRepLegal = document.getElementById('documentoCodRepLegal').value;
    const razonSocialEmp = document.getElementById('razonsocial').value;
    const direcEmp = document.getElementById('direccion').value;
    const ciudadEmp = document.getElementById('ciudEmpresa').value;
    const celularEmp = document.getElementById('telEmpresa').value;
    const emailEmp = document.getElementById('emailCodJuridico').value;
    const ingresosEmp = document.getElementById('ingresosCodJuridico').value;
    const egresosEmp = document.getElementById('egresos').value;

    //codeudor natural
    const nombreCodeudor = document.getElementById('primerNombreCod').value;
    const segundonombreCodeudor = document.getElementById('segundoNombreCod').value;
    const apellidoCodeudor = document.getElementById('primerApellidoCod').value;
    const segundoApellidoCodeudor = document.getElementById('segundoApellidoCod').value;
    const celularCodeudor = document.getElementById('celularCod').value;
    const correoCodeudor = document.getElementById('emailCod').value;
    const numeroDocCodeudor = document.getElementById('numDocumentoCod').value;
    const docCodeudor = document.getElementById('documentoCod').value;
    const ocupacionCode = document.getElementById('ocupacionCod').value;

    const codJuridico = {
      CelularRepLegal: cedulaRepLegal,
      EmailRepLegal: correoRepLegal,
      NumeroDocumentoRepLegal: cedulaRepLegal,
      PrimerApellidoRepLegal: primerApellidoRepLegal,
      PrimerNombreRepLegal: primerNomRepLegal,
      SegundoApellidoRepLegal: segundonApellidoRepLegal,
      SegundoNombreRepLegal: segundoNomRepLegal,
      TipoDocumentoRepLegal: tipoDocRepLegal
    }


    // Preparar los datos a enviar
    const data = {
      canal: 'directo',
      Operacion: 'UPD',
      PKCodeudor: Codigocodeudor,
      PrimerNombreCodeudor: nombreCodeudor,
      SegundoNombreCodeudor: segundonombreCodeudor,
      PrimerApellidoCodeudor: apellidoCodeudor,
      SegundoApellidoCodeudor: segundoApellidoCodeudor,
      CelularCodeudor: celularCodeudor,
      EmailCodeudor: correoCodeudor,
      NumeroDocumentoCodeudor: numeroDocCodeudor,
      TipoDocumentoCodeudor: docCodeudor,
      OcupacionCodeudor: ocupacionCode,
      RazonSocialCodeudor: razonSocialEmp,
      DireccionCodeudor: direcEmp,
      CiudadCodeudor: ciudadEmp,
      CelularCodeudor: celularEmp,
      EmailCodeudor: emailEmp,
      IngresosMensualesCodeudor: ingresosEmp,
      EgresosMensualesCodeudor: egresosEmp,
      //juridico
      RepresentanteLegal: codJuridico
    };

    //console.log(data);
    // Realizar la solicitud POST
    fetch(postUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        // alert('Datos enviados exitosamente');

        setTimeout(() => {

          // Mostrar paso 2 del formulario
          document.getElementById('personalDataForm').style.display = 'none'

          // Mostrar paso 2 del formulario
          document.getElementById('paso2').style.display = 'block'

          // Cerrar todas las ventanas modales
          closeModal()

          formStepsNum++
          updateFormSteps()
          updateProgressBar()

          // show appropriate documents for type of cosigner
          switch (valorTipoCodOcupacion) {
            case 'C_NA':
              cargarDocumentosJuridico();
              break;
            case 'P_EMP':
              cargarDocumentosEmpleado();
              break;
            case 'P_IND':
              cargarDocumentosIdependiente();
              break;
            default:
              cargarDocumentosRentistacapital();
          }

        }, 2000);
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error al enviar los datos');
      });
  });
});


