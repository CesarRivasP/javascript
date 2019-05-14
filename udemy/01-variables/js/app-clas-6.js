// Metodos dentro de objetos

const person = {
  name: 'César',
  job: 'Web developer',
  age: 23,
  displayInfo: function(){
    // this es la forma en la que accedes a los valores del mismo objeto
    console.log(`${this.name} es ${this.job} y su edad es ${this.age}`);
  }
}

person.displayInfo();

// En ES6

const otherPerson = {
  name: 'César',
  job: 'Web developer',
  age: 23,
  displayInfo(){
    console.log(`${this.name} es ${this.job} y su edad es ${this.age}`);
  }
}

otherPerson.displayInfo();
