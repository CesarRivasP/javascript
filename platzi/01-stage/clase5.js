//Variable de alcance global (Se puede acceder a esta desde cualquier funcion)
var name = 'César'
/*Esta variable se le asigna al objeto global,y este depende del entorno
en donde se este ejecutando JS. Si es en el servidor,
 este seria NodeJS, si es el navegador, este seria 'window'*/
/*
function printNameInMayus(){
  /*Esta funcion al acceder a la variable global nombre, esta teniendo un efecto de lado(Side effect), este consiste en que al invocar la
  funcion esta funcion va a tener un efecto colateral, es decir, va a modificar variables que no estan definidas dentro de ella(La funcion).
  name = name.toUpperCase()
  console.log(name)
}

printNameInMayus()
*/
//Manera correcta
//Esta variable dentro de la funcion tiene un alcance local, solo existe dentro del cuerpo de la funcion
function printNameInMayus(name){
  //window.name
  name = name.toUpperCase()
  console.log(name)
}

printNameInMayus(name)

//La idea es evitar modificar variables globales, de manera que si va a ser modificado, solo sea una variable local
/*
Usando name como parametro, hace que name exista en el alcance local de la
funcion, sin importar el alcance global, es decir, la var global name no se le va a
acceder dentro de la funcion, excepto que se le haga referencia por window.name.
Al referirse a name, esa referencia es a la variable local name de esta funcion, y lo que se haga con
esta no va a modificar a la variable global, asi se llamen igual.*/
