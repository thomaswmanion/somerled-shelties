'use strict';

angular.module('somerledSheltiesApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      title: 'Home',
      link: '/'
    },
    {
      title: 'About Us',
      link: '/about-us'
    },
    {
      title: 'Breeding Philosophy',
      link: '/breeding-philosophy'
    },
    {
      title: 'Past Dogs',
      link: '/dogs/past'
    },
    {
      title: 'Current Dogs',
      link: '/dogs/current'
    },
    {
      title: 'Contact Us',
      link: '/contact-us'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });