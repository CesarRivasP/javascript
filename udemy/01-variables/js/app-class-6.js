// Arrays y mapping
const cars = ['BMW', 'Porsche', 'Toyota'];
console.log(cars);

const appContainer = document.querySelector('#app');

let html = '';

// WITH FOREACH
car.forEach((car) => {
  html += `<li>${car}</li>`
})

appContainer.innerHTML = html;


// WITH MAPPING

// Conserva el array original, y retorna uno nuevo
cars.map((car) => {
  // return console.log(`El producto es ${car}`);
  return 'El carro es' + car;
})


// Object Keys
// Para traerse las llaves
const person = {
  name: 'César',
  job: 'Web developer',
  age: '23'
}

console.log(Object.keys(person));
