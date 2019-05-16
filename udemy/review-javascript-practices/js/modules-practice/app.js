// import { todoName, createTodo, completeTodo } from './todos.js';
// // import todoName from './todos.js';
//
// console.log(todoName);
//
// const todo1 = createTodo('Pasear al perro', "Media")
// console.log(todo1);
//
// completeTodo();


import Todos from './todos.js';
import Buys from './buys.js';

const todo1 = new Todos('Learning JS');

console.log(todo1);

todo1.display()

const compra1 = new Buys('Pizza', 'urgency', 2);

console.log(compra1);

compra1.display()
