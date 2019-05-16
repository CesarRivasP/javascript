export const todoName = "Pasear al perro";
// const todoName = "Pasear al perro";


// exportar una funcion
export const createTodo = (todo, urgency) => {
  return `La tarea ${todo} tiene una urgencia de ${urgency}`
}

export const completeTodo = () => {
  return console.log(`La tarea se completo`)
}



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
    // return `${this.name} tiene una prioridad de ${this.priority}`; before
    console.log(`${this.name} tiene una prioridad de ${this.priority}`); //after for methods herency
  }
}


// HERENCIA
class PendingBuys extends Todo {
  constructor(name, priority, cant){
    super(name, priority);  //Al super constructor se le pasan los atributos de la clase que se esta heredando
    this.cant = cant;
  }
  // Tambien se heredan los metodos
  // Tambien se pueden alterar
  display(){
    super.display();  //reescribir un metodo
    console.log( `y la cantidad de ${this.cant}`);
  }
}


// let todo1 = new Todo('Learning JS', 'High')
// let todo2 = new Todo('Learning PHP', 'LOW')
// let todo3 = new Todo('Learning PYTHON', 'MEDIUM')
// let todo4 = new Todo('Learning JAVA', 'High')

// console.log(todo1.display());
// console.log(todo2.display());
// console.log(todo3.display());
// console.log(todo4.display());


// COmpras
let buy1 = new PendingBuys('Porsche 911S', 'Urgent', 1);
// let buy2 = new PendingBuys('Porsche 964', 'Urgent', 1);
// let buy3 = new PendingBuys('Porsche 993', 'Urgent', 1);
// let buy4 = new PendingBuys('Porsche 991 GT3 RS', 'Urgent', 1);
// console.log(buy1.display());
// console.log(buy2);
// console.log(buy3);
// console.log(buy4);
