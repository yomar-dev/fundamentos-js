function saludarFamilia(apellido){
	return function saludarMiembroFamilia(nombre){
		console.log(`Hola ${nombre} ${apellido}`)
	}
}

const saludarGomez = saludarFamilia("Gomez")
const saludarTorres = saludarFamilia("Torres")

saludarGomez("Pedro")
saludarGomez("Juan")
saludarGomez("Diego")

saludarTorres("Andrea")
saludarTorres("Gabriela")