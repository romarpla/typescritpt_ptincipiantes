/*La desestructuración de objetos y de arreglos nos sirve para tener los datos individuales de las estructuras
que nosotros definampos para poder tenerlas y ocuparlas en nuestro código por separado*/

//Definimos un objeto con distintas propiedades
let superheroe = {
    nombre: "Clark",
    alias: "SuperMan",
    poder: "todos"
}

//Nos evitaremos tener cosas como
//let nombre = superheroe.nombre;
//let alias = superheroe.alias;
//let poder = superheroe.poder;

//Todo eso lo cambiaremos por una sola linea de código para terminar en
let {nombre, alias, poder} = superheroe;
//Tienen que estar las propiedades, no importa el orden, pero tiene que ser el mismo nombre para poder usarlas
console.log(nombre, alias, poder);


//Para la desestructuración de arreglos se toma secuencialmente
let supers:string[] = ["Thor", "Steve", "Tony"];
//Se usarán los corchetes para desestructurarse, en el caso de que solo se quiera uno de los elementos, se puede
//solo referenciar usando espacios vacios --> let [ , , ironman] = supers;
let [thor, capitan, ironman] = supers;
console.log(thor, capitan, ironman);
