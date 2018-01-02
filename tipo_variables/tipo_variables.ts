//tipos de datos permitidos y como se definen
let nombre:string = "Rodrigo";
let numero:number = 123;
let booleano:boolean = true;

//tipos de datos compuestos como la fecha
let hoy:Date = new Date(2017-12-28);

//tipo Any que permite cualquier entrada 
let cualquiera:any;
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;

//Tipos arreglo
let vector:string[] = ["Valor1", "Valor2", "Valor3"];
let matriz:number[][] = [[1,2,3],[4,5,6]];
//Tipos de datos estructuras
let estructura = {
    dato1: "cadena",
    dato2: 123,
    dato3: true,
    dato4: new Date(2017-12-28)
}
