// Object Literal Property Value Shorthand

const text1 = "Hello"
const text2 = "Mundo"
//const text3 = "Mundo" no funciona, se tiene que llamar text2

// -- Manera normal
// const res = {
//   //propiedad | valor
//   text1: text1,
//   text2: text2
// }

// -- simplicado

// const res = {
//   //propiedad | valor
//   text1,
//   text2
// }
//console.log(res)

//Al momento de tener un parametro distinto a los nombres de la propiedades
// que se quieren establecer, si no encuentra dentro del scope las dos propiedades
// (text1,text2) va a arrojar un error 'catch'


try {
  const res = {
    text1,
    text2,
  };
  console.log(res);
} catch(err){
  console.log('error');
}
