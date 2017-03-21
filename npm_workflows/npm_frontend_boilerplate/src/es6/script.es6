((d, w, n) => {
	const html = d.documentElement,
				head = d.head,
				body = d.body
	
	class Perro {
		constructor(nombre, raza) {
			this.nombre = nombre
			this.raza = raza
		}

		ladrar() {
			alert(`${this.nombre} say grr grr!`);
		}
	}

	let rommel = new Perro('Rommel', 'Sheppard')

	console.log(html, head, body)
})(document, window, navigator);

