"use strict";
/*Sirven para poder armar strings sin necesidad de tener que hacer todos los espacios como en js y se
hace usando las ``*/
function getNombre() {
    return "Rodrigo";
}
var nombre = "Rodrigo";
var apellido = "Martinez";
var edad = 21;
//Lo que evitaremos será hacer las strings como en js que son:
// let texto = "Hola " + nombre + " " + apellido + "(" + edad + ")";
//El ejemplo anterior con los templates sería:
var texto = "Hola, " + nombre + " " + apellido + " (" + edad + ")"; //Se utiliza ${} para poder ingresar variables a la string
console.log(texto);
//lo que se escribe dentro del ${} es código puro, por lo que puede imprimir el regreso de una función u operaciones
var texto2 = "" + getNombre();
console.log(texto2);
