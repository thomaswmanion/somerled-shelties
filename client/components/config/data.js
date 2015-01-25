angular.module('somerledSheltiesApp').factory('Data', function($http, $filter) {
	var Data = {};
	Data.pastDogs = [
		{
			showName: 'GCh. Raisin\'s Jr High Crush',
			callName: 'Flash',
			gender: 'male',
			mainPhoto: 'assets/images/dogs/flash/cover/cover.jpg',
			url: 'flash'
		}
	];
	Data.currentDogs = [
		{
			showName: 'Somerled\'s Debutante',
			callName: 'Belle',
			gender: 'female',
			mainPhoto: 'assets/images/dogs/belle/cover/cover.jpg',
			url: 'belle'
		}
	];
	$http.get('api/dogs/descriptions').
	  success(function(data, status, headers, config) {
	  	angular.forEach(data.descriptions, function(dogDescription) {
	  		var dog = $filter('findCallName')(Data.pastDogs.concat(Data.currentDogs), dogDescription.callName);
	  		if (dog) {
	  			dog.description = dogDescription.description.split(/[\n\r]+/g);
	  			dog.images = dogDescription.images;
	  		}
	  		else {
	  			dog.description = [];
	  		}
	  	});
	  	Data.slides = data.carouselImages;
	  });

	return Data;
});