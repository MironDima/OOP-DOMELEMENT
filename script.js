
function DomElement (selector, height, width, baground, fontsize,position) {
	this.selector = selector,
	this.height = height,
	this.width = width,
	this.bg = baground,
	this.fontSize = fontsize,
	this.position = position

	this.element = undefined;

	this.createElem = function () {
		if (this.selector.startsWith('.') || this.selector.startsWith('#')) {
			if (this.selector.startsWith('.')) {
				this.element = document.createElement('div');
				this.element.classList.add('block');
				console.log(this.element);
			}
			if (this.selector.startsWith('#')) {
				this.element = document.createElement('p')
				this.element.setAttribute('id','block')
				console.log(this.element);
			}
		}

		this.element.style.cssText = `height:${this.height};
				width:${this.width}; 
				background:${this.bg};
				font-size:${this.fontSize};
				position:${this.position}`
				document.body.append(this.element);
		}

		this.top = function () {
			if(parseInt(this.element.style.top)){
				this.element.style.top = '-10px'
			}
			else{
				this.element.style.top = -10 + 'px'
			}
		}

		this.down = function () {
			if(parseInt(this.element.style.top)){
				this.element.style.top = '10px'
			}
			else{
				this.element.style.top = 10 + 'px'
			}
		}

		this.left = function () {
			if(parseInt(this.element.style.left)){
				this.element.style.left = '-10px'
			}
			else{
				this.element.style.left = -10 + 'px'
			}
		}

		this.right = function () {
			if(parseInt(this.element.style.left)){
				this.element.style.left = '10px'
			}
			else{
				this.element.style.left = 10 + 'px'
			}
		}
}

const domElement = new DomElement('.asd','100px','100px','green','35px','absolute')
domElement.createElem()
console.log(domElement);


document.addEventListener('keydown', function (event) {
	if(event.key === 'ArrowUp'){
		domElement.top()
	}
	if(event.key === 'ArrowDown'){
		domElement.down()
	}
	if(event.key === 'ArrowLeft'){
		domElement.left()
	}
	if(event.key === 'ArrowRight'){
		domElement.right()
	}
})
