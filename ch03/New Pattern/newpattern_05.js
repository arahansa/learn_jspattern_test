function Marsupial(name, nocturnal){
	if(!(this instanceof Marsupial)){
		throw new Error("이 객체는 new 를 사용하여 생성해야 합니다");
	}
	this.name = name;
	this.isNocturnal = nocturnal;
}

Marsupial.prototype.isAwake = function(isNight){
	return isNight === this.isNocturnal;	
}

var maverick = new Marsupial('매버릭', true);
var slider = new Marsupial('슬라이더', false);

var isNightTime = true;

console.log(maverick.isAwake(isNightTime)); // true
console.log(slider.isAwake(isNightTime)); // false

// 각 객체는 자신의 isAwake 함수를 가진다. 
console.log(maverick.isAwake === slider.isAwake); // true


