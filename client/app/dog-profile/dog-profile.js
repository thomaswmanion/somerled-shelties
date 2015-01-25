'use strict';

angular.module('somerledSheltiesApp').config(function ($stateProvider) {
    $stateProvider
      .state('dog', {
        url: '/profiles/{dog}',
        templateUrl: 'app/dog-profile/dog-profile.html',
        controller: 'DogProfileController'
      });
});