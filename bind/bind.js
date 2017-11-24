
class Toggable{
	/**
	 * Inicializar el estado interno.
	 */
	constructor(element){
		this.element = element
		this.element.innerHTML = 'Off'
		this.activated = false
		//this.element.addEventListener('click', this.onClick.bind(this))
		/**
		 * Podemos reescribir la linea de arriba de esta forma y seguirá
		 * funcionando igual.
		 */
		this.onClick = this.onClick.bind(this)
		this.element.addEventListener('click', this.onClick)
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