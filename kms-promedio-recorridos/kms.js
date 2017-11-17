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
let length = dias.length
for (let i = 0; i < length; i++) {
	const kms = correr()
	totalKms += kms
	console.log(`El día ${dias[i]}, ${nombre} corrió ${kms}Kms`)
}

const promedioKms = totalKms / length
console.log(`En promedio ${nombre}, corrió ${promedioKms.toFixed(2)}Kms`)

/* 
	Math.random()	=> Devuelve un número entre 0 y 1. 
	Math.floor()	=> Redondea un número hacia abajo. Ej: 3.7 = 3 
	Math.round()	=> Redondea al entero más cercano. 
	toFixed()		=> Sirve para indicar cuantas cifras decimales queremos mostrar de un número.
*/
function correr(){
	const min = 5
	const max = 15
	return Math.round(Math.random() * (max - min) + min)
}