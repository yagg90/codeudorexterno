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
    const url = `http://pruebas.centraldearrendamientos.com/WebR17_JTDesarrollo.NetEnvironment/APIRadicacionNG/ObtenerDatosCodeudor?PKCodeudor=${PKCodeudor}`;
    // Enviar datos mediante POST al hacer clic en el botón "Confirmar"
    document.getElementById('confirmModalBtn').addEventListener('click', function () {
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
            
            
            CelularRepLegal:cedulaRepLegal,
            EmailRepLegal:correoRepLegal,
            NumeroDocumentoRepLegal:cedulaRepLegal,
            PrimerApellidoRepLegal:primerApellidoRepLegal,
            PrimerNombreRepLegal: primerNomRepLegal,
            SegundoApellidoRepLegal:segundonApellidoRepLegal,
            SegundoNombreRepLegal:segundoNomRepLegal,
            TipoDocumentoRepLegal:tipoDocRepLegal
               
            
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
            RazonSocialCodeudor:razonSocialEmp,
            DireccionCodeudor:direcEmp,
            CiudadCodeudor:ciudadEmp,
            CelularCodeudor:celularEmp,
            EmailCodeudor:emailEmp,
            IngresosMensualesCodeudor:ingresosEmp,
            EgresosMensualesCodeudor:egresosEmp,
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
                alert('Datos enviados exitosamente');
                // Aquí puedes manejar la respuesta del servidor
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al enviar los datos');
            });
    });
});


