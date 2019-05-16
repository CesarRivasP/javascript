// import { todoName, createTodo, completeTodo } from './todos.js';
// // import todoName from './todos.js';
//
// console.log(todoName);
//
// const todo1 = createTodo('Pasear al perro', "Media")
// console.log(todo1);
//
// completeTodo();


import Todo from './todos.js';

const todo1 = new Todo('Learning JS');

console.log(todo1);

todo1.display()
