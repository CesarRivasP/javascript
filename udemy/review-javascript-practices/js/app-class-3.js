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


function displayTodoInfo(todo, priority){
  return `La tarea ${todo} tiene una prioridad de ${priority}`
}

const displayInfo = displayTodoInfo(Todo1.name, Todo1.urgency)
console.log(displayInfo);

// ------------------------------------------------------------------------------------ //

// Prototypes
function Todo(name, urgency){
  this.name = name;
  this.urgency = urgency;
}

Todo.prototype.displayTodoInfo = function(){  //como ya es parte del objeto, no es necesario pasarle parametros
  // para acceder a ellos
  // displayTodoInfo esta completamente apartado para trabajar con objetos de tipo Todo
  return `La tarea ${this.name} tiene una prioridad de ${this.urgency}`;
}

const Todo1 = new Todo('Aprender JS y React', 'Urgente');
console.log(Todo1);
console.log(Todo1.displayTodoInfo());
const Todo2 = new Todo('Comprar medicinas', 'Media');
console.log(Todo2.displayTodoInfo());
