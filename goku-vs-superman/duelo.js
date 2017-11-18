let vidaGoku = 100
let vidaSuperman = 100

const MIN_POWER = 5
const MAX_POWER = 12

const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0

const calcularGolpe = () => Math.round(Math.random() * MAX_POWER - MIN_POWER) + MIN_POWER

let round = 1

while(ambosSiguenVivos()){
	console.log(`Round: ${round}`)

	const golpeGoku = calcularGolpe()
	const golpeSuperman = calcularGolpe()
}