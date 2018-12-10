'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) //Para decirle al modulo que esto es lo que se quiere exportar por defecto.
{
  var translation = str;

  // Si la palabra original es un palíndromo,
  // ninguna regla anterior cuenta y se devuelve
  // la misma palabra intercalando mayúsculas y minúsculas

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }

  // Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  // Si la palabra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  // Si la palabra traducida tiene 10 o más letras,
  // se debe partir a la mitad y unir con un guión del medio
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + '-' + secondHalf;
  }

  return translation;
} //ESTOS LLAMADOS NO HACEN PARTE DEL MODULO, ERAN EJEMPLOS.
/*
console.log(platzom("Programar")) // Program
console.log(platzom("Zorro")) // Zorrope
console.log(platzom("Zarpar")) // Zarppe
console.log(platzom("abecedario")) // abece-dario
console.log(platzom("sometemos")) // SoMeTeMoS     */

/* Platzon va a requerir a la funcion ya escrita. 'Platzon' 
es un objeto que es el que se importa, va a terminar siendo 
una funcion. Por lo tanto, lo que se exporta tiene que ser esa
funcion.
- Si se tuviera que exportar otra cosa, se puede dejar con export
solamente, sin el default.
-Se va a importar con el nombre de 'platzom'.
-Se importaria de la siguiente manera:
import {platzom} from 'platzom'
 * funcion ''  del modulo ''.
 -De poner export default, no se tienen que poner la llaves
 ya que se exporta por defecto la funcion. Seria asi el import:
 import platzom from 'platzom'. Sin las respectivas llaves.*/