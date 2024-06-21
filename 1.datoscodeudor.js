const datosFormulario = {

  primerNombreCod: '',
  segundoNombreCod: '',
  primerApellidoCod: '',
  segundoApellidoCod: '',
  documentoCod: '',
  numDocumentoCod: '',
  sexoCod: '',
  emailCod: '',
  celularCod: '',
  ocupacionCod: '',
  primerNombreCodReplegal:'',
  segundoNombreCodRepLegal:'',
  primerApellidoCodRepLegal:'',
  segundoApellidoCodRepLegal:'',
  documentoCodRepLegal:'',
  numDocumentoCodRepLegal:'',
  razonsocial:'',
  nit:'',
  direccion:'',
  ciudEmpresa:'',
  telEmpresa:'',
  emailCodJuridico:'',
  ingresos:'',
  egresos:''

}
// abrir modal de verificacion y carga de datos
document.addEventListener('DOMContentLoaded', function () {
  const personalDataForm = document.querySelector('#personalDataForm')
  // console.log(personalDataForm)

  personalDataForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const campos = personalDataForm.elements
    console.log("campos:", campos);
    const errorMessageElement = personalDataForm.querySelector(
      '#personalDataFormErrorMessage'
    )
    const data = new FormData(personalDataForm)

    let hayCamposErroneos = false // vacios o incorrectos de acuerdo a las validaciones de texto, numero y correo
    let errorMessage = ''
    // Iterar sobre los campos y verificar si alguno está vacío
    for (var i = 0; i < campos.length; i++) 
      {
      const field = campos[i];

      // Skip fields that are hidden
      if (field.offsetParent === null) {
        continue;
      }
      // Verificar si el campo  y está vacío
      if (campos[i].type !== 'submit' && campos[i].value.trim() === '') {
        console.log('empty', campos[i], 'value', campos[i].value)
        hayCamposErroneos = true
        errorMessage = 'Por favor completa todos los campos antes de continuar.'
        break
      }
     
      if (campos[i].type === 'number') {
        if (!isInputNumberValid(campos[i].value)) {
          hayCamposErroneos = true
          errorMessage = 'Por favor verifica los datos antes continuar. 2'
          break
        }
      }
      if (campos[i].type === 'email') {
        if (!isEmailValid(campos[i].value)) {
          hayCamposErroneos = true
          errorMessage = 'Por favor verifica los datos antes continuar. 3'
          break
        }
      }
    }
   
    if (
      !data.has('acceptPersonalDataUse') ||
      !data.has('acceptTermsAndConditions')
    ) {
      hayCamposErroneos = true
      errorMessage =
        'Por favor autoriza el uso de tu información y términos y condiciones'
    }

    // Si hay algún campo vacío, mostrar un mensaje de error
    if (hayCamposErroneos) {
      errorMessageElement.style.display = 'block'
      errorMessageElement.textContent = errorMessage
    } else {
      errorMessageElement.textContent = ''
      const validacionModal = document.getElementById('validacionModal')
      // const datosPaso1 = document.getElementById('datosPaso1')

      validacionModal.style.display = 'block'

      datosFormulario.primerNombreCod = data.get('primerNombreCod')
      datosFormulario.segundoNombreCod = data.get('segundoNombreCod')
      datosFormulario.primerApellidoCod = data.get('primerApellidoCod')
      datosFormulario.segundoApellidoCod = data.get('segundoApellidoCod')

      datosFormulario.documentoCod = data.get('documentoCod')
      datosFormulario.numdocumentocod = data.get('numDocumentoCod')
      datosFormulario.sexoCod= data.get('sexoCod')
      datosFormulario.emailCod = data.get('emailCod')
      datosFormulario.celularCod = data.get('celularCod')
      datosFormulario.ocupacionCod = data.get('ocupacionCod')

      datosFormulario.primerNombreCodReplegal=data.get('primerNombreCodReplegal')
      datosFormulario.segundoNombreCodRepLegal=data.get('segundoNombreCodRepLegal')
      datosFormulario.primerApellidoCodRepLegal=data.get('primerApellidoCodRepLegal')
      datosFormulario.segundoApellidoCodRepLegal=data.get('segundoApellidoCodRepLegal')
      datosFormulario.documentoCodRepLegal=data.get('documentoCodRepLegal')
      datosFormulario.numDocumentoCodRepLegal=data.get('numDocumentoCodRepLegal')
      datosFormulario.razonsocial=data.get('razonsocial')
      datosFormulario.nit=data.get('nit')
      datosFormulario.direccion=data.get('direccion')
      datosFormulario.ciudEmpresa=data.get('ciudEmpresa')
      datosFormulario.telEmpresa=data.get('telEmpresa')
      datosFormulario.emailCodJuridico=data.get('emailCodJuridico')
      datosFormulario.ingresos=data.get('ingresos')
      datosFormulario.egresos=data.get('egresos')

      console.log(datosFormulario)

      const modalPrimerNombre = document.getElementById('datosPaso1primernombre')
      const modalSegundoNombre = document.getElementById('datosPaso1segundonombre')
      const modalPrimerApellido = document.getElementById('datosPaso1primerapellido')
      const modalSegundoApellido = document.getElementById('datosPaso1segundoapellido')
      const modalTipoDocumento = document.getElementById('datosPaso1tipodocumento')
      const modalNumeroDocumento = document.getElementById('datosPaso1numdocumento')
      const modalSexo = document.getElementById('datosPaso1sexo')
      const modalCorreo = document.getElementById('datosPaso1correo')
      const modalCelular = document.getElementById('datosPaso1celular')
      const modalOcupacion = document.getElementById('datosPaso1ocupacion')

      //Perfil juridico
      const modalPrimerNombreRepLegal = document.getElementById('primerNombreCodReplegalVali')
      const modalSegundoNombreRepLegal = document.getElementById('segundoNombreCodReplegalVali')
      const modalPrimerApellidoRepLegal = document.getElementById('primerApellidoCodReplegalVali')
      const modalSegundoApellidoRepLegal= document.getElementById('segundoApellidoCodReplegalVali')
      const modalRazonSocail= document.getElementById('razonSocialVali')
      const modalnit= document.getElementById('nitVali')
      const modaldireccion= document.getElementById('direccionVali')
      const modalciudEmpresa=document.getElementById('ciudEmpresaVali')
      const modaltelEmpresa=document.getElementById('telEmpresaVali')
      const modalemailCodJuridico=document.getElementById('emailCodJuridicoVali')
      const modalingresos=document.getElementById('ingresosVali')
      const modalegresos=document.getElementById('egresosVali')

      modalPrimerNombre.value = datosFormulario.primerNombreCod
      modalSegundoNombre.value = datosFormulario.segundoNombreCod
      modalPrimerApellido.value = datosFormulario.primerApellidoCod
      modalSegundoApellido.value = datosFormulario.segundoApellidoCod
      modalTipoDocumento.value = datosFormulario.documentoCod
      modalNumeroDocumento.value = datosFormulario.numdocumentocod
      modalSexo.value = datosFormulario.sexoCod
      modalCorreo.value = datosFormulario.emailCod
      modalCelular.value = datosFormulario.celularCod
      modalOcupacion.value = datosFormulario.ocupacionCod 
      modalPrimerNombreRepLegal.value = datosFormulario.primerNombreCodReplegal
      modalSegundoNombreRepLegal.value= datosFormulario.segundoNombreCodRepLegal
      modalPrimerApellidoRepLegal.value= datosFormulario.primerApellidoCodRepLegal
      modalSegundoApellidoRepLegal.value= datosFormulario.segundoApellidoCodRepLegal
      modalRazonSocail.value=datosFormulario.razonsocial
      modalnit.value=datosFormulario.nit
      modaldireccion.value=datosFormulario.direccion
      modalciudEmpresa.value= datosFormulario.ciudEmpresa
      modaltelEmpresa.value=datosFormulario.telEmpresa
      modalemailCodJuridico.value=datosFormulario.emailCodJuridico
      modalingresos.value=datosFormulario.ingresos
      modalegresos.value=datosFormulario.egresos

      
    }
  })
  const datosPaso1 = document.getElementById('datosPaso1')
  const editBtn = document.getElementById('editBtnStep1')
  const inputs = datosPaso1.getElementsByTagName('input')
  const selects = datosPaso1.getElementsByTagName('select')

  editBtn.addEventListener('click', function () {
 
    for (let input of inputs) {
      input.disabled = !input.disabled
    }
    for (let select of selects) {
      select.disabled = !select.disabled
    }
  })
})
// Example validation functions
function isInputTextValid(value) {
  // Add your custom validation logic here
  return /^[a-zA-Z\s]+$/.test(value); // Example: Only allows letters and spaces
}

function isInputNumberValid(value) {
  // Add your custom validation logic here
  return /^[0-9]+$/.test(value); // Example: Only allows digits
}

function isEmailValid(value) {
  // Add your custom validation logic here
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(value); // Example: Basic email validation
}





// document.getElementById('confirmModalBtn').addEventListener('click', function () {

//   // Mostrar paso 2 del formulario
//     document.getElementById('personalDataForm').style.display = 'none'

//     // Mostrar paso 2 del formulario
//     document.getElementById('paso2').style.display = 'block'

//     // Cerrar todas las ventanas modales
//     closeModal()

//     formStepsNum++
//     updateFormSteps()
//     updateProgressBar()
  
// })

// document.getElementById('despedida').addEventListener('click', function () {

//   const modal = document.getElementById('modaldespedida');
//   // Mostrar paso 2 del formulario
//     document.getElementById('personalDataForm').style.display = 'none'

//     // Mostrar paso 2 del formulario
//     document.getElementById('paso2').style.display = 'block'
//     //mostrar modal despedida
//     modal.style.display = 'block';

//     // Cerrar todas las ventanas modales
//     closeModal()
  
// })


  