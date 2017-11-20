/**
 *	Veremos operaciones avanzadas con Arrays, utilizando funciones de
 *	Javascript tales como: reduce, push, map y filter.
 */

/*
	Esta es la forma de pasar N parametros del mismo tipo sin espeficar la cantidad,
	a esto se le conoce como "Spread Operator". Si mostramos por consola el valor
	de 'numeros' podemos observar que nos devuelve un Array
*/
function sumar(...numeros){
	console.log(numeros)
}

sumar(2, 5, 8, 9, 14)