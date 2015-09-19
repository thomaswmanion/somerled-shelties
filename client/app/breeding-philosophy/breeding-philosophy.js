'use strict';

angular.module('somerledSheltiesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('breedingphilosophy', {
        url: '/breeding-philosophy',
        templateUrl: 'app/breeding-philosophy/breeding-philosophy.html'
      });
  });