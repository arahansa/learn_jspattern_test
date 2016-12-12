describe('get(name)', function(){
	var container; 
	beforeEach(function(){
		container = new DiContainer();
	});

	it('성명이 등록되어있지 않으면 undefined를 반환한다.', function(){
		expect(container.get('notDefined')).toBeUndefined();
	});

	it('등록된 함수를 실행한 결과를 반환한다.', function(){
		var name='MyName', returnFromRegisteredFunction = "something";

		container.register(name, [], function(){
			return returnFromRegisteredFunction;
		});
		expect(container.get(name)).toBe(returnFromRegisteredFunction);
	});
});