function platzom(str){
	let translation = str

	// Si la palabra termina en "ar", se le quitan esos dos caracteres.
	if(str.toLowerCase().endsWith('ar')){
		translation = str.slice(0, -2)
	}


	// Si la palabra termina con Z, se le añade "pe" al final.
	if(str.toLowerCase().startsWith('z')){
		translation += 'pe'
	}

	return translation
}

console.log(platzom("Programar")) // Program
console.log(platzom("Zorro")) // Zorrope
console.log(platzom("Zarpar")) // Zarppe

/*
 	toLowerCase()	=>	Sirve para convertir una cadena de caracteres en minúsculas.
 	endsWith()		=>	Devuelve TRUE si una cadena de caracteres termina con los caracteres
						pasados por parametro, de lo contrario devuelve FALSE.
 	slice()			=>	Sirve para extraer parte de una cadena de caracteres indicando
 						el principio y final de la misma.
 						Ej: str.slice(0, -2)
 						Esto traera desde la posición 0 hasta 2 caracteres antes del final.
*/
