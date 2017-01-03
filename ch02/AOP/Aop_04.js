Aop = {
	around: function(fnName, advice, fnObj){
		var originalFn = fnObj[fnName];
		fnObj[fnName] = function(){
			var targetContext = {};
			return advice.call(targetContext, {fn:originalFn, args:arguments});
		}
	}
}