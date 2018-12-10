var edad = 22

//edad = edad + 1
edad += 1

peso = 60

//peso = peso - 2
peso -= 2

var sandwich = 1

peso += sandwich
var playSoccer = 3
//var playSoccer -= peso - playSoccer
peso -= playSoccer

var priceVino = 200.3

//var total = priceVino * 100 * 3 /100
//Redondear
var total = Math.round(priceVino * 100 * 3) / 100

//Tomar en cuenta una cantidad determinada de decimales
var totalStr = total.toFixed(2)

//parseFloat = transforma a un decimal
var totalTwo = parseFloat(totalStr)

var pizza = 8
var peoples = 2

var result = pizza / peoples
