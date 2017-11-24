
class Toggable{
	/**
	 * Inicializar el estado interno.
	 */
	constructor(element){
		this.element = element
		this.element.innerHTML = 'Off'
		this.activated = false
		this.element.addEventListener('click', this.onClick);
	}

	/**
	 * Cambiar el estado interno y llamar a toggleText().
	 */
	onClick(){
		console.log("Hello World!!")
		this.activated = !this.activated
		this.toggleText()
	}

	/**
	 * Cambiar texto.
	 */
	toggleText(){
		this.element.innerHTML = this.activated ? 'On' : 'Off'
	}
}


const button = document.getElementById('boton')
const miBoton = new Toggable(button)