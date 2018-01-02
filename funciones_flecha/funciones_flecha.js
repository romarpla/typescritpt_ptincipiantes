"use strict";
/*Las funciones flecha pueden ser como las funciones normales, pero funcionan bastante cuando se quiere tener
funciones internas a otras funciones si perder la continuidad*/
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre, " Smash!"); }, 1000);
        //aqui se define dentro de la función timeout la función flecha que nos ayudará a tener el resultado
    }
};
hulk.smash();
