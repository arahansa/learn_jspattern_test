// 다른 전역 변수와 충돌을 피하기 위해 이름공간을 생성한다. 
console.log("init");
var rj3 = {};

// svg라는 하위 이름공간을 만든다. 
rj3.svg = {};

// rj3.svg  이름 공간에 line 함수를 넣는다. 
rj3.svg.line = function(){
	var getX = function(point){
		console.log("point :", point);
		return point[0];
	},
	getY = function(point){
		return point[1];
	},
	interpolate = function(points){
		return points.join("L");
	}

	function line(data){
		var segments = [], points=[],
		i = -1, n = data.length, d;
		
		function segment(){
			console.log("interpolate", interpolate(points));
			segments.push("M", interpolate(points));
		}
		while(++i<n){
			d = data[i];
			console.log("push :", i, +getX.call(this,d,i));
			points.push([+getX.call(this,d,i) ,+getY.call(this, d, i)]);
		}
		if(points.length){
			console.log("points length :", points.length);
			segment();
		}
		console.log("segments :", segments.join(""));
		return segments.length ? segments.join("") : null;
	}

	line.x = function(funcToGetX){
		if(!arguments.length) return getX;
		getX = funcToGetX;
		return line;
	}
	
	line.y = function(funcToGetY){
		if(!arguments.length) return getY;
		getY = funcToGetY;
		return line;
	}
	return line;
};

