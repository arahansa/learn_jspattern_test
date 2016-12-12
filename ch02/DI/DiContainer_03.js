DiContainer = function(){
	// 반드시 생성자로 객체를 생성하게 한다. 
	if(!(this instanceof DiContainer)){
		return new DiContainer();
	}
	this.registrations = [];
}
DiContainer.prototype.get = function(name){
	var registration = this.registrations[name];
	if(registration == undefined){
		return undefined;
	}
	return registration.func();
};

DiContainer.prototype.messages = function(name, dependencies, func) {
		registerRequireArgs : ' 이 생성자 함수는 인자가 3개 있어야 합니다 : 문자열, 문자열 배열, 함수'
};
DiContainer.prototype.register = function(name, dependencies, func) {
	var ix ; 

	if(typeof name !== 'string'
		|| !Array.isArray(dependencies)
		|| typeof func !== 'function'){
		throw new Error(this.messages.registerRequireArgs);
	}
	for(ix=0;ix<dependencies.length;++ix){
		if(typeof dependencies[ix] !== 'string'){
			throw new Error(this.messages.registerRequireArgs);
		}
	}
	this.registrations[name] = {func:func};
}
