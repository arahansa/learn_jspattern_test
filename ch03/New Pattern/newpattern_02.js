function Marsupial(name, nocturnal){
	if(!(this instanceof Marsupial)){
		throw new Error("이 객체는 new 를 사용하여 생성해야 합니다");
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
