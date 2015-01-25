'use strict';

angular.module('somerledSheltiesApp').config(function ($stateProvider) {
    $stateProvider
      .state('dogs', {
        url: '/dogs/{type}',
        templateUrl: 'app/dogs/dogs.html',
        controller: 'DogsController'
      });
});