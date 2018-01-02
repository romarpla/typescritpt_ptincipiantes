/*Las promesas sirven como para poner funciones condicionales*/
let prom1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Promesa terminada");
        //Si se termina bien se usa la función resolve se pone aqui la condicional
        resolve();
        //Si se termina mal se usa la función reject se pone aqui la condicional
        //reject();
    }, 1000);
})

//Para hacer la llamada se tiene que hacer la promesa con un .then y 2 argumentos que son el resolve y el reject
prom1.then(function(){
    console.log("Ejecutarme cuando pase resolve");
},
    function(){
        console.log("Ejecutarme cuando pase reject");
    })