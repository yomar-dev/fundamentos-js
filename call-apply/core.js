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
 * call()	=>	llama a una función con un valor this asignado y 
 * argumentos provistos de forma individual.
 */
saludar.call(yomar, 5)