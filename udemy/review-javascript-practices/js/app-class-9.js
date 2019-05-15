// Promises
const applicateDiscount = new Promise((resolve, reject) => {
  // Resolve es el codigo que se ejecuta cuando el llamado a la promise resulta correcto
  // Reject es el codigo que se ejecuta cuando hubo un error
  setTimeout(() => {
    // let discount = false;
    let discount = true;

    if(discount){
      resolve('Descuento aplicado')
    }
    else {
      reject('No se pudo aplicar el descuento')
    }
  }, 3000);
});

applicateDiscount
  .then((result) => console.log(result))
  .catch((error) => console.log(error))


// SImepre que la promise diga 'pending' es porque le falta algo a la promise, que usualmente es el then
