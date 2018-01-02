/*Las funciones flecha pueden ser como las funciones normales, pero funcionan bastante cuando se quiere tener 
funciones internas a otras funciones si perder la continuidad*/

let hulk = {
    nombre: "Hulk",
    smash(){ //así se define una función interna a un tipo de dato personalizado
        setTimeout( () => console.log(this.nombre, " Smash!"), 1000); 
        //aqui se define dentro de la función timeout la función flecha que nos ayudará a tener el resultado
    }
}

hulk.smash();