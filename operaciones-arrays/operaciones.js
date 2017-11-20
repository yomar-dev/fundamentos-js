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

sumar(2, 5, 8, 9, 14)