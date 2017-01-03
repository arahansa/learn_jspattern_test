function Marsupial(name, nocturnal){
	if(!(this instanceof Marsupial)){
		return new Marsupial(name, nocturnal);
	}
	this.name = name;
	this.isNocturnal = nocturnal;
}

var maverick = Marsupial('매버릭', true);
var slider = new Marsupial('슬라이더', false);

console.log(maverick.isNocturnal);
console.log(maverick.name);
console.log(slider.isNocturnal);
console.log(slider.name);
