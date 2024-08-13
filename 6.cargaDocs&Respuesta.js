const enviarDocumentosBtn = document.getElementById('despedida')
const cargaDocumentosErrorMsg = document.getElementById('cargaDocumentosErrorMsg')

const CODIGOS_TABLA_EXCEL = {
  '99NoAplica': 97,
  '1DocumentoIdentidad': 98,
  '2ExtractoBancario': 99,
  '3CertificadoLaboral': 100,
  '4ComprobantePagoNomina': 101,
  '5DeclaracionRenta': 102,
  '6CertificadoLibertadTradicion': 103,
  '7ComprobantesAportePension': 104,
  '8FormularioDiligenciado': 105,
  '9CamaraComercio': 106,
  '10CedulaRepresentante': 107,
  '11EstadosFinancieros': 108,
  '12ComprobantePagoEstudio': 109,
  '13Otros': 110,
  '14DocumentosCompletos': 111,
  '15ComprobantePagoDerecho': 112,
}

const CODIGOS_SEGUN_TIPO_DOCUMENTO = {
  docIdentidad: "1DocumentoIdentidad",
  cerLaboral: "3CertificadoLaboral",
  decRenta: "5DeclaracionRenta",
  exBancarios: "2ExtractoBancario",
  certInmueble: "6CertificadoLibertadTradicion",
  camaraComercio: "9CamaraComercio",
  estadosFinancieros: "11EstadosFinancieros",
  ceduRepreLegal: "10CedulaRepresentante",
  otros: "13Otros"
}

async function sendFilesToEndpoint(inputFields, files) {

  document
    .getElementById('modaldespedida').style.display = "flex"
  document
    .querySelector('#modaldespedida .modal-content').style.justifyContent = "center"


  document
    .getElementById('modaldespedida')
    .querySelector('.modal-content').innerHTML = `
        <div class="modal-content__spinner-container">
          <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" x="0px"
            y="0px" viewBox="0 0 55 100" enable - background="new 0 0 0 0" xml: space="preserve">
            <circle fill="#0a4989" stroke="none" cx="6" cy="50" r="6">
              <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
            </circle>
            <circle fill="#0a4989" stroke="none" cx="26" cy="50" r="6">
              <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2" />
            </circle>
            <circle fill="#0a4989" stroke="none" cx="46" cy="50" r="6">
              <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3" />
            </circle>
          </svg>
        </div>
        <p>Estamos enviando tus documentos...</p>
      `

  // console.clear()

  console.log(inputFields);
  console.log(files);

  // const ENDPOINT_DOCS = 'https://renta10.centraldearrendamientos.com/api/upload-file-to-s3'
  const ENDPOINT_DOCS = 'https://renta10.centraldearrendamientos.com/api/s3/upload-file'

  const filesFiltered = files.filter(file => file !== undefined)

  // const filesAsArrayBuffer = filesFiltered.map(async (file) =>{
  //   const arrayBuffer = await file.arrayBuffer()

  //   const uint8Array = new Uint8Array(arrayBuffer)
  //   return uint8Array
  // })

  const filesAsArrayBuffer = filesFiltered.map(file => {
    return new Promise((res, rej) => {
      try {
        res(file.arrayBuffer())
      } catch (error) {
        rej(error)
      }
    })
  })

  let filesAsUint8Array
  try {
    filesAsUint8Array = (await Promise.all(filesAsArrayBuffer)).map(value => new Uint8Array(value))
    // filesAsUint8Array = await Promise.all(filesAsArrayBuffer)
  } catch (error) {
    console.error('Error converting files:', error);
  }

  console.log(filesFiltered);
  console.log(filesAsArrayBuffer);
  console.log(filesAsUint8Array);
  console.log(filesAsUint8Array[0].buffer);
  console.log(btoa(String.fromCharCode(...filesAsUint8Array[0])))



  const promises = filesAsUint8Array.map((file, i) => {
    return new Promise((res, rej) => {
      try {

        const formData = new FormData()
        formData.set("radicado", PKCodeudor)
        formData.set("cc_nit", datosFormulario.numeroDocumento)
        formData.set("categoria", 10)
        formData.set("subcategoria", 0)
        formData.set("codigo", String(CODIGOS_TABLA_EXCEL[CODIGOS_SEGUN_TIPO_DOCUMENTO[inputFields[i].input.name]]))
        formData.set("usuario", datosFormulario.primerNombre + " " + datosFormulario.primerApellido)
        formData.set("tipo_referencia", "WbrRdwSec")
        formData.set("referencia", PKCodeudor)
        formData.set("tipo_solicitante", 1,)
        // formData.set("file", file)
        formData.set("file", btoa(String.fromCharCode(...file)))
        formData.set("file_nombre", filesFiltered[i].name.split('.')[0])
        formData.set("file_tipo", filesFiltered[i].name.split('.')[1])

        fetch(ENDPOINT_DOCS, {
          method: 'POST',
          headers: {
            // 'Content-Type': 'application/json',
            "zusarac-key": "Lm8X7zZyooKIY21fvy39LK5mMLwGvt8PYOMf6pMB55baf824"
          },
          body: formData


        })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error(`Failed to upload file: ${response.statusText}`);
            }
          })
          .then(data => {
            console.log(`File uploaded successfully: ${data}`);
            res(data);
          })
          .catch(error => {
            console.error(`Error uploading file: ${error.message}`);
            rej(error);
          });
      } catch (error) {
        console.error(`Caught error: ${error.message}`);
        rej(error);
      }
    })
  })

  try {
    const results = await Promise.all(promises);
    console.log('All files uploaded successfully:', results);
    setTimeout(() => {

      // formStepsNum++
      // updateProgressBar()

      document
        .getElementById('modaldespedida')
        // <span class="close">&times;</span>
        .querySelector('.modal-content').innerHTML = `
            <p class="modal-content__message">Tus datos han sido enviados con éxito.</p>
            <p class="modal-content__message">Pronto en un lapso de 15 minutos tanto tu como el inquililno recibirán el resultado por correo electrónico.</p>
          `
    }, 5000);
  } catch (error) {
    console.error('Error uploading some files:', error);
    setTimeout(() => {
      document
        .getElementById('modaldespedida')
        // <span class="close">&times;</span>
        .querySelector('.modal-content').innerHTML = `
                <p></p>
                <p>Hubo un error cargando tus documentos, por favor intenta de nuevo en otro momento.</p>
              `
    }, 2000);
  }

}


