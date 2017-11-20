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
/*function saludar(nombre){
	console.log(`Hola ${nombre}`)
}*/

/*
	De esta forma ocurre lo mismo de arriba, en este caso se va a mostrar el
	valor de la variable que se encuentra dentro de la función y no afecta el
	valor de la variable que se encuentra por fuera, pero si en vez de escribir
	"var nombre = 'Erick'", escribimos "nombre = 'Erick'"" estariamos cambiando el
	valor de la variable nombre que se encuentra por fuera y ambos mensajes mostrarian
	el mismo valor (Erick).
*/
/*function saludar(){
	var nombre = "Erick"
	console.log(`Hola ${nombre}`)
}*/


/*
	En este caso sigue ocurriendo lo mismo de arriba ya que, en este caso Javascript
	lo interpreta de la siguiente manera: 
	Ej:
	function saludar(){
		var nombre
		if(true){
			nombre = "Erick"
		}
		console.log(`Hola ${nombre}`)
	}
*/
function saludar(){
	if(true){
		var nombre = "Erick"
	}
	console.log(`Hola ${nombre}`)
}

saludar()
console.log(`El valor de la variable nombre es: ${nombre}`)