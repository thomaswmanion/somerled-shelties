'use strict';

angular.module('somerledSheltiesApp').controller('DogProfileController', function ($scope, $stateParams, $location, Data, dogService, Lightbox) {
  $scope.dog = dogService.getCurrentDog($stateParams.dog);
  
  if (!$scope.dog) {
    $location.path('/');
  }
  $scope.openLightboxModal = function(index) {
    Lightbox.openModal($scope.dog.images, index);
  };
});