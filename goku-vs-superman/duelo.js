let vidaGoku = 100
let vidaSuperman = 100

const MIN_POWER = 5
const MAX_POWER = 12

const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0

const calcularGolpe = () => Math.round(Math.random() * MAX_POWER - MIN_POWER) + MIN_POWER

let round = 0

while(ambosSiguenVivos()){
	round++
	console.log(`Round: ${round}`)

	const golpeGoku = calcularGolpe()
	const golpeSuperman = calcularGolpe()

	if(golpeGoku > golpeSuperman){
		//Ataca Goku
		console.log(`Goku ataca con un golpe de: ${golpeGoku}`)
		vidaSuperman -= golpeGoku
		console.log(`Vida Superman: ${vidaSuperman}`)		
	}else{
		//Ataca Superman
		console.log(`Superman ataca con un golpe de: ${golpeSuperman}`)
		vidaGoku -= golpeSuperman
		console.log(`Vida Goku: ${vidaGoku}`)		
	}
}