async function checkDocuments() {

  const inputsToCheck = [] // {input: htmlElement, errorMessageEl: htmlElement}
  const errorMessageEls = []

  console.log(datosFormulario);
  let ocupacion = valorTipoCodOcupacion // Obtener el valor seleccionado
  console.log('Ocupación seleccionada:', ocupacion)
  let filesFromInputs = []

  // Mostrar contenedores según la selección

  switch (ocupacion) {
    case 'C_NA':
      // cargarDocumentosJuridico();
      inputsToCheck.push({ input: document.getElementById('camaracomercio') })
      inputsToCheck.push({ input: document.getElementById('estadosfinancieros') })
      inputsToCheck.push({ input: document.getElementById('decrenta') })
      inputsToCheck.push({ input: document.getElementById('extractosbancarios') })
      inputsToCheck.push({ input: document.getElementById('otros') })
      break;

    case 'P_EMP':
      // cargarDocumentosEmpleado();      
      inputsToCheck.push({ input: document.getElementById('docidentidad') })
      inputsToCheck.push({ input: document.getElementById('cerlaboral') })
      inputsToCheck.push({ input: document.getElementById('exbancarios1') })
      inputsToCheck.push({ input: document.getElementById('exbancarios2') })
      inputsToCheck.push({ input: document.getElementById('exbancarios3') })
      inputsToCheck.push({ input: document.getElementById('otros') })
      break;

    case 'P_IND':
      // cargarDocumentosIdependiente();
      inputsToCheck.push({ input: document.getElementById('docidentidad') })
      inputsToCheck.push({ input: document.getElementById('decrenta') })
      inputsToCheck.push({ input: document.getElementById('exbancarios1') })
      inputsToCheck.push({ input: document.getElementById('exbancarios2') })
      inputsToCheck.push({ input: document.getElementById('exbancarios3') })
      inputsToCheck.push({ input: document.getElementById('otros') })
      break;
    default:
      // cargarDocumentosRentistacapital();
      inputsToCheck.push({ input: document.getElementById('docidentidad') })
      inputsToCheck.push({ input: document.getElementById('decrenta') })
      inputsToCheck.push({ input: document.getElementById('exbancarios1') })
      inputsToCheck.push({ input: document.getElementById('exbancarios2') })
      inputsToCheck.push({ input: document.getElementById('exbancarios3') })
      inputsToCheck.push({ input: document.getElementById('certinmueble') })
      inputsToCheck.push({ input: document.getElementById('otros') })
  }

  console.log({ inputsToCheck });

  for (let i = 0; i < inputsToCheck.length; i++) {
    const element = inputsToCheck[i].input;
    let inputErrorMessageEl
    inputErrorMessageEl = element.nextElementSibling
    // errorMessageEls.push(inputErrorMessageEl)
    inputsToCheck[i].errorMessageEl = inputErrorMessageEl
    // if (element.name !== "otros"){
    // }
    console.log("files in this input:", element.files);
    console.log({ name: element.name, value: element.value, file: element.files[0] });
    if (element.files.length > 0) {
      // console.log(element, "doesn't have a value, stop here");
      element.nextElementSibling.textContent = ''
      inputsToCheck[i].file = element.files[0]
      // filesFromInputs.push(element.files[0])
    } else if (element.dataset.required === "true" && element.files.length === 0) {
      inputErrorMessageEl.textContent = 'Selecciona un archivo.'
      return
    }
  }

  filesFromInputs = inputsToCheck.map(item => item.file)

  if (filesFromInputs.length === 0) {

    cargaDocumentosErrorMsg.style.display = "block"
    cargaDocumentosErrorMsg.textContent = "No has seleccionado ningún archivo"
    // alert('no has seleccionado ningún archivo')
    console.log(filesFromInputs);
    return
  } else {
    console.log(filesFromInputs);
    cargaDocumentosErrorMsg.style.display = "none"
    cargaDocumentosErrorMsg.textContent = ""

    let sendFiles

    // await filesFromInputs.forEach(function (file, i) {
    const filePromises = filesFromInputs.map((file, i) => {
      return new Promise((resolve, reject) => {
        console.log(typeof file);
        console.log(file instanceof File);

        if (file instanceof File) {
          const fileReader = new FileReader();

          fileReader.onload = async function () {
            const typedarray = new Uint8Array(this.result);
            // Utilizar PDF.js para verificar si el PDF está protegido
            try {

              const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise
              // Si el PDF se carga sin error, no está protegido
              inputsToCheck[i].errorMessageEl.textContent = 'El archivo se cargó correctamente.'
              inputsToCheck[i].errorMessageEl.style.color = 'green'
              resolve(true)
            } catch (error) {
              // Si ocurre un error, verificar si es por protección
              if (error.name === 'PasswordException') {
                inputsToCheck[i].errorMessageEl.textContent = 'El archivo está protegido por contraseña y no se puede cargar.'
              } else {
                inputsToCheck[i].errorMessageEl.textContent = 'Error al cargar el archivo: ' + error.message
              }
              resolve(false)
            }
          }

          fileReader.onerror = function () {
            inputsToCheck[i].errorMessageEl.textContent = 'Error al leer el archivo: ' + fileReader.error.message;
            resolve(false)
          };

          // Start reading the file as an ArrayBuffer
          fileReader.readAsArrayBuffer(file);

        } else {
          // check if the input is 'otros' 
          if (inputsToCheck[i].input.name === 'otros') {
            resolve(true)
          }
        }
      })
    })
    // })

    const results = await Promise.all(filePromises)
    sendFiles = results.every(result => result === true)

    // ??????????????????????????????????????????????????????????????????????????????? 
    console.log(sendFiles);

    if (sendFiles) {
      sendFilesToEndpoint(inputsToCheck, filesFromInputs)
    }

  }

}

enviarDocumentosBtn.addEventListener('click', function (e) {
  checkDocuments()
})