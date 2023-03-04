
function DomElement (selector, height, width, baground, fontsize) {
	this.selector = selector,
	this.height = height,
	this.width = width,
	this.bg = baground,
	this.fontSize = fontsize,

	this.createElem = function () {
	if (this.selector.startsWith('.')) {
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
	if (this.selector.startsWith('#')) {
		let p = document.createElement('p')
		p.setAttribute('id','block')
		p.innerHTML = 'text';
		document.body.append(p)
		console.log(p);
	}
	}
}
const domElement = new DomElement('asd','25px','22','green','35px')
domElement.createElem()
console.log(domElement);


