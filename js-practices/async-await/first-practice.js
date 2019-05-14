// -- Un ejemplo de async / await hell
(async () => {
  const pizzaData = await getPizzaData(); // llamada asíncrona
  const drinkData = await getDrinkData(); // llamada asíncrona
  const chosenPizza = chosenPizza();  // llamada de sincronización
  const chosenDrink = chosenDrink();  // sincronizar llamada
  await addPizzaToCart(chosenPizza);  // llamada asíncrona
  await addDrinkToCart(chosenDrink); // llamada asíncrona
})();

// Explicacion
/*
1.- Recibe la lista de pizzas.
2.- Obtener la lista de bebidas.
3.- Elija una pizza de la lista.
4.- Elija una bebida de la lista.
5.- Añadir la pizza elegida al carrito.
6.- Añadir la bebida elegida al carrito.
-- Ordenar los artículos en el carrito. --
*/
/*
Así es que podemos concluir que el trabajo relacionado con la pizza y el trabajo relacionado con
la bebida pueden suceder en paralelo, pero los pasos son involucrados en el trabajo relacionado
con la pizza deben suceder secuencialmente (uno por uno)
*/

// --------------------------------------------------------------------------------------- //
// -- Forma de arreglar el primer ejemplo async / await hell
async function selectPizza() {
  const pizzaData = await getPizzaData(); //Llamada asincrona
  const chosenPizza = choosePizza();  //Llamada sincrona
  await addPizzaToCart(chosenPizza); //Llamada asincrona
}

async function selectDrink(){
  const drinkData = await getDrinkData();  //Llamada asincrona
  const chosenDrink = chooseDrink();  //Llamada sincrona
  await addDrinkToCart(chosenDrink); //Llamada asincrona
}

(async () => {
  const pizzaPromise = selectPizza();
  const drinkPromise = selectDrink();
  await pizzaPromise
  await drinkPromise
  orderItems(); // async call
})

/*
Ahora hemos agrupado las afirmaciones en dos funciones. Dentro de la función, cada
sentencia depende de la ejecución de la anterior. Luego ejecutamos simultáneamente las
funciones selectPizza()y selectDrink() .
*/

// --------------------------------------------------------------------------------------- //
// -- Otra manera de arreglar el primer ejemplo async / await hell
Promise.all([selectPizza(), selectDrink()])
  .then(orderItems) // async call
