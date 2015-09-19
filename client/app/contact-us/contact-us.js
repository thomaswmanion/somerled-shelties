'use strict';

angular.module('somerledSheltiesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contactUs', {
        url: '/contact-us',
        templateUrl: 'app/contact-us/contact-us.html',
        controller: 'ContactUsController'
      });
  });