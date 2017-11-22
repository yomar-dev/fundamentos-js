class Persona{
	constructor(nombre, amigos = []){
		this.nombre = nombre
		this.amigos = amigos
	}
}


const messi = new Persona("Messi", ["Ronaldinho", "Xavi", "Iniesta", "Henry"])