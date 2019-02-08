//Params (function, initial value : 10)

[0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
  const suma = valorAnterior + valorActual;
  console.log(`valorAnterior: ${valorAnterior}, valorActual: ${valorActual}, indice: ${indice}`);
  return suma;
}, 10)

//First Call
valorAnterior = 10, valorActual = 0, indice = 0

//Second Call
valorAnterior = 10, valorActual = 1, indice = 1

//Third Call
valorAnterior = 11, valorActual = 2, indice = 2

//Four Call
valorAnterior = 12, valorActual = 3, indice = 3

//Five Call
valorAnterior = 13, valorActual = 4, indice = 4


// Esto es una sumatoria de cada uno de los items del array con respecto a la sumatoria anterior
