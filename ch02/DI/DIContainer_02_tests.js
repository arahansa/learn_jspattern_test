describe('get(name)', function(){
	var container; 
	beforeEach(function(){
		container = new DiContainer();
	});


	it('성명이 등록되어있지 않으면 undefined를 반환한다.', function(){
		expect(container.get('notDefined')).toBeUndefined();
	});


});

describe('register(name,dependencies,func)', function(){
		// 01
		it('인자가 하나라도 빠졌거나 타입이 잘못되면 예외를 던진다.', function(){
			var badArgs = [
				// 인자가 아예 없는 경우
				[], 
				// name 만 있는 경우
				['Name'],
				// name 과 dependencies 만 있는 경우
				['Name', ['Dependency1', 'Dependency2']],
				// dependencies 가 빠진 경우
				// (상용 프레임워크는 지원하지만, DiContainer 는 지원하지 않음)
				['Name', function(){}],
				// 타입이 잘못된 다양한 사례들
				[1, ['a', 'b'], function(){}],
				['Name', [1, 2], function(){}],
				['Name', ['a', 'b'], 'should be a function']
			];
			badArgs.forEach(function(args){
				expect(function(){
					container.register.apply(container,args);
				}).toThrow(); // toThrow();
				
			});
		});
	});