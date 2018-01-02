/*Las clases son usadas como en cualquier otro lenguaje orientado a objetos y se utilizan de la siguiente forma */
class SuperHeroe{
    //Estos valores se pueden inicializar
    nombre:string = "sin nombre";
    poder:string = "";
    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    //Los constructores sirven para que al crear una nueva instancia de la clase se puedan inicializar las propiedades
    constructor(nombre:string, poder:string, puedePelear:boolean, peleasGanadas:number){
        this.nombre = nombre;
        this.poder = poder;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    }
}

//Así es como se usa la clase para usarla como dato y se le mandan las propiedades en el constructor segun sea el caso
let superman:SuperHeroe = new SuperHeroe("SuperMan", "Todos", true, 1234);

console.log(superman);