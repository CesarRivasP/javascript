// Objetos

// Antes de usar objetos
let namePerson = 'César';
let career = 'React Developer';

console.log(namePerson);
console.log(career);

// Usando objetos
//  * Object Literal -
const person = {
  name: 'César',
  career: 'React Developer'
}

console.log(person);
console.log(person.name);
console.log(person['name']);  //otra forma de acceder a un valor dentro de un objeto

// ------------------------------------------------------------------------------------ //

// - Object Constructor -
// Permite crear multipes objetos con distintos valores
// *** Es la manera antigua de realizar esta tarea **
function Todo(name, urgency){
  this.name = name;
  this.urgency = urgency;
}

const Todo1 = new Todo('Aprender JS y React', 'Urgente');
const Todo2 = new Todo('Comprar medicinas', 'Media');
const Todo3 = new Todo('Desplegar app react native', 'baja');
console.log(Todo1);
console.log(Todo2);
console.log(Todo3);
console.log(Todo1.name);
