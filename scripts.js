//------ Selección de Elementos -------//
const textInput = document.getElementById("txtQR");
const botonGenerar = document.getElementById("btnQR");
const contenedorQR = document.getElementById("conetenedorQR");
const botonDescargar = document.getElementById("downloadReturn");
const aviso = document.getElementById("limpiarReturn");

let QR;

//----- Principal -----//
botonGenerar.addEventListener("click", e => {
    e.preventDefault();
    const texto = textInput.value;
    
    if (!texto) {
        mostrarAviso("No has ingresado ningún texto.");
    } else {
        generarCodigoQr(texto);
        returnText.innerText = formulario.txtQR.value
        formulario.txtQR.value = "";
        formulario.txtQR.placeholder = "Ingrese otro texto o URL"
    }
});

botonDescargar.addEventListener("click", () => {
    descargarCodigoQr();
});


function generarCodigoQr(texto) {
    QR = new QRious({
        value: texto,
        size: 228
    });
    contenedorQR.innerHTML = "";
    contenedorQR.appendChild(QR.image);
}

function descargarCodigoQr() {
    if (QR) {
        const qrImageData = QR.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = qrImageData;
        link.download = "codigo_qr.png";
        link.click();
    }
}

function mostrarAviso(mensaje) {

    returnText.innerText = mensaje
    
    
    setTimeout(() => {
        returnText.innerText = "";
    }, 3000);

}

function limpiar(){
    returnText.innerText = "";
    textInput.focus();
    textInput.placeholder = "Ingrese un texto o URL";
}


/*
const contenedorQR = document.getElementById('conetenedorQR');
const formulario = document.getElementById('formulario');
const returnText = document.getElementById('returnText');
const btnQR = document.getElementById('btnQR');


const tiempoTranscurrido = Date();
const fecha = new Date( );
fecha.toUTCString('dd/mm/yy'); 
const QR = new QRCode(contenedorQR);


btnQR.addEventListener('click', (e) =>{
    e.preventDefault();
    QR.makeCode(formulario.txtQR.value);
    returnText.innerText = formulario.txtQR.value
    formulario.txtQR.value = "";
    formulario.txtQR.placeholder = "Ingrese otro texto o URL"
});



function limpiar(){
    QR.clear();
    returnText.innerText = "";
    formulario.txtQR.value = fecha;
    formulario.txtQR.placeholder = "Ingrese un texto o URL";
}

function descargarQR(){
    QR.download = fecha;
}

*/
