describe('Aop', function(){
	var argPassingAdvice, // 타깃에 인자를 전달할 어드바이스
		argsToTarget; // targetObj.targetFn 에 전달할 인자들
	var targetObj, executionPoints; // 실행 이벤트가 담긴 배열
	var targetFnReturn = 123;

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

		it('타깃의 반환값도 어드바이스에서 참조할 수 있다', function(){
			Aop.around('targetFn', argPassingAdvice, targetObj);
			var returnedValue = targetObj.targetFn();
			expect(returnedValue).toBe(targetFnReturn);
		});

		it('타깃 함수를 해당 객체의 콘텍스트에서 실행한다', function(){
			var Target = function(){
				var self = this;
				this.targetFn = function(){
					expect(this).toBe(self);
				}
			};
			var targetInstance = new Target();
			var spyOnInstance = spyOn(targetInstance,'targetFn').and.callThrough();
			Aop.around('targetFn',argPassingAdvice, targetInstance);
			targetInstance.targetFn();
			expect(spyOnInstance).toHaveBeenCalled();
		});	

		it('어드바이스를 타깃의 콘텍스트에서 실행한다', function(){
			var advice = function(){
				expect(this).toBe(targetObj);
			};
			Aop.around('targetFn', advice, targetObj);
			targetObj.targetFn();
		});

	});
});