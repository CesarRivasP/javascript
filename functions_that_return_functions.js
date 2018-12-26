const connect = (value1,value2) => {
  console.log(value1);
  console.log(value2);
  // aqui se esta retornando una funcion
  return (componente) => {
    const result = `${componente}-${value1 * value2}`;
    console.log(result);
    return result;
  }
}

const componenteConectado = connect(2,3);
/*
  - Los parametros que se le pasan a connect
  - Los conjuga con el componente que se le indique
  - Los conecta
  - Retorna un componente resultante */

componenteConectado(`App`); //Componente resultante

/*
  return -> 2
            3
            "App-6"

Termina tomando el nombre del componente mas lo valores que anteriormente se le pasaron
*/


// ----------------------------------------------------- //

const connect = (value1,value2) => {
  console.log(value1);
  console.log(value2);
  return (componente) => {
    const result = `${componente}-${value1() * value2()}`;
    console.log(result);
    return result;
  }
}

const componenteConectado = connect(() => 2,() => 3);

componenteConectado(`App`);

/*
  return -> () => 2
            () => 3
            "App-6"
*/
