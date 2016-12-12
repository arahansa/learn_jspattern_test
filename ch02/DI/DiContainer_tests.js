describe('get(name)', function(){
	if('등록된 함수에 의존성을 제공한다', function(){
		var main = 'main', mainFunc, dep1 = 'dep1', dep2='dep2';

		container.register(main, [dep1, dep2], function(dep1Func, dep2Func){
			return function(){
				return dep1Func() + dep2Func();
			}
		});

		container.register(dep1, [], function(){
			return function(){
				return 1;
			}
		});

		container.register(dep2, [], function(){
			return function(){
				return 2;
			}
		});

		mainFunc = container.get(main);
		expect(mainFunc()).toBe(3);
	});
}