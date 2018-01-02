/*los decoradores nos funcionan para poder ver las funciones dentro de una clase usandose como una función mas*/
function consola(constructor:Function){
    console.log(constructor);
}

//Para agregar un decorador y ejecutar la función se usa el identificador @
@consola
class Clase{
    constructor(public nombre:string){

    }
}