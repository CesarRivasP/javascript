// Classes
class Todo {
  // cuerpo de la clase
  // Se utiliza el constructor para pasarle los argumentos al objetos
  constructor(name, priority){  //Es lo primero que se ejecuta cuando se crea una instancia de la clase
    this.name = name;
    this.priority = priority;
  }

  // metodos
  display(){
    return `${this.name} tiene una prioridad de ${this.priority}`;
  }
}

let todo1 = new Todo('Learning JS', 'High')
let todo2 = new Todo('Learning PHP', 'LOW')
let todo3 = new Todo('Learning PYTHON', 'MEDIUM')
let todo4 = new Todo('Learning JAVA', 'High')

console.log(todo1.display());
console.log(todo2.display());
console.log(todo3.display());
console.log(todo4.display());
