// Metodos en Arrays

const persons = [
  {
    name: 'Cesar', age: 23, learning: 'Javascript'
  },
  {
    name: 'Javier', age: 25, learning: 'Python'
  },
  {
    name: 'Andres', age: 20, learning: 'Java'
  },
  {
    name: 'Pedro', age: 35, learning: 'C++'
  },
  {
    name: 'Maria', age: 29, learning: 'AdobeXD'
  }
];

console.log(persons);


// filtrar mayores de 28

// Es necesaria una variable donde se almacenen los registros que este filter va retornando
let olderThan = persons.filter((person) => {
  //se va a iterar a cada persona, y por el filter se accede a cada uno de ellos de forma individual
  console.log(person);
  return person.age > 28;
})

console.log(olderThan);

// Que aprende Maria
// Para buscar se utiliza find
let maria = persons.find((person) => {
  return person.name === 'Maria'
});
console.log(`Maria esta aprendiendo ${maria.learning}`);


// Para obtener el total de las edades de todas las personas - Reduce -
                    // totalAge es el que va a ir sumando, person es la persona actual
let total = persons.reduce((totalAge, person) => {
  return totalAge + person.age;
}, 0)

console.log(total);

// Promedio
// console.log(total / 5);
console.log(total / persons.length);

// Para saber cuantos elemetos hay dentro del array
console.log(persons.length);
