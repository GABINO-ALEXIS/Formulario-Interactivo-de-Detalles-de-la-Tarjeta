const recuadro = document.getElementById("recuadro");
let campos = document.getElementById("campos");
let targetaNombre = document.getElementById("targeta-nombre");
const expresionNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/g;
let targetaNumero = document.getElementById("targeta-numero");
const expresionNumero = /^\d{4}[\s-]\d{4}[\s-]\d{4}[\s-]\d{4}$/g;
let mes = document.getElementById("mes");
const expresionMes = /^(0[1-9]|1[0-2])$/g;
let año = document.getElementById("año");
const expresionAño = /^([0-9]{2})$/g;
let targetaCvc = document.getElementById("targeta-cvc");
const expresionCvc = /^\d{3,4}$/g;
let mensaje = document.getElementById("mensaje");
let mensaje2 = document.getElementById("mensaje2");
let mensaje3 = document.getElementById("mensaje3");
let mensaje4 = document.getElementById("mensaje4");
let camposcompletados = undefined;
let completado = document.getElementById("completado");
let continuar = document.getElementById("continue");

const funcionCampoCorrecto = (targetaCampo, numeroDeMensaje) => {
    targetaCampo.style.border = "solid hsl(249, 99%, 64%) 1px"
    targetaCampo.style.marginBottom = "28px"
    numeroDeMensaje.style.display = "none"
    camposcompletados = true
}

const funcionCampoIncorrecto = (targetaCampo, numeroDeMensaje) =>{
    targetaCampo.style.border = "solid hsl(0, 100%, 66%) 1px"
    numeroDeMensaje.style.display = "block"
    targetaCampo.style.marginBottom = "0px"
    camposcompletados = false
}

funcionNombre = () => {
    if (expresionNombre.test(targetaNombre.value)) {
       funcionCampoCorrecto(targetaNombre, mensaje)
    }
    else if (!expresionNombre.test(targetaNombre.value)) {
       funcionCampoIncorrecto(targetaNombre, mensaje)
    }
}

funcionNumero = () => {
    if (expresionNumero.test(targetaNumero.value)) {
        funcionCampoCorrecto(targetaNumero, mensaje2)
    }
    else if (!expresionNumero.test(targetaNumero.value)) {
        funcionCampoIncorrecto(targetaNumero, mensaje2)
    }
}
funcionMes = () => {
    if (expresionMes.test(mes.value)) {
        funcionCampoCorrecto(mes, mensaje3)
    }
    else if (!expresionMes.test(mes.value)) {
        funcionCampoIncorrecto(mes, mensaje3)
        año.style.marginBottom = "0px";
    }
}
funcionAño = () => {
    if (expresionAño.test(año.value)) {
        funcionCampoCorrecto(año, mensaje3)
    }
    else if (!expresionAño.test(año.value)) {
        año.style.border = "solid hsl(0, 100%, 66%) 1px"
        mensaje3.style.display = "block";
        año.style.marginBottom = "0px";
        mes.style.marginBottom = "0px"; 

        if (expresionMes.test(mes.value) && !expresionAño.test(año.value)) {
            mensaje3.textContent = "Invalid year"
        }
        camposcompletados = false
    }  
}
funcionCvc = () => {
    if (expresionCvc.test(targetaCvc.value)) {
        funcionCampoCorrecto(targetaCvc, mensaje4)
    }
    else if (!expresionCvc.test(targetaCvc.value)) {
        funcionCampoIncorrecto(targetaCvc, mensaje4)
    }
}
funcionEstadoCompletado = () =>{
    campos.style.display = "none"
   completado.style.display = "block"
}

targetaNombre.addEventListener("input",funcionNombre)
targetaNumero.addEventListener("input",funcionNumero)
mes.addEventListener("input",funcionMes)
año.addEventListener("input",funcionAño)
targetaCvc.addEventListener("input",funcionCvc)

funcionValidarCampos = (e) => {
    e.preventDefault()
    funcionNombre()
    funcionNumero()
    funcionMes()
    funcionAño()
    funcionCvc()

    if (camposcompletados) {
        funcionEstadoCompletado();
    }
}
recuadro.addEventListener("submit",funcionValidarCampos)    
continuar.addEventListener("click",() =>{
    location.reload();
})