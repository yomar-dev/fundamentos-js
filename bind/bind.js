
class Toggable{
	/**
	 * Inicializar el estado interno.
	 */
	constructor(element){
		this.element = element
		this.element.innerHTML = 'Off'
		this.activated = false
		this.element.addEventListener('click', this.onClick.bind(this))
	}

	/**
	 * Cambiar el estado interno y llamar a toggleText().
	 */
	onClick(){
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