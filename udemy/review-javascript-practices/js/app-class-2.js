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


// ------------------------------------------------------------- //

// Funciones con parametros
// Otra forma de ingresar los parametros como valores por defecto
function activity(name = 'Walter White', activity = 'Enseñar quimica'){
  console.log(`La persona ${name}. esta realizando la actividad ${activity}`);
}

activity('Walter Green', 'Mathematics')
activity(); //Uso de valor por defecto


// ------------------------------------------------------------- //

// Without functions
let traveling = function(destiny){
  return `Travel to ${destiny} city`
}

let travel;

travel = traveling('Florencia');

console.log(travel);


// Arrow functions
let traveling = (destiny) => {
  return `Travel to ${destiny} city`
}

let travel;

travel = traveling('Florencia');

console.log(travel);
