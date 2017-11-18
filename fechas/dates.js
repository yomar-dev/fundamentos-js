const dias = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miércoles',
	'Jueves',
	'Viernes',
	'Sábado'
]

const meses = [
	"Enero",
	"Febrero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Septiembre",
	"Octubre",
	"Noviembre",
	"Diciembre"
]
/*
	Creamos un objeto de tipo fecha, en este caso le estamos asignando
	mi fecha de nacimiento, pero hay que tener en cuenta que en el caso
	de los menos hay que restarle 1, en este caso mi mes de nacimiento
	es Diciembre (Mes 12), pero como hay que restarle 1, debo colocar
	el mes 11. 
*/
const nacimiento = new Date(1992, 11, 30)

/*
	En esta constante almacenamos la fecha actual.
*/
const hoy  = new Date()

/*
	En esta constante almacenamos el tiempo que ha transcurrido desde
	mi nacimiento hasta el día de hoy.
	Nota: El valor devuelto es en milisegundos, así que nos toca realizar
	la conversión.
*/
const tiempo = hoy - nacimiento
const tiempoSegundos = tiempo / 1000
const tiempoMinutos = tiempoSegundos / 60
const tiempoHoras = tiempoMinutos / 60
const tiempoDias = tiempoHoras / 24
const tiempoYears = tiempoDias / 365

/*
	Proximo cumpleaños.
*/
const proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
const diaSemana  = dias[proximoCumple.getDay()]
const diaMes = nacimiento.getDate()
const mes = meses[nacimiento.getMonth()]
console.log(`Proximo cumpleaños: ${diaSemana} ${diaMes} de ${mes}.`)