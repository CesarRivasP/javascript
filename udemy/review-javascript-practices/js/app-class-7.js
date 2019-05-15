//  -- Spread Operator Class --

let languages = ['Javascript', 'Java', 'PHP', 'Python'];
let frameworks = ['Angular', 'Laravel', 'Django'];

console.log(...languages);

// Union de los arrays en uno solo

// Forma anterior
let combination = languages.concat(frameworks);
console.log(combination);

// forma nueva
let newCombination = [...languages, ...frameworks];
console.log(newCombination);

let newArray = [...languages];
console.log(`Nuevo array: ${newArray}`);

// Para voltear los elementos dentro de un array
//esto voltea por completo el array original, cosa que se evita con el spread operator
let reverseElements = languages.reverse();
console.log(reverseElements);

// Para que retorne el ultimo elemento
let [last] = languages.reverse();
console.log(last);

// Este ultimo ejemplo con spread operator
let [lastSpread] = [...languages].reverse();
// Asi se obtiene el ultimo si que el array quede al reves
console.log(lastSpread);



const sum = (a,b,c) => {
  console.log(a+b+c);
}

const numbers = [1,2,3];
// sum(numbers); Asi no funciona
sum(...numbers);
