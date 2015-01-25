'use strict';

angular.module('somerledSheltiesApp').controller('DogsController', function ($scope, $stateParams, $location, Data, dogService) {
  var type = $stateParams.type;
  if (type && type === 'current') {
    $scope.dogs = Data.currentDogs;
  }
  else if (type && type === 'past') {
    $scope.dogs = Data.pastDogs;
  }
  else {
    $location.path('/');
  }
  $scope.navigateTo = function(dog) {
    dogService.currentDog = dog;
    $location.path('/profiles/' + dog.url);
  };
});
