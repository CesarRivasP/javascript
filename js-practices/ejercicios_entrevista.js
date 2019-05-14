//CALCULAR SI UN AÑO ES BISIESTO

  let anio

  const esBisiesto = (anio) => {
    if(anio % 4 == 0 && (anio % 100 != 0 || anio % 400 == 0)){
      console.log(`El año ${anio} es un año bisiesto`)
    }
    else{
      console.log(`El año ${anio} no es un año bisiesto`)
    }
  }
esBisiesto(1996)
esBisiesto(1989)
esBisiesto(2014)
esBisiesto(2016)
esBisiesto(2013)
esBisiesto(2020)

--------------------------------------------------------------

//CALCULAR SI UNA LETRA ES MAYUSCULA

let palabra = 'Hala Madrid'

const mayus = (letra) => letra === letra.toUpperCase()
const min = (letra) => letra === letra.toLowerCase()

let length = palabra.length

for(let i = 0; i <= length; i++){
  let letraActual = palabra.charAt(i)

  if(mayus(letraActual)) console.log(`El string ${palabra} tiene ${letraActual} en mayuscula`)

  if(min(letraActual)) console.log(`El string ${palabra} tiene ${letraActual} en minuscula`)
}

-------------------------------------------------------------------
//CALCULAR EL AREA DE UN TRIANGULA
let base = 12
let altura = 13

const area1 = (base, altura) => altura * base / 2

console.log(`El area de un triangulo de base ${base} y altura ${altura} es = ${area1(base, altura)}`)
----------------------------------------------------------------------
//CALCULAR EL AREA DE UNA CIRCUNFERENCIA
let radio = 5
let PI = Math.PI

const area2 = (radio) => PI * Math.pow(radio,2)
console.log(`El area de una circunferencia cuyo radio es ${radio} es = ${area2(radio)}`)
------------------------------------------------------------------------------------------
//Calcular cuantos kilometros corrio una persona durante una semana
const name = 'Cesar Rivas'
const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']

let total_km = 0
const correr = () =>{
  const MAX = 15
  const MIN = 5
  return Math.round(Math.random() * (MAX - MIN) + MIN)
}
let kilometros
for(let i = 0 ; i < dias.length; i++){
  kilometros = correr()
  console.log(`${name} recorrio el dia ${dias[i]} ${kilometros} kilometros aproximadamnte`)
  total_km += kilometros
}
let promedio = total_km / dias.length
console.log(`${name} recorrio totalmente ${total_km} kilometros`)
console.log(`El promedio de kilometros recorrridos por ${name} es de ${promedio} durante la semana`)
