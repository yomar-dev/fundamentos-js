class Persona{
	constructor(nombre, amigos = []){
		this.nombre = nombre
		this.amigos = amigos
	}

	listarAmigos(){
		/**
		 *	Para poder acceder a la propiedad 'nombre' dentro de la función que se
		 *	ejecuta dentro del forEach, hay que crear una variable o una constante
		 *	dentro de la función principal que recuerde el scope global, en este 
		 *	caso 'listarAmigos()' que haga referencia al objeto 'this' de la clase 
		 *	'Persona'.
		 */
		const _this = this
		this.amigos.forEach(function(amigo) {
			console.log(`Hola mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
		})
	}
}

const messi = new Persona("Messi", ["Ronaldinho", "Xavi", "Iniesta", "Henry"])
messi.listarAmigos()