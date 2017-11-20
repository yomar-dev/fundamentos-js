/* Punto 1 */
/*const p1 = {
	x: 0,
	y: 4,
	//moverEnX: function(x){ this.x += x},
	//moverEnY: function(y){ this.y += y}
	moverEnX(x){
		this.x += x
	},
	moverEnY(y){
		this.y += y
	}
}*/

/* Punto 2 */
/*const p2 = {
	x: 3,
	y: 0,
	//moverEnX: function(x){ this.x += x},
	//moverEnY: function(y){ this.y += y}
	moverEnX(x){
		this.x += x
	},
	moverEnY(y){
		this.y += y
	}
}*/

/*function Punto(x, y){
	this.x = x
	this.y = y
}

Punto.prototype.moverEnX = function moverEnX(x) {
	this.x += x
}

Punto.prototype.moverEnY = function moverEnY(y) {
	this.y += y
}

Punto.prototype.distancia = function distancia(p){
	const x = this.x - p.x
	const y = this.y - p.y

	return Math.sqrt((x * x) + (y * y)).toFixed(2)	
}*/


// Esta es otra forma de crear objetos.
/*const Punto = {
	// Funciona como un constructor.
	init: function init(x, y){
		this.x = x
		this.y = y
	},
	moverEnX: function moverEnX(x) {
		this.x += x
	},
	moverEnY: function moverEnY(y) {
		this.y += y
	},
	distancia: function distancia(p){
		const x = this.x - p.x
		const y = this.y - p.y

		return Math.sqrt((x * x) + (y * y)).toFixed(2)	
	}
}*/


/*
	Utilizamos la palabra reservada 'class' pero en
	realidad funciona como un Prototipo.
*/
class Punto{
	// Este metodo siempre debe llamarse así.
	constructor(x, y){
		this.x = x
		this.y = y
	}

	moverEnX(x) {
		this.x += x
	}

	moverEnY(y) {
		this.y += y
	}

	distancia(p){
		const x = this.x - p.x
		const y = this.y - p.y

		return Math.sqrt((x * x) + (y * y)).toFixed(2)	
	}
}

const p1 = new Punto(0, 4)
const p2 = new Punto(3, 0)

p1.moverEnX(7)
p2.moverEnY(-2)

console.log(p1.distancia(p2))