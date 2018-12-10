var name = 'Cesar', lastName = 'Rivas'

var nameEnMayusculas = name.toUpperCase()

var lastNameEnMinusculas = lastName.toLowerCase()

//charAt: Caracter en la posicion(posicion del caracter al que se quiere acceder)
var firstLetterOfName = name.charAt(0)

var manyLettersName = name.length

var completeName = name + ' '+ lastName

//iNTERPOLACION DE TEXTO

var nameComplete = `${name} ${lastName}`
var nameCompleteUpperCase = `${name} ${lastName.toUpperCase()}`

//Manera principal de extraer dos letras de un string
var str = name.charAt(1) + name.charAt(2)
//Manera avanzada substr(Desde donde empieza, cuantos caracteres debe tomar)
var subStr = name.substr(1,3) // = 'esa'

var lastLetterName = name.charAt(4)
