/*Sirven para poder armar strings sin necesidad de tener que hacer todos los espacios como en js y se
hace usando las ``*/

function getNombre()
{
    return "Rodrigo"
}

let nombre:string = "Rodrigo";
let apellido:string = "Martinez";
let edad:number = 21;

//Lo que evitaremos será hacer las strings como en js que son:
// let texto = "Hola " + nombre + " " + apellido + "(" + edad + ")";

//El ejemplo anterior con los templates sería:
let texto:string = `Hola, ${ nombre } ${ apellido } (${ edad })`; //Se utiliza ${} para poder ingresar variables a la string
console.log(texto);

//lo que se escribe dentro del ${} es código puro, por lo que puede imprimir el regreso de una función u operaciones
let texto2:string = `${ getNombre() }`;
console.log(texto2);
