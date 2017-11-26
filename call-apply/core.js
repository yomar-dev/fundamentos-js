const yomar = {
	nombre: 'Yomar',
	apellido: 'Miranda'
}

function saludar(veces){
	for (let i = 0; i < veces; i++) {
		console.log(`Hola ${this.nombre} ${this.apellido}`)
	}
}

/**
 * call()	=>	Llama a una función con un valor this asignado y 
 * argumentos provistos de forma individual.
 */
saludar.call(yomar, 5)

/**
 * apply()	=>	Invoca una determinada función asignando explícitamente
 * el objeto this y un array como parámetros para dicha función.
 */
saludar.apply(yomar, [5])