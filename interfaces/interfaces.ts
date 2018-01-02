/*Las interfaces funcionan para poder definir tipos de datos y se pueden usar como se usan las estructuras en programción estructurada*/
interface Xmen{
    nombre:string,
    poder:string
}

//aqui podemos ver como se usa la interfaz para poner que tipo de dato recibirá la función
function enviarMision(xmen:Xmen){
    console.log("Enviando a: " + xmen.nombre)
}

//También se pueden crear objetos usando las interfaces
let wolverine:Xmen={
    nombre: "Wolverine",
    poder: "Garras"
};

enviarMision(wolverine);
