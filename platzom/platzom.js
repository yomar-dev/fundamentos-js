function platzom(str){
	let translation = str

	/*
		Si la palabra termina en "ar", se le quitan esos dos caracteres.
	*/
	if(str.toLowerCase().endsWith('ar')){
		translation = str.slice(0, -2)
	}

	/*
		Si la palabra termina con Z, se le añade "pe" al final.	
	*/
	if(str.toLowerCase().startsWith('z')){
		translation += 'pe'
	}


	/*
		Si la palabra traducida tiene 10 o más letras, se debe
		dividir a la mitad y unir con un guión medio (-)
	*/
	const length = translation.length
	if(length >= 10){
		const firstHalf = translation.slice(0, Math.round(length / 2))
		const secondHalf = translation.slice(Math.round(length / 2))
		translation = `${firstHalf}-${secondHalf}`
	}


	/*
		Si la palabra original es un palíndromo, ninguna regla anterior
		se tiene en cuenta y se devuelve la misma palabra intercalando
		mayúsculas y minúsculas.  
	*/
	if(str.toLowerCase() == reverse(str).toLowerCase()){
		return minMay(str)
	}

	return translation
}

/*
	Devuelve una cadena de caracteres invertida.
*/
const reverse = (str) => str.split('').reverse().join('')

/*
	Devuelve una cadena de caracteres intercalando Mayúsculas y Minúsculas.
*/
function minMay(str){
	const length = str.length
	let translation = ''
	let capitalize = true
	for (let i = 0; i < length; i++) {
		const char = str.charAt(i)
		translation += capitalize ? char.toUpperCase() : char.toLowerCase()
		capitalize = !capitalize
	}

	return translation
}



console.log(platzom("Programar")) // Program
console.log(platzom("Zorro")) // Zorrope
console.log(platzom("Zarpar")) // Zarppe
console.log(platzom("abecedario")) // abece-dario
console.log(platzom("Sometemos")) // SoMeTeMoS

/*
 	toLowerCase()	=>	Sirve para convertir una cadena de caracteres en minúsculas.
 	endsWith()		=>	Devuelve TRUE si una cadena de caracteres termina con los caracteres
						pasados por parametro, de lo contrario devuelve FALSE.
	startsWith()	=>	Devuelve TRUE si una cadena de caracteres empieza con los caracteres
						pasados por parametro, de lo contrario devuelve FALSE.
 	slice()			=>	Sirve para extraer parte de una cadena de caracteres indicando
 						el principio y final de la misma.
 						Ej: str.slice(0, -2)
 						Esto traera desde la posición 0 hasta 2 caracteres antes del final.
 	Math.round()	=>	Retorna el valor de un número redondeado al entero más cercano.
 	split()			=>	Divide una cadena de caracteres por el valor que le indiquemos por parametro.
 	reverse()		=>	Invierte el orden de los elementos de un Array.
 	join()			=>	Une los elementos de un Array por el valor indicado por parametro.
*/
