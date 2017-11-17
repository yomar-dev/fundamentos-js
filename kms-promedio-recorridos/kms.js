const nombre = 'Pablo'

const dias = [
	'Lunes',
	'Martes',
	'Miércoles',
	'Jueves',
	'Viernes',
	'Sábado',
	'Domingo'
]


/* 
	Math.random()	=> Devuelve un número entre 0 y 1. 
	Math.floor()	=> Redondea un número hacia abajo. Ej: 3.7 = 3 
*/
function correr(){
	const min = 5
	const max = 15
	return Math.floor(Math.random() * (max - min) + min)
}