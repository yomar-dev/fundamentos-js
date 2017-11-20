/**
 *	Veremos operaciones avanzadas con Arrays, utilizando funciones de
 *	Javascript tales como: reduce, push, map y filter.
 */

/*
	Esta es la forma de pasar N parametros del mismo tipo sin espeficar la cantidad,
	a esto se le conoce como "Spread Operator". Si mostramos por consola el valor
	de 'numeros' podemos observar que nos devuelve un Array
*/
/*function sumar(...numeros){
	let total = 0
	for (let i = 0; i < numeros.length; i++) {
		total += numeros[i]
	}
	return total;
}*/

/*
	Función para sumar números utilizando una función propia de los Arrays
	llamada 'reduce'
	reduce()	=> Aplica una función a un acumulador y a cada valor de un
	array (de izquierda a derecha) para reducirlo a un único valor.
*/
function sumar(...numeros){
	// Forma 1.
	/*return numeros.reduce(function(total, numero){
		total += numero
		return total
	}, 0)*/

	// Forma 2.
	const resultado =  numeros.reduce(function(total, numero){
		total += numero
		return total
	}, 0)

	return resultado
}


/*
	Función para devolver un Array con el doble de los números pasados
	por parametro, es decir: N * 2.
	push()	=>	Agrega uno o más elementos al final de un array y devuelve
	la nueva longitud del array.
	map()	=>	Crea un nuevo array con los resultados de la llamada a la 
	función indicada aplicados a cada uno de sus elementos.
	
	Nota: Podemos decir que 'map()' recibe una función que va a ejecutar
	por cada uno de los elementos del Array.
*/
function dobles(...numeros){
	// Forma 1.
	/*const resultado = []
	for (var i = 0; i < numeros.length; i++) {
		resultado.push(numeros[i] * 2)
	}
	return resultado*/

	// Forma 2.
	/*return numeros.map(function(numero){
		return numero * 2
	})*/

	// Forma 3. Utilizando Arrow Function.
	/*return numeros.map(numero => {
		return numero * 2
	})*/

	// Forma 4. Utilizando Arrow Function 2.
	return numeros.map(numero => numero * 2 )
}

/*
	Esta es otra forma de realizar lo mismo que hace la función
	de arriba utilizando nuevamente Arrow Function.
	const dobles = (...numeros) => numeros.map(numero => numero * 2 )
*/


sumar(2, 5, 8, 9, 14)
dobles(2, 5, 8, 9, 14)