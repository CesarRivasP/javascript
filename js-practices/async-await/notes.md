# Promesas
Una promesa es un tipo especial de objeto javascript que contiene otro objeto. Podría tener una promesa para el entero 17, o la cadena "hola mundo", o algún objeto arbitrario, o cualquier otra cosa que normalmente pueda almacenar en una variable de javascript.
### ¿ Como acceder a los datos de una promesa ?
**then**
```
function getFirstUser () {
    return getUsers()
      .then(function (users) {
        return users[0].name;
    });
}
```

### ¿Cómo puedo detectar los errores de una cadena de promesa?
**catch**
```
function getFirstUser() {
    return getUsers()
      .then(function (users) {
        return users [0] .name;
      })
      .catch (function (err) {
        return {
          name: 'usuario predeterminado'
        };
      });
}
```

A pesar de que las promesas generalmente serán para los datos 'futuros', una vez que tenga una promesa para algo, realmente no tengo que preocuparme si los datos estarán allí en el futuro, o ya se han recuperado. Acabo de llamar `then ()` en cualquier caso. Como tal, promete una asincronicidad de fuerza consistente (y evita la liberación de zalgo). Es como decir: 'esta será una función asíncrona, ya sea que el valor de retorno esté disponible ahora o más adelante'.

> Cada función asíncrona devolverá una promesa, y cada cosa que espere normalmente será una promesa.

## Async Await
### ¿cómo se vincula async / await?

Bueno, considerando el código anterior. `getUsers ()` devuelve una promesa. Cualquier promesa que tengamos, usando ES2016, se debe esperar la misma. Eso es, literalmente, todo lo que significa esperar: funciona exactamente de la misma manera que llamar a `.then ()` en una promesa (pero sin requerir ninguna función de devolución de llamada o callback). Así que el código anterior se convierte en:
```
async function getFirstUser() {
  let user = await getUsers();
  return user[0].name
}
```
Puedo esperar cualquier promesa que desee, ya se haya resuelto o no, ya sea que la haya creado o no. await simplemente pausará la ejecución de mi método hasta que el valor de la promesa esté disponible.
### ¿qué pasa con la captura de errores?
Simple, ahora estamos escribiendo código de estilo síncrono, podemos volver a usar **try/catch**:
```
async function getFirstUser(){
  try {
    let users = await getUsers();
    return users[0].name
  }
  catch (err) {
    return {
      name: 'default user'
    };
  }
}
```

> Así que es importante recordar que las funciones asíncronas no se esperan por sí mismas. Debe esperar , o recibirá una promesa en lugar del valor que espera.

La forma en que debería llamar getFirstUseres así:
`let user = await getFirstUser()`

> Fundamentalmente, Promise.all tomarán una serie de promesas y compilaciones en una sola promesa, que se resuelve solo cuando todas las promesas de niños en la matriz se han resuelto por sí mismo.
> Promise.all no "despacha" ni "crea" las promesas que le haces. Para cuando haya creado la matriz ...
`[getFoo (), getBar ()]`

- Todo lo que Promise.all está haciendo es agruparlos en una nueva promesa, y esperar a que ambos se completen. Promise.all significa "Espera estas cosas" no "Haz estas cosas".

### Toda tu pila debe ser asíncrona
Si comienzo a usar await en algún lugar, ahora tengo el problema de que afecta a toda mi pila. Para llamar a una de mis funciones asíncronas, lo ideal sería que la persona que llama fuera una función asíncrona. Esto tiene un efecto colateral en toda mi pila y dificulta la conversión incremental de devoluciones de llamada a async / await.


### Manejo de errores
Como tal, el nivel superior de su código siempre debe estar incluido en un try / catch (debe capturarlos a todos) para asegurarse de que esté manejando cualquier error:

### ¿Qué pasa si olvidamos la palabra clave await?
Si olvida utilizar esperar mientras llama a una función asíncrona, la función comienza a ejecutarse. Esto significa que no es necesario esperar para ejecutar la función. La función asíncrona devolverá una promesa, que puede utilizar más adelante.
```
( async () => {
  const value =  doSomeAsyncTask ()
  consola.log (valor) // una promesa sin resolver
}) ()
```
**Nota**:
Otra consecuencia es que el compilador no sabrá que desea esperar a que la función se ejecute completamente. Así el compilador saldrá del programa sin terminar la tarea asíncrona.

- Una propiedad interesante de las promesas es que puede obtener una promesa en una línea y esperar a que se resuelva en otra. Esta es la clave para escapar de async / await hell.
```
(async () => {
  const promise = doSomeAsyncTask()
  const value = await promise
  console.log(value)
})()

```
Como puedes ver, doSomeAsyncTask()está devolviendo una promesa. En este punto doSomeAsyncTask()ha comenzado su ejecución. Para obtener el valor resuelto de la promesa, usamos la palabra clave await y le diremos a JavaScript que no ejecute la siguiente línea inmediatamente, sino que en lugar de eso, esperemos que la promesa se resuelva y luego ejecute la siguiente línea.

## ¿Cómo evitar el async/await hell?
### Encontrar declaraciones que dependan de la ejecución de otras declaraciones
En nuestro primer ejemplo, seleccionamos una pizza y una bebida. Concluimos que, antes de elegir una pizza, necesitamos tener la lista de pizzas. Y antes de agregar la pizza al carrito, deberíamos elegir una pizza. Así que podemos decir que estos tres pasos dependen unos de otros. No podemos hacer una cosa hasta que hayamos terminado lo anterior.

Pero si lo vemos de manera más amplia, encontramos que seleccionar una pizza no depende de seleccionar una bebida, por lo que podemos seleccionarla en paralelo. Eso es algo que las máquinas pueden hacer mejor que nosotros.

Así, hemos descubierto algunas afirmaciones que dependen de la ejecución de otras afirmaciones y otras que no.
### Sentencias dependientes del grupo en funciones asíncronas
Como vimos, la selección de pizza implica declaraciones dependientes como obtener la lista de pizzas, elegir una y luego agregar la pizza elegida al carrito. Deberíamos agrupar estas declaraciones en una función asíncrona. De esta manera obtenemos dos funciones asíncronas, selectPizza()y selectDrink().

### Ejecuta estas funciones asíncronas al mismo tiempo
Luego aprovechamos el bucle de eventos para ejecutar estas funciones asíncronas no bloqueadoras simultáneamente. Dos patrones comunes de hacer esto son las promesas de devolución anticipadas y el método Promise.all .
