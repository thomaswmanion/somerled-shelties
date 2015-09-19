'use strict';

angular.module('somerledSheltiesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('aboutus', {
        url: '/about-us',
        templateUrl: 'app/about-us/about-us.html'
      });
  });