Valores truthy
- Evalúan como true valores que no son estrictamente el booleano true.
  Algunos ejemplos:
    * if(true)
    * if({})  -> objeto
    * if([])  -> array
    * if(42)  -> si existe un numero
    * if("foo")  -> si existe un string
    * if(new Date())  -> si existe un Date
    * if(-42)  -> si existe un negativo
    * if(Infinity)  -> si existe un valor infinito


Valores Falsy
- Evalúan como false valores que no son estrictamente el booleano false.
  Algunos ejemplos:
    * if(false)  ->
    * if(null)  -> un null es false
    * if(undefined)  -> un undefined es false
    * if(0) --> es false
    * if(NaN) --> (Not a number: imposible de calcular) es un false
    * if("")  -> un string empty es false
    * if('')
      let x = '';
      x == false  //true
    * if(document.all)


- Los tres iguales '===' evaluan si es exactamente la misma instancia.
- Los dos iguales '==' evaluan si el valor es truthy value o un falsy value.
