var name
name = 'César'  //Comillas simples, por convencion.
//Otra forma de declarar una variable
var apellido = 'Rivas'

//tambien se pueden declarar y asignar variables en la misma linea
var car = 'Toyota', model = 'Supra'
var edad = 22

console.log('Hola ' +  name)
console.log('Hello ' + name + ' ' + apellido)
console.log(`Hola ${apellido}`)
console.log(`Hola ${ name } ${apellido}`)
console.log(`Hola ${ name + apellido }`)
console.log(`Hola ${ car + model }`)
console.log(`Tengo ${ edad } años de edad`)

edad = '22 años'
console.log('Tengo ' + edad)
