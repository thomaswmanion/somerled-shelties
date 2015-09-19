angular.module('somerledSheltiesApp').factory('Data', function($http, $filter) {
	var Data = {};
	Data.pastDogs = [
		{
			showName: 'GCh. Raisin\'s Jr High Crush',
			callName: 'Flash',
			gender: 'male',
			mainPhoto: 'assets/images/dogs/flash/cover/cover.jpg',
			url: 'flash'
		},
		{
			showName: 'Ch. Raisin\'s Taking it in Stride',
			callName: 'Strider',
			gender: 'male',
			mainPhoto: 'assets/images/dogs/strider/cover/cover.jpg',
			url: 'strider'
		},
		{
			showName: 'Ch. Raisin\'s Ready for Stardom',
			callName: 'Ready',
			gender: 'male',
			mainPhoto: 'assets/images/dogs/ready/cover/cover.jpg',
			url: 'ready'
		},
		{
			showName: 'Ch. Blue Heaven\'s Joker\'s Wild',
			callName: 'Joker',
			gender: 'male',
			mainPhoto: 'assets/images/dogs/joker/cover/cover.jpg',
			url: 'joker'
		}
	];
	Data.currentDogs = [
		{
			showName: 'Somerled\'s Debutante',
			callName: 'Belle',
			gender: 'female',
			mainPhoto: 'assets/images/dogs/belle/cover/cover.jpg',
			url: 'belle'
		},
		{
			showName: 'Raisin\'s Salt Water Taffy',
			callName: 'Summer',
			gender: 'female',
			mainPhoto: 'assets/images/dogs/summer/cover/cover.jpg',
			url: 'summer'
		},
		{
			showName: 'Paray\'s Au Soleil',
			callName: 'Aura',
			gender: 'female',
			mainPhoto: 'assets/images/dogs/aura/cover/cover.jpg',
			url: 'aura'
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