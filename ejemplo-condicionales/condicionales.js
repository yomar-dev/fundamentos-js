const pelicula  = 'Los Ilucionistas'
const edadMinima = 12

const nombre01 = 'Pedro'
const edad01 = 22

const nombre02 = 'Javier'
const edad02 = 10


function puedeVerPelicula(nombre, edad){
	if(edad >= edadMinima){
		alert(`${nombre}, puedes pasar a ver la película: ${pelicula}`)
	}else{
		alert(`${nombre}, no puedes pasar a ver la película ${pelicula}. \nLa edad minima para ver la película es ${edadMinima} años y tu tienes ${edad}`)
	}
}


puedeVerPelicula(nombre01, edad01)
puedeVerPelicula(nombre02, edad02)