"use strict";
/*Las clases son usadas como en cualquier otro lenguaje orientado a objetos y se utilizan de la siguiente forma */
var SuperHeroe = /** @class */ (function () {
    //Los constructores sirven para que al crear una nueva instancia de la clase se puedan inicializar las propiedades
    function SuperHeroe(nombre, poder, puedePelear, peleasGanadas) {
        //Estos valores se pueden inicializar
        this.nombre = "sin nombre";
        this.poder = "";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.poder = poder;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    }
    return SuperHeroe;
}());
//Así es como se usa la clase para usarla como dato y se le mandan las propiedades en el constructor segun sea el caso
var superman = new SuperHeroe("SuperMan", "Todos", true, 1234);
console.log(superman);
