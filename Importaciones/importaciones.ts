/*Las importaciones son para tener en otras carpetas los archivos de clases que utilzaremos en la aplicación*/
//se tiene que poner la sintaxis como se muestra
import {clase} from "./carpeta/archivo";

//A las clases a importar se les tiene que poner la palabra export antes de definirlas para poder llamarlas con un
//import desde otro archivo

export class Clase1{
    clase:string = "clase";
}

//Se puede generar un index.ts que tenga las importaciones necesarias para la aplicacion y en la aplicación solo llamar a
//las clases que tienen ese indice

