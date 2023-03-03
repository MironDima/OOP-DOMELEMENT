
function DomElement () {
	this.selector,
	this.height = '25px',
	this.width = '25px',
	this.bg = 'green',
	this.fontSize = '20px',
	this.createElem = function (value) {

	if (value.startsWith('.')) {
		let div = document.createElement('div');
		div.classList.add('block');
		div.innerHTML = 'text';
		div.style.cssText =	`height:${this.height};
		width:${this.width}; 
		background:${this.bg};
		font-size:${this.fontSize}`
		document.body.append(div);
		console.log(div);
	}
	if (value.startsWith('#')) {
		let p = document.createElement('p')
		p.setAttribute('id','block')
		p.innerHTML = 'text';
		p.style.cssText =	`height:${this.height};
		width:${this.width}; 
		background:${this.bg};
		font-size:${this.fontSize}`
		document.body.append(p)
		console.log(p);
	}
	}
}
const domElement = new DomElement()
domElement.createElem('#asd')
console.log(domElement);

