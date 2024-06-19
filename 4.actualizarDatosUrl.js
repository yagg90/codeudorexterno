function getParameterByName(name) {
    const url = window.location.href;
    const nameRegex = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp(`[?&]${nameRegex}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

document.addEventListener("DOMContentLoaded", function() {
    // URL de la API para enviar datos
    const postUrl = 'http://pruebas.centraldearrendamientos.com/WebR17_JTDesarrollo.NetEnvironment/APIRadicacionNG/GuardarDatosCodeudor'; // Reemplaza con tu URL real
    const Codigocodeudor = getParameterByName('PKCodeudor');
        console.log(Codigocodeudor)
    const url = `http://pruebas.centraldearrendamientos.com/WebR17_JTDesarrollo.NetEnvironment/APIRadicacionNG/ObtenerDatosCodeudor?PKCodeudor=${PKCodeudor}`;
    // Enviar datos mediante POST al hacer clic en el botón "Confirmar"
    document.getElementById('confirmModalBtn').addEventListener('click', function() {
        // Obtener el valor del nombre del cliente
        const nombreClienteRepLegal = document.getElementById('primerNombreCodReplegal').value;
        const  segundonombreClienteRepLegal= document.getElementById('segundoNombreCodRepLegal').value;
        const nombreCliente = document.getElementById('primerNombreCod').value;
        const  segundonombreCliente= document.getElementById('segundoNombreCod').value;
        console.log(nombreCliente);
        console.log(segundonombreCliente);
        
        // Verificar que ambos campos estén llenos
        if (nombreCliente === "" || segundonombreCliente === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Preparar los datos a enviar
        const data = {
            canal:'directo',
            Operacion:'UPD',
            PKCodeudor:Codigocodeudor,
            PrimerNombreRepLegal: nombreClienteRepLegal,
            SegundoNombreRepLegal: segundonombreClienteRepLegal,
            PrimerNombreCodeudor:nombreCliente,
            SegundoNombreCodeudor:segundonombreCliente
        };

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

