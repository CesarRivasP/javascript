const state = {
  country: 'Venezuela'
};

const action = { payload: 'Caracas' };

const newState = { ...state, city: action.payload }

console.log(newState); // R: {country: "Venezuela", city: "Caracas"}

/*
Con el spread operator y la asignacion de la ciudad se esta generando un nuevo objeto que tiene dos propiedades,
basado en la composicion del 'country', que es lo que inicialmente tenia como valor el objeto, mas la nueva propiedades
que se le esta agregando 'city'. Es decir que el nuevo objeto, lo que hace es una composicion de lo que tiene como
estado inicial mas la propiedad que se le esta agregando. Por lo que, sino encuentra la propiedad, la agrega.
*/

// -------------------------------------------------------------------------------- //

const state = {
  country: 'Venezuela',
  city: 'Miranda'
};

console.log(state); // R: {country: "Venezuela", city: "Miranda"}city: "Miranda"country: "Venezuela"

const action = { payload: 'Caracas' };

const newState = { ...state, city: action.payload }

console.log(newState); // R: {country: "Venezuela", city: "Caracas"}

console.log(state === newState); //R: false


// -------------------------------------------------------------------------------- //

const state = {
  country: 'Venezuela',
  city: 'Caracas'
};

console.log(state);

const action = { payload: 'Caracas' };

const newState = { ...state, city: action.payload }

console.log(newState);

console.log(state == newState); //R: false
/**/
