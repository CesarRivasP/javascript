// export const todoName = "Pasear al perro";
// // const todoName = "Pasear al perro";
//
//
// // exportar una funcion
// export const createTodo = (todo, urgency) => {
//   return `La tarea ${todo} tiene una urgencia de ${urgency}`
// }
//
// export const completeTodo = () => {
//   return console.log(`La tarea se completo`)
// }



// Classes
export default class Todo {
  // cuerpo de la clase
  // Se utiliza el constructor para pasarle los argumentos al objetos
  constructor(name, priority){  //Es lo primero que se ejecuta cuando se crea una instancia de la clase
    this.name = name;
    this.priority = priority;
  }

  // metodos
  display(){
    // return `${this.name} tiene una prioridad de ${this.priority}`; before
    console.log(`${this.name} tiene una prioridad de ${this.priority}`); //after for methods herency
  }
}
