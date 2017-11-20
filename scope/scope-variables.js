var nombre = "Yomar"

/*
	Si no pasamos parametros la variable 'nombre', mostrará por
	consola, el nombre que se encuentra por fuera, en este caso 'Yomar'.
*/
/*function saludar(){
	console.log(`Hola ${nombre}`)	
}*/

// saludar()

/*
	En esta función pasamos un parametro llamado nombre que coincide
	con el nombre de la variable que se encuentra por fuera, en este
	caso si tratamos de imprimir la variable nombre, no mostrara el valor
	de la variable nombre que se encuentra por fuera sino el valor de la
	variable que se le pase por parametro.
*/
function saludar(nombre){
	console.log(`Hola ${nombre}`)
}

saludar("Erick")
console.log(`El valor de la variable nombre es: ${nombre}`)