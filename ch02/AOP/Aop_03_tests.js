describe('Aop', function(){
	var argPassingAdvice, // 타깃에 인자를 전달할 어드바이스
		argsToTarget; // targetObj.targetFn 에 전달할 인자들
	var targetObj, executionPoints; // 실행 이벤트가 담긴 배열

	beforeEach(function() {
	    targetObj = {
	      targetFn: function() {
	        executionPoints.push('targetFn');
	        argsToTarget = Array.prototype.slice.call(arguments,0);
	      }
	    };

	    executionPoints = [];

	    argPassingAdvice = function(targetInfo) {
	      targetInfo.fn.apply(this, targetInfo.args);
	    };

	    argsToTarget = [];
    });


	describe('Aop.around(fnName, advice, targetObj)', function(){
		it('어드바이스에서 타깃으로 일반 인자를 넘길 수 있다', function(){
			Aop.around('targetFn', argPassingAdvice, targetObj);
			targetObj.targetFn('a', 'b');
			expect(argsToTarget).toEqual(['a','b']);
		});
	});
});