const arr = [1,2,3]

const funcion = (numero) => (numero * numero)
const res = arr.map(funcion)

console.log(res)  // [1, 4, 9]

//----------------------

const arr = [1,2,3];

const funcion = (numero,index) => (numero * index);

const res = arr.map(funcion);

console.log(res);  // [0, 2, 6]

//----------------------

const arr = [1,2,3];

const funcion = (numero) => (numero === 2 ? 'si' : 'no');

const res = arr.map(funcion);

console.log(res);  // ["no", "si", "no"]

//-----------------------
// - Retornar un objeto
const arr = [1,2,3];

const funcion = (numero, index) => (
  {
    numero,
    str: numero.toString(), //Pasarlos a string
    i: index
  }
);

const res = arr.map(funcion);

console.log(res);
