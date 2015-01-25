'use strict';

angular.module('somerledSheltiesApp').filter('findCallName', function(Data) {
	return function(input, callName) {
		if (!callName) {
			return null;
		}
		callName = callName.toLowerCase();
		var dog = null;
		angular.forEach(input, function(currentDog) {
			if (!dog && currentDog.callName.toLowerCase() === callName) {
				dog = currentDog;
			}
		});
		return dog;
	};
});