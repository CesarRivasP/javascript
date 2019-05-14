// -- Un ejemplo de async / await hell
// Segundo ejemplo
const orderItems = async () => {
  const items = await getCartItems() // llamada asíncrona
  const noOfItems = items.length
  for ( var i = 0; i < noOfItems; i++){
    await sendRequest(items[i]) // llamada asíncrona
  }
}

/*
En este caso, el bucle for tiene que esperar a que la sendRequest()función se complete antes
de continuar con la siguiente iteración. Sin embargo, en realidad no necesitamos esperar.
Queremos enviar todas las solicitudes lo más rápido posible y luego podemos esperar a que
todas se completen.
*/

// ---------------------------------------------------------------------------------------- //
async function orderItems() {
  const items = await getCartItems(); // async call
  const noOfItems = items.length
  const promises = [];
  for (var i = 0; i < noOfItems; i++){
    const orderPromise = sendRequest(items[i]); // async call
    promises.push(orderPromise); // sync call
  }
  await Promise.all(promises); // async call
}

// ---------------------------------------------------------------------------------------- //
// Otra Forma
async function orderItems() {
  const items = await getCartItems(); // async call
  const promises = items.map((item) => sendRequest(item))
  await Promise.all(promises); // async call
}
