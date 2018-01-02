"use strict";
//aqui podemos ver como se usa la interfaz para poner que tipo de dato recibirá la función
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
//También se pueden crear objetos usando las interfaces
var wolverine = {
    nombre: "Wolverine",
    poder: "Garras"
};
enviarMision(wolverine);
