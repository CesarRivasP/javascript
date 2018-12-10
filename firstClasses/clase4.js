var name = 'César', age = 22

//function es una palabra reservada del lenguaje, no se pueden declarar variables con ese nombre

function printAge(n, a){
  //body function
  console.log(`${n} tiene ${a} años`)
}

printAge(name,age)
printAge('Andres', 28)
printAge(28, 'Carlos')
printAge()
