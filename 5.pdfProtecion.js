document.getElementById('cerlaboral').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const fileReader = new FileReader();
        
        fileReader.onload = function() {
            const typedarray = new Uint8Array(this.result);

            // Utilizar PDF.js para verificar si el PDF está protegido
            pdfjsLib.getDocument({data: typedarray}).promise.then(function(pdf) {
                // Si el PDF se carga sin error, no está protegido
                document.getElementById('message').textContent = 'El archivo se cargó correctamente.';
            }).catch(function(error) {
                // Si ocurre un error, verificar si es por protección
                if (error.name === 'PasswordException') {
                    document.getElementById('message').textContent = 'El archivo está protegido por contraseña y no se puede cargar.';
                } else {
                    document.getElementById('message').textContent = 'Error al cargar el archivo: ' + error.message;
                }
            });
        };

        fileReader.readAsArrayBuffer(file);
    } else {
        document.getElementById('message').textContent = 'No se seleccionó ningún archivo.';
    }
});
document.getElementById('docIdentidad').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const fileReader = new FileReader();
        
        fileReader.onload = function() {
            const typedarray = new Uint8Array(this.result);

            // Utilizar PDF.js para verificar si el PDF está protegido
            pdfjsLib.getDocument({data: typedarray}).promise.then(function(pdf) {
                // Si el PDF se carga sin error, no está protegido
                document.getElementById('message1').textContent = 'El archivo se cargó correctamente.';
            }).catch(function(error) {
                // Si ocurre un error, verificar si es por protección
                if (error.name === 'PasswordException') {
                    document.getElementById('message1').textContent = 'El archivo está protegido por contraseña y no se puede cargar.';
                } else {
                    document.getElementById('message1').textContent = 'Error al cargar el archivo: ' + error.message;
                }
            });
        };

        fileReader.readAsArrayBuffer(file);
    } else {
        document.getElementById('message1').textContent = 'No se seleccionó ningún archivo.';
    }
});
document.getElementById('decrenta').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const fileReader = new FileReader();
        
        fileReader.onload = function() {
            const typedarray = new Uint8Array(this.result);

            // Utilizar PDF.js para verificar si el PDF está protegido
            pdfjsLib.getDocument({data: typedarray}).promise.then(function(pdf) {
                // Si el PDF se carga sin error, no está protegido
                document.getElementById('message2').textContent = 'El archivo se cargó correctamente.';
            }).catch(function(error) {
                // Si ocurre un error, verificar si es por protección
                if (error.name === 'PasswordException') {
                    document.getElementById('message2').textContent = 'El archivo está protegido por contraseña y no se puede cargar.';
                } else {
                    document.getElementById('message2').textContent = 'Error al cargar el archivo: ' + error.message;
                }
            });
        };

        fileReader.readAsArrayBuffer(file);
    } else {
        document.getElementById('message2').textContent = 'No se seleccionó ningún archivo.';
    }
});
document.getElementById('exbancarios').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const fileReader = new FileReader();
        
        fileReader.onload = function() {
            const typedarray = new Uint8Array(this.result);

            // Utilizar PDF.js para verificar si el PDF está protegido
            pdfjsLib.getDocument({data: typedarray}).promise.then(function(pdf) {
                // Si el PDF se carga sin error, no está protegido
                document.getElementById('message3').textContent = 'El archivo se cargó correctamente.';
            }).catch(function(error) {
                // Si ocurre un error, verificar si es por protección
                if (error.name === 'PasswordException') {
                    document.getElementById('message3').textContent = 'El archivo está protegido por contraseña y no se puede cargar.';
                } else {
                    document.getElementById('message3').textContent = 'Error al cargar el archivo: ' + error.message;
                }
            });
        };

        fileReader.readAsArrayBuffer(file);
    } else {
        document.getElementById('message3').textContent = 'No se seleccionó ningún archivo.';
    }
});
document.getElementById('certinmueble').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const fileReader = new FileReader();
        
        fileReader.onload = function() {
            const typedarray = new Uint8Array(this.result);

            // Utilizar PDF.js para verificar si el PDF está protegido
            pdfjsLib.getDocument({data: typedarray}).promise.then(function(pdf) {
                // Si el PDF se carga sin error, no está protegido
                document.getElementById('message4').textContent = 'El archivo se cargó correctamente.';
            }).catch(function(error) {
                // Si ocurre un error, verificar si es por protección
                if (error.name === 'PasswordException') {
                    document.getElementById('message4').textContent = 'El archivo está protegido por contraseña y no se puede cargar.';
                } else {
                    document.getElementById('message4').textContent = 'Error al cargar el archivo: ' + error.message;
                }
            });
        };

        fileReader.readAsArrayBuffer(file);
    } else {
        document.getElementById('message4').textContent = 'No se seleccionó ningún archivo.';
    }
});
document.getElementById('camaracomercio').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const fileReader = new FileReader();
        
        fileReader.onload = function() {
            const typedarray = new Uint8Array(this.result);

            // Utilizar PDF.js para verificar si el PDF está protegido
            pdfjsLib.getDocument({data: typedarray}).promise.then(function(pdf) {
                // Si el PDF se carga sin error, no está protegido
                document.getElementById('message5').textContent = 'El archivo se cargó correctamente.';
            }).catch(function(error) {
                // Si ocurre un error, verificar si es por protección
                if (error.name === 'PasswordException') {
                    document.getElementById('message5').textContent = 'El archivo está protegido por contraseña y no se puede cargar.';
                } else {
                    document.getElementById('message5').textContent = 'Error al cargar el archivo: ' + error.message;
                }
            });
        };

        fileReader.readAsArrayBuffer(file);
    } else {
        document.getElementById('message5').textContent = 'No se seleccionó ningún archivo.';
    }
});
document.getElementById('estadosfinanciero').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const fileReader = new FileReader();
        
        fileReader.onload = function() {
            const typedarray = new Uint8Array(this.result);

            // Utilizar PDF.js para verificar si el PDF está protegido
            pdfjsLib.getDocument({data: typedarray}).promise.then(function(pdf) {
                // Si el PDF se carga sin error, no está protegido
                document.getElementById('message6').textContent = 'El archivo se cargó correctamente.';
            }).catch(function(error) {
                // Si ocurre un error, verificar si es por protección
                if (error.name === 'PasswordException') {
                    document.getElementById('message6').textContent = 'El archivo está protegido por contraseña y no se puede cargar.';
                } else {
                    document.getElementById('message6').textContent = 'Error al cargar el archivo: ' + error.message;
                }
            });
        };

        fileReader.readAsArrayBuffer(file);
    } else {
        document.getElementById('message6').textContent = 'No se seleccionó ningún archivo.';
    }
});
document.getElementById('estadosfinanciero').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const fileReader = new FileReader();
        
        fileReader.onload = function() {
            const typedarray = new Uint8Array(this.result);

            // Utilizar PDF.js para verificar si el PDF está protegido
            pdfjsLib.getDocument({data: typedarray}).promise.then(function(pdf) {
                // Si el PDF se carga sin error, no está protegido
                document.getElementById('message6').textContent = 'El archivo se cargó correctamente.';
            }).catch(function(error) {
                // Si ocurre un error, verificar si es por protección
                if (error.name === 'PasswordException') {
                    document.getElementById('message6').textContent = 'El archivo está protegido por contraseña y no se puede cargar.';
                } else {
                    document.getElementById('message6').textContent = 'Error al cargar el archivo: ' + error.message;
                }
            });
        };

        fileReader.readAsArrayBuffer(file);
    } else {
        document.getElementById('message6').textContent = 'No se seleccionó ningún archivo.';
    }
});
document.getElementById('cedureprelegal').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const fileReader = new FileReader();
        
        fileReader.onload = function() {
            const typedarray = new Uint8Array(this.result);

            // Utilizar PDF.js para verificar si el PDF está protegido
            pdfjsLib.getDocument({data: typedarray}).promise.then(function(pdf) {
                // Si el PDF se carga sin error, no está protegido
                document.getElementById('message7').textContent = 'El archivo se cargó correctamente.';
            }).catch(function(error) {
                // Si ocurre un error, verificar si es por protección
                if (error.name === 'PasswordException') {
                    document.getElementById('message7').textContent = 'El archivo está protegido por contraseña y no se puede cargar.';
                } else {
                    document.getElementById('message7').textContent = 'Error al cargar el archivo: ' + error.message;
                }
            });
        };

        fileReader.readAsArrayBuffer(file);
    } else {
        document.getElementById('message7').textContent = 'No se seleccionó ningún archivo.';
    }
});
document.getElementById('otros').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const fileReader = new FileReader();
        
        fileReader.onload = function() {
            const typedarray = new Uint8Array(this.result);

            // Utilizar PDF.js para verificar si el PDF está protegido
            pdfjsLib.getDocument({data: typedarray}).promise.then(function(pdf) {
                // Si el PDF se carga sin error, no está protegido
                document.getElementById('message8').textContent = 'El archivo se cargó correctamente.';
            }).catch(function(error) {
                // Si ocurre un error, verificar si es por protección
                if (error.name === 'PasswordException') {
                    document.getElementById('message8').textContent = 'El archivo está protegido por contraseña y no se puede cargar.';
                } else {
                    document.getElementById('message8').textContent = 'Error al cargar el archivo: ' + error.message;
                }
            });
        };

        fileReader.readAsArrayBuffer(file);
    } else {
        document.getElementById('message7').textContent = 'No se seleccionó ningún archivo.';
    }
});