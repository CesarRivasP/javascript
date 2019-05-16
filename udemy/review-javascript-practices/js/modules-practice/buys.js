import Todos from './todos.js';

// HERENCIA
export default class Buys extends Todos {
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
