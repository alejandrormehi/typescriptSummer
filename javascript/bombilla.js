"use strict";
let estadoBoton = false;
function press() {
    const imagen = document.getElementById('boton');
    if (estadoBoton) {
        imagen.src = '/assets/boff.jpg';
        estadoBoton = false;
    }
    else {
        imagen.src = '/assets/bon.jpg';
        estadoBoton = true;
    }
}
