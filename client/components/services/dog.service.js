'use strict';

angular.module('somerledSheltiesApp').service('dogService', function($http, Data) {
	var dogService = {};
	dogService.currentDog = null;
	dogService.getCurrentDog = function(dogUrl) {
		if (dogService.currentDog && dogService.currentDog.url === dogUrl) {
			return dogService.currentDog;
		}
		var allDogs = Data.currentDogs.concat(Data.pastDogs);
		var currentDog = null;
		angular.forEach(allDogs, function(dog) {
			if (dog.url === dogUrl) {
				currentDog = dog;
			}
		});
		return currentDog;
	};
	return dogService;
});