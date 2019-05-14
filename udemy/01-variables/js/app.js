// -- Function Declaration --
saludar('Cesar');

function saludar(name){
  console.log(`Mostrando datos del cliente ${name}`);
}
saludar('Cesar');

// No importa si la invocacion de la funcion esta antes o despues de la declaracion de la funcion
// Js primero buscar las funciones que hay en el codigo y luego ejecuta lo que tiene que ejecutae
// ESto es valido solo para las function Declaration


// -- Function Expression --
const client = function(name){
  console.log(`Mostrando datos del cliente ${name}`);
}
client('Cesar')

//En las Function Expression  siempre hay que declarar las funciones antes de usarlas
