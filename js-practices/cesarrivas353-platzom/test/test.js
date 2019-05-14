const expect = require('chai').expect;  //requiriendo el modulo mocha.
const platzom = require('..').default;	
/*.. requiere el modulo que esta em un nivel mas arriba, es decir
va a requerir el modulo 'platzom', de la carpeta general del archivo.
Para requerir el modulo busca en el package.json cual es el archivo
'main'. Entonces va a ir a buscar a 'dist/src/platzom.js'. Eso
es lo que va a requerir.
AHORA SE VAN A REQUERIR LOS TEST, QUE ES LO QUE TIENEN QUE HACER Y 
QUE ES LO QUE TIENEN QUE DEVOLVER. */
//PARAMETROS:TEST SOBRE| OTRA FUNCION QUE NCLUYE TODOS LOS TEST
describe('#platzom', function () {
	//-Para correr un test, hay que indicar:
//describirlo|funcion para que se corra el test
	it('- Si la palabra termina con "ar", se  le quitan esas dos letras.', function (){
		const translation = platzom('Programar')		//Platzom ya fue requerido
		expect(translation).to.equal("Program")  //funcion 'expect' de 'mocha'(resultado de translation).seaigual = to.equal("a?"")
	})
	it('- Si la palabra inicia con Z, se le añade "pe" al final.', function (){
		const translation = platzom('Zorro')
		const translation2 = platzom("Zarpar")
		expect(translation).to.equal('Zorrope')
		expect(translation2).to.equal('Zarppe')
	})
	it('- Si la palabra traducida tiene 10 o mas letras se debe partir en dos por la mitad y unir con un guion en medio.', function (){
		const translation = platzom('Abecedario')
		expect(translation).to.equal('Abece-dario')
	})
	it('- Por ultimo, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra, pero intercalando letras mayúsculas y minúsculas.', function (){
		const translation = platzom('sometemos')
		expect(translation).to.equal('SoMeTeMoS')
	})
})
/*La funcion 'describe' se correr en el entorno que este corriendo
'mocha'. Cuando se corre el comando 'mocha', se puede ejecutar dicha
funciones.
-Para correr el test que copia el it... 4 veces(ya que el idioma tiene 4 reglas).
 Y se va a ver que las palabras que estaban en el 'README' se 
 an a traducir bien, las que estan en 'USO'.
-En 'it' se colocan las reglas del idioma. Y dentro de la funcion se agregan
los metodos para testear la funcion.
ESTO ES LO QUE SE ESTA REQUIRIENDO:
```
import platzom from 'platzom'

platzom("Programar"))  // Program
platzom("Zorro"))      // Zorrope
platzom("Zarpar")) 	   // Zarppe
platzom("abecedario")) // abece-dario
platzom("sometemos"))  // SoMeTeMoS
```

--En el package.json se debe incluir un script para correr test : "test": "mocha". Clave 'test':comando'mocha'


Si al correr el test marca que 'platzom' no es una funcion, eso pasa porque babel en su utlima version cambio la
forma de transpilar los modulos. Entonces si se esta en un entorno de modulos que no soporta los modulos de ecmascrip 2015,
y eso se soluciona colocando un '.default', porque esta exportando un objeto que tiene la propiedad 'default' que si tiene 
- El atributo 'expect' esta en 'chai', no 'mocha'
la funcion que se espera para exportar
*/