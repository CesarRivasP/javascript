valores truthy
- Evalúan como true valores que no son estrictamente el booleano true
  Ejemplo:
    * if(true)
    * if({})  -> objeto
    * if([])  -> array
    * if(42)  -> si existe un numero
    * if("foo")  -> si existe un string
    * if(new Date())  -> si existe un Date
    * if(-42)  -> si existe un negativo
    * if(Infinity)  -> si existe un valor infinito


valores Falsy
