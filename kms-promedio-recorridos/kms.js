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


let totalKms = 0

for (let i = 0; i < dias.length; i++) {
	const kms = correr()
	totalKms += kms
	console.log(`El día ${dias[i]}, ${nombre} corrió ${kms}Kms`)
}

/* 
	Math.random()	=> Devuelve un número entre 0 y 1. 
	Math.floor()	=> Redondea un número hacia abajo. Ej: 3.7 = 3 
	Math.round()	=> Redondea al entero más cercano. 
*/
function correr(){
	const min = 5
	const max = 15
	return Math.round(Math.random() * (max - min) + min)
}