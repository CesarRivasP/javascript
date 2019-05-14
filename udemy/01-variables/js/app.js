// variables con var
var aprendiendo = 'Javascript';

// variables con const

const aprendiendo; // NO --- Las constantes siempre deben tener un valor de  inicio
// Al ser una constante sus valores nunca cambian

// variables con let
let aprendiendo; // Si -- se puede inicializar sin un valor
//tambien se puede reescribir su valor

// --------------------------------------------------------------- //

// Scope

var musica = 'rock'

if(musica){
  var musica = 'rap'; //reescribe totalmente la variable
  console.log(`dentro del if : ${musica}`);
}
console.log(`fuera del if : ${musica}`);

// ------------------------------------------------------------------ //

// Scope con let

let musica = 'rock'

if(musica){
  let musica = 'rap'; //solo es valida con este valor dentro de este entorno
  console.log(`dentro del if : ${musica}`);
}
console.log(`fuera del if : ${musica}`);

// ------------------------------------------------------------------ //

//  ***** Sin Template String  *****
const name = 'César';
const job = 'Programming';
                  //seleccion de elementos en javascript
const containerApp = document.querySelector('#app');

let html = '<ul>' +
              '<li>Nombre: ' + name + '</li>' +
              '<li>Trabajo: ' + job + '</li>' +
            '</ul>';

containerApp.innerHTML = html;

// *****  Con Template String  *****
let html = `<ul>
              <li>Nombre: ${name}</li>
              <li>Trabajo: ${job}</li>
            </ul>`;

containerApp.innerHTML = html;
