function checkForPasswordInPDF(htmlInput, errorMessageElementId) {

  const file = htmlInput.files[0];
  if (file) {
    const fileReader = new FileReader();

    fileReader.onload = function () {
      const typedarray = new Uint8Array(this.result);

      // Utilizar PDF.js para verificar si el PDF está protegido
      pdfjsLib.getDocument({ data: typedarray }).promise.then(function (pdf) {
        // Si el PDF se carga sin error, no está protegido
        document.getElementById(errorMessageElementId).textContent = 'El archivo se cargó correctamente.';
        document.getElementById(errorMessageElementId).style.color = 'green'
      }).catch(function (error) {
        // Si ocurre un error, verificar si es por protección
        if (error.name === 'PasswordException') {
          document.getElementById(errorMessageElementId).textContent = 'El archivo está protegido por contraseña y no se puede cargar.';
        } else {
          document.getElementById(errorMessageElementId).textContent = 'Error al cargar el archivo: ' + error.message;
        }
      });
    };

    fileReader.readAsArrayBuffer(file);
  } else {
    document.getElementById(errorMessageElementId).textContent = 'No se seleccionó ningún archivo.';
  }
}

document.getElementById('docidentidad').addEventListener('change', function (e) {
  checkForPasswordInPDF(e.target, "message1")
});

document.getElementById('cerlaboral').addEventListener('change', function (e) {
  checkForPasswordInPDF(e.target, "message2")
});

document.getElementById('decrenta').addEventListener('change', function (e) {
  checkForPasswordInPDF(e.target, "message3")
});

document.getElementById('exbancarios').addEventListener('change', function (e) {
  checkForPasswordInPDF(e.target, "message4")
});

document.getElementById('certinmueble').addEventListener('change', function (e) {
  checkForPasswordInPDF(e.target, "message5")
});

document.getElementById('camaracomercio').addEventListener('change', function (e) {
  checkForPasswordInPDF(e.target, "message6")
});

document.getElementById('estadosfinancieros').addEventListener('change', function (e) {
  checkForPasswordInPDF(e.target, "message7")
});

document.getElementById('cedureprelegal').addEventListener('change', function (e) {
  checkForPasswordInPDF(e.target, "message8")
});

document.getElementById('otros').addEventListener('change', function (e) {
  checkForPasswordInPDF(e.target, "message9")
});