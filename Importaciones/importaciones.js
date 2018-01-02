"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//A las clases a importar se les tiene que poner la palabra export antes de definirlas para poder llamarlas con un
//import desde otro archivo
var Clase1 = /** @class */ (function () {
    function Clase1() {
        this.clase = "clase";
    }
    return Clase1;
}());
exports.Clase1 = Clase1;
//Se puede generar un index.ts que tenga las importaciones necesarias para la aplicacion y en la aplicación solo llamar a
//las clases que tienen ese indice
