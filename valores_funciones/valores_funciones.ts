/*se utilizan al momento de llamar las funciones
se puede hacer un valor obligatorio cuando se define normalmente
se hace un valor opcional cuando se le agrega ? al momento de la definición
se hace un valor por defecto cuando se le asigna un valor al momento de la definición, 
    el valor puede cambiar al hacer la llamada a la función*/

function activar(quien:string, objeto:string = "batiseñal", momento?:string){
    let mensaje:string;
    if(momento)
    {
        mensaje = `${quien} activo la ${objeto} en la ${momento}`;
    }
    else
    {
        mensaje = `${quien} activo la ${objeto}`;
    }
    return(mensaje);
}

let texto1:string = activar("Pedro");
console.log(texto1);

let texto2:string = activar("Pedro", "batiseñal", "noche");
console.log(texto2);