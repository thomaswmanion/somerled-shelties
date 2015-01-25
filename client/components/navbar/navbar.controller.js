'use strict';

angular.module('somerledSheltiesApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      title: 'Home',
      link: '/'
    },
    {
      title: 'Past Dogs',
      link: '/dogs/past'
    },
    {
      title: 'Current Dogs',
      link: '/dogs/current'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });